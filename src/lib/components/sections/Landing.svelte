<script lang="ts">
	import Menu from '$lib/components/sections/landing-components/Menu.svelte';
	import BackgroundElements from '$lib/components/sections/landing-components/BackgroundElements.svelte';
	import HeroSection from '$lib/components/sections/landing-components/HeroSection.svelte';
	import ExamplesSection from '$lib/components/sections/landing-components/ExamplesSection.svelte';
	import ThreeDObject from '$lib/components/sections/landing-components/ThreeDObject.svelte';

	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	let canvas;

	onMount(() => {
		const spline = new Application(canvas);
		spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
	});
</script>

<div class="flex flex-col gap-2 sm:flex-row outline">
	<!-- <TutorSiteVideo /> -->
	<div class="flex flex-col mt-[10%] sm:mt-0 sm:w-full">
		<HeroSection />
	</div>

	<canvas id="canvas3d" bind:this={canvas} class="outline h-[50vh]" />
</div>
