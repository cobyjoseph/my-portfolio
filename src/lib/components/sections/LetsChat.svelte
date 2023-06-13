<script>
	import { onMount } from 'svelte';

	function openCalendly() {
		window.Calendly.initPopupWidget({
			url: 'https://calendly.com/coby-joseph/30min?back=1&month=2023-04'
		});
	}

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		document.body.appendChild(script);
	});
</script>

<svelte:head>
	<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
</svelte:head>

<div class="mb-[8rem] p-5 font-genSans mt-5 justify-center text-center  gap-5 flex flex-col ">
	<div class="text-3xl font-semibold text-dark2">Let's chat</div>

	<div class="text-xl text-dark2">
		Have something you need built? Want to talk through an idea? Get in touch. I'm friendly!
	</div>
	<div>
		<a href="mailto:coby.joseph@gmail.com" class="text-light1 font-bold text-2xl">
			coby.joseph@gmail.com
		</a>
		<div class="text-xl text-dark2">+1 (650) 293-7088</div>
	</div>
	<div class="text-xl text-dark2">
		Send me an email, or click below to book something in my calendar.
	</div>

	<button
		class="bg-white mx-auto text-dark1  px-6 py-[0.2rem] items-center rounded-lg text-lg flex max-w-fit hover:bg-slate-100 hover:text-dark1  glow-effect"
		data-glow-offset="true"
		on:click={openCalendly}
	>
		Show Calendar
		<svg class="glow-container">
			<rect pathLength="100" stroke-linecap="round" class="glow-blur" rx="0.75rem" ry="0.75rem" />
			<rect pathLength="100" stroke-linecap="round" class="glow-line" rx="0.75rem" ry="0.75rem" />
		</svg>
	</button>
	<!-- <svg class="line-container " viewBox="0 0 100 400" preserveAspectRatio="none">
		<path
			d="M1,1 L99,1 L99,399 L1,399 Z"
			stroke="#654e34"
			stroke-width="1"
			fill="none"
			style="filter: drop-shadow(0 0 5px #654e34);"
			id="line-path"
		/>
	</svg> -->
</div>

<style>
	/* .glowing-line {
		position: relative;
	}

	.line-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	/* #line-path {
		stroke-dasharray: 796;
		stroke-dashoffset: 796;
		animation: draw 8s linear infinite;
	} */

	/* @keyframes draw {
		from {
			stroke-dashoffset: 400;
		}
		to {
			stroke-dashoffset: 0;
		}
	}  */
	/* ---------------------------- */
	/* ---------------------------- */
	/* ---------------------------- */
	/* effects for the button below */
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
