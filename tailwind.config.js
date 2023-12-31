/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./data/posts/**/*.{md,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: colors.emerald[500],
				["primary-shade"]: colors.emerald[300]
			},
			typography: (theme) => ({
				lg: {
					css: {
						h1: {
							marginTop: em(72, 48),
							marginBottom: em(40, 48),
						},

					},
				},
				DEFAULT: {
					css: {
						ul: {
							listStyleType: 'disc',
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}
