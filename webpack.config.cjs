const path = require("path");
const { EsbuildPlugin } = require("esbuild-loader");

module.exports = {
	entry: {
		app: "./src/index.tsx",
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
				test: /\.tsx?$/,
				loader: "esbuild-loader",
				options: {
					target: "es6",
					loader: "tsx",
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss?$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
					{
						loader: "sass-loader",
						options: {},
					},
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
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
		},
		extensions: [".ts", ".tsx", ".js", ".jsx"],
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
