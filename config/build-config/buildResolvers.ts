import webpack from 'webpack';
import { BuildConfigOptions } from './types';

export const buildResolvers = (options: BuildConfigOptions): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
});
