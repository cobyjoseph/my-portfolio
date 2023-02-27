<script lang="ts">
	import TypingAnimation from '$lib/components/tutorSite/TypingAnimation.svelte';

	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import LandingBackground from '$lib/components/tutorSite/LandingBackground.svelte';
	import Menu from '$lib/components/tutorSite/Menu.svelte';

	let mountLandingAnimation: Boolean;

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<!-- the RELATIVE creates a reference point for the background item, which is absolute. Otherwise it would absolutely position relative to the page itself. And flex is used for the different pages/sections to be one after the other. flex necessary? -->
<section class="relative flex bg-[#fcf4e4] w-full   ">
	<LandingBackground />

	<div class="layeredWave waveStyle absolute bottom-0 h-[10rem] w-full">
		<svg
			id="visual"
			viewBox="0 0 960 250"
			width="960"
			height="250"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><path
				d="M0 221L12.3 220.2C24.7 219.3 49.3 217.7 74 220.3C98.7 223 123.3 230 148 230C172.7 230 197.3 223 221.8 219.5C246.3 216 270.7 216 295.2 219C319.7 222 344.3 228 369 230.3C393.7 232.7 418.3 231.3 443 231.8C467.7 232.3 492.3 234.7 517 232.5C541.7 230.3 566.3 223.7 591 222.3C615.7 221 640.3 225 664.8 226.7C689.3 228.3 713.7 227.7 738.2 228.5C762.7 229.3 787.3 231.7 812 230.7C836.7 229.7 861.3 225.3 886 224.2C910.7 223 935.3 225 947.7 226L960 227L960 251L947.7 251C935.3 251 910.7 251 886 251C861.3 251 836.7 251 812 251C787.3 251 762.7 251 738.2 251C713.7 251 689.3 251 664.8 251C640.3 251 615.7 251 591 251C566.3 251 541.7 251 517 251C492.3 251 467.7 251 443 251C418.3 251 393.7 251 369 251C344.3 251 319.7 251 295.2 251C270.7 251 246.3 251 221.8 251C197.3 251 172.7 251 148 251C123.3 251 98.7 251 74 251C49.3 251 24.7 251 12.3 251L0 251Z"
				fill="#F0DDC1"
				stroke-linecap="round"
				stroke-linejoin="miter"
			/></svg
		>
	</div>

	<div class="  flex min-h-screen flex-col px-[7%] gap-[2rem] ">
		<div class="relative z-[300] flex w-full flex-row place-self-start">
			<Menu />
		</div>

		<div class="  gap-2 grid-cols-4">
			<div class=" relative z-50 bg-clip-text font-extrabold landscape:col-span-4 ">
				<TypingAnimation />
			</div>

			<img
				class=" z-20 flex max-w-[100%]   self-end col-span-2 col-start-3  absolute top-[1rem] right-[0.5rem] h-[8rem] w-[8rem] sm:w-[20rem]  "
				src="tutorSite/tutor-graphic-1.svg"
				alt="Student working at computer"
			/>

			<div class=" col-span-2 col-start-1 row-start-2 pt-[0.3rem]">
				<div
					transition:fly={{ duration: 400, delay: 2500, easing: sineIn, x: -30 }}
					class=" text-[0.5rem]"
				>
					Personalized high school and middle school tutoring for a range of subjects.
				</div>
				<div
					transition:fly={{ duration: 200, delay: 3200, easing: sineIn, y: 30 }}
					class="  buttonUnderline bg-clip relative z-40 inline-block pt-[0.3rem] font-bold text-[#2A2AAC] text-[0.7rem]   "
				>
					See services
				</div>
			</div>
		</div>
	</div>
</section>

<!-- both columns end -->
<style>
	section {
		background-image: url(/waves/central-wave.svg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: block;
	}

	.gradient {
		background-image: linear-gradient(120deg, #cc3232, #f6991b 100%);
	}

	.buttonUnderline {
		position: relative;
		z-index: 50;
	}

	.buttonUnderline:hover {
		background-color: #ca4246;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 15%,
			#cc3232 15%,
			#cc3232 30%,
			#f6991b 30%,
			#f6991b 45%,
			#f6895a 45%,
			#f6895a 60%,
			#c8c0b2 60%,
			#c8c0b2 75%,
			#c8c0b2 75%
		);

		background-size: 100%;
		background-repeat: repeat;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.buttonUnderline:after {
		content: '';
		width: 3rem;
		height: 1rem;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-4px, -8px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.buttonUnderline:hover::after {
		transform: translate(-6px, -3px) skew(-40deg);
		width: 100%;
		opacity: 70%;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 16%,
			#cc3232 16%,
			#cc3232 33%,
			#f6991b 33%,
			#f6991b 67%,
			#f6895a 67%,
			#f6895a 80%,
			#c8c0b2 80%,
			#c8c0b2 98%,
			#c8c0b2 98%
		);
	}

	.waveStyle {
		aspect-ratio: 960/250;
		/* width: 100%; */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWave {
		background-image: url('/waves/short-1.svg');
	}
</style>
