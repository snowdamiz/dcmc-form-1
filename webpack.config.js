const path = require("path");
const UglyfiJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");

module.exports = {
    // context: __dirname,
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
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
    resolve: {
        extensions: ['.js', '.jsx', '.css'], //An empty string is no longer required.
        modules: [
          'node_modules'
        ]        
    },
    optimization: {
        minimizer: [new UglyfiJsPlugin()]
    }
}