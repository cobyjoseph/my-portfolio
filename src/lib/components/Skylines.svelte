<script lang="ts">
	import InView from '$lib/components/InView.svelte';
</script>

<InView let:isVisible>
	<div class="relative z-50 min-w-full  h-[10rem] outline ">
		<div class="aucklandStarter   z-50 " />

		<div class="{isVisible ? 'aucklandSkyline mask-animation  z-50' : 'hidden'} " />
	</div>
</InView>

<style>
	.aucklandStarter {
		position: absolute;
		inset: 0;
		background-image: url('skylines-styled/auckland/akl-pre-filter-v0.1.png');
		background-size: contain;
		background-repeat: no-repeat;
		max-width: 100%;
		display: block;
		opacity: 0.7;
	}

	.aucklandSkyline {
		position: absolute;
		inset: 0;
		background-image: url('skylines-styled/auckland/akl-post-filter-base-color-burn-v0.2.png');
		background-size: contain;
		background-repeat: no-repeat;
		max-width: 100%;
		display: block;

		-webkit-mask-image: url('skylines-styled/masks/auckland/akl-masks-v0.1.png');
		-webkit-mask-size: 3400%;
		-webkit-mask-position: 0% 0;
		-webkit-mask-repeat: no-repeat;
		mask-image: url('skylines-styled/masks/auckland/akl-masks-v0.1.png');
		mask-size: 3400%;
		mask-position: 0% 0;
		mask-repeat: no-repeat;

		transition: -webkit-mask-position;
	}

	.mask-animation {
		animation: revealAnimate 1500ms steps(33) forwards;
	}

	@keyframes revealAnimate {
		0% {
			-webkit-mask-position: 0% 0%;
			mask-position: 0% 0%;
		}
		100% {
			-webkit-mask-position: 100% 0%;
			mask-position: 100% 0%;
		}
	}
</style>
