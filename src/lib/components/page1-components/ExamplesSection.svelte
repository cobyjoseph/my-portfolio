<script>
	import TutorLandingPage from '$lib/components/example-sites/tutorSite/TutorLandingPage.svelte';
</script>

<div class="flex flex-col relative">
	<div class="text-xl relative  flex font-Chivo font-bold italic text-black z-50       ">
		I build sites that help your business puts it's best foot forward.
	</div>
	<!-- <img src="text/underline-v0.1.png" alt="" class="absolute top-10 opacity-[0.4]" /> -->

	<div class="relative flex mt-4   ">
		<TutorLandingPage />
		<!-- <div class="lineFill w-full h-full absolute top-[0.3rem] -z-10 right-[0.3rem]" /> -->
	</div>

	<div class="h-[8.44rem] w-[15rem] relative self-center -z-20 -translate-y-[2rem] flex">
		<TutorLandingPage />
		<div class="lineFill w-full h-full absolute top-[0.3rem] -z-20 right-[0.3rem]" />
	</div>

	<div class="h-[8.44rem] w-[15rem] relative -z-30 self-end -translate-y-[4rem] flex">
		<TutorLandingPage />
		<div class="lineFill w-full h-full absolute  top-[0.3rem] -z-30 right-[0.3rem]" />
	</div>

	<button class="blackButton relative   text-white py-2 px-5 text-xl font-bold self-end   flex">
		See work
		<!-- <div class="absolute -z-20 w-full h-full top-[0.4rem] left-[0.4rem] dotsFill" /> -->
	</button>
</div>

<style>
	.lineFill {
		background-image: url(elements/bg-blue-lines-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: repeat;
	}

	.dotsFill {
		background-image: url(elements/menu-dots-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: repeat;
	}

	.blackButton {
		background-image: url(elements/button-black-v0.1.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
	.bgSmudge {
		background-image: url(text/hero-text-bg-opaque-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		/* margin-right: -4rem; */
	}
</style>
