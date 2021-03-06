const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
	plugins: [
		require("tailwindcss"),
		process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
		process.env.NODE_ENV === "production"
			? cssnano({ preset: "default" })
			: null,
		purgecss({
			content: [
				"./views/**/*.pug",
			],
			defaultExtractor: (content) =>
				content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
	],
};
