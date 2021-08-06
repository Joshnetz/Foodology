
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack=require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/ingercode.js'
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        roots: [path.resolve(__dirname, 'src')],
        extensions: ['*','.mjs','.js','.svelte','.inger','.jsx'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                } 
            },
            {
                test: /\.inger?$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                      // Disables attributes processing
                      sources: false,
                    }
                } 
            },
            {
                test: /\.svelte$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                    hydratable: true,
                    emitCss: true,
                    hotReload: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },{
            test: /\.ttf$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  useRelativePath: true,
                  outputPath: 'asset/fonts/',
                  publicPath: "public/asset/fonts/"
                }
              }
            ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name :'[name].[ext]',
                            useRelativePath: true,
                            outputPath: "asset/img/",
                            publicPath: "public/asset/img/"
                        },

                    },"image-webpack-loader"
                ]
            },
            /*{
                test: /\.css$/,
                use: [
                  "style-loader",
                  { loader: "css-loader", options: { importLoaders: 1 } },
                  "postcss-loader",
                ],
            }, */
            {
                // required to prevent errors from Svelte on Webpack 5+
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            } 
        ]
    },
    devServer:{
        host: '0.0.0.0',
        port: 9207,
        disableHostCheck: true    
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/ingercode.css'
        })
    ]
}