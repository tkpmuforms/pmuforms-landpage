/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Cloudflare Turnstile site key (public) for the contact form. */
  readonly VITE_TURNSTILE_SITE_KEY?: string;
  /** API base URL; defaults to https://admin.pmuforms.com */
  readonly VITE_API_URL?: string;
  /** Google Tag Manager container ID (GTM-XXXXXXX); takes precedence over the GA4 ID. */
  readonly VITE_GTM_ID?: string;
  /** Google Analytics 4 measurement ID (G-XXXXXXXXXX), used when no GTM ID is set. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}
