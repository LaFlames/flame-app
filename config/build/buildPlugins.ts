import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const buildPlugins = (
    paths: BuildPaths,
    isDev: boolean,
    analyzeBundle: boolean
): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: isDev,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyzeBundle ? 'server' : 'disabled',
        }),
    ];
};
