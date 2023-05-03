<script>
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	export let title;
	let isOpen = false;
	const setActiveSection = getContext('setActiveSection');
	const activeSection = getContext('activeSection');

	function toggleSection() {
		if (title === $activeSection) {
			setActiveSection(null);
		} else {
			setActiveSection(title);
		}
	}

	// Reactive statement to update isOpen based on the activeSection store value
	$: isOpen = $activeSection === title;
</script>

<!-- <Globe /> -->

<div
	class="accordion-section -m-4 rounded-lg overflow-hidden px-[2%]"
	class:hover:bg-shade2={!isOpen}
	class:bg-shade2={isOpen}
>
	<div on:click={toggleSection} class="accordion-header m-4">
		<h3>{title}</h3>
		{#if isOpen}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		{/if}
	</div>
	{#if isOpen}
		<div class="accordion-content m-3" transition:slide={{ duration: 250 }}>
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
