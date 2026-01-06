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
			CON-CRETE was born on March 11th, 1981 on the wet streets of Seattle, WA in a haunted cemetery
			during a Satanic Ritual. Okay that's bullshit, he was born in a hospital, but that shit would
			have been awesome if it was true. The Dark Minister has been infecting the world with his
			Horrorcrunk flows for well over 25 years now alongside his partner in crime Bloodshot.
		</p>

		<p>
			From the fog and clouds of the Northwest to the hurricanes of Florida coast, this monster of
			the industry has traveled state to state. Every performance honing a craft that is something
			truly amazing to be seen. Every face in the crowd more fuel to each moment to be absolutely
			devastating. Whether with friend or foe, CON-CRETE is a force to be reckoned with.
		</p>
	</section>
	<img
		src={Parallax}
		alt="Con-Crete"
		class="ParallaxObjext"
		style="transform: translateY({scrollY * 0.5}px);"
	/>

	<p>
		CON-CRETE has 22 solid albums under his belt which include "I HATE COPS" and "SNAPPED." He has
		performed at events like The Gathering of the Juggalos and performed with a list of legends
		artist such as:
	</p>
	<ul class="two-col-grid">
		<li>Mastamind</li>
		<li>Insane Clown Posse</li>
		<li>Insane Poetry</li>
		<li>Jason Porter</li>
		<li>Murs</li>
		<li>Esham</li>
		<li>Haystack</li>
		<li>Mars</li>
		<li>Mike Jones</li>
		<li>Paul Wall</li>
		<li>Twiztid</li>
		<li>ABK</li>
		<li>Devin The Dude</li>
		<li>Andre Nickatina</li>
		<li>Scum</li>
		<li>King Gordy</li>
		<li>Potluck</li>
		<li>Kottonmouth Kings</li>
		<li>Doomsday Productions</li>
	</ul>
	<p>
		Like anybody gives a fuck who he opened for. Either way "The Dark Minister" is gonna keep on
		rocking mics until his fucking lungs explode bottom line.
	</p>
	<section class="content"></section>
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

	.two-col-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.5rem 2rem;
		list-style-type: '-';
		padding-left: 1.5rem;
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
