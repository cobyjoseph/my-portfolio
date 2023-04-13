<script>
	import { getContext } from 'svelte';
	let activeSection;
	const setActiveSection = getContext('setActiveSection');
</script>

<slot />

<style>
	.accordion-section {
		margin-bottom: 1rem;
	}
</style>
