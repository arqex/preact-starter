const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const setup = require('./setup');

const dist = join(__dirname, '../dist');
var srcPath = join(__dirname, '../src');

module.exports = env => {
	const isProd = env && env.production;

	return {
		entry: {
			app: './src/boot.js',
			vendor: [
				// pull these to a `vendor.js` file
				'preact'
			]
		},
		output: {
			path: dist,
			filename: '[name].[hash].js',
			publicPath: '/'
		},
		resolve: {
			alias: {
				src: srcPath,
	      styles: join( srcPath, 'styles' ),
				modules: join( srcPath, 'modules'),
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
			}
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}, {
				test: /\.(sass|scss)$/,
				loader: isProd ? ExtractText.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!postcss-loader!sass-loader'
				}) : 'style-loader!css-loader!postcss-loader!sass-loader'
			}]
		},
		plugins: setup(isProd),
		devtool: !isProd && 'eval',
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd
		}
	};
};
