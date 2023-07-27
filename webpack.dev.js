const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Development",
			template: "/public/index.html",
		}),
	],
	devServer: {
		hot: true,
		port: 3000,
		host: "0.0.0.0",
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		historyApiFallback: true,
		open: true,
	},
});
