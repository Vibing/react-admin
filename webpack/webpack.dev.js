const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
    pathinfo: false,
    publicPath: '/'
  },
  cache: {
    type: 'memory'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: [
                  path.resolve(__dirname, '../src'),
                  path.resolve(__dirname, '../node_modules/antd')
                ],
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    usedExports: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AddAssetHtmlPlugin([
      {
        filepath: require.resolve('../dll/vendor.dll.js'),
        includeRelatedFiles: false,
        publicPath: '/'
      }
    ])
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    open: false,
    hot: true,
    quiet: true,
    port: 3000
  }
})
