var path = require('path');

module.exports = {
	entry: "./site/assets/scripts/Site.js",
	output: {
		path: path.resolve(__dirname, "./site/temp/scripts"),
		filename: "Site.js"
	}
}