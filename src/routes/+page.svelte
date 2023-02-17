<script>
	import Skylines from '../lib/components/Skylines.svelte';
</script>

<div class=" top-0 paperBG w-full h-full absolute -z-10" />
<div class="h-full w-[6vw] blueLine absolute right-0 z-20 " />
<div class="h-full w-[6vw] greenLine absolute right-[12vw] z-20 " />
<div class="h-full w-[6vw] beigeLine absolute right-[6vw]  z-20 " />

<img
	src="kraftTone/headshot-sytled-dots-v0.2.png"
	alt="headshot of me"
	class="w-[10rem] relative left-[14rem] z-20 "
/>

<Skylines />

<style>
	.paperBG {
		background-image: url(kraftTone/bg-v0.1.png);
		background-position: top;
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
