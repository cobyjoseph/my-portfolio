<script lang="ts">
	import TutorLandingPage from '$lib/components/example-sites/tutorSite/TutorLandingPage.svelte';
	// import indelvve from '$lib/assets/example-sites/indelvve-ui-v2.png';
	import LuminaryLandingPage from '$lib/components/example-sites/luminaryPartners/LuminaryLandingPage.svelte';
	import indelvve from '$lib/assets/videos/indelvve-demo-recording-clipped-v0.3.mp4';
</script>

<div class="flex flex-col gap-6  font-satoshi  ">
	<div class="flex w-full lg:flex-row flex-col ml-1 sm:ml-0  gap-3 sm:gap-5">
		<div
			on:click={() => window.open('https://example-site-gilt.vercel.app/', '_blank')}
			class="h-[12rem] sm:ml-1 w-full max-w-[21rem]  sm:w-[26rem] sm:min-w-[26rem]  relative sm:h-[15rem] sm:w-[106rem] cursor-pointer flex rounded-lg overflow-hidden"
		>
			<LuminaryLandingPage />
			<div class="absolute top-0 left-0 w-full h-full z-[500] rounded-lg">
				<div
					class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-black bg-opacity-[70%] hover:opacity-100"
				>
					<span class="text-white font-normal text-xl">Visit Site</span>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-3 ">
			<div class="flex gap-5 ">
				<div class="text-2xl leading-6  ">Luminary Partners</div>
			</div>
			<div class="text-base font-normal sm:mr-[25%] leading-[1.35rem]">
				I designed and developed the Luminary Partners website with Sveltekit as an example site for
				a boutique marketing consulting company. <a
					href="https://danielarey.myportfolio.com/"
					class="underline"
					target="_blank">Dani Rey</a
				> assisted with the design.
			</div>

			<button
				on:click={() => window.open('https://example-site-gilt.vercel.app/', '_blank')}
				class="bg-white items-start  font-medium  text-dark1  px-4 py-[0.1rem] rounded-lg text-lg flex max-w-fit hover:bg-slate-100 hover:text-dark1  glow-effect"
				data-glow-offset="true"
				>Visit Site
				<svg class="glow-container">
					<rect
						pathLength="100"
						stroke-linecap="round"
						class="glow-blur"
						rx="0.75rem"
						ry="0.75rem"
					/>
					<rect
						pathLength="100"
						stroke-linecap="round"
						class="glow-line"
						rx="0.75rem"
						ry="0.75rem"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="flex w-full lg:flex-row flex-col gap-3 sm:gap-5 font-genSans  ">
		<div
			on:click={() => window.open('https://risetutoring.vercel.app/', '_blank')}
			class="h-[12rem] sm:ml-1  max-w-[21rem] relative sm:h-[15rem] sm:w-[26rem] sm:min-w-[26rem] cursor-pointer flex rounded-lg overflow-hidden"
		>
			<TutorLandingPage />
			<div class="absolute top-0 left-0 w-full h-full z-[500] rounded-lg">
				<div
					class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-black bg-opacity-[70%] hover:opacity-100"
				>
					<span class="text-white font-normal text-xl">Visit Site</span>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-3 w-full">
			<div class="flex gap-5 ">
				<div class="text-2xl leading-6 ">Rise Tutoring</div>
			</div>
			<div class="text-base font-normal sm:mr-[25%] leading-[1.35rem]  ">
				I designed and developed the Rise Tutoring website with Sveltekit as an example site for a
				private tutoring company.
			</div>

			<button
				on:click={() => window.open('https://risetutoring.vercel.app/', '_blank')}
				class="bg-white font-medium text-dark1  px-4 py-[0.1rem] items-center rounded-lg text-lg flex max-w-fit hover:bg-slate-100  glow-effect"
				data-glow-offset="true"
				>Visit Site
				<svg class="glow-container">
					<rect
						pathLength="100"
						stroke-linecap="round"
						class="glow-blur"
						rx="0.75rem"
						ry="0.75rem"
					/>
					<rect
						pathLength="100"
						stroke-linecap="round"
						class="glow-line"
						rx="0.75rem"
						ry="0.75rem"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="flex w-full lg:flex-row flex-col gap-3 sm:gap-5 font-genSans">
		<div
			class="h-[12rem] sm:ml-1 w-full max-w-[21rem] sm:w-[26rem] sm:min-w-[26rem] relative sm:h-[15rem] sm:max-w-[26rem] rounded-lg overflow-hidden"
		>
			<video
				src={indelvve}
				autoplay
				muted
				loop
				style="width: 100%; height: 100%; object-fit: fill;"
			/>
		</div>
		<div class="flex flex-col gap-3 ">
			<div class="flex  ">
				<div class="text-2xl leading-6 ">Indelvve (under development)</div>
			</div>
			<div class="text-base font-normal leading-[1.35rem] sm:mr-[25%]">
				Indelvve is a platform to make insights more accessible. Imagine Wikipedia, for current
				topics, filled with the best 5% of Twitter.
			</div>
			<div class="text-base font-normal leading-[1.35rem] sm:mr-[25%]">
				It is an ongoing personal side-project I am designing and developing. In addition to
				Svelte/Sveltekit, I have used several back-end tools and databases for various iterations of
				the platform, including Prisma with PostgreSQL and Dgraph.
			</div>
			<div class="text-base font-normal leading-[1.35rem] sm:mr-[25%]">
				These tools allow users to upload and read posts organized by an interdepentent tagging
				system.
			</div>
		</div>
	</div>

	<div class="flex w-full gap-3 lg:flex-row flex-col text-xl  ">
		I also designed and developed this portfolio site 🙂
	</div>
