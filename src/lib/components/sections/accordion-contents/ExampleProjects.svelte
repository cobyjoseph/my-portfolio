<script lang="ts">
	import TutorLandingPage from '$lib/components/example-sites/tutorSite/TutorLandingPage.svelte';
	import indelvve from '$lib/assets/example-sites/indelvve-ui-skew-v2.png';
</script>

<div class="flex flex-col gap-8 sm:grid sm:grid-cols-2 font-satoshi ">
	<div class="flex flex-col">
		<div
			class="h-[12rem] w-full max-w-[21rem] relative mx-auto sm:h-[15rem] sm:max-w-[26rem]    flex rounded-lg  overflow-hidden "
		>
			<TutorLandingPage />
		</div>
		<div class="w-full max-w-[21rem] relative mx-auto sm:max-w-[26rem] text-xl">See more</div>
	</div>

	<div
		class="h-[12rem] w-full max-w-[21rem] sm:h-[15rem] sm:max-w-[26rem] relative mx-auto    flex rounded-lg  overflow-hidden "
	>
		<img src={indelvve} alt="mock of indelvve website" />
	</div>

	<div
		class="h-[12rem] w-full max-w-[21rem] relative mx-auto sm:h-[15rem] sm:max-w-[26rem]    flex rounded-lg  overflow-hidden "
	>
		<TutorLandingPage />
	</div>

	<div
		class="h-[12rem] w-full max-w-[21rem] relative mx-auto sm:h-[15rem] sm:max-w-[26rem]    flex rounded-lg  overflow-hidden "
	>
		<TutorLandingPage />
	</div>
</div>
