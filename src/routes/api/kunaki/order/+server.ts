// src/routes/api/kunaki/order/+server.ts
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { items, postal } = await request.json();

	const kunakiItems = items.filter((i: any) => i.provider === 'kunaki');
	if (kunakiItems.length === 0) {
		return json({ ok: false, error: 'No Kunaki items provided' }, { status: 400 });
	}

	const country =
		postal.country === 'US' || postal.country === 'USA' ? 'United States' : postal.country;

	const xmlPayload = `<Order>
<UserId>${env.KUNAKI_USER}</UserId>
<Password>${env.KUNAKI_PASS}</Password>
<Mode>LIVE</Mode>
<Name>${postal.name}</Name>
<Company></Company>
<Address1>${postal.addressLine1}</Address1>
<Address2>${postal.addressLine2 ?? ''}</Address2>
<City>${postal.city}</City>
<State_Province>${postal.state}</State_Province>
<PostalCode>${postal.zip}</PostalCode>
<Country>${country}</Country>
<ShippingDescription>USPS First Class Mail</ShippingDescription>
${kunakiItems
	.map(
		(i: any) => `<Product>
<ProductId>${i.productId}</ProductId>
<Quantity>${i.quantity}</Quantity>
</Product>`
	)
	.join('')}
</Order>`;

	const response = await fetch('https://kunaki.com/XMLService.ASP', {
		method: 'POST',
		headers: { 'Content-Type': 'text/xml' },
		body: xmlPayload
	});

	const kunakiResult = await response.text();

	if (!response.ok) {
		return json({ ok: false, status: response.status, result: kunakiResult }, { status: 500 });
	}

	return json({ ok: true, result: kunakiResult });
}
