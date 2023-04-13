import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

const viteEslint = eslint({
  exclude: ['node_modules'],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint],
});
