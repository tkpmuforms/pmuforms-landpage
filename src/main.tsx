import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initAnalytics } from "./analytics";

initAnalytics();

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages built by scripts/prerender.mjs arrive with their HTML already in place
// and are hydrated. Anything else (unknown URLs that nginx answers with the
// home page's HTML) is rendered fresh so the wrong page never flashes.
const normalise = (path: string) => path.replace(/\/+$/, "") || "/";
const prerenderedFor = root.dataset.prerendered;

if (prerenderedFor && normalise(prerenderedFor) === normalise(window.location.pathname)) {
  hydrateRoot(root, app);
} else {
  root.textContent = "";
  createRoot(root).render(app);
}
