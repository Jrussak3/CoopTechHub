import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Separate build config that bundles the entire site (JS, CSS, and all
// assets) into one self-contained HTML file for easy sharing.
// Run with: npm run build:singlefile
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-singlefile',
    assetsInlineLimit: Infinity,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 100000,
  },
});
