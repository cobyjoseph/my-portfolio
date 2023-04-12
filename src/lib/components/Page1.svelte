<script lang="ts">
	import Menu from '$lib/components/page1-components/Menu.svelte';
	import BackgroundElements from '$lib/components/page1-components/BackgroundElements.svelte';
	import HeroSection from '$lib/components/page1-components/HeroSection.svelte';
	import ExamplesSection from '$lib/components/page1-components/ExamplesSection.svelte';
	import ThreeDObject from '$lib/components/page1-components/ThreeDObject.svelte';

	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	let canvas;

	onMount(() => {
		// const spline = new Application(canvas);
		// spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
	});
</script>

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/@splinetool/viewer@0.9.293/build/spline-viewer.js"
	></script>
</svelte:head>

<BackgroundElements />
<div class="relative z-10">
	<Menu />
</div>

<div class="flex flex-col gap-2 px-[8%]">
	<!-- <TutorSiteVideo /> -->
	<div class="flex flex-col">
		<HeroSection />
	</div>
	<!-- <ThreeDObject />
	 -->
	<!-- <canvas id="canvas3d" bind:this={canvas} class="outline h-[50vh]" /> -->

	<div class="flex flex-col  ">
		<ExamplesSection />

		<div class="outline w-full h-[80vh]">
			<spline-viewer url="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode" />
		</div>
	</div>
</div>

<style>
	#canvas3d {
		background-color: transparent;
	}
</style>
