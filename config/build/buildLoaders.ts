import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        styleLoader,
        tsLoader,
    ]
}