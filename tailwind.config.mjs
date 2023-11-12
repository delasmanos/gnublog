/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// gnurange: "var(--chili-red)",
				gnutrast:{ DEFAULT: "var(--blue-munsell)", light: "var(--blue-munsell-light)"},
				gnurange:{ DEFAULT: "var(--chili-red)", light: "var(--chili-red-light)"},
				gnuyellow:{ DEFAULT: "var(--gamboge)", light: "var(--gamboge-light)"}
				// gnurange: "hsla(7, 72%, 53%, 1)"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
