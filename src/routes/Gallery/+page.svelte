<script lang="ts">
	import { galleryImages } from '$lib/Images/gallery/GalleryData';

	let selectedIndex = $state<number | null>(null);

	function openImage(image) {
		selectedIndex = galleryImages.findIndex((img) => img.src === image.src);
	}

	function closeModal() {
		selectedIndex = null;
	}

	function showNext() {
		if (selectedIndex !== null && selectedIndex < galleryImages.length - 1) {
			selectedIndex += 1;
		}
	}

	function showPrevious() {
		if (selectedIndex !== null && selectedIndex > 0) {
			selectedIndex -= 1;
		}
	}
</script>

<svelte:head>
	<title>Con-Crete adventure gallery</title>
	<meta name="description" content="view Con-Crete's photographic life." />
</svelte:head>

<h1 id="pictures-heading">Travel Gallery</h1>

<p>
	These are pictures of you magnificent people from near and far. Thank you all for every minute.
	Thank you all for everything.
</p>

<section class="image-gallery" aria-labelledby="pictures-heading">
	{#each galleryImages as image}
		<figure class="image-card">
			<button
				type="button"
				class="image-button"
				onclick={() => openImage(image)}
				aria-label={`View image: ${image.caption}`}
			>
				<img src={image.src} alt={image.alt} />
			</button>
		</figure>
	{/each}
</section>

{#if selectedIndex !== null}
	<dialog
		class="gallery-modal-overlay"
		open
		aria-modal="true"
		aria-labelledby="gallery-modal-title"
	>
		<div class="gallery-modal-content" tabindex="-1">
			<img src={galleryImages[selectedIndex].src} alt={galleryImages[selectedIndex].alt} />
			<h2 id="gallery-modal-title" class="visually-hidden">Image preview</h2>
			<!-- <p>{galleryImages[selectedIndex].alt}</p> -->

			<div class="modal-nav">
				<button
					type="button"
					class="btn-Pulse"
					onclick={showPrevious}
					aria-label="Previous image"
					disabled={selectedIndex === 0}
				>
					←
				</button>
				<button
					type="button"
					class="btn-Shadow"
					onclick={closeModal}
					aria-label="Close image preview"
				>
					Close
				</button>
				<button
					type="button"
					class="btn-Pulse"
					onclick={showNext}
					aria-label="Next image"
					disabled={selectedIndex === galleryImages.length - 1}
				>
					→
				</button>
			</div>
		</div>
	</dialog>
{/if}

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.image-gallery {
		column-count: 3;
		column-gap: 1rem;

		@media only screen and (min-width: 1024px) {
			width: 70vw;
			margin-left: 15vw;
		}
	}

	.image-card {
		break-inside: avoid;
		margin-bottom: 1rem;
		overflow: hidden;
		button {
			border: var(--bord);
		}
	}

	.image-card img {
		width: 100%;
		height: auto;
		display: block;
	}

	.gallery-modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: var(--hallow);
		backdrop-filter: blur(10px);
		--webkit-backdrop-filter: blur(1.5px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.gallery-modal-content {
		background: var(--bg-2);
		padding: 1rem;
		max-width: 90vw;
		max-height: 90vh;
		overflow: auto;
		text-align: center;
		overflow: hidden;

		& p {
			padding: 0;
			margin: var(--size-5) 0 0 0;
			color: var(--txt-1);
		}

		.btn-Shadow {
			padding: var(--size-3);
		}
	}

	.gallery-modal-content img {
		max-width: 100%;
		padding: 0;
		margin: 0;
		height: auto;

		@media only screen and (min-width: 768px) {
			max-width: 70%;
		}

		@media only screen and (min-width: 1440px) {
			max-width: 50%;
		}
	}

	.modal-nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-nav button {
		border: none;
		cursor: pointer;
	}

	.modal-nav button:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
