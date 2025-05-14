import {Configuration} from "webpack-dev-server";

export const buildDevServer = (port: number): Configuration => {
    return {
        port,
        hot: true,
        open: true,
        historyApiFallback: true,
    }
}