<script>
	import Menu from '$lib/components/Menu.svelte';
	import BackgroundElements from '$lib/components/BackgroundElements.svelte';
	import ExamplesSection from '$lib/components/ExamplesSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
</script>

<BackgroundElements />
<div class="relative z-10">
	<Menu />
</div>

<div class="flex flex-col gap-4 px-[7%]">
	<div class="flex flex-col">
		<HeroSection />
	</div>
	<div class="flex flex-col  ">
		<ExamplesSection />
	</div>
</div>
<div class="flex flex-col mt-10">
	<AboutMeSection />
</div>

<style>
</style>
