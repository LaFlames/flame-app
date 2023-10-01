import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildConfigOptions} from "./types/types";

export const buildPlugins = (options: BuildConfigOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new webpack.ProgressPlugin()
    ]
}