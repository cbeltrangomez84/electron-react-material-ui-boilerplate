const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

module.exports = merge(baseConfig, config);
