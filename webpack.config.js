//path de node para saber donde estamos
const path = require('path');
//configuracion para el [js,css,html]
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
//mover archivos de la carpeta src a la carpeta production 'dist'
const copyWebpackPlugin = require('copy-webpack-plugin');
//limpiar nuestros archivos del dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//optimizaion
const terzerWebpackPlugin = require('terser-webpack-plugin');
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx','.ts','.tsx'],
    },
    mode: 'production',
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
                type: 'assect/resource'
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
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer:[
            new cssMinimizerWebpackPlugin(),
            new terzerWebpackPlugin()
        ]
    }
}