<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

	let container;
	let scene, camera, renderer;

	onMount(() => {
		init();
		animate();
	});

	onDestroy(() => {
		// renderer.dispose();
		// scene.dispose();
	});

	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		const gltfLoader = new GLTFLoader();
		gltfLoader.load('/phone_portfolio_home_page.gltf', (gltf) => {
			scene.add(gltf.scene);
		});

		const light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(1, 1, 1);
		scene.add(light);
	}

	function animate() {
		requestAnimationFrame(animate);

		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class="three-container" style="width: 100%; height: 100vh" />

<style>
	.three-container {
		position: relative;
	}
</style>
