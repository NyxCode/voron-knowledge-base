/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				business: {
					...require('daisyui/src/colors/themes')['[data-theme=business]'],
					accent: '#dc2626'
				}
			}
		]
	}
};
