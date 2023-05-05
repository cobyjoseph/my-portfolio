<script lang="ts">
	import Menu from '$lib/components/sections/landing-components/Menu.svelte';
	import BackgroundElements from '$lib/components/sections/landing-components/BackgroundElements.svelte';
	import HeroSection from '$lib/components/sections/landing-components/HeroSection.svelte';
	import ExamplesSection from '$lib/components/sections/landing-components/ExamplesSection.svelte';
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	let canvas;
	let loading = true;

	onMount(async () => {
		const spline = new Application(canvas);
		await spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
		loading = false;
	});
</script>



<div class="flex flex-col gap-2 sm:grid-cols-8  sm:grid mt-5 sm:mt-0 ">
	<div class="flex flex-col mt-[10%] sm:py-[20vh] sm:my-auto sm:w-full sm:col-span-5 ">
		<HeroSection />
	</div>
	<div class="relative sm:col-span-3   ">
		<div class="canvas-container  overflow-hidden sm:overflow-visible">
			{#if loading}
				<div class="loading-indicator">
					<div class="spinner" />
				</div>
			{/if}
			<canvas
				id="canvas3d"
				bind:this={canvas}
				class="transform -translate-x-[13rem] -my-[7rem] sm:my-0 sm:transform sm:-translate-x-[rem] "
			/>
		</div>
	</div>
</div>

<style>
	.canvas-container {
		position: relative;
		
	}

	.loading-indicator {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.5);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border-top-color: #333;
		animation: spin 1s linear infinite;
	}
</style>


<!-- old spline styel -ml-[13rem] 2xl:-ml-36 sm:ml-0  -->