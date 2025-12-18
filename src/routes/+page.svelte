<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Shirts, Cds } from '$lib/data/warehouse/shirts';
	import { ShowDates } from '$lib/data/shows/showdates.ts';
	import MerchItem from '$lib/Assets/MerchItem.svelte';

	// Mobile/Small Images
	import sm1 from '$lib/Images/con36.jpg';
	import sm2 from '$lib/Images/con33.jpg';
	import sm3 from '$lib/Images/con14.jpg';
	import sm4 from '$lib/Images/con16.jpg';
	import sm5 from '$lib/Images/con1.jpg';

	// Desktop/Large Images
	import lg1 from '$lib/Images/con31.jpg';
	import lg2 from '$lib/Images/con33.jpg';
	import lg3 from '$lib/Images/con85.jpg';
	import lg4 from '$lib/Images/con16.jpg';
	import lg5 from '$lib/Images/con1.jpg';

	const desktopImages = [lg1, lg2, lg3, lg4, lg5];
	const mobileImages = [sm1, sm2, sm3, sm4, sm5];

	let index = $state(0);
	let innerWidth = $state(0);
	let playing = $state(true);

	const currentList = $derived(innerWidth >= 1024 ? desktopImages : mobileImages);
	const currentImageUrl = $derived(currentList[index]);

	const total = desktopImages.length;

	function next() {
		index = (index + 1) % total;
	}

	$effect(() => {
		if (!playing) return;
		const id = setInterval(next, 4000);
		return () => clearInterval(id);
	});

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

	const parseDate = (str: string) => {
		const [month, day, year] = str.split('-').map(Number);
		return new Date(year, month - 1, day);
	};

	const today = $state(new Date());

	const nextShow = $derived(() => {
		const upcoming = ShowDates.map((d) => ({ ...d, parsed: parseDate(d.date) }))
			.filter((d) => d.parsed.getTime() >= today.getTime())
			.sort((a, b) => a.parsed.getTime() - b.parsed.getTime());
		return upcoming[0] ?? null;
	});
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Con-Crete</title>
	<meta
		name="description"
		content="Con-Crete official homepage. Explore merch, shows, videos, and the underground hip-hop movement."
	/>
</svelte:head>

