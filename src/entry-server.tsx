/**
 * Build-time renderer: turns each route into static HTML so search engines and
 * link previews (Facebook, WhatsApp, LinkedIn, iMessage) see real content and
 * per-page meta tags. Used only by scripts/prerender.mjs, never in the browser.
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import { PRERENDER_ROUTES } from "./constants/routes";

export { PRERENDER_ROUTES };

export function render(url: string): { html: string; head: string } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  const { helmet } = helmetContext;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script]
        .map((part) => part.toString())
        .filter(Boolean)
        .join("\n    ")
    : "";
  return { html, head };
}
