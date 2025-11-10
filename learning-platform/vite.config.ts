import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Target broader browser support including older iPads
    target: 'es2015',

    // Source maps for production debugging (disabled for smaller bundles)
    sourcemap: false,

    // Chunk size warning limit (500kb is reasonable)
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      // Exclude Node.js-only modules from browser bundle
      external: [
        'fs',
        'path',
        './topic-loader'
      ],

      output: {
        // Manual chunking for better caching and code splitting
        manualChunks: (id) => {
          // Vendor chunks for third-party libraries
          if (id.includes('node_modules')) {
            // React and routing
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // Firebase
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            // AI SDKs
            if (id.includes('@google/generative-ai') || id.includes('@anthropic-ai/sdk')) {
              return 'ai-vendor';
            }
            // Math rendering
            if (id.includes('katex') || id.includes('marked')) {
              return 'math-vendor';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            // Other node_modules
            return 'vendor';
          }

          // App code chunking by feature
          // Practice mode components
          if (id.includes('/components/practice/')) {
            return 'practice';
          }
          // Learning/Socratic mode components
          if (id.includes('/components/layout/') || id.includes('/components/ChatPanel')) {
            return 'learn';
          }
          // Math tools/visualizers
          if (id.includes('/components/math-tools/')) {
            return 'math-tools';
          }
          // Parent dashboard
          if (id.includes('/components/parent/')) {
            return 'parent';
          }
          // Dev tools (won't be in production build anyway)
          if (id.includes('/components/AvatarTest') || id.includes('/components/QuestionPreview') || id.includes('/pages/VisualizerTest')) {
            return 'dev-tools';
          }
          // Onboarding
          if (id.includes('/components/onboarding/')) {
            return 'onboarding';
          }
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
