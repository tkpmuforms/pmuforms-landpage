/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // CommonJS package without proper ESM named exports; bundle it into the
    // build-time renderer (scripts/prerender.mjs) instead of importing it.
    noExternal: ['react-helmet-async'],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
