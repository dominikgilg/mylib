import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@nosto/test-component", "js-sha256"],
  },
  build: {
    lib: {
      entry: {
        client: resolve(__dirname, "src/components/index.client.js"),
        server: resolve(__dirname, "src/components/index.server.js"),
        plugin: resolve(__dirname, "src/plugin.js"),
      },
      name: "@nosto/nosto-hydrogen",
      formats: ["es", "cjs"],
      fileName: (format, name) => `index.${format}.${name}.js`,
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
});
