<script lang="ts">
	import '$lib/styles/baseCamp.svelte';
	import Header from '$lib/Bricks/Menu.svelte';
	import Footer from '$lib/Bricks/Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
