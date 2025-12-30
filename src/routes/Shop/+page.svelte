<script>
	import { Shirts, Hats, Stickers, Cds } from '$lib/data/warehouse/shirts';

	import MerchItem from '$lib/Assets/MerchItem.svelte';

	let merchItem = $state(false);
	let selectedItem = $state(null);

	function openMerch(item) {
		selectedItem = item;
		merchItem = true;
	}

	function closeMerch() {
		merchItem = false;
		selectedItem = null;
	}
</script>

<svelte:head>
	<title>Con-Crete store to buy merch</title>
	<meta
		name="description"
		content="Buy Con-Crete's official merchandise including shirts, hats, and CDs."
	/>
</svelte:head>

<h1>Shop</h1>

<p>
	Buy some dope gear so that everyone wants to take you to bed and makes your boss want to give you
	a raise.
</p>

<div class="heading-border">
	<h2>Cds</h2>
</div>

<main class="grid-Main">
	<section class="grid-SideScroll">
		{#each Cds as cd}
			<button class="card-Topper" onclick={() => openMerch(cd)}>
				<img src={cd.img} alt={cd.alt} />
				<h2>{cd.name}</h2>
				<p class="price">${cd.price}</p>
			</button>
		{/each}
	</section>

	<div class="heading-border">
		<h2>Shirts</h2>
	</div>

	<section class="grid-SideScroll">
		{#each Shirts as shirt}
			<button class="card-Topper" onclick={() => openMerch(shirt)}>
				<img src={shirt.img} alt={shirt.alt} />
				<h2>{shirt.name}</h2>
				<p class="price">${shirt.price}</p>
			</button>
		{/each}
	</section>

	<div class="heading-border">
		<h2>Hats</h2>
	</div>

	<section class="grid-SideScroll">
		{#each Hats as hat}
			<button class="card-Topper" onclick={() => openMerch(hat)}>
				<img src={hat.img} alt={hat.alt} />
				<h2>{hat.name}</h2>
				<p class="price">${hat.price}</p>
			</button>
		{/each}
	</section>

	{#if merchItem}
		<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
			<div class="modal-content" tabindex="-1" autofocus>
				<MerchItem item={selectedItem} />
				<button class="btn-Ghost" onclick={closeMerch}> Close </button>
			</div>
		</dialog>
	{/if}
</main>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.grid-SideScroll {
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		scrollbar-width: thin;
	}

	.heading-border {
		background: url('$lib/Images/dripBack.png') no-repeat center / cover;
		height: 8rem;
		width: fit-content;
		margin: 0 25vw;
		padding: 1.5rem 2rem;

		h2 {
			margin: 0 2rem;
			width: 6rem;
			padding: 0.5rem 1.5rem;
		}

		@media only screen and (min-width: 1024px) {
			h2 {
				width: 6rem;
				padding: 0.25rem 1rem;
			}
		}
	}
</style>
