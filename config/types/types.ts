export type mode = 'development' | 'production';

export interface Paths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildConfigOptions {
    mode: mode;
    paths: Paths
}