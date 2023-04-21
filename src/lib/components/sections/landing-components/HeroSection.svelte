<script>
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	const x = tweened(0, {
		duration: 700,
		easing: (t) => t
	});

	onMount(() => {
		const interval = setInterval(() => {
			x.update((v) => (v === 0 ? 10 : 0));
		}, 700);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex items-center justify-center  w-full relative  sm:py-[30vh] ">
	<div class="flex flex-col items-center gap-2 ">
		<div class=" font-genSans w-full relative justify-center flex flex-col gap-2 ">
			<div class="text-lg  font-satoshi text-dark2 -mb-2 flex">Hi. My name is:</div>
			<div class="text-light1 font-bold largeClamp flex">Coby Joseph</div>
			<div
				class="text-xl relative w-full  flex flex-col font-satoshi font-bold  text-dark2 z-50 leading-[1.35rem]       "
			>
				I design and develop interactive sites for freelancers, businesses, and entrepreneurs.
			</div>
			<div class="flex items-center gap-2">
				<div class=" flex text-lg relative   text-dark2 ">Like that one</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 hidden sm:flex"
					style="transform: translateX({$x}px);"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 sm:hidden flex"
					style="transform: translateY({$x}px);"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
					/>
				</svg>
			</div>
		</div>
	</div>

	<div class="flex flex-col relative sm:grid sm:grid-cols-2 " />
</div>

<style>
	.largeClamp {
		font-size: clamp(2rem, 2vw + 2rem, 20rem);
		line-height: 1.2;
	}

	.blackButton {
		background-image: url(kraftTone/button-black-v0.1.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}

	.bgSmudge {
		background-image: url(text/hero-text-bg-opaque-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-right: -4rem;
	}
</style>
