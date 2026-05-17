// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calendar: resolve(__dirname, "pages/calendar.html"),
        files: resolve(__dirname, "pages/files.html"),
      },
    },
  },
});
