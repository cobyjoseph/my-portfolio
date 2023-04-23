<script lang="ts">
	import { onMount } from 'svelte';

	export let yThreshold;
	let isVisible = false;
	let element;

	const handleIntersect = (e) => {
		isVisible = e[0].isIntersecting;
	};

	onMount(() => {
		const root = null;
		const rootMargin = `0px 0px ${yThreshold}px 0px`;
		const options = { root, rootMargin };

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);
	});
</script>

<div bind:this={element}>
	<slot {isVisible} />
</div>
