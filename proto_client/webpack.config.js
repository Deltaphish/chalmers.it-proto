const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		app: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Managment',
			template: './src/index.html',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/,
			  exclude: /node_modules/,
			  use: {
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-env']
				}
			  }
			},
			{ test: /\.html$/i,
			  loader: 'html-loader',
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
	  headers: {
		      "Access-Control-Allow-Origin": "http://localhost:8000",
		      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
		      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		    }
	}
};
