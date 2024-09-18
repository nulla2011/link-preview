import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        assetFileNames: (assetInfo) => 'assets/link-preview-[name]-[hash][extname]',
        entryFileNames: 'assets/link-preview-[name]-[hash].js',
        chunkFileNames: 'assets/link-preview-[name]-[hash].js',
      },
    },
  },
  // resolve: {
  //   alias: {
  //     '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
  //   },
  // },
});
