<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Assets/Scene.svelte';
	import type { CharacterActions } from './types';

	let action = $state<CharacterActions>('idleChainsaw');

	let isMenuOpen = $state(false);
	let current = $state(1);

	const menuItems = [
		{ label: 'Home', href: '/', id: 1 },
		{ label: 'Shows', href: '/Shows', id: 2 },
		{ label: 'Shop', href: '/Shop', id: 3 },
		{ label: 'Checkout', href: '/Checkout', id: 4 },
		{ label: 'Gallery ', href: '/Gallery', id: 5 },
		{ label: 'Videos', href: '/Videos', id: 8 },
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

	function handleClick() {
		action = 'menuChainsaw';

		setTimeout(() => {
			action = 'idleChainsaw';
		}, 3500);
	}

	let theme = $state('Dark');
	const themes = ['Dark', 'Light', 'Colorblind'];

	function setTheme(name) {
		theme = name;
		document.documentElement.setAttribute('data-theme', theme);
	}

	import Cart from '$lib/Assets/Cart.svelte';
	import { cart } from '$lib/stores/cart.svelte.js';

	let cartOpen = $state(false);
</script>

<button class="cart-trigger" onclick={() => (cartOpen = true)}>
	Cart ({cart.totalItems})
</button>

<Cart isOpen={cartOpen} close={() => (cartOpen = false)} />

<div>
	<button class="center-toggle" onclick={() => ((isMenuOpen = !isMenuOpen), handleClick())}>
		<div class="threeDBox">
			<Canvas>
				<Scene {action} />
			</Canvas>
		</div>
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

				{#each themes as t}
					<label>
						<input
							type="radio"
							name="theme"
							value={t}
							bind:group={theme}
							onchange={() => setTheme(t)}
						/>
						{t}
					</label>
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
	.cart-trigger {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 100;
		padding: 0.5rem;
		background: #ff1a1a;
		color: white;
		border: 2px solid #000;
		font-weight: bold;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	}
	.cart-trigger:hover {
		transform: scale(1.05);
	}
	.center-toggle {
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 960;
		width: 9rem;
		height: 9rem;
		background: var(--bg-2);
		border: var(--bord);
		cursor: pointer;
		transition:
			transform 0.3s ease,
			background 0.3s ease;
	}

	.threeDBox {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.center-toggle:hover {
		transform: scale(1.1);
	}

	.menu-overlay {
		position: fixed;
		inset: 0;
		background: rgba(158, 52, 52, 0.418);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);
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
		color: var(--bg-1);
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
		display: none;
		position: fixed;
		bottom: 9rem;
		right: 3rem;
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
