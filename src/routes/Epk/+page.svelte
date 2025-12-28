<script lang="ts">
	import Parallax from '$lib/Images/dripsbuuud.png';
	import { onMount } from 'svelte';
	import { Socials } from '$lib/data/shows/contactPoints';
	import Press1 from '$lib/Images/gallery/con32.jpg';
	import Press2 from '$lib/Images/gallery/con33.jpg';
	import Press3 from '$lib/Images/gallery/con34.jpg';
	import Press4 from '$lib/Images/gallery/con6.jpg';
	import Press5 from '$lib/Images/con4.jpg';

	let images = $state([Press1, Press2, Press3, Press4, Press5]);
	let current = $state(0);
	function next() {
		current = (current + 1) % images.length;
	}
	function prev() {
		current = (current - 1 + images.length) % images.length;
	}

	let scrollY = $state(0);

	const handleScroll = () => {
		scrollY = window.scrollY;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	/* 🦕  🦖🦖🦖 🦕 🦕 form timer 💀= 💣 🌠 */

	let cooldownRemaining = $state(0);
	const COOLDOWN_MINUTES = 33;
	const COOLDOWN_MS = COOLDOWN_MINUTES * 60 * 1000;

	onMount(() => {
		if (typeof localStorage === 'undefined') return;

		const last = localStorage.getItem('lastContactSubmit');
		if (!last) return;

		const diff = Date.now() - Number(last);

		if (diff < COOLDOWN_MS) {
			cooldownRemaining = Math.ceil((COOLDOWN_MS - diff) / 60000);
			startCountdown();
		}
	});

	function startCountdown() {
		const interval = setInterval(() => {
			const last = localStorage.getItem('lastContactSubmit');
			if (!last) {
				cooldownRemaining = 0;
				clearInterval(interval);
				return;
			}

			const diff = Date.now() - Number(last);

			if (diff >= COOLDOWN_MS) {
				cooldownRemaining = 0;
				clearInterval(interval);
				return;
			}

			cooldownRemaining = Math.ceil((COOLDOWN_MS - diff) / 60000);
		}, 1000 * 30);
	}

	function handleSubmit(event: SubmitEvent) {
		if (cooldownRemaining > 0) {
			event.preventDefault();
			alert(`Please wait ${cooldownRemaining} more minute(s) before sending another message.`);
			return;
		}

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('lastContactSubmit', Date.now().toString());
		}
	}
</script>

<svelte:head>
	<title>Con-Crete Electronic Press Kit page</title>
	<meta name="description" content="Gather Con-Crete's story and data to learn about him" />
</svelte:head>

<header>
	<div class="header-Image"></div>

	<section class="header-info">
		<article class="glass-Box">
			<h1>Con-Crete</h1>
			<p>The Dark Minister of the Horrorcore Universe</p>
		</article>
		<article class="glass-Box large-Only">
			<ul>
				<li><strong>Age:</strong> 783 years old</li>
				<li><strong>Height:</strong> 12'3"</li>
				<li><strong>Weight:</strong> 2 tons</li>
				<li><strong>Likes:</strong> Long walks on the beach, crushing small buildings, sunsets.</li>
				<li><strong>Dislikes:</strong> Being chipped away at, water, pigeons.</li>
			</ul>
		</article>
	</section>
</header>

