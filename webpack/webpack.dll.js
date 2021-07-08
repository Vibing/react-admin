const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'mobx',
      'mobx-react',
      'axios'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },

  plugins: [
    new webpack.DllPlugin({
      context: path.resolve(__dirname, '..'),
      path: path.join(__dirname, '../dll', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
