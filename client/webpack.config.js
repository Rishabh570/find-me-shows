let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path = require('path');

module.exports = {
  mode: 'development',
  entry: ["./src/App.js"],
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.js"
  },
  devServer: {
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
        options: {
          presets: ['react', 'es2015', 'react-hmre'],
          babelrc: 'true',
        }
      }],
      exclude: /node_modules/,
      
    }],
  },
  devtool: 'cheap-eval-source-map',
}