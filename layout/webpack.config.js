const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const deps = require("./package.json").dependencies;
module.exports = {
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
    alias: {
      vue: "vue/dist/vue.js",
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },


  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      filename: "remoteEntry.js",
      library: { type: 'module' },
      remotes: {
        discovery: "http://localhost:3001/remoteEntry.js",
        cart: "http://localhost:3002/assets/remoteEntry.js",
        report: "http://localhost:3004/assets/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        vue: {
          singleton: true,
          eager: true,
          version: deps.vue,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./index.ejs",
      inject: false,
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 3000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
