const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// webpack4无法自动压缩.css文件，需要下面的插件支持
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  },
  plugins: [
    // 加入 html 模板任务
    new HtmlWebpackPlugin({
      // 模板文件
      template: 'assets/index.html',
      // 打包后文件名称，会自动放到 output 指定的 dist 目录
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('dist/*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
  ]
}