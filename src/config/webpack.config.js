
const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  	mode: "development",
  	// mode: "production",
	entry: './src/frontend/main.js',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../../dist'),
		publicPath: "/"
	
	},
	devServer: {
		// contentBase: 'src/views',
		contentBase: './dist',
		// host: '192.168.0.109',
		// port: 3000,
		// compress: true,
		overlay: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader" 
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.html$/,
				use: [
						// {loader: 'file-loader', options: {name: '[name].html'}},
						// {loader: 'extract-loader'},
						{loader: 'html-loader'}
					]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			template: "./src/views/test.html"
		})
	]
}