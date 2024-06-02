const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watch } = require('fs');

module.exports = {
   mode: 'development',
  entry: './src/index.js',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

};