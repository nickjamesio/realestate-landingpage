var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', 'whatwg-fetch', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {'test': /\.js$/, use: 'babel-loader'},
            {'test': /\.css$/, use: ['style-loader', 'css-loader']},
            {'test': /\.(png|jpg|gif)$/, use: 'file-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    devServer: {
        historyApiFallback: true
    },
    // devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}
