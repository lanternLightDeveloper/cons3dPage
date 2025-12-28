<script lang="ts">
	import { Socials } from '$lib/data/shows/contactPoints';
	import { onMount } from 'svelte';

	let cooldownRemaining = $state(0);
	const COOLDOWN_MINUTES = 15;
	const COOLDOWN_MS = COOLDOWN_MINUTES * 60 * 1000;

	// Check cooldown on load
	onMount(() => {
		const last = localStorage.getItem('lastContactSubmit');
		if (last) {
			const diff = Date.now() - Number(last);
			if (diff < COOLDOWN_MS) {
				cooldownRemaining = Math.ceil((COOLDOWN_MS - diff) / 60000);
			}
		}
	});

	function handleSubmit(event) {
		if (cooldownRemaining > 0) {
			event.preventDefault();
			alert(`Please wait ${cooldownRemaining} more minute(s) before sending another message.`);
			return;
		}

		// Save timestamp BEFORE sending
		localStorage.setItem('lastContactSubmit', Date.now().toString());
	}
</script>

<svelte:head>
	<title>Con-Crete contact and music platform links</title>
	<meta
		name="description"
		content="Contact Con-Crete for booking, collaborations, or business inquiries, and follow his music on major platforms like Spotify and Facebook."
	/>
</svelte:head>

<main class="contact-page">
	<section class="contact-card" aria-labelledby="contact-heading">
		<h2 id="contact-heading">Contact Me</h2>
		<p>For booking, collaborations, or business inquiries:</p>

		<form
			class="classicForm"
			name="contact"
			method="POST"
			data-netlify="true"
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

			<button class="btn-Ghost" type="submit">Send Message</button>
		</form>
	</section>

	<section class="socials-card" aria-labelledby="socials-heading">
		<h2 id="socials-heading">Follow My Music</h2>
		<p>Find Con-Crete on every major platform:</p>

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
</main>

<section class="bottom-Line"></section>

<!--svelte-ignore css_unused_selector -->
<style>
	.contact-page {
		max-width: 100vw;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		display: grid;
		grid-template-columns: 1fr;
		@media (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
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
</style>
