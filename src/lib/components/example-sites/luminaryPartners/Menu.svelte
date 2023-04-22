<script lang="ts">
	import logo from '$lib/assets/example-sites/luminary-partners-logo-v0.3.png';
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

<div class="flex items-center px-5 py-2 text-white absolute z-50 justify-between w-full">
	<div class="flex items-center gap-2">
		<img src={logo} alt="logo" class="w-[0.9rem]" />

		<div class=" flex flex-col font-satoshi text-[0.35rem] leading-3 ">
			<div class="flex ">Luminary</div>
			<div class="-mt-[0.4rem] flex">Insights</div>
		</div>
	</div>

	<div class="flex gap-15 font-satoshi text-[0.4rem] font-semibold">
		<!-- this extra div is so that I can put the menu svg and the menu names in the same div that makes the justify-between work. But then they also need to be in separate divs so the titles can be hidden on small -->
		<div class="flex gap-3 ">
			<a href={'#services'} class=" relative   " on:click|preventDefault={scrollIntoView}
				>Services</a
			>

			<a href={'#ourTeam'} class=" relative" on:click|preventDefault={scrollIntoView}>Our team</a>

			<a href={'#contact'} class="   relative" on:click|preventDefault={scrollIntoView}>Contact</a>
		</div>
	</div>
</div>
