'use strict'

var path = require('path');
var webpack = require('webpack');
var rootDir = path.resolve(__dirname, '..', '..');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loaders: ['style', 'css'],
              }
        ]
    }
}