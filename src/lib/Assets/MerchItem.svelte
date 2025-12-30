<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';
	import { cart } from '$lib/stores/cart.svelte.js';
	import { Shirts, Hats, Stickers, Cds } from '$lib/data/warehouse/shirts';

	let { item } = $props();

	let currentItem = $state(item);
	let selectedSize = $state(null);
	let warning = $state(false);

	function getCollectionForType(type: string) {
		switch (type) {
			case 'shirt':
				return Shirts;
			case 'hat':
				return Hats;
			case 'sticker':
				return Stickers;
			case 'cd':
				return Cds;
			default:
				return [];
		}
	}

	function navigate(direction) {
		const currentIndex = getCollectionForType(currentItem.type).findIndex(
			(s) => s.name === currentItem.name
		);

		const newIndex =
			(currentIndex + direction + getCollectionForType(currentItem.type).length) %
			getCollectionForType(currentItem.type).length;

		currentItem = getCollectionForType(currentItem.type)[newIndex];
		selectedSize = null;
		warning = false;
	}

	function handleAddToCart() {
		if (!selectedSize) {
			warning = true;
			return;
		}
		cart.addItem(currentItem, selectedSize);
		warning = false;
	}
</script>

<article class="merch-card">
	<div class="shirtObject">
		{#key currentItem.id}
			<Canvas>
				<T.PerspectiveCamera
					makeDefault
					position={[0, -1, 6]}
					oncreate={(ref) => ref.lookAt(0, 0, 0)}
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

				<GLTF url={currentItem.url} />
			</Canvas>
		{/key}
	</div>

	<h2>{currentItem.name}</h2>

	<p><strong>Price:</strong> ${currentItem.price}</p>

	<h3>Available Sizes</h3>
	<div class="size-row">
		{#each currentItem.sizes as size}
			<button
				class="size-badge"
				class:active={selectedSize === size}
				onclick={() => {
					selectedSize = size;
					warning = false;
				}}
			>
				{size.label}
			</button>
		{/each}
	</div>

	{#if currentItem.description}
		<p>{currentItem.description}</p>
	{/if}

	<div class="modal-nav">
		<button class="btn-Skew" onclick={() => navigate(-1)}>&larr; Prev</button>
		<button class="btn-Skew" onclick={() => navigate(1)}>Next &rarr;</button>
	</div>

	{#if warning}
		<p style="color: red;">Please select a size!</p>
	{/if}

	<button class="btn-Ghost" onclick={handleAddToCart}> Add to Cart</button>
</article>

<style>
	.merch-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.shirtObject {
		height: 375px;
		position: relative;
	}

	h2,
	h3,
	p {
		margin: 0.15rem 1rem;
	}

	.size-row {
		display: flex;
		gap: 0.5rem;
		z-index: 10;
	}

	.size-badge {
		width: fit-content;
		padding: 0.25rem 0.5rem;
		border-radius: 25%;
		background: #ff1a1a;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		font-weight: bold;
		font-size: 0.9rem;
		border: 2px solid #000;
		box-shadow: 0 0 4px #000;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			background 0.15s ease;
	}

	.size-badge:hover {
		transform: scale(1.1);
		background: #ff3636;
	}

	.size-badge.active {
		background: var(--color-active);
		transform: scale(1.25);
	}
</style>
