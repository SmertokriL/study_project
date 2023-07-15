import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.ModuleOptions {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.m\./,
                        //todo: осталось добавить метод создания хэша для метода

                        // getLocalIdent: (context:LoaderContext, localIdentName:string, localName:string, options: any) => {
                        //
                        //    const base = path.parse(context.resourcePath).name.replace(/\.m$/, '')
                        //     return isDev ? `${base}__${localName}--`+'[hash:base64:5]' :  '[hash:base64:8]'
                        // }

                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader",
        ],
    }

    return {
        rules: [
            tsLoader, styleLoader
        ]
    }
}