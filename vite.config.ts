// vite.config.ts — Vite config for React + TypeScript, GitHub Pages ready

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  
  // Use relative paths for assets so GitHub Pages loads JS/CSS/images correctly
  base: "./",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "docs",       // Build output goes to 'docs' folder for GitHub Pages
    emptyOutDir: true,    // Clears 'docs' folder before each build
    assetsDir: "assets",  // Optional: put JS/CSS/images inside docs/assets
  },
});
