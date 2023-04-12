<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
	import Page1 from '$lib/components/Page1.svelte';
	import AccordionContainer from '$lib/components/remainingSections/AccordionContainer.svelte'

</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Page1 />

<AccordionContainer />

<div class="flex flex-col mt-10">
	<AboutMeSection />
</div>

<style>
</style>
