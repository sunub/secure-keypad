const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	optimization: {
		splitChunks: {
			chunks: "all",
			name: "chunk-vendors",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
		}),
		new webpack.ProvidePlugin({
			React: "react",
		}),
		new webpack.ProgressPlugin({}),
	],
	output: {
		clean: true,
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	extensions: [".js", ".jsx", ".ts", ".tsx"],
};
