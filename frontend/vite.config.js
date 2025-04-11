// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Ensures Vite serves from current folder
  server: {
    port: 3000, // Optional: change if needed
  },
  build: {
    outDir: "dist", // Default output directory
  },
});
