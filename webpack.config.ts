import path from 'path';
import {mode, Paths} from "./config/types/types";
import {buildWebpackConfig} from "./config/buildWebpackConfig";

const paths: Paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode: mode = 'development';

const config = buildWebpackConfig({mode, paths});

export default config;