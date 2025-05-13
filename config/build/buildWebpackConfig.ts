import webpack from "webpack";
import {BuildOptions} from "./types";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export const buildWebpackConfig = ({mode, paths}: BuildOptions): webpack.Configuration => {
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}