import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: 
		{
			spacing: {
				header: '60px',
			},
			colors:
			{
				six: 'rgb(var(--six) / <alpha-value>)',
				the_lady : 'rgb(var(--the_lady) / <alpha-value>)',
				the_twins_chefs : 'rgb(var(--the_twins_chefs) / <alpha-value>)',
				the_janitor: 'rgb(var(--the_janitor) / <alpha-value>)',
				nomes: 'rgb(var(--nomes) / <alpha-value>)',
				the_guests: 'rgb(var(--the_guests) / <alpha-value>)',
				leeche: 'rgb(var(--leeche) / <alpha-value>)',
			}
		},
		"animation": {
			"background-shine": "background-shine 2s linear infinite"
		  },
		  "keyframes": {
			"background-shine": {
			  "from": {
				"backgroundPosition": "0 0"
			  },
			  "to": {
				"backgroundPosition": "-200% 0"
			  }
			}
		  }
	},
	plugins: 
	[
		plugin =>
		{
			const { addVariant, matchUtilities, addUtilities, matchComponents, matchVariant } = plugin
			matchComponents(
				{
				  templateColumns: value => ({
					gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
				  }),
				},
				{
				  values: {
					'': '',
				  },
				},
			  )
		}
	],
}
