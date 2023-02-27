<script lang="ts">
	import { onMount } from 'svelte';

	let phrase1 = 'Build confidence.';
	let typedChars = '';
	let index = 0;
	let phrase2 = 'Get results.';
	let typedChars2 = '';
	let index2 = 0;
	let pause = true;
	let noTypeDiv = false;

	setTimeout(() => {
		pause = false;
		noTypeDiv = true;
	}, 2000);

	const addChars = () => {
		if (index < phrase1.length) typedChars += phrase1[index];
		index++;
	};

	const addChars2 = () => {
		if (index2 < phrase2.length) typedChars2 += phrase2[index2];
		index2++;
	};

	const typing = () => setInterval(addChars, 100);

	const typing2 = () => {
		setTimeout(() => {
			setInterval(addChars2, 100);
		}, 2500);
	};

	typing();
	typing2();
</script>

<div class="text-[1rem] ">
	{#if pause}
		<div class="gradientText  after:pl-1 after:font-bold after:text-[#544E4E] after:content-['|'] ">
			{typedChars}
		</div>
		<div>
			<div class="opacity-0 ">{phrase2}</div>
		</div>
	{/if}
	{#if noTypeDiv}
		<div class="gradientText  ">
			{typedChars}
		</div>

		<div
			class=" gradientText after:animate-blinking after:pl-1 after:text-sm after:font-bold after:text-[#544E4E] after:content-['|'] landscape:h415:after:text-2xl"
		>
			{typedChars2}
		</div>
	{/if}
</div>

<style>
	.gradientText {
		background-color: #ca4246;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 13%,
			#cc3232 13%,
			#cc3232 26%,
			#f6991b 26%,
			#f6991b 39%,
			#f6895a 39%,
			#f6895a 52%,
			#c8c0b2 52%,
			#c8c0b2 65%,
			#c8c0b2 65%
		);

		/* 
		primary: '#1a1101',
				primaryDark: '#151225',
				primaryBright: '#2A2AAC',
				secondary: '#CC3232',
				secondaryDark: '#6b1b15',
				third: '#F6991B',
				shading: '#f0e8d8',
				accent: '#F6895A',
				textAlternate: '#2B217A' */
		/* Set the background size and repeat properties. */
		background-size: 100%;
		background-repeat: repeat;

		/* Use the text as a mask for the background. */
		/* This will show the gradient as a text color rather than element bg. */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
