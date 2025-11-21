<script lang="ts">
	import { Pane, Button } from 'svelte-tweakpane-ui';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import type { CharacterActions } from './types';

	let action = $state<CharacterActions>('idleChainsaw');
</script>

<Pane title="Transitions" position="fixed">
	<Button
		title="Idle"
		on:click={() => {
			action = 'idleChainsaw';
		}}
	/>
	<Button
		title="SAW'S UP"
		on:click={() => {
			action = 'raiseChainsaw';
		}}
	/>
</Pane>

<h1>Hello friend</h1>

<div>
	<Canvas>
		<Scene {action} />
	</Canvas>
</div>

<p>Thank you for visiting, this site is under construction.</p>

<style>
	h1 {
		margin: 5rem;
	}
	div {
		position: relative;
		height: 100%;
		width: 100%;
	}
</style>
