import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
const { createVuePlugin } = require("vite-plugin-vue2");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    federation({
      name: "report",
      filename: "remoteEntry.js",
      exposes: {
        "./Sales": "./src/components/Sales.vue",
      },
      remotes: {
        discovery: "http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
});
