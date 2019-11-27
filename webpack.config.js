const path = require("path");
const UglyfiJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    optimization: {
        minimizer: [new UglyfiJsPlugin()]
    }
}