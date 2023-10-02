import {Configuration} from "webpack-dev-server";
import {BuildConfigOptions} from "./types/types";

export const buildDevServer = (options: BuildConfigOptions): Configuration => {
    return {
        port: options.port,
        open: true,
    }
}