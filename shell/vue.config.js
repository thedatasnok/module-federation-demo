const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { defineConfig } = require("@vue/cli-service");
const deps = require("./package.json").dependencies;
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].scriptLoading = "module";
      return args;
    });
  },

  configureWebpack: {
    target: 'web',
    experiments: {
      outputModule: true,
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "layout",
        filename: "remoteEntry.js",
        library: { type: "module" },
        remotes: {
          discovery: "http://localhost:3001/remoteEntry.js",
          cart: "http://localhost:3002/assets/remoteEntry.js",
          report: "http://localhost:3004/assets/remoteEntry.js",
        },
        exposes: {
          "./Something": "./src/components/Something.vue",
        },
        shared: {
          ...deps,
          vue: {
            singleton: true,
            eager: true,
            version: deps.vue,
          },
        },
      }),
    ],
  },
});
