import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const mode = 'development';

const webpackConfig = buildWebpackConfig({
    mode,
    paths: {
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev: mode === 'development',
});

export default webpackConfig;