/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			"compressed": ["Coolvetica_Compressed", "sans-serif"],
			"condensedrg": ["Coolvetica_Condensed_rg", "sans-serif"],
			"crammedrg": ["Coolvetica_Crammed_rg", "sans-serif"],
			"rgit": ["Coolvetica_rg_it", "sans-serif"],
			"rg": ["Coolvetica_rg", "sans-serif"]
		},
		extend: {
			colors: {
				"custom-red": "#F05D5E"
			}
		}
	},
	plugins: [],
};

