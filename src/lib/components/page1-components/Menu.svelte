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

<div class="flex items-center justify-between pb-2 pt-9 text-white px-[8%]">
	
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
