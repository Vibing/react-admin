const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.tsx', '.ts', '.js', '.less'],
    symlinks: false,
    alias: { components: path.resolve(__dirname, '../src/components') },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              include: path.resolve(__dirname, '../src'),
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AntdDayjsWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/vendor-manifest.json'),
      context: path.resolve(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.ejs'),
      templateParameters: {
        title: 'admin-web',
      },
    }),
    new AddAssetHtmlPlugin([
      {
        filepath: require.resolve('../dll/vendor.dll.js'),
        includeRelatedFiles: false,
        publicPath: '',
      },
    ]),
    new WebpackBar(),
  ],
}
