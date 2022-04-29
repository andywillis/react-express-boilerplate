/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tag': 'http://localhost:4000',
      '/update': 'http://localhost:4000',
      '/check': 'http://localhost:4000',
      '/tags': 'http://localhost:4000'
    }
  },
  build: {
    outDir: '../build'
  }
});
