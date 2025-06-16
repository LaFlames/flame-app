import webpack from 'webpack';
import { BuildPaths } from './types';

export const buildResolvers = ({ src }: BuildPaths): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [src, 'node_modules'],
        preferAbsolute: true,
        alias: {},
    };
};
