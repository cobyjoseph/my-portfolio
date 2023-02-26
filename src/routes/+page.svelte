<script>
	import TutorLandingPage from '$lib/components/tutorSite/TutorLandingPage.svelte';
	import Skylines from '../lib/components/Skylines.svelte';
	import BackgroundElements from '$lib/components/BackgroundElements.svelte';
</script>

<BackgroundElements />

<img
	src="kraftTone/headshot-sytled-dots-v0.2.png"
	alt="headshot of me"
	class="w-[9rem] absolute right-[2rem] top-12 z-20  "
/>

<div class="relative  w-[10rem]  h-[5rem] ml-10">
	<img src="text/header-text-w-effects-v0.1.png" alt="" class="absolute top-[8rem] z-10" />
</div>

<button class="blackButton text-white py-2 px-4 text-xl font-bold mt-40"> See work </button>
<div
	class="beigeHeader flex absolute right-0 z-50  text-3xl font-bold mt-[40rem] w-[20rem] text-left text-textPrimary"
>
	<div class="shading w-5  " />
	<div class="py-2 px-4">See work</div>
</div>

<Skylines />

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
</style>
