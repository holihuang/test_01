const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const diy = require('./diyPlugin')

module.exports = {
    mode: 'production',
    entry: './src/index',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'less-loader',
                }
            ],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }
            ]
        }]
    },
    plugins: [
        // new diy(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'webpack',
            inject: 'body',
        })
    ],
    devServer: {
        open: true,
        port: 8000,
        contentBase: 'dist',
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                secure: false,
                pathRewrite: function(path, req) {
                    console.log(path, path.replace('/api', '/a'))
                    return path.replace('/api', '/a')
                }
            },
        },
    },
}