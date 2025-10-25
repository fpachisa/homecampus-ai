import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Source maps for production debugging (disabled for smaller bundles)
    sourcemap: false,

    // Chunk size warning limit (500kb is reasonable)
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks: {
          // React vendor bundle
          'react-vendor': [
            'react',
            'react-dom',
            'react-router-dom'
          ],
          // Firebase vendor bundle
          'firebase-vendor': [
            'firebase/app',
            'firebase/auth',
            'firebase/firestore',
            'firebase/storage'
          ],
          // AI vendor bundle (largest dependencies)
          'ai-vendor': [
            '@google/generative-ai',
            '@anthropic-ai/sdk'
          ],
          // Math rendering vendor
          'math-vendor': [
            'katex',
            'marked'
          ]
        },

        // Asset naming for cache busting
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`
          }

          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]

          // Separate images from other assets
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }

          return `assets/[name]-[hash][extname]`
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },

    // Minification options
    minify: 'esbuild',

    // Enable CSS code splitting
    cssCodeSplit: true
  },

  // Optimize deps
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore'
    ]
  },

  // Preview server config (for local testing)
  preview: {
    port: 4173,
    strictPort: true
  }
})
