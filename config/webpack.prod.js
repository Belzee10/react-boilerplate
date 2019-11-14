const Dotenv = require("dotenv-webpack");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ],
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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: ".env.production"
    }),
    new WebpackBar({ name: "Buiding Production" }),
    new MiniCssExtractPlugin({ filename: "styles/[name].css" }),
    new PurifyCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*.js`, {
        nodir: true
      })
    })
  ]
};
