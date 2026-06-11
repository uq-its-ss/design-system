import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import commonjs from "vite-plugin-commonjs";

/**
 * Vite config for CSS Modules build
 * Outputs to dist/modules/ with scoped CSS class names
 * For third-party apps that need CSS isolation
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
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  css: {
    modules: {
      // Keep both naming conventions available
      localsConvention: "dashes",
      generateScopedName: "[local]___[hash:base64:5]",
    },
  },
});
