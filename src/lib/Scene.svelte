<script lang="ts">
	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import Character from './MovingBox.svelte';

	let { action } = $props();
</script>

<T.PerspectiveCamera
	makeDefault
	position={[1, 1, 5]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
>
	<OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight />
<T.DirectionalLight position={[10, 5, 3]} castShadow />

<Character actionKey={action} />
