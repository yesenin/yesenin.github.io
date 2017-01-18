var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: [
    APP_DIR + '/index.jsx',
    APP_DIR + '/main.less'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
    ]
};

module.exports = config;