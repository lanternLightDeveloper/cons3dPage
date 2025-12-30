<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { Shirts, Cds } from '$lib/data/warehouse/shirts';
	import { ShowDates } from '$lib/data/shows/showdates.ts';
	import MerchItem from '$lib/Assets/MerchItem.svelte';
	import Chainsaw from '$lib/Assets/Chainsaw.svelte';

	// Mobile/Small Images
	import sm1 from '$lib/Images/con1.jpg';
	import sm2 from '$lib/Images/con2.jpg';
	import sm3 from '$lib/Images/con3.jpg';
	import sm4 from '$lib/Images/con4.jpg';
	import sm5 from '$lib/Images/con5.jpg';

	// Desktop/Large Images
	import lg1 from '$lib/Images/con6.jpg';
	import lg2 from '$lib/Images/con2.jpg';
	import lg3 from '$lib/Images/con7.jpg';
	import lg4 from '$lib/Images/con4.jpg';
	import lg5 from '$lib/Images/con5.jpg';

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

	import { onMount } from 'svelte';

	let scrollY = $state(0);

	// update scrollY whenever the user scrolls
	const handleScroll = () => {
		scrollY = window.scrollY;
	};

	// attach listener
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
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
			<div class="slide" style:background-image="url({currentImageUrl})"></div>
		{/key}
	</div>

	<section class="header-info">
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
	<section class="content">
		<h1>SAWWW'S UP</h1>
		<p>Welcome to the official domain of Con-Crete…</p>
	</section>

	<div class="ParallaxObjext" style="transform: translateY({scrollY * 0.5}px);  ">
		<Canvas>
			<Chainsaw />
		</Canvas>
	</div>

	<section class="content">
		<div class="heading-border"><h2>Merch</h2></div>
		<p>Buy some dope gear and make yourself look fresh!</p>
	</section>

	<div class="heading-border content">
		<h2>Cds</h2>
	</div>

	<section class="grid-SideScroll content">
		{#each Cds as cd}
			<button class="card-Topper" onclick={() => openMerch(cd)}>
				<img src={cd.img} alt={cd.alt} />
				<h2>{cd.name}</h2>
				<p class="price">${cd.price}</p>
			</button>
		{/each}
	</section>

	<div class="heading-border content">
		<h2>Shirts</h2>
	</div>

	<section class="grid-SideScroll content">
		{#each Shirts as shirt}
			<button class="card-Topper" onclick={() => openMerch(shirt)}>
				<img src={shirt.img} alt={shirt.alt} />
				<h2>{shirt.name}</h2>
				<p class="price">${shirt.price}</p>
			</button>
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
	.ParallaxObjext {
		width: 90vw;
		height: 60vh;
		/* max-width: 1200px; */
		margin: -40vh 0;
		z-index: 1;
		transform-origin: center;
		/* mix-blend-mode: multiply; */
	}

	.content {
		z-index: 99;
		position: relative;
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
		height: 30vh;
		width: 90%;
		margin: 0;

		.glass-Box {
			width: fit-content;
			height: fit-content;
			background-color: var(--hallow);
		}

		@media only screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			height: 30vh;

			.glass-Box {
				width: fit-content;
				height: fit-content;
				h2 {
					margin: 0;
					padding: 1rem;
				}
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;

			margin: 0 10%;
			.glass-Box {
				max-width: 40vw;
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
		border-collapse: collapse;
		table-layout: fixed;
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);

		a {
			font-size: var(--size-4);
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
		animation: fadePan 17s ease forwards;
	}

	@keyframes fadePan {
		0% {
			opacity: 0;
			background-position: center;
		}
		25% {
			opacity: 0.65;
		}
		50% {
			opacity: 0.75;
		}
		100% {
			opacity: 1;
			background-position: right center;
		}
	}

	section {
		h2 {
			a {
				margin: 0;
				padding: 0;
			}
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