<header>
	<div class="slider" aria-hidden="true">
		{#key currentImageUrl}
			<div class="slide" style:background-image="url({currentImageUrl})" transition:fade></div>
		{/key}
	</div>

	<section class="header-info light-White">
		<article class="glass-Box">
			<h2><a href="/Contact">Contact me now</a></h2>
		</article>
		<article class="glass-Box large-Only">
			<h2><a href="/Shop">Merch</a></h2>
		</article>
		<article class="glass-Box">
			<h2><a href="/Shows">Shows</a></h2>

			{#if nextShow()}
				<table class="centered">
					<thead>
						<tr>
							<th>Place</th>
							<th>City</th>
							<th>Date</th>
							<th>Tickets</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a href={nextShow.venueUrl}>{nextShow().location}</a></td>
							<td>{nextShow().city}</td>
							<td>{nextShow().date}</td>
							<td><a href={nextShow.ticketsUrl}>{nextShow().price} / Tickets</a></td>
						</tr>
					</tbody>
				</table>
			{:else}
				<p>No upcoming shows found.</p>
			{/if}
		</article>
		<article class="glass-Box large-Only">
			<h2><a href="/Videos">Videos</a></h2>
		</article>
	</section>
</header>

<main class="grid-Main">
	<section>
		<h1>SAWWW'S UP</h1>
		<p>Welcome to the official domain of Con-Crete…</p>
	</section>

	<section>
		<div class="heading-border"><h2>Merch</h2></div>
		<p>Buy some dope gear and make yourself look fresh! Click an item to learn more.</p>
	</section>

	<div class="heading-border"><h2>CDs</h2></div>
	<section class="grid-SideScroll">
		{#each Cds as cd}
			<article>
				<button class="card-Topper" onclick={() => openMerch(cd)}>
					<img src={cd.img} alt={cd.alt} />
					<h3>{cd.name}</h3>
					<p class="price">${cd.price}</p>
				</button>
			</article>
		{/each}
	</section>

	<div class="heading-border"><h2>Shirts</h2></div>
	<section class="grid-SideScroll">
		{#each Shirts as shirt}
			<article>
				<button class="card-Topper" onclick={() => openMerch(shirt)}>
					<img src={shirt.img} alt={shirt.alt} />
					<h3>{shirt.name}</h3>
					<p class="price">${shirt.price}</p>
				</button>
			</article>
		{/each}
	</section>

	{#if merchItem}
		<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
			<div class="modal-content" tabindex="-1" autofocus>
				<h2 id="modal-title">{selectedItem.name}</h2>
				<MerchItem item={selectedItem} />
				<button class="btn-Ghost" onclick={closeMerch}>Close</button>
			</div>
		</dialog>
	{/if}

	<section>
		<h2>Check out some <a href="/Videos">videos!</a></h2>
		<figure>
			<figcaption>Lake of fire</figcaption>
			<iframe
				src="https://www.youtube.com/embed/ffZ4t26jLLM"
				title="Con-Crete – Lake of Fire official video"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</figure>
	</section>
</main>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.heading-border {
		background: url('../lib/Images/dripBord.png') no-repeat center / cover;
		height: 8rem;
		width: fit-content;
		margin: 0 25vw;
		padding: 1.5rem 2rem;

		h2 {
			margin: 0 2.75rem;
			width: 6rem;
			padding: 0 1.25rem;
		}
	}

	header {
		background-color: var(--bg-1);
		position: relative;
		padding: 1rem;
		text-align: center;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		border-bottom: 2px solid var(--bg-2);
		z-index: 975;
	}

	.header-info {
		display: grid;
		grid-template-columns: 1fr;
		position: absolute;
		bottom: 6rem;
		height: 45vh;
		width: 80vw;
		margin: 0 2rem;

		.glass-Box {
			min-width: 60vw;
			min-height: 20vh;
			width: fit-content;
			height: fit-content;
			background-color: var(--hallow);
		}

		@media only screen and (min-width: 768px) {
			left: 18%;

			.glass-Box {
				width: fit-content;
				height: fit-content;

				h1 {
					margin: 0;
					padding: 3rem;
				}
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;

			margin: 0;
			.glass-Box {
				max-width: 30vw;
				min-width: 30vw;
				min-height: fit-content;
				p {
					margin: 0;
					padding: 0;
				}
			}
		}
	}

	table.centered {
		width: 100%;
		margin: auto;
		border-collapse: collapse;
		table-layout: fixed;
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);

		a {
			font-size: var(--size-5);
		}

		@media only screen and (min-width: 1024px) {
			width: 70%;
		}
	}
	th,
	td {
		text-align: center;
		padding: 12px;
		font-size: var(--size-3);

		@media only screen and (min-width: 768px) {
			font-size: var(--size-4);
		}
	}
	thead {
		background: var(--color-active);
	}
	th {
		border-bottom: var(--bord);
	}
	tbody td {
		border-bottom: var(--bord-2);
	}
	tr:hover {
		background: var(--bg-2);
	}

	a {
		color: var(--accent-1);
		text-decoration: none;
		text-shadow: var(--shdw-Txt);
	}

	a:hover {
		text-decoration: underline;
		color: var(--hover);
	}

	.grid-SideScroll {
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		scrollbar-width: thin;
	}

	.slider {
		position: relative;
		overflow: hidden;
		position: absolute;
		text-align: center;
		width: 100%;
		height: 100vh;
		inset: 0;
	}

	.slide {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: right;
		animation: pan 20s linear forwards infinite;
	}

	@keyframes pan {
		from {
			background-position: center;
		}
		to {
			background-position: right center;
		}
	}

	iframe {
		position: relative;
		z-index: 1;
		display: block;
		width: 90%;
		max-width: 560px;
		aspect-ratio: 16/9;
		margin: 0;
		border-radius: 8px;
		z-index: 0;
	}
</style>
