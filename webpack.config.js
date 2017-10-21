const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './public/js/app.js',
  output: {
    path: __dirname + '/public', filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}