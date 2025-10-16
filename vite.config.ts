// vite.config.ts — Vite config for React + TypeScript

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/wa-lions-clubs-app/", // Update this if hosted in GitHub Pages under a different repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Allows using "@/..." to import from src
    },
  },
});
