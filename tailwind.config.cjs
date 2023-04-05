/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primaryDark: '#3b3b44',
				primaryLight: '#F0D7AF',
				retroYellow: '#FEBF26',
				retroOrange: '#FE672E',
				retroRed: '#F32D3A',
				retroPink: '#D12368',
				retroPurple: '#720965',
				retroGray: '#2D2D2D',
				retroBase: '#F4F4F4'
			},
			fontFamily: {
				Yantramanav: ['Yantramanav'],
				Chivo: ['Chivo']
			}
		}
	},
	plugins: []
};
