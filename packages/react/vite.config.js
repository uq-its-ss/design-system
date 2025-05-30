import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    // Don't minify, because it causes Storybook to display the minified names
    // for components.
    minify: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/jsx/main.tsx"),
      fileName: "main",
      formats: ["es"],
    },
    outDir: resolve(import.meta.dirname, "./dist/js"),
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
