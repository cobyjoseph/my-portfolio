<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/@splinetool/viewer@0.9.293/build/spline-viewer.js"
	></script>
</svelte:head>

<div class="flex items-center justify-center  w-full relative mt-2   ">
	<div class="flex  items-center gap-2 sm:grid sm:grid-cols-2">
		<div class="text-light1 largeClamp font-genSans font-bold  w-full relative justify-center ">
			<div class="text-sm font-extrabold font-satoshi text-[#24FFDA]">Hi. My name is</div>
			<div class="">Coby Joseph</div>
			<div class="text-xl relative  flex flex-col font-satoshi font-bold  text-dark2 z-50       ">
				I design and develop interactive sites for freelancers, businesses, and entrepreneurs.
			</div>
		</div>
		<div class="w-full justify-center  h-[60vh] -mt-[2rem]  ">
			<spline-viewer
				loading="eager"
				url="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode"
			/>
		</div>
	</div>

	<div class="flex flex-col relative sm:grid sm:grid-cols-2 " />
</div>

<style>
	.largeClamp {
		font-size: clamp(2rem, 2vw + 2rem, 20rem);
		line-height: 1.2;
	}

	.blackButton {
		background-image: url(kraftTone/button-black-v0.1.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}

	.bgSmudge {
		background-image: url(text/hero-text-bg-opaque-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-right: -4rem;
	}
</style>
