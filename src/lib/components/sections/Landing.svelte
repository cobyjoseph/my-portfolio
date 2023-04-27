<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	export let onLoad = () => {};

	let canvas;

	onMount(async () => {
		const spline = new Application(canvas);
		await spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
		onLoad();
	});
</script>

<div class="flex flex-col gap-2 sm:grid-cols-8 sm:py-[30vh] sm:grid mt-5 sm:mt-0">
	<div class="flex flex-col mt-[10%] sm:mt-0 sm:w-full sm:col-span-5">
		<HeroSection />
	</div>
	<div class="relative sm:col-span-3">
		<canvas
			id="canvas3d"
			bind:this={canvas}
			class=" -ml-6  xl:-ml-48 2xl:-ml-64 sm:ml-0 -my-[7rem] sm:my-0 sm:absolute sm:top-[55%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2"
		/>
	</div>
</div>