</div>

<style>
	.glow-effect {
		--glow-line-color: #654e34;
		--glow-line-thickness: 1px;
		--glow-line-length: 15px;
		--glow-blur-color: #654e34;
		--glow-blur-size: 1px;
		--glow-offset: 0px;
		--animation-speed: 1200ms;
		/* do not change, used for calculations */
		--container-offset: 110px;
		position: relative;
	}

	.glow-container {
		pointer-events: none;
		position: absolute;
		inset: calc(var(--container-offset) / -2);
		width: calc(100% + var(--container-offset));
		height: calc(100% + var(--container-offset));
		opacity: 0;
		/* outline: 3px solid blue; */
	}

	.glow-blur,
	.glow-line {
		width: calc(100% - var(--container-offset) + var(--glow-offset));
		height: calc(100% - var(--container-offset) + var(--glow-offset));
		x: calc((var(--container-offset) / 2) + calc(var(--glow-offset) / -2));
		y: calc((var(--container-offset) / 2) + calc(var(--glow-offset) / -2));
		/* rx: 1.25rem; */
		fill: transparent;
		stroke: black;
		stroke-width: 5px;
		stroke-dasharray: var(--glow-line-length) calc(50px - var(--glow-line-length));
	}

	.glow-effect:is(:hover, :focus) :is(.glow-line, .glow-blur) {
		stroke-dashoffset: -80px;
		transition: stroke-dashoffset var(--animation-speed) ease-in;
	}

	.glow-line {
		stroke: var(--glow-line-color);
		stroke-width: var(--glow-line-thickness);
	}

	.glow-blur {
		filter: blur(var(--glow-blur-size));
		stroke: var(--glow-blur-color);
		stroke-width: var(--glow-blur-size);
	}

	.glow-effect:is(:hover, :focus) .glow-container {
		animation: glow-visibility ease-in-out var(--animation-speed);
	}

	@keyframes glow-visibility {
		0%,
		100% {
			opacity: 0;
		}
		25%,
		75% {
			opacity: 1;
		}
	}

	.glow-effect[data-glow-animation='false'] {
		--glow-line-length: 50px;
	}
	.glow-effect[data-glow-offset='true'] {
		--glow-offset: 5px;
	}

	.glow-effect[data-glow-animation='grow']:is(:hover, :focus) .glow-container {
		scale: 1.3;
		transition: scale var(--animation-speed) linear;
	}
</style>
