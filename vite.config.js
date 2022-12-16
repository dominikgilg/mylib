import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const config = {
  client: {
    entry: resolve(__dirname, "src/components/index.client.js"),
    formats: ["es"],
    fileName: (format) => `index.${format}.client.js`,
  },
  server: {
    entry: resolve(__dirname, "src/components/index.server.js"),
    formats: ["es"],
    fileName: (format) => `index.${format}.server.js`,
  },
};
const currentConfig = config[process.env.NOSTO_ENV];

if (currentConfig === undefined) {
  throw new Error("NOSTO_ENV is not defined or is not valid");
}

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      ...currentConfig,
      name: "@nosto/nosto-hydrogen",
      formats: ["esm", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "crypto", "@shopify/hydrogen"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
