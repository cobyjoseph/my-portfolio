<script>
	import { getContext } from 'svelte';
	export let title;
	let isOpen = false;
	const setActiveSection = getContext('setActiveSection');

	function toggleSection() {
		isOpen = !isOpen;
		setActiveSection(isOpen ? title : null);
	}
</script>

<div class="accordion-section" on:click={toggleSection}>
	<div class="accordion-header">
		<h3>{title}</h3>
		<span class="toggle-icon">{isOpen ? '-' : '+'}</span>
	</div>
	{#if isOpen}
		<div class="accordion-content">
			<slot />
		</div>
	{/if}
</div>

<style>
	.accordion-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}

	.toggle-icon {
		font-size: 1.5rem;
	}

	.accordion-content {
		padding: 1rem 0;
	}
</style>
