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
      fileName: "index.client",
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
