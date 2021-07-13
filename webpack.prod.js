const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [],
  module: {
    rules: [],
  },
});