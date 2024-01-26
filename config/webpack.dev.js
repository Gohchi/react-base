const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports =  merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, '../dist'),
    port: 8080,
    hot: true,
    compress: true,
  },
});
