import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
//
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  // optimizeDeps: {
  //   include: ["@nosto/test-component", "js-sha256"],
  // },
  build: {
    lib: {
      entry: {
        client: resolve(__dirname, "src/components/index.client.js"),
        server: resolve(__dirname, "src/components/index.server.js"),
        // plugin: resolve(__dirname, "src/plugin.js"),
      },
      name: "@nosto/nosto-hydrogen",
      formats: ["es"],
      fileName: (format, name) =>
        name == "plugin" ? `${format}/plugin.js` : `${format}/index.${name}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@shopify/hydrogen"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       client: resolve(__dirname, "src/components/index.client.js"),
  //       server: resolve(__dirname, "src/components/index.server.js"),
  //     },
  //     external: [
  //       "react",
  //       "react-dom",
  //       "@shopify/hydrogen",
  //       // "@nosto/nosto-react",
  //     ],
  //     output: [
  //       {
  //         format: "es",
  //         dir: "dist/es",
  //         entryFileNames: "entry-[name].js",
  //         globals: {
  //           react: "React",
  //           "react-dom": "ReactDOM",
  //         },
  //       },
  //       {
  //         format: "cjs",
  //         dir: "dist/cjs",
  //         entryFileNames: "entry-[name].js",
  //         globals: {
  //           react: "React",
  //           "react-dom": "ReactDOM",
  //         },
  //       },
  //     ],
  //   },
  // },
});
