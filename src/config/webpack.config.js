
const path = require('path')

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
		contentBase: 'src/views',
		host: '192.168.0.109',
		port: 3000,
		compress: true,
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.html$/,
				use: [
						{loader: 'file-loader', options: {name: '[name].html'}},
						{loader: 'extract-loader'},
						{loader: 'html-loader'}
					]
			}
		]
	}
}