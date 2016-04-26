var AppCachePlugin = require('appcache-webpack-plugin');
var webpack = require ('webpack')
var path = require('path')
//var AggresiveMergingPlugin = require('webpack-aggresive-merging-plugin')

module.exports = {
  //context: path.join(__dirname, 'src'),
  entry: "./src/entry",
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map",
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
        test: /\.(cjsx\.md|litcjsx)$/,
        loaders: ['coffee?literate', 'cjsx?literate']
      },
      {
        test: /\.coffee$/,
        loader: 'coffee'
      },
      {
        test: /\.(coffee\.md|litcoffee)$/,
        loader: 'coffee?literate'
      }
    ]
  },
  plugins: [

    new AppCachePlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        //'NODE_ENV': JSON.stringify((process.env.NODE_ENV == 'production') ? 'production' : 'development')
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
