import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // User GitHub Pages sites and custom domains serve assets from the root.
  base: '/',
});
