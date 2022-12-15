import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.client.js"),
      name: "@nosto/lib-test",
      formats: ["esm", "cjs"],
      fileName: (format) =>
        format == "esm" ? "index.client.js" : "index.client.cjs",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
