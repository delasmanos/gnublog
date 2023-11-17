/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gnutrast:{ DEFAULT: "var(--blue-munsell)", light: "var(--blue-munsell-light)"},
				gnutrast:{ DEFAULT: "var(--blue-munsell)", light: "var(--blue-munsell-light)"},
				gnurange:{ DEFAULT: "var(--chili-red)", light: "var(--chili-red-light)"},
				gnuyellow:{ DEFAULT: "var(--gamboge)", light: "var(--gamboge-light)"},
				gnudark: { DEFAULT: "var(--dark-blue)"},
				"gnu-bg": { DEFAULT: "var(--bg-light)"},
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
