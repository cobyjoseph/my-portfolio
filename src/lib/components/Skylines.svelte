<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let maskNum = 0;
	let mountTransitions = false;

	onMount(async () => {
		mountTransitions = !mountTransitions;

		// const intervalId = setInterval(function () {
		// 	maskNum++;
		// 	if (maskNum === 7) {
		// 		clearInterval(intervalId);
		// 	}
		// }, 100);
	});

	// function maskTimer() {
	// 	setTimeout((maskNum = +1), 3000);
	// }
</script>

<!-- <div class="bg-red-100 z-50 flex h-[10vh] relative  outline">
	<div class="aucklandSkyline" />
</div> -->

{#if mountTransitions}
	<div class="relative z-50 min-w-full  h-[50rem] ">
		<div class="aucklandStarter mr-[18vw]  z-50 " />

		<div class="aucklandSkyline mask-animation mr-[18vw]  z-50 " />
	</div>

	<!-- <img src="skylines-styled/auckland-cropped.png" alt="auckland skyline" class="absolute z-10 " />
		<img src="skylines-styled/auckland-cropped.png" alt="auckland skyline" class="absolute z-10 " /> -->
{/if}

<div class="aucklandStarter mr-[18vw]  z-50 " />

<style>
	/* .aucklandStarter {
		position: absolute;
		inset: 0;
		background-image: url('skylines-styled/akl-pre-filter-v0.1.png');
		background-size: contain;
		background-repeat: no-repeat;
		max-width: 100%;
		display: block;
		opacity: 0.7;
	} */

	.aucklandSkyline {
		position: absolute;
		inset: 0;
		background-image: url('skylines-styled/akl-post-filter-base-v0.1.png');
		background-size: contain;
		background-repeat: no-repeat;
		max-width: 100%;
		display: block;

		-webkit-mask-image: url('skylines-styled/masks/auckland/inverted test.png');
		-webkit-mask-size: 100%;
		-webkit-mask-position: 0% 0;
		-webkit-mask-repeat: no-repeat;
		mask-image: url('skylines-styled/masks/auckland/inverted test.png');
		mask-size: 100%;
		mask-position: 0% 0;
		mask-repeat: no-repeat;

		transition: -webkit-mask-position;
	}

	.mask-animation {
		animation: revealAnimate 500ms steps(33) forwards;
	}

	@keyframes revealAnimate {
		0% {
			-webkit-mask-position: 0% 0%;
			mask-position: 0% 0%;
		}
		100% {
			-webkit-mask-position: 100% 0%;
			mask-position: 100% 0%;
		}
	}
</style>
