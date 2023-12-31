import path from 'path';
import { EnvVars, BuildPaths } from './config/build-config/types';
import { buildWebpackConfig } from './config/build-config/buildWebpackConfig';

export default (env: EnvVars) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const port = env.port || 3000;

    return buildWebpackConfig({
        mode, paths, isDev: mode === 'development', port, analyze: env.analyze,
    });
};
