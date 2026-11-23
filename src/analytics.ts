/**
 * Analytics, loaded only in the browser and only when an ID is set at build time:
 *
 *   VITE_GTM_ID=GTM-XXXXXXX          Google Tag Manager (takes precedence).
 *                                    Events go to the dataLayer as
 *                                    { event: "app_download_click", ... }; GA4
 *                                    and any other tags are configured in GTM.
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXX  Google Analytics 4 directly via gtag.js.
 *
 * Page views are sent on every route change (the site is a single-page app),
 * and clicks on the app-store and web-app links are sent as events.
 */
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "./constants/links";

type Gtag = (...args: unknown[]) => void;
type TrackFn = (name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __pmuClickTracking?: boolean;
    __pmuTrackEvent?: TrackFn;
  }
}

const GTM_ID = import.meta.env.VITE_GTM_ID?.trim() ?? "";
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";
const VALID_GTM_ID = /^GTM-[A-Z0-9]{4,}$/;
const VALID_GA_ID = /^G-[A-Z0-9]{4,}$/;

type Mode = "gtm" | "gtag" | null;

const configuredMode = (): Mode => {
  if (typeof window === "undefined") return null;
  if (VALID_GTM_ID.test(GTM_ID)) return "gtm";
  if (VALID_GA_ID.test(GA_ID)) return "gtag";
  return null;
};

let mode: Mode = null;

export const analyticsEnabled = (): boolean => configuredMode() !== null;

const loadScript = (src: string) => {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

export function initAnalytics(): void {
  if (mode) return;
  mode = configuredMode();
  if (!mode) return;

  window.dataLayer = window.dataLayer || [];

  if (mode === "gtm") {
    // the standard GTM loader: mark the start time, then load the container
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  } else {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    window.gtag = function gtag() {
      // gtag.js expects the arguments object itself, not an array
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    // page_view is sent by RouteTracker on each route change
    window.gtag("config", GA_ID, { send_page_view: false });
  }

  // The click listener is added once per page, even if this module is
  // re-evaluated (hot reload in dev); it always calls the latest trackEvent.
  window.__pmuTrackEvent = trackEvent;
  if (!window.__pmuClickTracking) {
    window.__pmuClickTracking = true;
    document.addEventListener("click", trackOutboundClick, { capture: true });
  }
}

export function trackPageView(path: string): void {
  const page = {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  };
  if (mode === "gtm") {
    // GA4's built-in "page changes based on browser history" measurement
    // already counts these; this event is for any other tags you add in GTM.
    window.dataLayer?.push({ event: "virtual_page_view", ...page });
  } else if (mode === "gtag" && window.gtag) {
    window.gtag("event", "page_view", page);
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (mode === "gtm") {
    window.dataLayer?.push({ event: name, ...params });
  } else if (mode === "gtag" && window.gtag) {
    window.gtag("event", name, params);
  }
}

/** Which store or app a link points to, if any. */
export function linkDestination(href: string): "ios" | "android" | "web_app" | null {
  if (href.startsWith(IOS_APP_URL) || href.includes("apps.apple.com")) return "ios";
  if (href.startsWith(ANDROID_APP_URL) || href.includes("play.google.com")) return "android";
  if (href.startsWith(WEB_APP_URL)) return "web_app";
  return null;
}

function trackOutboundClick(event: MouseEvent): void {
  const target = event.target as Element | null;
  const link = target?.closest?.("a[href]");
  if (!(link instanceof HTMLAnchorElement)) return;
  const destination = linkDestination(link.href);
  if (!destination) return;
  const area = link.closest("section, footer, .navbar");
  window.__pmuTrackEvent?.(
    destination === "web_app" ? "web_app_click" : "app_download_click",
    {
      store: destination,
      link_text: (link.textContent?.trim() || link.getAttribute("aria-label") || "").slice(0, 60),
      section: area?.id || area?.className.split(" ")[0] || "unknown",
    }
  );
}
