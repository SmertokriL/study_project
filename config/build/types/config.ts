export type BuildMode = 'development' | 'production'

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean,
    port: number
}

export interface BuidEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildPaths {
    entry: string,
    build: string
    html: string;
}