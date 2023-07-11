<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { writable, get, derived } from 'svelte/store';
	import { fade, fly, slide } from 'svelte/transition';
	import { sineIn, backIn, backOut, bounceIn, cubicIn, quadInOut, quintIn } from 'svelte/easing';
	import HeroSection from '$lib/components/sections/landing-components/HeroSection.svelte';
	import fallBack from '$lib/assets/elements/fallback-image-spline-phone-v0.2.png';
	import phone from '$lib/assets/videos/phone-video-2.webm';

	let canvasFallBack;
	let canvas;
	let loading = writable(true);
	let splineLoaded = false;
	let splineLoadedDelay = false;
	let shutters = [];
	let mountWelcome = false;

	onMount(async () => {
		mountWelcome = !mountWelcome;

		await import('https://unpkg.com/@splinetool/viewer@0.9.381/build/spline-viewer.js');

		shutters = Array.from(document.querySelectorAll('.shutter'));

		setTimeout(() => {
			const welcomeText = document.getElementById('welcome-text');
			gsap.to(welcomeText, {
				opacity: 0,
				duration: 0.8
			});

			shutters.forEach((shutter, index) => {
				gsap.fromTo(
					shutter,
					{ scaleY: 1 },
					{
						duration: 1.0,
						scaleY: 0,
						transformOrigin: 'bottom',
						delay: index * 0.05,
						onComplete: () => {
							if (index === shutters.length - 1) {
								// All animations completed, remove the overlay
								loading.set(false);
							}
						}
					}
				);
			});
		}, 2500);
	});
</script>

<svelte:head>
	<!-- {#if $loading}
		<style>
			body {
				overflow: hidden;
				padding-right: 12px;
			}
			@media (min-width: 1440px) {
				body {
					padding-right: 22px;
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
	{/if} -->
</svelte:head>

{#if $loading && mountWelcome}
	<div
		id="welcome-text"
		class="welcome-text text-center font-genSans text-baseColor -mt-20 sm:-mt-5 "
	>
		<div class="flex flex-col text-center  justify-center  ">
			<div
				in:fly={{ duration: 250, y: 30, delay: 100, easing: quintIn }}
				class="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
			>
				Welcome
			</div>
			<div class="flex gap-6 text-center justify-center">
				<div
					in:fly={{ duration: 250, y: 30, delay: 360, easing: quintIn }}
					class=" text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
				>
					to
				</div>
				<div
					in:fly={{ duration: 250, y: 30, delay: 500, easing: quintIn }}
					class=" text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
				>
					my
				</div>
				<div
					in:fly={{ duration: 250, y: 30, delay: 700, easing: quintIn }}
					class="hidden sm:block text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
				>
					portfolio
				</div>
			</div>
			<div
				in:fly={{ duration: 250, y: 30, delay: 700, easing: quintIn }}
				class="block sm:hidden text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium "
			>
				portfolio
			</div>
			<!-- <div class="text-[0.7rem] sm:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.4rem] mt-10 ">
				It's loading...
			</div> -->
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
		<div class=" sm:overflow-visible">
			<spline-viewer
				class=" block transform -translate-x-[13rem] -my-[4rem] sm:-my-[9rem] 2xl:-my-0 sm:transform sm:-translate-x-[10rem] "
				loading-anim
				url="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode"
			/>
		</div>
	</div>
</div>

<style>
	#border-box {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border: solid 2px #000;
		box-sizing: border-box;
		animation: drawBox 2s ease forwards;
	}

	@keyframes drawBox {
		0% {
			border-width: 0 0 2px 0;
		}
		25% {
			border-width: 0 2px 2px 0;
		}
		50% {
			border-width: 2px 2px 2px 0;
		}
		100% {
			border-width: 2px;
		}
	}

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

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
