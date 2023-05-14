export type BuildMode = 'development' | 'production'

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
}

export interface BuildPaths {
    entry: string,
    build: string
    html: string;
}