const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js"
    },
    module: {
       rules: [
           {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: ['css-loader']
               })
           }
       ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}
