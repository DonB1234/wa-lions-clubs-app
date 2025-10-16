import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/wa-lions-clubs-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
