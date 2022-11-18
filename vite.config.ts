import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, `src`);
const outDir = resolve(__dirname, `dist`);

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/vite-app/',
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: resolve(root, `index.html`),
        about: resolve(root, `about`, `index.html`),
        projects: resolve(root, `projects`, `index.html`),
        contact: resolve(root, `contact`, `index.html`),
        piratechs: resolve(root, `piratechs`, `index.html`),
      }
    }
  }
})
