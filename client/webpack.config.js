const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/App'
  ],
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: "bundle.js"
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './public', // VERY IMPORTANT :(
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    inline: true,
    port: 3000
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'react-hmre'],
          babelrc: 'true',
        }
      }],
      exclude: /node_modules/,
      
    }],
  },
  // devtool: 'cheap-eval-source-map',
}