<script lang="ts">
	import { onMount } from 'svelte';
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { sineInOut, quintIn, backOut } from 'svelte/easing';
	import Menu from './Menu.svelte';

	let mountAnimations = false;

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}

	onMount(() => {
		mountAnimations = !mountAnimations;
	});
</script>

<div class="bgPhoto">
	<Menu />
	<div class="absolute z-0 h-full w-full  bg-slate-900 opacity-80 " />

	{#if mountAnimations}
		<div class=" relative z-20 mt-[2.5rem] flex flex-col items-center justify-center font-satoshi ">
			<div class="flex flex-col  items-center  gap-2 text-center text-white  ">
				<div class=" flex flex-col  items-center justify-center max-w-[68%] gap-2 sm:gap-[0.5rem] ">
					<div
						in:fly={{ duration: 300, delay: 0, easing: sineInOut, y: 100 }}
						class="text-[1rem] max-w-[90%] mt-3 sm:mt-10 font-satoshi font-extrabold leading-5 text-white     "
					>
						Strategic marketing for innovative companies
					</div>
					<div
						class="text-[0.45rem] leading-[0.7rem] "
						in:fly={{ duration: 300, delay: 0, easing: sineInOut, y: 100 }}
					>
						We provide comprehensive marketing and branding services to help you stand out from the
						crowd and drive home your message.
					</div>

					<div in:fly={{ duration: 300, delay: 150, easing: sineInOut, y: 100 }} class="flex">
						<a
							href={'#services'}
							class=" text-[0.45rem] leading-[1rem] flex items-center bg-lpButton justify-center  rounded-sm bg-bright px-[0.6rem]  font-bold text-white mt-1  "
							on:click|preventDefault={scrollIntoView}>Learn More</a
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	/* .backgroundImage {
		background-image: url;
	} */

	.bgPhoto {
		background-image: url($lib/assets/example-sites/bg-image2-opt.webp);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.roundingClamp {
		border-radius: clamp(0.2rem, 2vw + 1rem, 7rem);
	}

	.textClamp {
		font-size: clamp(1rem, 1vw + 1rem, 3rem);
	}

	.textSmallClamp {
		font-size: clamp(0.7rem, 1vw + 0.4rem, 1.3rem);
		line-height: normal;
	}

	a:link {
		text-decoration: none !important;
		color: white !important;
	}

	a:visited {
		text-decoration: none !important;
		color: white !important;
	}

	a:hover {
		text-decoration: none !important;
		color: white !important;
	}

	a:active {
		text-decoration: none !important;
		color: white !important;
	}

	/* Picture modified from Rawpixel Ltd on Flickr / 2018. source: https://www.flickr.com/photos/byrawpixel/45739276632/ */
</style>
