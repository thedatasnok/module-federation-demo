const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env = {}) => ({
  mode: "development",
  cache: false,
  target: "es2020",
  devtool: false,
  entry: path.resolve(__dirname, "./src/index.ts"),

  experiments: {
    outputModule: true,
  },

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "discovery",
      filename: "remoteEntry.js",
      library: { type: "module" },
      exposes: {
        "./DiscoveryTiles": "./src/components/DiscoveryTiles",
        "./placeVue3Component": "./src/placeVue3Component"
      },
      remotes: {
        cart: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: {
        vue: {
          requiredVersion: "^3.0.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.ejs",
      inject: false,
    }),
    new VueLoaderPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 3001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
});
