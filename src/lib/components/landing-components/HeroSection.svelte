<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/@splinetool/viewer@0.9.293/build/spline-viewer.js"
	></script>
</svelte:head>

<div class="flex items-center justify-center  w-full relative mt-2   ">
	<div class="flex  items-center gap-2">
		<!-- <img
			src="text/hero-text-v0.3.png"
			alt=""
			class="relative bg-cover w-[8rem] flex aspect-auto "
		/> -->

		<div class="text-light1 largeClamp font-genSans font-bold  w-full relative justify-center ">
			<div class="text-center">Hi. I'm Coby.</div>
			<!-- <div>I'm Coby.</div> -->
		</div>
	</div>

	<div class="flex flex-col relative sm:grid sm:grid-cols-2 ">
		<div class="text-xl relative  flex flex-col font-satoshi font-bold  text-dark2 z-50       ">
			I design and develop sites for:
			<ul class="list-disc list-inside ml-4">
				<li>small businesses and freelancers</li>
				<li>professional services companies</li>
				<li>ambitious entrepreneurs</li>
			</ul>
		</div>
		<!-- <div class="flex flex-col outline align ">
			<div class="relative flex mt-4  ">
				<TutorLandingPage />
			</div>
	
			<div class=" relative -z-20 -mt-[10rem]  justify-center flex">
				<TutorLandingPage />
			</div>
	
			<div class=" relative -z-30  flex -mt-[10rem] justify-end">
				<TutorLandingPage />
			</div>
		</div> -->

	</div>
</div>
<div class="w-full justify-center  h-[60vh] -mt-[2rem]  ">
	<spline-viewer
		loading="eager"
		url="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode"
	/>
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
