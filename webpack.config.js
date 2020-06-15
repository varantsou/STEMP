const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        library: 'someLibName',
        libraryTarget: 'umd',
        auxiliaryComment: 'Test Comment'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['src/']
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/app')
        }
    }
};
