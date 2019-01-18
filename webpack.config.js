const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: false,
      template: "./client/index.html"
    })
  ],
  devServer: {
    port: 9000,
    compress: true,
    contentBase: path.resolve(__dirname, "public")
  }
};

module.exports = config;
