<script lang="ts">
	import Menu from '$lib/components/landing-components/Menu.svelte';
	import BackgroundElements from '$lib/components/landing-components/BackgroundElements.svelte';
	import HeroSection from '$lib/components/landing-components/HeroSection.svelte';
	import ExamplesSection from '$lib/components/landing-components/ExamplesSection.svelte';
	import ThreeDObject from '$lib/components/landing-components/ThreeDObject.svelte';

	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	let canvas;

	onMount(() => {
		// const spline = new Application(canvas);
		// spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
	});
</script>

<BackgroundElements />
<div class="relative z-10">
	<Menu />
</div>

<div class="flex flex-col gap-2">
	<!-- <TutorSiteVideo /> -->
	<div class="flex flex-col">
		<HeroSection />
	</div>
	<!-- <ThreeDObject />
	 -->
	<!-- <canvas id="canvas3d" bind:this={canvas} class="outline h-[50vh]" /> -->

	<div class="flex flex-col ">
		<ExamplesSection />
	</div>
</div>
