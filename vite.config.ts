import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pt: resolve(__dirname, 'pt/index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  }
});
