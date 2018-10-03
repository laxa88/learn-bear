const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: './index.html',
});

module.exports = {
  mode: 'development',

  entry: path.join(__dirname, 'src/index.jsx'),

  devtool: 'source-map',

  module: {
    // Note: Order is important, from BOTTOM to TOP!
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devServer: {
    port: 3001,
  },
};