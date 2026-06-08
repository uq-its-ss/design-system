import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import commonjs from "vite-plugin-commonjs";

/**
 * Default Vite config (CSS Modules build)
 * This is maintained for backwards compatibility.
 * The actual builds use vite.config.modules.js and vite.config.plain.js
 */
export default defineConfig({
  plugins: [
    commonjs(),
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
      outDir: "./dist/modules",
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/jsx/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    outDir: resolve(import.meta.dirname, "./dist/modules"),
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
      // Use consistent naming format for CSS classes
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
