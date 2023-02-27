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

	<div class="h-[12rem] w-[22rem] relative overflow-hidden flex">
		<TutorLandingPage />
	</div>
	<div>
		<button class="blackButton text-white py-2 px-6 text-xl font-bold   flex">
			See work
		</button>
	</div>
</div>

<style>
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
