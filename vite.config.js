import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1200,
    minify: 'esbuild',          // esbuild is faster than terser, comparable output
    target: 'es2020',
    cssMinify: true,
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        // Split heavy 3D libs into their own cache buckets
        manualChunks: {
          'vendor-three': ['three'],
          'vendor-r3f':   ['@react-three/fiber', '@react-three/drei'],
        },
        // Content-hash filenames for long-term cache
        entryFileNames:  'assets/[name]-[hash].js',
        chunkFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
      // Tree-shake everything that isn't imported
      treeshake: { preset: 'recommended' },
    },
  },

  // Serve model.glb with correct MIME type + cache headers in dev
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },

  // Ensure GLB is handled as a static asset (don't try to parse it)
  assetsInclude: ['**/*.glb', '**/*.gltf'],
});
