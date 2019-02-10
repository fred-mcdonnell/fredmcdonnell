const path = require('path');

module.exports = {
  entry: './index.jsx',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
     { test: /\.scss$/, exclude: /node_modules/, use: ["style-loader", "css-loader"] }
    ]
  },
  watchOptions: {
    poll: 500
  }
};