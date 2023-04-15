<script>
	import Skylines from '$lib/components/Skylines.svelte';
</script>

<div class="flex flex-col gap-2 font-normal text-lg -mt-4 mx-2">
	<div>A California kid who has lived on four continents.</div>
	<div>
		A project manager (for international development projects), turned sustainable urban planner,
		turned designer and developer.
	</div>
	<div>Here are the highlights:</div>

	<div class=" relative h-full bg-red-400 -mx-2">
		<div class=" w-full pb-1 h-auto aucklandSkyline" />
	</div>
</div>

<style>
	.aucklandSkyline {
		background-image: url($lib/assets/skylines/auckland-fill-in.svg);
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
