const path = require("path");

module.exports = {
	entry: {
		main: "./src/index.js",
	},
	module: {
		rules: [],
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
};
