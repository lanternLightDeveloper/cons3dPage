import { json } from '@sveltejs/kit';
import { getSquareClient } from '$lib/server/squareClient.server';
import { env } from '$env/dynamic/private';

const { SQUARE_LOCATION_ID } = env;

function createIdempotencyKey() {
	return crypto.randomUUID();
}

function sanitize(obj: any) {
	return JSON.parse(
		JSON.stringify(obj, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
	);
}

function getOrdersApi(client: any) {
	const orders = client?.ordersApi ?? client?.orders;
	if (!orders) throw new Error('Square Orders API not found on client (ordersApi/orders missing)');
	const createOrder = orders.createOrder ?? orders.create;
	if (typeof createOrder !== 'function') {
		const keys = Object.keys(orders);
		throw new Error(
			`Square Orders API found but no create function (checked createOrder/create). Keys: ${keys.join(', ')}`
		);
	}
	return createOrder.bind(orders);
}

function getPaymentsApi(client: any) {
	const payments = client?.paymentsApi ?? client?.payments;
	if (!payments)
		throw new Error('Square Payments API not found on client (paymentsApi/payments missing)');
	const createPayment = payments.createPayment ?? payments.create;
	if (typeof createPayment !== 'function') {
		const keys = Object.keys(payments);
		throw new Error(
			`Square Payments API found but no create function (checked createPayment/create). Keys: ${keys.join(', ')}`
		);
	}
	return createPayment.bind(payments);
}
export async function POST(event) {
	const { request, fetch } = event;
	const square = getSquareClient();
	const locationId = env.SQUARE_LOCATION_ID;

	try {
		// Pull only what we need — amount is removed
		const { token, items, postal } = await request.json();

		if (!Array.isArray(items) || items.length === 0) {
			return json({ ok: false, error: 'No items provided' }, { status: 400 });
		}

		for (const item of items) {
			if (item.provider === 'square' && !item.catalogObjectId) {
				return json(
					{ ok: false, error: 'Missing catalogObjectId for one or more Square items' },
					{ status: 400 }
				);
			}
		}

		// -----------------------------
		// SHIPPING + TOTAL CALCULATION
		// -----------------------------
		const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

		const shippingFee = subtotal < 100 ? 10 : 0;

		const totalAmount = BigInt(Math.round((subtotal + shippingFee) * 100));

		// -----------------------------
		// CREATE ORDER
		// -----------------------------
		const idempotencyKey = createIdempotencyKey();
		const createOrder = getOrdersApi(square);
		const createPayment = getPaymentsApi(square);

		const orderResponse = await createOrder({
			idempotencyKey,
			order: {
				locationId, // FIXED
				lineItems: [
					...items.map((item) => {
						const base = {
							quantity: String(item.quantity),
							basePriceMoney: {
								amount: BigInt(Math.round(item.price * 100)),
								currency: 'USD'
							}
						};

						if (item.provider === 'square') {
							return {
								...base,
								catalogObjectId: item.catalogObjectId
							};
						}

						return {
							...base,
							name: item.name
						};
					}),

					// Add shipping line item if needed
					...(shippingFee > 0
						? [
								{
									name: 'Shipping',
									quantity: '1',
									basePriceMoney: {
										amount: BigInt(1000), // $10
										currency: 'USD'
									}
								}
							]
						: [])
				]
			}
		});

		if (orderResponse?.errors) {
			return json({ ok: false, error: sanitize(orderResponse.errors) }, { status: 400 });
		}

		const orderId =
			orderResponse?.result?.order?.id ??
			orderResponse?.order?.id ??
			orderResponse?.data?.order?.id;

		if (!orderId) {
			return json(
				{
					ok: false,
					error: 'Order creation succeeded but no orderId present',
					raw: sanitize(orderResponse)
				},
				{ status: 500 }
			);
		}

		// -----------------------------
		// CREATE PAYMENT
		// -----------------------------
		const paymentResponse = await createPayment({
			idempotencyKey: createIdempotencyKey(),
			sourceId: token,
			locationId,
			amountMoney: {
				amount: totalAmount, // FIXED — uses server‑computed total
				currency: 'USD'
			},
			orderId,
			note: items.map((i) => `${i.name} (${i.size}) x${i.quantity}`).join(', '),
			shippingAddress: {
				addressLine1: postal.addressLine1,
				addressLine2: postal.addressLine2,
				locality: postal.city,
				administrativeDistrictLevel1: postal.state,
				postalCode: postal.zip,
				country: postal.country
			}
		});

		if (paymentResponse?.errors) {
			return json({ ok: false, error: sanitize(paymentResponse.errors) }, { status: 400 });
		}

		const payment =
			paymentResponse?.result?.payment ??
			paymentResponse?.payment ??
			paymentResponse?.data?.payment;

		if (!payment) {
			return json(
				{ ok: false, error: 'Payment creation succeeded but no payment object present' },
				{ status: 500 }
			);
		}

		// -----------------------------
		// KUNAKI FULFILLMENT
		// -----------------------------
		const kunakiItems = items.filter((i) => i.provider === 'kunaki');
		let kunakiResult = null;

		if (kunakiItems.length > 0) {
			const response = await fetch('/api/kunaki/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items: kunakiItems, postal })
			});
			kunakiResult = await response.json();
		}

		return json({
			ok: true,
			payment: sanitize(payment),
			items,
			kunakiResult
		});
	} catch (err) {
		console.error('CHECKOUT EXCEPTION (catch block):', err);
		return json(
			{
				ok: false,
				error: err?.message ?? 'Unknown server error',
				full: sanitize(err)
			},
			{ status: 500 }
		);
	}
}
