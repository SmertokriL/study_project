import {BuildOptions} from "./types/config";
import webpackDevServer from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): webpackDevServer.Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}