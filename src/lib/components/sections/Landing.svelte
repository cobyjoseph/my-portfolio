<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';
	import { gsap } from 'gsap';
	import { writable, get, derived } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import HeroSection from '$lib/components/sections/landing-components/HeroSection.svelte';

	let canvas;
	let loading = writable(true); // Loading state store
	let splineLoaded = false; // Changed to a regular variable
	let shutters = []; // Here we'll store the shutter elements
	let mountWelcome = false;

	onMount(async () => {
		mountWelcome = !mountWelcome;
		const spline = new Application(canvas);
		await spline.load('https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode');
		splineLoaded = true;
		shutters = Array.from(document.querySelectorAll('.shutter'));

		if (splineLoaded) {
			setTimeout(() => {
				const welcomeText = document.getElementById('welcome-text');
				gsap.to(welcomeText, {
					opacity: 0,
					duration: 0.5
				});

				shutters.forEach((shutter, index) => {
					console.log('Animating shutter ' + index);
					gsap.fromTo(
						shutter,
						{ scaleY: 1 },
						{
							duration: 0.4,
							scaleY: 0,
							transformOrigin: 'bottom',
							delay: index * 0.04,
							onComplete: () => {
								if (index === shutters.length - 1) {
									// All animations completed, remove the overlay
									loading.set(false);
								}
							}
						}
					);
				});
			}, 1800); // Add a 1-second delay before starting the animation
		}
	});
</script>

<!-- <svelte:head>
	{#if $loading}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head> -->

{#if $loading && mountWelcome}
	<div
		in:fade={{ duration: 400 }}
		id="welcome-text"
		class="font-genSans font-medium welcome-text text-baseColor"
	>
		Welcome
	</div>
{/if}

{#if $loading}
	<div id="loading-overlay">
		{#each Array(20) as _, i}
			<div class="shutter" style="top: {i * 5}%" />
		{/each}
	</div>
{/if}

<div class="flex flex-col gap-2 sm:grid-cols-8  sm:grid mt-5 sm:mt-0 ">
	<div class="flex flex-col mt-[10%] sm:py-[20vh] sm:my-auto sm:w-full sm:col-span-5 ">
		<HeroSection />
	</div>
	<div class="relative sm:col-span-3">
		<div class="canvas-container  overflow-hidden sm:overflow-visible">
			<canvas
				id="canvas3d"
				bind:this={canvas}
				class="transform -translate-x-[13rem] -my-[7rem] sm:-my-[10rem] 2xl:-my-0 sm:transform sm:-translate-x-[rem] "
			/>
		</div>
	</div>
</div>

<style>
	#loading-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 950;
	}

	.welcome-text {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 7rem;
		z-index: 960;
	}

	.shutter {
		position: absolute;
		left: 0;
		width: 100%;
		height: calc(5% + 1px); /* Add 1px overlap */
		background-color: rgba(101, 78, 52, 1);
	}

	.loading-indicator {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
