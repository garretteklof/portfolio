const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/App.jsx"],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        resolve: { extensions: [".js", ".jsx"] },
        exclude: /node_modules/
      },
      {
        loader: "svg-sprite-loader",
        test: /\.svg$/
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new BrotliPlugin({
        asset: "[path].br[query]"
      }),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip"
      })
    ]
  },
  devtool:
    process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    publicPath: "/dist/"
  }
};
