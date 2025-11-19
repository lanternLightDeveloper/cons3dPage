<script lang="ts">
	import { GLTF, useGltfAnimations } from '@threlte/extras';
	import type { CharacterActions } from './types';

	type Props = {
		actionKey: CharacterActions;
	};
	let { actionKey = 'idle' }: Props = $props();

	let { gltf, actions } = useGltfAnimations();
	let currentActionKey: CharacterActions = 'idle';

	$effect(() => {
		$actions?.['idle']?.play();
		transitionTo(actionKey, 0.3);
	});

	function transitionTo(actionKey: CharacterActions, duration = 1) {
		const currentAction = $actions[currentActionKey];
		const nextAction = $actions[actionKey];
		if (!nextAction || currentAction === nextAction) return;
		nextAction.enabled = true;
		if (currentAction) {
			currentAction.crossFadeTo(nextAction, duration, true);
		}
		nextAction.play();
		currentActionKey = actionKey;
	}
</script>

<GLTF
	bind:gltf={$gltf}
	url="./ChainsawMan.glb"
	oncreate={(scene) => {
		scene.traverse((child) => {
			child.castShadow = true;
		});
	}}
/>
