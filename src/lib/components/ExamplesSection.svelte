<script>
	import TutorLandingPage from '$lib/components/tutorSite/TutorLandingPage.svelte';
</script>

<div class="flex flex-col gap-4 ">
	<div class="text-2xl   relative px-10 py-3 flex font-bold text-[#705129] z-50 bgSmudge      ">
		I build sites that help your business puts it's best foot forward
	</div>

	<div class="h-[15rem] w-[25rem] outline relative overflow-hidden flex">
		<TutorLandingPage />
	</div>
	<button class="blackButton text-white py-2 px-4 text-xl font-bold mt-40"> See work </button>
</div>

<style>
	.bgSmudge {
		background-image: url(text/hero-text-bg-opaque-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.blackButton {
		background-image: url(kraftTone/button-black-v0.1.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
</style>
