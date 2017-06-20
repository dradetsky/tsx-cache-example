const path = require('path')
const webpack = require('webpack')
const WebpackMd5Hash = require('webpack-md5-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

const config = {
  entry: {
    vendor: './src/vendor.tsx',
    main: './src/app.tsx'
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new WebpackMd5Hash(),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    }]
  }

}
module.exports = [config]
