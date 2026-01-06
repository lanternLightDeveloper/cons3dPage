<script>
	import { cart } from '$lib/stores/cart.svelte.js';
	import { Canvas } from '@threlte/core';
	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';

	let { isOpen, close } = $props();
</script>

{#if isOpen}
	<dialog class="cart-overlay" open aria-modal="true">
		<div class="cart-content">
			<div class="cart-header">
				<h2>Your Cart ({cart.totalItems})</h2>
				<button class="btn-close" onclick={close}>X</button>
			</div>

			{#if cart.items.length === 0}
				<div class="empty-state">
					<p>Your cart is empty. Go get that dope gear.</p>
				</div>
			{:else}
				<section class="cart-Classic">
					{#each cart.items as item (item.cartItemId)}
						<article class="cart-item">
							<div class="model-preview">
								<Canvas>
									<T.PerspectiveCamera
										makeDefault
										position={[0, -1, 6]}
										oncreate={(ref) => {
											ref.lookAt(1, 1, 1);
										}}
									>
										<OrbitControls
											enableDamping={true}
											dampingFactor={0.05}
											rotateSpeed={0.5}
											minDistance={3}
											maxDistance={10}
											minPolarAngle={MathUtils.degToRad(0)}
											maxPolarAngle={MathUtils.degToRad(90)}
										/>
									</T.PerspectiveCamera>

									<T.AmbientLight intensity={1} />
									<T.DirectionalLight position={[1, 5, 1]} castShadow />

									<GLTF url={item.url} />
								</Canvas>
							</div>

							<div class="cart-info">
								<h3>{item.name}</h3>
								<p class="size-label">{item.selectedSize.label}</p>
								<p class="price">${item.price}</p>
								<p class="description">{item.description}</p>

								<div class="quantity-controls">
									<button class="qty-btn" onclick={() => cart.updateQuantity(item.cartItemId, -1)}
										>-</button
									>

									<span class="qty-display">{item.quantity}</span>

									<button class="qty-btn" onclick={() => cart.updateQuantity(item.cartItemId, 1)}
										>+</button
									>
								</div>
							</div>
						</article>
					{/each}
				</section>

				<div class="cart-footer">
					<div class="total-row">
						<span>Total:</span>
						<span>${cart.totalPrice.toFixed(2)}</span>
					</div>
					<a href="/Checkout"> <button class="btn-checkout" onclick={close}>Checkout</button></a>
				</div>
			{/if}
		</div>
	</dialog>
{/if}

<style>
	.cart-overlay {
		position: fixed;
		top: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		display: flex;
		justify-content: flex-end;
		border: none;
		padding: 0;
		margin: 0;
	}

	.cart-content {
		border-left: var(--bord);
		width: 400px;
		max-width: 90vw;
		background: var(--bg-1, #222);
		color: var(--txt-1, #fff);
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		overflow-y: auto;

		@media only screen and (min-width: 1440px) {
			width: 600px;
		}
	}

	.cart-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		border-bottom: var(--bord);
		padding-bottom: 1rem;

		h2 {
			margin: 1rem 0;
		}
	}

	.btn-checkout {
		width: 100%;
		padding: 1rem;
		background: var(--accent-1);
		border: none;
		font-weight: bold;
		cursor: pointer;
	}
	.btn-close {
		background: transparent;
		border: var(--bord);
		color: var(--accent-2);
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
</style>
