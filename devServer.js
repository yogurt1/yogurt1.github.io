const DevServer = require("webpack-dev-server")
const HotMiddleware = require("webpack-hot-middleware")
const webpack = require("webpack")
const config = require("./webpack.config")
const PORT = process.env.PORT || 3000

config.entry.unshift(
    // `webpack-dev-server/client?http://localhost:${PORT}`,
    // "webpack/hot/only-dev-server"
    "webpack-hot-middleware/client?noInfo=true"
)
config.devtool = "eval"
config.plugins.unshift(
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
)

const compiler = webpack(config)
const hotMiddleware = HotMiddleware(compiler)

// compiler.plugin("compilation", compilation =>
//         compilation.plugin("html-webpack-plugin-after-emit",
//             (data, done) => {
//                 hotMiddleware.publish({action: "reload"})
//                 done()
//             }))

config.devServer.setup = devServer => {
    devServer.use(hotMiddleware)
}

const devServer = new DevServer(compiler, config.devServer)
devServer.listen(PORT,
    () => `Webpack-dev-server listening on port ${PORT}`)
