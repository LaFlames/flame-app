import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types';

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths: {
            build: path.resolve(__dirname, 'build'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        isDev,
        port: PORT,
    });
};
