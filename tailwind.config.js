module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xsm: "370px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		scale: {
			0: "0",

			25: ".25",
			50: ".5",
			75: ".75",
			90: ".9",

			95: ".95",
			100: "1",

			101: "1.01",
			105: "1.05",

			110: "1.1",
			125: "1.25",
			150: "1.5",

			200: "2",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
