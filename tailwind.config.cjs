/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: '#F9F1DB',
				shade: '#E9EBF5',
				shade2: '#DED0BF',
				light1: '#A2B6DC',
				dark1: '#3F63A9',
				dark2: '#654E34',
				muted1: '#A8A1C4',
				muted2: '#A1C4BE',
				muted3: '#C4A1A1',
				muted4: '#A1ADC4',
				bright1: '#9188B5',
				bright2: '#88B5AD',
				bright3: '#B58888',
				bright4: '#8897B5',
				primaryShade1: '#6A8AC8',
				primaryShade2: '#3F63A9',
				primaryShade3: '#2A416F',
				primaryShade4: '#152138',
				shadeTone1: '#DCCEBC',
				shadeTone2: '#D2BFA8',
				shadeTone3: '#C7B194',
				shadeTone4: '#BDA27F',
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
				Chivo: ['Chivo'],
				satoshi: ['Satoshi', 'sans-serif'],
				genSans: ['General Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
