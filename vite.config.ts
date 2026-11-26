/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { IOS_APP_LIVE } from './src/constants/links'

// Safari's Smart App Banner (apple-itunes-app meta in index.html) sends
// iPhone visitors to the App Store; leave it out until the new iOS app is live.
const iosAppBanner = (): Plugin => ({
  name: 'ios-app-banner',
  transformIndexHtml: (html) =>
    IOS_APP_LIVE ? html : html.replace(/\s*<meta name="apple-itunes-app"[^>]*>/, ''),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), iosAppBanner()],
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
