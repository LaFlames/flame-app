import webpack from "webpack";
import { BuildOptions } from "./types";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = ({
  mode,
  paths,
  port,
  isDev,
}: BuildOptions): webpack.Configuration => {
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(paths, isDev),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
};
