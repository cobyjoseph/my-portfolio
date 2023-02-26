<script>
	import Skylines from '$lib/components/Skylines.svelte';
</script>

<div
	class="beigeHeader flex absolute right-0 z-50  text-3xl font-bold mt-[20rem] w-[20rem] text-left text-textPrimary"
>
	<div class="shading w-5  " />
	<div class="py-2 px-4">About me</div>
</div>
<Skylines />

<style>
	.shading {
		background-image: url(elements/shading.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
	.beigeHeader {
		background-image: url(elements/header.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
</style>
