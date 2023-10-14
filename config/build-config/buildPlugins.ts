import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildConfigOptions } from './types';

export const buildPlugins = (options: BuildConfigOptions): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({ template: options.paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev),
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: options.analyze ? 'server' : 'disabled',
    }),
];
