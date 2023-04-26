<script lang="ts">
	import Menu from '$lib/components/sections/landing-components/Menu.svelte';
	import BackgroundElements from '$lib/components/sections/landing-components/BackgroundElements.svelte';
	import HeroSection from '$lib/components/sections/landing-components/HeroSection.svelte';
	import ExamplesSection from '$lib/components/sections/landing-components/ExamplesSection.svelte';

	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	let canvas;

	onMount(() => {
		const spline = new Application(canvas);
		spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
	});
</script>

<!-- <svelte:head>
	<script
		type="module"
		src="https://unpkg.com/@splinetool/viewer@0.9.304/build/spline-viewer.js"
	></script>
</svelte:head> -->

<div class="flex flex-col gap-2 sm:grid-cols-4">
	<!-- <TutorSiteVideo /> -->
	<div class="flex flex-col mt-[10%] sm:mt-0 sm:w-full sm:grid-span-3">
		<HeroSection />
	</div>

	<!-- <spline-viewer
		class="h-full outline"
		url="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode"
	/> -->

	<div class="relative">
		<canvas id="canvas3d" bind:this={canvas} class="outline -my-[35%]  " />
	</div>
</div>
