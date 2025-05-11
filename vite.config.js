import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      cssModules: {
        pattern: "[local]_[hash]",
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
