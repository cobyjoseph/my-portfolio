<!-- Globe.svelte -->
<script>
	import * as THREE from 'three';
	import { browser } from '$app/environment';

	function initThreeJS(node) {
		if (browser) {
			let camera, scene, renderer, earth;

			// Set up the camera
			camera = new THREE.PerspectiveCamera(75, node.clientWidth / node.clientHeight, 0.1, 1000);
			camera.position.z = 5;

			// Set up the scene
			scene = new THREE.Scene();

			// Create the Earth using a sphere geometry and a texture
			const geometry = new THREE.SphereGeometry(1, 32, 32);
			const loader = new THREE.TextureLoader();
			const material = new THREE.MeshPhongMaterial({
				map: loader.load(
					'https://raw.githubusercontent.com/chrislgarry/Apollo-11/master/Assets/Earth_texture_map.jpg'
				)
			});
			earth = new THREE.Mesh(geometry, material);
			scene.add(earth);

			// Add a directional light
			const light = new THREE.DirectionalLight(0xffffff, 1);
			light.position.set(1, 1, 1);
			scene.add(light);

			// Set up the renderer
			renderer = new THREE.WebGLRenderer({ alpha: true });
			renderer.setClearColor(0x000000, 0);
			renderer.setSize(node.clientWidth, node.clientHeight);
			node.appendChild(renderer.domElement);

			// Animate the Earth
			function animate() {
				requestAnimationFrame(animate);

				earth.rotation.y += 0.01;

				renderer.render(scene, camera);
			}
			animate();
		}
	}
</script>

<div class="threejs-container" use:initThreeJS />

<style>
	.threejs-container {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: transparent;
		position: relative;
	}
</style>
