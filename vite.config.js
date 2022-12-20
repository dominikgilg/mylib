import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@nosto/nosto-react"],
  },
  build: {
    lib: {
      entry: {
        client: resolve(__dirname, "src/components/index.client.js"),
        server: resolve(__dirname, "src/components/index.server.js"),
      },
      name: "@nosto/nosto-hydrogen",
      sformats: ["es", "umd"],
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
