import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "./constants/links";

const loadAnalytics = async (gaId?: string, gtmId?: string) => {
  vi.resetModules();
  vi.stubEnv("VITE_GA_MEASUREMENT_ID", gaId ?? "");
  vi.stubEnv("VITE_GTM_ID", gtmId ?? "");
  return import("./analytics");
};

const gtmScripts = () =>
  document.head.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]');

const gaScripts = () =>
  document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]');

/** gtag pushes `arguments` objects; turn them into plain arrays for asserting. */
const pushed = () => (window.dataLayer ?? []).map((entry) => Array.from(entry as ArrayLike<unknown>));

describe("analytics", () => {
  beforeEach(() => {
    gaScripts().forEach((s) => s.remove());
    gtmScripts().forEach((s) => s.remove());
    delete window.dataLayer;
    delete window.gtag;
    delete window.__pmuTrackEvent;
    document.body.innerHTML = "";
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("stays off when no measurement ID is configured", async () => {
    const analytics = await loadAnalytics();
    analytics.initAnalytics();
    analytics.trackPageView("/");
    expect(analytics.analyticsEnabled()).toBe(false);
    expect(gaScripts()).toHaveLength(0);
    expect(window.gtag).toBeUndefined();
  });

  it("ignores a malformed measurement ID", async () => {
    const analytics = await loadAnalytics("UA-12345-1");
    analytics.initAnalytics();
    expect(gaScripts()).toHaveLength(0);
  });

  it("loads gtag once and sends page views itself", async () => {
    const analytics = await loadAnalytics("G-TEST1234");
    analytics.initAnalytics();
    analytics.initAnalytics();

    expect(gaScripts()).toHaveLength(1);
    expect(gaScripts()[0].getAttribute("src")).toContain("id=G-TEST1234");
    expect(pushed()).toContainEqual(["config", "G-TEST1234", { send_page_view: false }]);

    analytics.trackPageView("/contact");
    expect(pushed()).toContainEqual([
      "event",
      "page_view",
      expect.objectContaining({ page_path: "/contact" }),
    ]);
  });

  it("records app store and web app clicks with the store and section", async () => {
    const analytics = await loadAnalytics("G-TEST1234");
    analytics.initAnalytics();

    document.body.innerHTML = `
      <section id="whats-new">
        <a id="android" href="${ANDROID_APP_URL}">Download on Android</a>
        <a id="ios" href="${IOS_APP_URL}">Download on iOS</a>
        <a id="web" href="${WEB_APP_URL}">Try For Free</a>
        <a id="other" href="https://example.com">Elsewhere</a>
      </section>`;
    // stop jsdom from attempting navigation
    document.addEventListener("click", (e) => e.preventDefault());

    for (const id of ["android", "ios", "web", "other"]) {
      document.getElementById(id)!.click();
    }

    const events = pushed().filter((e) => e[0] === "event" && e[1] !== "page_view");
    expect(events).toEqual([
      ["event", "app_download_click", expect.objectContaining({ store: "android", section: "whats-new" })],
      ["event", "app_download_click", expect.objectContaining({ store: "ios" })],
      ["event", "web_app_click", expect.objectContaining({ store: "web_app" })],
    ]);
  });

  it("classifies link destinations", async () => {
    const { linkDestination } = await loadAnalytics();
    expect(linkDestination(ANDROID_APP_URL)).toBe("android");
    expect(linkDestination(IOS_APP_URL)).toBe("ios");
    expect(linkDestination(WEB_APP_URL)).toBe("web_app");
    expect(linkDestination("https://pmuforms.com/contact")).toBeNull();
  });

  describe("with Google Tag Manager", () => {
    it("loads the container with the standard gtm.start event", async () => {
      const analytics = await loadAnalytics(undefined, "GTM-TG36BNNZ");
      analytics.initAnalytics();
      analytics.initAnalytics();

      expect(gtmScripts()).toHaveLength(1);
      expect(gtmScripts()[0].getAttribute("src")).toContain("id=GTM-TG36BNNZ");
      expect(gaScripts()).toHaveLength(0);
      expect(window.dataLayer).toContainEqual(
        expect.objectContaining({ event: "gtm.js", "gtm.start": expect.any(Number) })
      );
      expect(window.gtag).toBeUndefined();
    });

    it("takes precedence over a GA4 ID so nothing is counted twice", async () => {
      const analytics = await loadAnalytics("G-TEST1234", "GTM-TG36BNNZ");
      analytics.initAnalytics();
      expect(gtmScripts()).toHaveLength(1);
      expect(gaScripts()).toHaveLength(0);
    });

    it("pushes page views and events as dataLayer objects", async () => {
      const analytics = await loadAnalytics(undefined, "GTM-TG36BNNZ");
      analytics.initAnalytics();
      analytics.trackPageView("/contact");
      analytics.trackEvent("generate_lead", { form: "contact" });

      document.body.innerHTML = `<footer class="footer"><a id="a" href="${ANDROID_APP_URL}" aria-label="Download on Android"><svg></svg></a></footer>`;
      document.addEventListener("click", (e) => e.preventDefault());
      document.getElementById("a")!.click();

      expect(window.dataLayer).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ event: "virtual_page_view", page_path: "/contact" }),
          { event: "generate_lead", form: "contact" },
          expect.objectContaining({
            event: "app_download_click",
            store: "android",
            section: "footer",
            link_text: "Download on Android", // from aria-label on icon-only links
          }),
        ])
      );
    });

    it("ignores a malformed container ID", async () => {
      const analytics = await loadAnalytics(undefined, "GTM_TG36");
      analytics.initAnalytics();
      expect(gtmScripts()).toHaveLength(0);
      expect(analytics.analyticsEnabled()).toBe(false);
    });
  });
});
