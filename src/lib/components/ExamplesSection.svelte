<script>
	import TutorLandingPage from '$lib/components/tutorSite/TutorLandingPage.svelte';
</script>

<div class="flex flex-col gap-4 relative">
	<div
		class="text-2xl relative px-3 py-3 mr-auto flex font-Chivo font-bold italic text-black z-50       "
	>
		I build sites that help your business puts it's best foot forward.
	</div>
	<img src="text/underline-v0.1.png" alt="" class="absolute top-10 opacity-[0.4]" />

	<div class="h-[10rem] w-[18rem] relative  flex">
		<TutorLandingPage />
		<div class="lineFill w-full h-full absolute top-[0.7rem] -z-10 left-[0.7rem]" />
	</div>
	<div class="relative">
		<button class="blackButton relative  text-white py-2 px-5 text-xl font-bold   flex">
			See work
			<div class="absolute -z-20 w-full h-full top-[0.4rem] left-[0.4rem] dotsFill" />
		</button>
	</div>
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
