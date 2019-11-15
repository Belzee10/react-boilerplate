const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      template: 'src/index.html'
    }),
    new FaviconsWebpackPlugin('./src/assets/logo.png')
  ]
};
