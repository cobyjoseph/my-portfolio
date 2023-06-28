<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import AccordionContainer from '$lib/components/sections/AccordionContainer.svelte';
	import { landingPageHeightInitial } from '$lib/stores/heightStore';
	import LetsChat from '$lib/components/sections/LetsChat.svelte';

	let landingHeight;
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&f[]=switzer@600,700,400,500&f[]=neco@500,501,401,700,901,900,701,400&f[]=ranade@700,300,701,401,400,500,501,301&display=swap"
		rel="stylesheet"
	/>
	<title>Coby Joseph - Web Designer & Developer</title>
	<meta
		name="description"
		content="Coby Joseph, a freelance web designer and developer, creates interactive, custom, and blazingly quick websites using HTML, CSS, Javascript, Svelte, and Sveltekit. With a background as a Project Manager, he values detail and clear communication in all his work."
	/>
</svelte:head>

<div class="px-[8%]">
	<div bind:clientHeight={$landingPageHeightInitial}>
		<Landing />
	</div>

	<div class="relative z-50 -mx-[2%]">
		<AccordionContainer />
	</div>
	<LetsChat />
</div>

<style>
</style>
