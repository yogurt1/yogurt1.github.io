var AppCachePlugin = require('appcache-webpack-plugin');
var webpack = require ('webpack')
var path = require('path')

module.exports = {
  //context: path.join(__dirname, 'src'),
  entry: "./src/entry",
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map"
  },
  resolve: {
    modulesDirectories: [
      "node_modules", "bower_components"
    ],
    extensions: [
      "", ".jsx", ".js", ".cjsx", ".coffee"
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.cjsx$/,
        loaders: ['coffee', 'cjsx']
      },
      {
        test: /\.coffee$/,
        loader: 'coffee'
      }
    ]
  },
  node: {
    //do not include poly fills...
    //http://webpack.github.io/docs/configuration.html#node
    console: false,
    process: false,
    global: false,
    buffer: false,
    __filename: false,
    __dirname: false
  },
  plugins: [

    new AppCachePlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        //'NODE_ENV': JSON.stringify((process.env.NODE_ENV == 'production') ? 'production' : 'development')
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
