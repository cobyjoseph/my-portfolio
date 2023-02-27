/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				textPrimary: '#4A4A55'
			},
			fontFamily: {
				Yantramanav: ['Yantramanav'],
				Chivo: ['Chivo']
			}
		}
	},
	plugins: []
};
