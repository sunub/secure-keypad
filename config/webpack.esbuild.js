const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: [/\.jsx?$/],
				loader: "esbuild-loader",
				options: {
					loader: "jsx",
					target: "es6",
				},
			},
			{
				test: [/\.tsx?$/],
				loader: "esbuild-loader",
				options: {
					loader: "tsx",
					target: "es6",
				},
			},
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.esbuildMinify,
				terserOptions: {},
			}),
		],
	},
});
