/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				SignikaNegative: ['Signika Negative', 'sans-serif'],

				Cinzel: ['Cinzel', 'serif'],
				SourceSansPro: ['Source Sans Pro', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
