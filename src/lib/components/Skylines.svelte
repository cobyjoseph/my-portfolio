<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let maskNum = 0;
	let mountTransitions = false;

	onMount(async () => {
		mountTransitions = !mountTransitions;

		const intervalId = setInterval(function () {
			maskNum++;
			if (maskNum === 7) {
				clearInterval(intervalId);
			}
		}, 100);
	});

	// function maskTimer() {
	// 	setTimeout((maskNum = +1), 3000);
	// }
</script>

<!-- <div class="bg-red-100 z-50 flex h-[10vh] relative  outline">
	<div class="aucklandSkyline" />
</div> -->

{#if mountTransitions}
	<div
		style="-webkit-mask-image: url('skylines-styled/masks/auckland/{maskNum}.png'); mask-image: url('skylines-styled/masks/auckland/{maskNum}.png')"
		class="aucklandSkyline   z-50 "
	/>

	<!-- <img src="skylines-styled/auckland-cropped.png" alt="auckland skyline" class="absolute z-10 " />
		<img src="skylines-styled/auckland-cropped.png" alt="auckland skyline" class="absolute z-10 " /> -->
{/if}

<style>
	.aucklandSkyline {
		position: absolute;
		inset: 0;
		background-image: url('skylines-styled/auckland-cropped.png');
		background-size: contain;
		background-repeat: no-repeat;

		/* -webkit-mask-image: url('skylines-styled/masks/1.png'); */
		-webkit-mask-size: contain;
		-webkit-mask-position: -0rem 0;
		-webkit-mask-repeat: no-repeat;
		/* mask-image: url('skylines-styled/masks/1.png'); */
		mask-size: contain;
		mask-position: -0rem 0;
		mask-repeat: no-repeat;
	}
</style>
