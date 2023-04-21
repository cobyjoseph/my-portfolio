<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import AccordionContainer from '$lib/components/sections/AccordionContainer.svelte';
	import { landingPageHeightInitial } from '$lib/stores/heightStore';

	let landingHeight;
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&f[]=switzer@600,700,400,500&f[]=neco@500,501,401,700,901,900,701,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="px-[8%]">
	<div bind:clientHeight={$landingPageHeightInitial}>
		<Landing />
	</div>

	<div class="relative z-50 -mx-[2%]">
		<AccordionContainer />
	</div>
</div>

<style>
</style>
