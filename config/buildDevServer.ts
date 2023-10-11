import { Configuration } from 'webpack-dev-server';
import { BuildConfigOptions } from './types';

export const buildDevServer = (options: BuildConfigOptions): Configuration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
