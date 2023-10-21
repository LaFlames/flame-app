import webpack from 'webpack';
import { BuildConfigOptions } from './types';
import { buildCssLoader } from './duck';

export const buildLoaders = ({ isDev }: BuildConfigOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        tsLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
};
