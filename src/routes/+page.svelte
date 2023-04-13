<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import AccordionContainer from '$lib/components/accordion-contents/AccordionContainer.svelte'

</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Landing />

<AccordionContainer />



<style>
</style>
