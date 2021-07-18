const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === "production";
const isAnalyzer = process.env.ANALYZER === "true";
const mode = isProd ? "production" : "development";
const performance = isProd ? {
    hints: "error",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
} : {};
const devtool = isProd ? "hidden-source-map" : "eval-cheap-source-map";
const target = isProd ? ["web", "es5"] : undefined;

console.log("isProd", isProd);
console.log("isAnalyzer", isAnalyzer);

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    mode,
    devtool,
    target,
    performance,
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[contenthash].js",
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css?$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // { loader: "style-loader" },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.(woff|woff2|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: "TEST APP TITLE",
            template: "./public/index.html",
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
        }),
        new BundleAnalyzerPlugin({ analyzerMode: isAnalyzer ? "server" : "disabled" }),
        new WebpackManifestPlugin()
    ]
};