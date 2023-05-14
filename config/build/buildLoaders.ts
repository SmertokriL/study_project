import webpack from "webpack";

export function buildLoaders(): webpack.ModuleOptions {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return {
        rules: [
            tsLoader
        ]
    }
}