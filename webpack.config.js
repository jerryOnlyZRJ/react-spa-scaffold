const path = require('path')
const webpack = require('webpack')
// 注入HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 清除冗余文件插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// webpack4无法自动压缩.css文件，需要下面的插件支持
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  // webpack4压缩插件配置
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
      // css-loader
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      // babel-loader  (ES6)
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
    // 提取CSS
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