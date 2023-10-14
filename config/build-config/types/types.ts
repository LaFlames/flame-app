export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface EnvVars {
    mode: BuildMode;
    port: number;
    analyze: boolean;
}

export interface BuildConfigOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    analyze: boolean;
}
