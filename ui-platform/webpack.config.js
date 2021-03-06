const path = require("path");
const webpack = require("webpack");
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack").container
    .ModuleFederationPlugin;

const isProd = process.env.NODE_ENV === "production";
const isAnalyzer = process.env.ANALYZER === "true";
const mode = isProd ? "production" : "development";
const performance = isProd ? {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
} : {};
const devtool = isProd ? "hidden-source-map" : "eval-cheap-source-map";
const target = isProd ? ["web", "es5"] : undefined;
const publicPath = process.env.CONTEXT || "/";

console.log("isProd", isProd);
console.log("isAnalyzer", isAnalyzer);

module.exports = {
    entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.tsx")],
    mode,
    devtool,
    target,
    performance,
    devServer: {
        port: 3000,
        host: "0.0.0.0",
        useLocalIp: true,
        hot: true,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath,
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].chunk.js",
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    optimization: {
        runtimeChunk: "single",
    },
    module: {
        rules: [
            {
                test: /bootstrap\.tsx$/,
                loader: "bundle-loader",
                options: {
                    lazy: true,
                },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s?css?$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    {loader: "sass-loader"},
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
        new ModuleFederationPlugin({
            name: "platformApp",
            // remotes: {
            //     reactMobxApp: "reactMobxApp@http://localhost:3001/reactMobxEntry.js",
            // },
            shared: {
                react: {
                    singleton: true,
                },
                "react-dom": {
                    singleton: true,
                },
                "@material-ui/core": {
                    singleton: true,
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: "AA",
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            base: publicPath,
            meta: {viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"},
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(mode),
                    TIME_BUILD: JSON.stringify(new Date().toISOString()),
                    APP_VERSION: JSON.stringify(require("./package").version),
                },
            },
        }),
        new BundleAnalyzerPlugin({analyzerMode: isAnalyzer ? "server" : "disabled"}),
        new WebpackManifestPlugin(),
    ],
};