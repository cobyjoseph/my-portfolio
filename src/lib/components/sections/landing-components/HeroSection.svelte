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

<div class="flex items-center justify-center  w-full    ">
	<div class=" font-genSans w-full  justify-center flex flex-col gap-3 ">
		<div class="text-lg  font-satoshi text-dark2  flex">Hi. My name is:</div>
		<div class="text-light1 font-bold largeClamp flex -mt-2">Coby Joseph</div>
		<div
			class="text-xl relative w-full  flex flex-col font-satoshi font-bold  text-dark2 z-50 leading-[1.35rem]       "
		>
			I design and develop interactive sites for freelancers, businesses, and entrepreneurs.
		</div>
		<div class="flex items-center gap-2">
			<div class=" flex text-lg relative lg:hidden  text-dark2 leading-[1.35rem]">
				Like the one I built on that phone. 
			</div>
			<div class="hidden lg:block text-lg relative   text-dark2 leading-[1.35rem]">
				Like the one I built on that phone. 
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8 hidden sm:flex self-end"
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
				class="w-6 h-6 sm:hidden   flex "
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

	<!-- <div class="flex flex-col relative sm:grid sm:grid-cols-2 " /> -->
</div>

<style>
	.largeClamp {
		font-size: clamp(2rem, 2vw + 2rem, 20rem);
		line-height: 1.2;
	}
</style>
