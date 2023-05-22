module.exports = {
	arrowParens: "avoid",
	bracketSpacing: false,
	singleQuote: false,
	tabWidth: 4,
	useTabs: true,
	trailingComma: "all",
	endOfLine: "auto",
	printWidth: 150,

	plugins: [require("prettier-plugin-tailwindcss")],
	tailwindConfig: "./tailwind.config.js",
};
