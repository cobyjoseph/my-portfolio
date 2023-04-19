<script lang="ts">
	import TutorLandingPage from '$lib/components/example-sites/tutorSite/TutorLandingPage.svelte';
	import TutorLandingPage2 from '$lib/components/example-sites/tutorSite/TutorLandingPage2.svelte';
	import indelvve from '$lib/assets/example-sites/indelvve-ui-skew-v2.png';
</script>

<!-- <TutorLandingPage /> -->

<!-- <div class="h-[10rem] w-[18rem] relative  flex">
	<TutorLandingPage2 />
</div> -->

<div class="flex flex-col gap-3">
	<div class="h-[12rem] w-full max-w-[21rem] relative mx-auto    flex rounded-lg  overflow-hidden ">
		<TutorLandingPage />
	</div>

	<div class="h-[12rem] w-full max-w-[21rem] relative mx-auto    flex rounded-lg  overflow-hidden ">
		<img src={indelvve} alt="mock of indelvve website" />
	</div>

	<div
		class="h-[12rem] w-full max-w-[21rem] relative mx-auto sm:max-w-[rem]    flex rounded-lg  overflow-hidden "
	>
		<TutorLandingPage />
	</div>

	<div class="h-[12rem] w-full max-w-[21rem] relative mx-auto    flex rounded-lg  overflow-hidden ">
		<TutorLandingPage />
	</div>
</div>
