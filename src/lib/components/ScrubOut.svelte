<script>
	let mouseX = 0;
	let mouseY = 0;

	function onMouseMove(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}
</script>

<div class="scrub-container" on:mousemove={onMouseMove}>
	<div class="scrub-mask" style="transform: translate({mouseX}px, {mouseY}px);" />
	<div class="scrub-content">Your Preferred Technology</div>
</div>

<style>
	.scrub-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	.scrub-mask {
		position: absolute;
		width: 100px;
		height: 100px;
		background-color: #fff; /* Change to the same color as the text */
		mix-blend-mode: difference;
		pointer-events: none;
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}

	.scrub-content {
		background-color: #000; /* Change to the desired background color */
		color: #fff; /* Change to the desired text color */
		padding: 20px;
		font-size: 18px;
		font-weight: bold;
	}
</style>
