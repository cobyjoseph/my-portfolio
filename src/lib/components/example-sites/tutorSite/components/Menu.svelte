<script>
	import { backIn, sineIn } from 'svelte/easing';
	import { blur } from 'svelte/transition';

	let showMenu = false;

	function handleMenu() {
		showMenu = !showMenu;
	}

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="  mt-[0.4rem] w-full items-start justify-center   ">
	<div
		class=" flex w-full items-center justify-between rounded-lg font-Heebo text-[0.42rem] text-[#2A2AAC] "
	>
		<div class="flex mb-[0.1rem]  gap-[0.5rem] ">
			<img
				class="w-3 translate-x-[0.1rem]  "
				src="tutorSite/book-logo.svg"
				alt="rise tutoring logo"
			/>

			<div class="text-[0.6rem] sm:text-[0.7rem] font-ranade font-medium text-[#CC3232] ">
				Rise tutoring
			</div>
		</div>

		<!-- THIS IS FULL MENU-->

		<div class="  flex   ">
			<!-- this extra div is so that I can put the menu svg and the menu names in the same div that makes the justify-between work. But then they also need to be in separate divs so the titles can be hidden on small -->
			<div class="font-ranade flex gap-[0.6rem] sm:gap-[0.8rem] text-[0.45rem] sm:text-[0.55rem] ">
				<a
					href={'#section2'}
					class=" customUnderline   font-semibold"
					on:click|preventDefault={scrollIntoView}>My services</a
				>

				<a
					href={'#section3'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>About me</a
				>

				<a
					href={'#section4'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>Contact</a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.customUnderline {
		position: relative;
	}

	/* .customUnderline:hover {
		color: transparent;
		background-clip: text;

		background-color: #ca4246;

		background-image: linear-gradient(
			45deg,
			#2a2aac 16.666%,
			#cc3232 16.666%,
			#cc3232 33.333%,
			#f6991b 33.333%,
			#f6991b 50%,
			#f6895a 50%,
			#f6895a 66.666%,
			#c8c0b2 66.666%,
			#c8c0b2 83.333%,
			#c8c0b2 83.333%
		);

		background-size: 100%;
		background-repeat: repeat;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	} */

	.customUnderline:after {
		content: '';
		width: 100%;
		height: 2px;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-1px, -12px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}
	/* 
	.customUnderline:hover::after {
		transform: translate(-1px, -12px) skew(-40deg);
		opacity: 70%;
		width: 100%;

		background-image: linear-gradient(
			45deg,
			#2a2aac 16%,
			#cc3232 16%,
			#cc3232 33%,
			#f6991b 33%,
			#f6991b 70%,
			#f6895a 70%,
			#f6895a 96%,
			#c8c0b2 96%,
			#c8c0b2 98%,
			#c8c0b2 98%
		);
	} */

	.underlineMenu:after {
		content: '';
		width: 40%;
		height: 2px;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-2px, -4px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.underlineMenu:hover::after {
		transform: translate(-2px, -5px) skew(-40deg);
		opacity: 70%;
		width: 4.5rem;

		background-image: linear-gradient(
			45deg,
			#2a2aac 16%,
			#cc3232 16%,
			#cc3232 33%,
			#f6991b 33%,
			#f6991b 70%,
			#f6895a 70%,
			#f6895a 96%,
			#c8c0b2 96%,
			#c8c0b2 98%,
			#c8c0b2 98%
		);
	}

	.blurIn {
		opacity: 0.3;
		filter: blur(5px);
		transition: all 1s;
	}

	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}
</style>
