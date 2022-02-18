const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: './src/index.tsx',
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx','.ts','.tsx'],
        alias: {
            '@logos': path.resolve(__dirname,'src/assets/logos/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
        }
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.(ts|tsx)$/,
                use: {loader: 'ts-loader'}
            },
            {
                test: /\.html$/,
                use: {loader: 'html-loader'}
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource'
            }
        ]        
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new miniCssExtractPlugin({
            filename: '[name].css'
        }),
        new copyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, "src/assets/logos"),
                    to: 'assets/logos'
                }
            ]
        })
    ],
    devServer:{
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3005,
        compress: true   
    }
}