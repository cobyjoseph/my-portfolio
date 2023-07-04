<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';
	import { gsap } from 'gsap';
	import { writable, get, derived } from 'svelte/store';
	import { fade, fly, slide } from 'svelte/transition';
	import { sineIn, backIn, backOut, bounceIn, cubicIn } from 'svelte/easing';
	import HeroSection from '$lib/components/sections/landing-components/HeroSection.svelte';

	let canvas;
	let loading = writable(true); // Loading state store
	let splineLoaded = false; // Changed to a regular variable
	let shutters = []; // Here we'll store the shutter elements
	let mountWelcome = false;

	// let contentOpacity = derived(loading, ($loading) => ($loading ? 0 : 1));

	// $: {
	// 	if ($loading) {
	// 		document.body.style.marginRight = '0px';
	// 	} else {
	// 		document.body.style.marginRight = '40px'; // change 15px to the width of your scrollbar
	// 	}
	// }

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
			}, 1800);
		}
	});
</script>

<svelte:head>
	<link
		rel="preload"
		href="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode"
		as="fetch"
	/>

	{#if $loading}
		<style>
			body {
				overflow: hidden;
				padding-right: 12px; /* Adjust to the width of your scrollbar */
			}
			@media (min-width: 1440px) {
				body {
					padding-right: 22px; /* Adjust to the width of your scrollbar for large screens */
				}
			}
		</style>
	{/if}
	{#if !$loading}
		<style>
			body {
				padding-right: 0px;
			}
		</style>
	{/if}
</svelte:head>

{#if $loading && mountWelcome}
	<div
		id="welcome-text"
		class="welcome-text text-center font-genSans text-baseColor -mt-20 sm:mt-0 "
	>
		<div class="flex flex-col text-center  justify-center  ">
			<div
				in:fly={{ duration: 300, y: 30, easing: backIn }}
				class="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
			>
				Welcome
			</div>
			<div class="flex gap-6 text-center justify-center">
				<div
					in:fly={{ duration: 300, y: 30, delay: 200, easing: backIn }}
					class=" text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
				>
					to
				</div>
				<div
					in:fly={{ duration: 300, y: 30, delay: 400, easing: backIn }}
					class=" text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
				>
					my
				</div>
				<div
					in:fly={{ duration: 300, y: 30, delay: 600, easing: backIn }}
					class="hidden sm:block text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
				>
					portfolio
				</div>
			</div>
			<div
				in:fly={{ duration: 300, y: 30, delay: 600, easing: backIn }}
				class="block sm:hidden text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
			>
				portfolio
			</div>
			<div class="text-[0.7rem] sm:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.4rem] mt-10 ">
				It's loading...
			</div>
		</div>
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
	<div class="flex flex-col mt-[10%] sm:pb-[12vh] sm:my-auto sm:w-full sm:col-span-5  ">
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
		z-index: 960;
		line-height: 1;
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
