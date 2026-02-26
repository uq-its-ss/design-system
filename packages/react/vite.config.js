import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [
    commonjs(),
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/jsx/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    outDir: resolve(import.meta.dirname, "./dist/js"),
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  css: {
    modules: {
      // Use consistent naming format for CSS classes
      localsConvention: "camelCase", // Optional: Use camelCase for class names
      generateScopedName: "[name]__[local]", // Consistent class names across components
    },
  },
});
