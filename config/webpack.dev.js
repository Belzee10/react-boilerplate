const Dotenv = require("dotenv-webpack");
const WebpackBar = require("webpackbar");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    open: true,
    hot: true,
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      // additional options
      moduleTrace: true,
      errorDetails: true
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: ".env"
    }),
    new WebpackBar({ name: "Running Dev Server" }),
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
