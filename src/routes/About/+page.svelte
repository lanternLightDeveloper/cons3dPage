<script>
	import Parallax from '$lib/Images/dripsbuuud.png';
	import { Canvas } from '@threlte/core';
	import Chainsaw from '$lib/Assets/Chainsaw.svelte';

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

<svelte:head>
	<title>Con-Crete Backstory and information</title>
	<meta name="description" content="Read Con-Crete's story and learn about him" />
</svelte:head>

<main class="showPage">
	<section class="content">
		<h1>Con-crete!</h1>

		<h2>Stats</h2>
		<ul>
			<li><strong>Age:</strong> 783 years old</li>
			<li><strong>Height:</strong> 12'3"</li>
			<li><strong>Weight:</strong> 2 tons</li>
			<li><strong>Likes:</strong> Long walks on the beach, crushing small buildings, sunsets.</li>
			<li><strong>Dislikes:</strong> Being chipped away at, water, pigeons.</li>
		</ul>

		<p>
			The story of our band didn’t begin on a stage or in a studio — it started in small rooms
			filled with mismatched gear, borrowed cables, and late-night conversations about what music
			should feel like. Before a single song was recorded, we were just a couple of friends trying
			to make sense of the noise in our heads, chasing that moment when a chord progression hits
			just right and everything else falls away. Those early days weren’t glamorous, but they were
			honest, and that honesty still sits at the core of everything we create.
		</p>
	</section>
	<img
		src={Parallax}
		alt="Con-Crete"
		class="ParallaxObjext"
		style="transform: translateY({scrollY * 0.5}px);"
	/>

	<section class="content">
		<p>
			We spent years experimenting, shifting between genres, and carving out our identity one messy
			demo at a time. There were nights when we played the same riff for hours, changing tiny
			details until something clicked and we all looked at each other with that silent, shared
			“there it is”. The process taught us patience and trust — trust in each other, trust in our
			instincts, and trust that the music would guide us if we stayed open to it.
		</p>

		<p>
			What kept us moving forward wasn’t a clear plan but a shared obsession: the need to write
			songs that actually meant something. Music has always been more than entertainment for us.
			It’s a way to process what life throws at you — the heavy moments, the strange ones, the ones
			you can’t quite talk about. Each track became its own little confession, a snapshot of
			whatever stage of life we were moving through.
		</p>

		<p>
			Our first shows were small enough that we could recognize every face in the room, but even
			then, the energy was unmistakable. People connected with the rawness of the sound, the
			imperfections, and the stories behind the songs. Those early supporters were a reminder that
			music doesn’t need fireworks or production tricks to matter — it just needs to be real. And
			real is something we’ve always had in abundance.
		</p>

		<p>
			As the band grew, so did the scope of our projects. We began working with new collaborators,
			experimenting with different recording techniques, and pushing our sound in directions we
			never expected in the beginning. Every album or single became a snapshot of who we were at
			that time — a reflection of our growth both musically and personally. We’re proud of that
			evolution, because it shows that we’re not afraid to change, question ourselves, or start
			fresh when the music asks for it.
		</p>
	</section>
</main>
<div class="bottom-Line"></div>

<style>
	main {
		position: relative;
		background-image: url('$lib/Images/con9.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		margin: 0;
		padding: 5rem 0;
		@media only screen and (min-width: 1440px) {
			background-size: 70%;
		}
	}

	h1,
	ul {
		background-color: var(--hallow);
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);
		width: fit-content;
		margin: 2rem auto;
		padding: 1rem;
		z-index: 99;
	}

	p {
		background-color: var(--hallow);
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);
		width: 70%;
		margin: 2rem auto;
		padding: 1rem;

		@media only screen and (min-width: 1440px) {
			width: 50%;
		}
	}

	.content {
		z-index: 99;
		position: relative;
	}

	.ParallaxObjext {
		width: 90%;
		height: 60%;
		max-width: 1200px;
		margin: -40% 0;
		z-index: 1;
		opacity: 1;
		transform-origin: center;
		mix-blend-mode: multiply;
	}
</style>
