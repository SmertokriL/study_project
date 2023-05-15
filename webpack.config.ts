import path from 'path'
import webpack from "webpack";
import {BuildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuidEnv, BuildMode, BuildPaths} from "./config/build/types/config";


export default (env: BuidEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode: BuildMode = env.mode || 'development'
    const isDev: boolean = mode === 'development'
    const port: number = env.port || 3000

    const config: webpack.Configuration = BuildWebpackConfig(
        {mode, paths, isDev, port}
    )

    return config
};