import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'ilw-hero',
      entry: 'ilw-hero.js',
      fileName: 'ilw-hero',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
           if (chunkInfo.name === 'style.css') return 'ilw-hero.css';
        }
      }
    },
  },
  server: {
    hmr: false
  }
})
