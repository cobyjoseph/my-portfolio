<script>
	import Skylines from '../lib/components/Skylines.svelte';
</script>

<div class="h-full w-[6vw] blueLine absolute right-0 top-0 z-20 " />
<div class="h-full w-[6vw] greenLine absolute right-[12vw] top-0 z-20 " />
<div class="h-full w-[6vw] beigeLine absolute right-[6vw] top-0 z-20 " />

<img
	src="kraftTone/headshot-sytled-dots-v0.2.png"
	alt="headshot of me"
	class="w-[9rem] absolute right-[2rem] top-12 z-20  "
/>

<img src="kraftTone/stain-v0.1.png" alt="" class="absolute -top-1 w-[8rem] left-0 z-20   " />
<img src="kraftTone/paint-splatter-v0.1.png" alt="" class="absolute top-50 z-10" />
<img src="kraftTone/subtle-paint-splatter-v0.1.png" alt="" class="absolute bottom-10 z-10" />

<div class="relative  w-[10rem]  h-[5rem] ml-10">
	<img src="text/header-text-w-effects-v0.1.png" alt="" class="absolute top-[8rem] z-10" />
</div>

<div class="relative  w-[20rem] h-[3rem] mt-[10rem] ml-50">
	<!-- <img src="text/hero-text-v0.1.png" alt="" class="absolute top-10 z-10" /> -->
	<div class="text-2xl font-bold text-[#705129] z-50 absolute top-10 max-w-[20rem] pl-10 pt-3  ">
		<!-- Give this text a grainy effect - and make the stain more opaque -->
		I build sites that help your business puts it's best foot forward
	</div>
	<img src="text/hero-text-bg-opaque-v0.1.png" alt="" class="absolute top-10 z-10" />
</div>

<!-- <img src="skylines-styled/auckland.png" alt="auckland skyline" class="relative z-30" /> -->

<button class="blackButton text-white py-2 px-4 text-xl font-bold mt-40"> See work </button>
<div
	class="beigeHeader flex absolute right-0 z-50  text-3xl font-bold mt-[40rem] w-[20rem] text-left text-textPrimary"
>
	<div class="shading w-5  " />
	<div class="py-2 px-4">See work</div>
</div>

<div class=" relative w-[100rem] h-[30rem]">
	<Skylines />
</div>

<style>
	.shading {
		background-image: url(elements/shading.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
	.beigeHeader {
		background-image: url(elements/header.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
	.blackButton {
		background-image: url(kraftTone/button-black-v0.1.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}

	.blueLine {
		background-image: url(kraftTone/blue-v0.1.png);
		background-position: right;
		background-size: cover;
		background-repeat: repeat;
	}

	.greenLine {
		background-image: url(kraftTone/green-v0.1.png);
		background-position: right;
		background-size: cover;
		background-repeat: repeat;
	}

	.beigeLine {
		background-image: url(kraftTone/beige-v0.1.png);
		background-position: right;
		background-size: cover;
		background-repeat: repeat;
	}
</style>
