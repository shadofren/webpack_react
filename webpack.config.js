var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/client/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
	entry: APP_DIR + '/app.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: APP_DIR,
			loader: 'babel-loader',
		},
		{
			test: /\.jsx$/,
			include: APP_DIR,
			loaders: ['react-hot', 'babel-loader'],
		},
		{
			test: /\.css$/, 
			loader: "style!css"
		}]
	},
	plugins: [HtmlWebpackPluginConfig]
};