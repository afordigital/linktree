/** @type {import('tailwindcss').Config} */

const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: [
	  // your paths
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	darkMode: "class",
	theme: {
	  extend: {
		animation: {
		  aurora: "aurora 60s linear infinite",
		},
		keyframes: {
		  aurora: {
			from: {
			  backgroundPosition: "50% 50%, 50% 50%",
			},
			to: {
			  backgroundPosition: "350% 50%, 350% 50%",
			},
		  },
		},
	  },
	},
	plugins: [addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  