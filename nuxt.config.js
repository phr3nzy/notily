module.exports = {
	mode: "spa",
	head: { title: "Notily" }, // Headers of the page
	loading: { color: "#fff", height: "3px" }, // Disable default loading bar
	plugins: ["@/plugins/vuesax"],
	build: {
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}
			// Extend only webpack config for client-bundle
			if (isClient) {
				config.target = "electron-renderer";
			}
		}
	},
	dev: process.env.NODE_ENV === "DEV",
	css: ["@/assets/css/global.css"]
};
