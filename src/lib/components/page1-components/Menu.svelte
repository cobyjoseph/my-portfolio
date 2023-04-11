<script lang="ts">
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

<div class="flex items-center justify-between py-5 text-white px-[8%]">
	<div class="flex items-center gap-2">
		<!-- <svg
				width="100%"
				height="100%"
				viewBox="0 0 223 253"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				xmlns:serif="http://www.serif.com/"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-640.677,-427.749)">
					<g id="Logo-w-bg" serif:id="Logo w bg">
						<rect x="687.594" y="453.944" width="142.87" height="201.645" style="fill:white;" />
						<g
							id="cut-out-letter"
							serif:id="cut out letter"
							transform="matrix(0.503093,0,0,0.471309,420.871,335.077)"
						>
							<path
								d="M879.75,238.306L879.75,690.982C879.75,713.985 861.075,732.66 838.072,732.66L478.587,732.66C455.584,732.66 436.909,713.985 436.909,690.982L436.909,238.306C436.909,215.303 455.584,196.628 478.587,196.628L838.072,196.628C861.075,196.628 879.75,215.303 879.75,238.306ZM620.349,283.301L620.463,612.75L721.727,612.75L721.727,592.952L639.692,592.952L639.692,283.301L620.349,283.301ZM603.622,612.286L603.622,283.327L550.782,283.327L550.782,645.646L757.861,645.646L757.861,559.265L654.094,559.265L654.094,578.016L739.019,578.016L739.019,627.532L568.623,627.532L568.623,301.622L583.733,301.622L583.733,612.75L603.622,612.286Z"
								style="fill:rgb(68,70,124);"
							/>
						</g>
					</g>
				</g>
			</svg> -->
	</div>

	<div class="flex gap-10 font-satoshi text-lg font-semibold">
		<div class="  flex  gap-20   ">
			<!-- this extra div is so that I can put the menu svg and the menu names in the same div that makes the justify-between work. But then they also need to be in separate divs so the titles can be hidden on small -->
			<div class="hidden gap-14 lg:flex  ">
				<a
					href={'#services'}
					class="fancy-link relative   "
					on:click|preventDefault={scrollIntoView}>Services</a
				>

				<a href={'#ourTeam'} class="fancy-link relative" on:click|preventDefault={scrollIntoView}
					>Our team</a
				>

				<a href={'#contact'} class=" fancy-link  relative" on:click|preventDefault={scrollIntoView}
					>Contact</a
				>
			</div>

			<!-- THIS IS MENU ICON -->
			<div class="flex gap-8  lg:hidden ">
				{#if !showMenu}
					<button on:click={handleMenu} in:blur>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="#0B34FF"
							class=" flex h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				{/if}

				{#if showMenu}
					<div class="relative">
						<button on:click={handleMenu} in:blur>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="#0B34FF"
								class="flex h-6 w-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						<div
							class="frostedBox absolute top-7 right-0 z-[300] grid w-[14rem] grid-cols-1 gap-4 self-stretch p-6"
							in:blur={{ duration: 300, easing: sineIn }}
						>
							<a href={'#services'} class="   " on:click|preventDefault={scrollIntoView}>Services</a
							>

							<a href={'#ourTeam'} class=" " on:click|preventDefault={scrollIntoView}>Our team </a>

							<a href={'#contact'} class=" " on:click|preventDefault={scrollIntoView}>Contact </a>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.fancy-link {
		color: white;
	}

	.fancy-link::after {
		content: '';

		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: currentColor;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transform-origin: right;
		transform-origin: right;
		transition: -webkit-transform 250ms ease-in;
		transition: transform 250ms ease-in;
		transition: transform 250ms ease-in, -webkit-transform 250ms ease-in;
	}

	.fancy-link:hover::after {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
		-webkit-transform-origin: left;
		transform-origin: left;
	}

	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}

	a:link {
		text-decoration: none !important;
		color: white !important;
	}

	a:visited {
		text-decoration: none !important;
		color: white !important;
	}

	a:hover {
		text-decoration: none !important;
		color: white !important;
	}

	a:active {
		text-decoration: none !important;
		color: white !important;
	}
</style>
