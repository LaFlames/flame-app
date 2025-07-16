import webpack from 'webpack';
import { buildStyleLoader } from './lib/buildStyleLoader';

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const styleLoader = buildStyleLoader(isDev);

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
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

    return [svgLoader, fileLoader, styleLoader, tsLoader];
};
