const path = require("path");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				loader: "esbuild-loader",
				options: {
					target: "es6",
				},
			},
			{
				test: /\.jsx?$/,
				loader: "esbuild-loader",
				options: {
					target: "es6",
					loader: "jsx",
				},
			},
		],
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "dist"),
		clean: true,
	},
};
