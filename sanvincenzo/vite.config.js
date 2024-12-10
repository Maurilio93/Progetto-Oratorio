import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Questo è il default, verifica se corrisponde
  },
  server: {
    open: true,
  },
  base: '/',
});
