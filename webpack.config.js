let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
//   devtool: debug ? "inline-sourcemap" : null,

  entry: "./client/src/index.js",
  devServer: {
    host: 'localhost',
    hot: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    inline: true,
    port: 3000
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              use: [
                  { loader: 'babel-loader' },
                ],
              exclude: /node_modules/,
              options: {
                presets: ['react', 'es2015', 'react-hmre'],
              }
            }
      ]
  },
  output: {
    path: path.join (__dirname, 'public'),
    filename: "bundle.min.js"
  }
};