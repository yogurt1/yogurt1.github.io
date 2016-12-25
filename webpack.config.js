const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
const isProduction = process.env.NODE_ENV === "production"

const config = module.exports = {
    devServer: {
        clientLogLevel: "none",
        inline: true,
        hot: true,
        stats: "errors-only",
        noInfo: true,
        historyApiFallback: true
    },
    performance: {
        hints: false // isProduction
    },
    entry: ["./src/entry.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve("./dist"),
        publicPath: isProduction ? "dist/" : "/",
    },
    plugins: [
        new ExtractTextPlugin({
            disable: true, // !isProduction,
            allChunks: true,
            filenamename: "styles.css"
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            minimize: isProduction,
            autoprefixer: true        
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            "app": path.resolve("./src")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "buble-loader",
                options: {
                    sourceMap: true,
                    objectAssign: "Object.assign",
                    transforms: {
                        modules: false,
                        dangerousForOf: true,
                        dangerousTaggedTemplateString: true
                    }
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            {
                test: /\.(jpg|woff2?|ttf|eot|svg|png|webp)$/,
                loader: "file-loader",
                options: {
                    limit: 10240
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    "css": ExtractTextPlugin.extract({
                        fallbackLoader: "vue-style-loader",
                        loader: "css-loader"
                    })
                }
            }
        ]
    }
}

if (isProduction) {
    // config.devtool = "source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "static"
        })
    )
}
