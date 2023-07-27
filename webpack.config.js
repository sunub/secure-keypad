const path = require("path");
const { EsbuildPlugin } = require("esbuild-loader");

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
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				loader: "esbuild-loader",
				options: {
					target: "es6",
					loader: "jsx",
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss?$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugin: [],
							},
						},
					},
				],
			},
		],
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "dist"),
		clean: true,
	},
	optimization: {
		minimizer: [
			new EsbuildPlugin({
				target: "es6",
				css: true,
			}),
		],
	},
};
