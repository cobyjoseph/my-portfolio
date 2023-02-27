<script>
	import BackgroundElements from '$lib/components/BackgroundElements.svelte';
	import ExamplesSection from '$lib/components/ExamplesSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
</script>

<BackgroundElements />

<div class="flex flex-col mr-[18vw] gap-4">
	<div class="flex flex-col">
		<HeroSection />
	</div>
	<div class="flex flex-col font-Chivo ">
		<ExamplesSection />
	</div>
	<div class="flex flex-col">
		<AboutMeSection />
	</div>
</div>

<style>
</style>