<main class="grid-Main">
	<!-- 🦕  🦖🦖🦖 🦕 🦕 Contact's  💀= 💣 🌠  -->
	<section class="contact-card" aria-labelledby="contact-heading">
		<h2 id="contact-heading">Contact Me</h2>
		<p>For booking, collaborations, or business inquiries:</p>

		<form
			class="classicForm"
			name="contact"
			method="POST"
			data-netlify="true"
			netlify-honeypot="bot-field"
			onsubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />

			<div style="display:none" aria-hidden="true">
				<input name="bot-field" />
			</div>

			<label for="name">Your Name</label>
			<input id="name" type="text" name="name" required aria-required="true" />

			<label for="email">Your Email</label>
			<input id="email" type="email" name="email" required aria-required="true" />

			<label for="message">Message</label>
			<textarea id="message" name="message" required aria-required="true"></textarea>

			<button class="btn-Ghost" type="submit" disabled={cooldownRemaining > 0}>
				{#if cooldownRemaining > 0}
					Please wait {cooldownRemaining} min
				{:else}
					Send Message
				{/if}
			</button>
		</form>
	</section>

	<section class="socials-card" aria-labelledby="socials-heading">
		<h2 id="socials-heading">Find me on every major platform:</h2>

		<article class="social-grid">
			{#each Socials as s}
				<a
					class="btn-Ghost"
					href={s.url}
					target="_blank"
					rel="noopener"
					title={`Follow Con-Crete on ${s.name}`}
				>
					{s.name}
				</a>
			{/each}
		</article>
	</section>

	<!-- 🦕  🦖🦖🦖 🦕 🦕 Picture  💀= 💣 🌠  -->
	<div class="carousel">
		<button class="nav prev" onclick={prev}>‹</button>

		<img src={images[current]} alt="Press professional shots" class="carousel-image" />

		<button class="nav next" onclick={next}>›</button>
		<a class="nav download" href={images[current]} download> ⬇ </a>
	</div>

	<!-- 🦕  🦖🦖🦖 🦕 🦕 Bio's  💀= 💣 🌠  -->
	<details>
		<summary>
			<p>
				The story of our band didn’t begin on a stage or in a studio — it started in small rooms
				filled with mismatched gear, borrowed cables, and late-night conversations about what music
				should feel like. Before a single song was recorded, we were just a couple of friends trying
				to make sense of the noise in our heads, chasing that moment when a chord progression hits
				just right and everything else falls away. Those early days weren’t glamorous, but they were
				honest, and that honesty still sits at the core of everything we create.
			</p></summary
		>

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
	</details>

	<!-- 🦕  🦖🦖🦖 🦕 🦕 Song's  💀= 💣 🌠  -->
	<section class="video-Frame">
		<h2>Choice Songs</h2>
		<figure>
			<p>“Most streamed track”</p>
			<ul>
				<li style="font-style: italic;">Asshole</li>
				<li>Produced by Devereaux</li>
				<li>Mixed and mastered by Devereaux</li>
				<li>Over 9 billion plays</li>
			</ul>
			<iframe
				style="border: 0; width: 100%; height: 120px;"
				src="https://bandcamp.com/EmbeddedPlayer/track=1716717313/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
				seamless
				><a href="https://contothecrete.bandcamp.com/track/asshole">Asshole by CON-CRETE</a></iframe
			>
		</figure>
		<figure>
			<p>“New single”</p>
			<ul>
				<li style="font-style: italic;">Good Guy</li>
				<li>Produced by Devereaux</li>
				<li>Mixed and mastered by Devereaux</li>
				<li>Over 9 billion plays</li>
			</ul>
			<iframe
				style="border: 0; width: 100%; height: 120px;"
				src="https://bandcamp.com/EmbeddedPlayer/track=1498605677/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
				seamless
				><a href="https://contothecrete.bandcamp.com/track/good-guy-produced-by-devereaux"
					>Good Guy (Produced by Devereaux) by CON-CRETE</a
				></iframe
			>
		</figure>

		<figure>
			<p>“Fan favorite”</p>
			<ul>
				<li style="font-style: italic;">WITCHDOCTA ft. Razakel</li>
				<li>Produced by Devereaux</li>
				<li>Mixed and mastered by Devereaux</li>
				<li>Featuring additional vocals by Razakel</li>
				<li>Over 9 billion plays</li>
				<iframe
					style="border: 0; width: 100%; height: 120px;"
					src="https://bandcamp.com/EmbeddedPlayer/track=4082850863/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
					seamless
					><a href="https://contothecrete.bandcamp.com/track/witchdocta-ft-razakel"
						>WITCHDOCTA ft. Razakel by CON-CRETE</a
					></iframe
				>
			</ul>
		</figure>
	</section>

	<!-- 🦕  🦖🦖🦖 🦕 🦕 Video's  💀= 💣 🌠  -->
	<section class="video-Frame">
		<h2>Official Music Videos</h2>
		<figure>
			<figcaption>Lake of fire</figcaption>
			<!-- Lake of fire  -->
			<iframe
				src="https://www.youtube.com/embed/ffZ4t26jLLM?si=HRLWmvdW_eHUI_Dy?wmode=transparent"
				title="Lake of fire official video"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</figure>

		<figure>
			<figcaption>Boss</figcaption>
			<!-- Boss -->
			<iframe
				src="https://www.youtube.com/embed/LVhXAPrIUG8?si=oSqTTEDdl_satCKF?wmode=transparent"
				title="Boss official video"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</figure>
		<figure>
			<figcaption>One day</figcaption>
			<!-- One day -->
			<iframe
				src="https://www.youtube.com/embed/pK3heUpR0cw?si=LbGrLfaI4s7V3j_B?wmode=transparent"
				title="One day official video"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</figure>
		<!-- <img
		src={Parallax}
		alt="Con-Crete"
		class="ParallaxObjext"
		style="transform: translateY({scrollY * 0.5}px);"
	/> -->
	</section>
</main>
<div class="bottom-Line"></div>

<style>
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

		.header-Image {
			background-image: url('$lib/Images/gallery/con31.jpg');
			background-size: cover;
			background-position: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0.2;
			z-index: -1;
		}
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

			h1 {
				font-size: var(--size-9);
			}
		}

		@media only screen and (min-width: 768px) {
			.glass-Box {
				width: fit-content;
				height: fit-content;
				h1,
				p {
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

	.contact-card {
		p {
			padding: 0;
			margin: 0;
		}
	}

	.social-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.carousel {
		position: relative;
		width: 100%;
		max-width: 600px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.carousel-image {
		max-height: 45vh;
	}

	.nav {
		position: absolute;
		bottom: 0;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.4);
		color: white;
		border: none;
		padding: 0.5rem 0.75rem;
		cursor: pointer;
		font-size: 2rem;
		border-radius: 4px;
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}

	.nav:hover {
		background: rgba(0, 0, 0, 0.6);
	}

	.download {
		bottom: 10%;
		right: 50%;
		transform: translateX(50%);
		background: rgba(0, 0, 0, 0.4);
		color: white;
		padding: 0.4rem 0.6rem;
		border-radius: 4px;
		font-size: 1.2rem;
		text-decoration: none;
	}

	.download:hover {
		background: rgba(0, 0, 0, 0.6);
	}

	details summary {
		list-style: none;
		cursor: pointer;
		position: relative;
		padding-left: 1.2rem;
	}

	details summary::marker {
		display: none;
	}

	details summary::before {
		content: '>';
		position: absolute;
		left: 10vw;
		top: 20vh;
		transition: transform 0.2s ease;
		border: var(--bord);

		@media only screen and (min-width: 1024px) {
			top: 17vh;
		}
	}

	details[open] summary::before {
		transform: rotate(90deg);
		content: 'X';
	}

	.video-Frame {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		width: 100%;
		max-width: 1000px;
		margin: 2rem auto;
		@media only screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.video-Frame iframe {
		position: relative;
		z-index: 1;
	}

	figure {
		border-bottom: var(--bord);

		p {
			margin: 0;
			padding: 0;
		}
	}

	iframe {
		display: block;
		width: 100%;
		max-width: 560px;
		aspect-ratio: 16/9;
		margin: 2rem auto;
		border-radius: 8px;
		z-index: 0;
	}
</style>
