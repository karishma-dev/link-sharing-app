import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				purple: "var(--purple)",
				purpleHover: "var(--purple-hover)",
				purpleLight: "var(--light-purple)",
				grey: "var(--grey)",
				greyLight: "var(--light-grey)",
				greyDark: "var(--dark-grey)",
				borders: "var(--borders)",
				red: "var(--red)",
			},
		},
	},
	plugins: [],
};
export default config;
