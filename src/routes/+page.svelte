<script lang="ts">
	import { Pane, Button } from 'svelte-tweakpane-ui';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import type { CharacterActions } from './types';

	let action = $state<CharacterActions>('idle');
</script>

<Pane title="Transitions" position="fixed">
	<Button
		title="Wave"
		on:click={() => {
			action = 'waveHello';
		}}
	/>
	<Button
		title="Idle"
		on:click={() => {
			action = 'idle';
		}}
	/>
</Pane>

<h1>Hello friend</h1>

<div>
	<Canvas>
		<Scene {action} />
	</Canvas>
</div>

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
