/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primaryDark: '#3b3b44',
				primaryLight: '#F0D7AF'
			},
			fontFamily: {
				Yantramanav: ['Yantramanav'],
				Chivo: ['Chivo']
			}
		}
	},
	plugins: []
};
