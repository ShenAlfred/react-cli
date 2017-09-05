var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  	entry: {
    	app: './src/main.js'
  	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: "[name].js",
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js','.json']
	},
	module: {
		rules: [
			{
		        test: /\.js$/,
		        loader: 'babel-loader'
		    },
			{
				test: /\.css$/,
     			loader: 'style!css'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 1000000
		        }
			}
		]
	}
}

module.exports = webpackConfig;