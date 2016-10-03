
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'eval',

  entry: './src/js/main.js',

  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },


  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2015"],
          plugins: ["transform-object-rest-spread","transform-vue-jsx"]
        }
      },

      {
        test: /\.(sass|scss)$/,
        loader: combineLoaders([
          {
            loader: 'style',
          },
          {
            loader: 'css',
          },
          {
            loader: 'sass'
          },
          {
            loader: 'autoprefixer',
            query: {
              browsers: 'last 2 versions'
            }
          }
        ])
      },

      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },

};
