var webpack = require('webpack'),
    BowerWebPackPlugin = require('bower-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: 'lib',
    filename: 'bundle.js'
  },
  
  /*resolve: {
    modulesDirectories: ["node_modules", "bower_components"]
  },*/

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },
  
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new BowerWebPackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json']
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};
