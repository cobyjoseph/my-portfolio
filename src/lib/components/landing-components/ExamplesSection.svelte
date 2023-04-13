<script>
	import TutorLandingPage from '$lib/components/example-sites/tutorSite/TutorLandingPage.svelte';
</script>

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/@splinetool/viewer@0.9.293/build/spline-viewer.js"
	></script>
</svelte:head>

<div class="flex flex-col relative">
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

	<div class="w-screen justify-center sm:w-[40vw] h-[60vh] -mt-[2rem]">
		<spline-viewer
			loading="eager"
			url="https://prod.spline.design/SXQN4KXEQXI0xDE8/scene.splinecode"
		/>
	</div>
</div>

<style>
	.lineFill {
		background-image: url(elements/bg-blue-lines-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: repeat;
	}

	.dotsFill {
		background-image: url(elements/menu-dots-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: repeat;
	}

	.blackButton {
		background-image: url(elements/button-black-v0.1.png);
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
	.bgSmudge {
		background-image: url(text/hero-text-bg-opaque-v0.1.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		/* margin-right: -4rem; */
	}
</style>
