const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\\.css$/, use: 'css-loader' },
      { test: /\\.ts$/, use: 'ts-loader' }
    ]
  }
};