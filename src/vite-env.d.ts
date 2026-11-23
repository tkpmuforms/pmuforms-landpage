/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Cloudflare Turnstile site key (public) for the contact form. */
  readonly VITE_TURNSTILE_SITE_KEY?: string;
  /** API base URL; defaults to https://admin.pmuforms.com */
  readonly VITE_API_URL?: string;
}
