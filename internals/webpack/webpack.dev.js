process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const webpack = require('webpack');
const common = require('./webpack.common.js');
const paths = require('../config/path');
const env = require('../config/env')

module.exports = common({
    mode: 'development',
    entry: `${paths.src}/index.js`,
    output: {
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        compress: true,
        hot: true,
        port: 3000,
        static: {
            directory: paths.public,
            publicPath: env.publicPath,
            watch: true,
        },
        historyApiFallback: {
            disableDotRule: true,
            index: env.publicPath,
        },
    },
    babelRuleOption: {
        plugins: [require.resolve('react-refresh/babel')],
    },
    styleRuleOption: [require.resolve('style-loader')],
    hasStyleSourceMap: true,
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: `${paths.public}/index.html`,
            templateParameters: {
                PUBLIC_URL: env.raw.PUBLIC_URL,
            },
        }),
        new webpack.EnvironmentPlugin(env.raw),
        new ReactRefreshWebpackPlugin(),
    ],
});
