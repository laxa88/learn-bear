const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: './index.html',
});

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),

  output: {
    publicPath: '/',
  },

  module: {
    // Note: Order is important, from BOTTOM to TOP!
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            // Note: This is an extension of css-loader, to fix
            // the issue where Typescript can't find CSS file defs.
            loader: 'typings-for-css-modules-loader',
            options: {
              // original css-loader options
              importLoaders: 1,
              camelCase: true,
              minimize: true,
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',

              // specific options for typings-for-css-modules-loader
              namedExport: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|pdf)$/i,
        use: {
          loader: 'url-loader',
        },
      },

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

      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          /* Loader options go here */
        },
      },

      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
