import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

const viteEslint = eslint({
  include: [
    `${path.resolve(__dirname, '')}/**/*.ts`,
    `${path.resolve(__dirname, '')}/**/*.tsx`,
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/UI/components'),
    },
  },
});
