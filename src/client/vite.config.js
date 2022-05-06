/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/temp': 'http://localhost:4000'
    }
  },
  build: {
    outDir: '../build'
  }
});
