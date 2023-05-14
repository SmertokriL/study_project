import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";


export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        module: buildLoaders(),
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js", path: paths.build, clean: true
        },
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}