import path from 'path';
import {EnvVars, BuildPaths} from "./config/types";
import {buildWebpackConfig} from "./config/buildWebpackConfig";


export default (env: EnvVars) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };

    const mode = env.mode || 'development';
    const port = env.port || 3000;

    return buildWebpackConfig({mode, paths, isDev: mode === 'development', port});
};