const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    devtool: 'eval-source-map',
    mode: 'production',
}
