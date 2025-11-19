<script lang="ts">
	import { onMount } from 'svelte';
	let isMenuOpen = $state(false);
	let current = $state(1);

	const menuItems = [
		{ label: 'Home', href: '/', id: 1 },
		{ label: 'Shows', href: '/Shows', id: 2 },
		{ label: 'Shop', href: '/Shop', id: 3 },
		{ label: 'Contest ', href: '/Contest', id: 4 },
		{ label: 'Gallery ', href: '/Gallery', id: 5 },
		{ label: 'Contact', href: '/Contact', id: 6 },
		{ label: 'About ', href: '/About', id: 7 }
	];

	let showScrollButton = $state(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handleScroll() {
		const scrollY = window.scrollY;
		const triggerHeight = window.innerHeight * 1.5;
		showScrollButton = scrollY > triggerHeight;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div>
	<button class="center-toggle" onclick={() => (isMenuOpen = !isMenuOpen)} aria-label="Toggle menu">
		<svg> Home</svg>
	</button>

	{#if isMenuOpen}
		<div class="menu-overlay">
			<div class="menu-content">
				{#each menuItems as item, i}
					<a
						href={item.href}
						class="menu-link"
						class:current={current === item.id}
						onclick={() => {
							current = item.id;
							isMenuOpen = false;
						}}
						style={`animation-delay: ${i * 0.1}s`}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>

{#if showScrollButton}
	<button class="scroll-top-button" onclick={scrollToTop}> ↑ </button>
{/if}

<!--svelte-ignore css_unused_selector -->
<style>
	.center-toggle {
		position: fixed;
		top: 0.5rem;
		right: 0.5rem;
		z-index: 960;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: rgba(21, 48, 20, 0.5);
		backdrop-filter: blur(12px);
		border: var(--bord);
		cursor: pointer;
		transition:
			transform 0.3s ease,
			background 0.3s ease;

		svg {
			width: 90%;
			height: 90%;
		}
	}

	.center-toggle:hover {
		transform: scale(1.1);
		background: rgba(255, 255, 255, 0.25);
	}

	.menu-overlay {
		position: fixed;
		inset: 0;
		background: radial-gradient(
			circle at center,
			var(--bg-1),
			var(--bg-1),
			var(--bg-1),
			var(--accent-2)
		);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 950;
		overflow: hidden;
		animation: fadeIn 0.4s ease-in-out forwards;
	}

	.menu-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		text-align: center;
	}

	.menu-link {
		font-size: 2rem;
		color: var(--txt-1);
		text-decoration: none;
		opacity: 0;
		transform: translateY(20px);
		animation: slideUp 0.4s ease forwards;
	}
	.menu-link:hover {
		color: var(--accent-2);
		text-shadow: 0 0 8px var(--accent-2);
		transform: scale(1.05);
	}

	.menu-link.current {
		color: var(--accent-1);
		font-weight: bold;
		text-shadow: 0 0 12px var(--accent-1);
	}

	@keyframes slideUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.scroll-top-button {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		background: var(--accent-2);
		color: var(--txt-1);
		border: none;
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		font-size: 1.2rem;
		cursor: pointer;
		z-index: 935;
		animation: bounceIn 0.6s ease forwards;
	}
	.scroll-top-button:hover {
		background-color: var(--hover);
		box-shadow: 0 0 12px var(--accent-2);
	}
	@keyframes bounceIn {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}
		60% {
			transform: scale(1.2);
			opacity: 1;
		}
		100% {
			transform: scale(1);
		}
	}
</style>
