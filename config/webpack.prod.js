const Dotenv = require("dotenv-webpack");
const WebpackBar = require("webpackbar");

module.exports = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial"
        }
      }
    }
  },
  plugins: [
    new Dotenv({
      path: ".env.production"
    }),
    new WebpackBar({ name: "Buiding Production" })
  ]
};
