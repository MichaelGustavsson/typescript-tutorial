const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    movies: path.resolve(__dirname, './src/dom/movies-dom.ts'),
    details: path.resolve(__dirname, './src/dom/movie-dom.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5500,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: {
      index: '/movies.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Movies',
      filename: 'movies.html',
      inject: true,
      chunks: ['movies'],
      template: './src/movies.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Movie Details',
      filename: 'movie-details.html',
      inject: true,
      chunks: ['details'],
      template: './src/movie-details.html',
    }),
  ],
};
