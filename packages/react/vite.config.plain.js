import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import commonjs from "vite-plugin-commonjs";

/**
 * Vite config for Plain CSS build
 * Outputs to dist/plain/ with regular unscoped CSS class names
 * For apps that compile SCSS locally and need standard class names
 */
export default defineConfig({
  plugins: [
    commonjs(),
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
      outDir: "./dist/plain",
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/jsx/index.plain.ts"),
      fileName: "index",
      formats: ["es"],
    },
    outDir: resolve(import.meta.dirname, "./dist/plain"),
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        assetFileNames: "index.css",
      },
    },
  },
  css: {
    modules: {
      // Disable CSS Modules - use plain class names
      localsConvention: "camelCaseOnly",
      generateScopedName: "[local]",
    },
  },
});
