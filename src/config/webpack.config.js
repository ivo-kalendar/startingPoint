
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
		contentBase: 'src/views'
		// port: 3000,
		// compress: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}