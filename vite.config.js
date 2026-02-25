import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['android >= 5', 'ios >= 12', 'chrome >= 49'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.iterator',
        'es.promise',
        'es.object.assign',
        'es.promise.finally',
        'es.array.includes',
        'es.string.includes',
        'es.string.starts-with',
        'es.string.ends-with',
        'es.array.from',
        'es.array.find',
        'es.array.find-index',
        'es.object.values',
        'es.object.entries',
      ]
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015',
      supported: {
        'top-level-await': false
      }
    }
  },
  server: {
    open: true,
    port: 3000,
    host: true
  },
  esbuild: {
    target: 'es2015',
    include: /\.(jsx|js|ts|tsx)$/,
    exclude: [],
    loader: 'jsx',
  }
})