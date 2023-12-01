const path = require('path');//common JS

module.exports = {
  mode: 'development',
  entry: './src/geracpf.mjs',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
        }
      }]
  },
 devtool: 'source-map'
};