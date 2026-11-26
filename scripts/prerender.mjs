/**
 * Writes static HTML for each public route after `vite build`.
 *
 *   dist/index.html                    <- "/"
 *   dist/contact/index.html            <- "/contact"
 *   dist/templates/microblading-consent-form/index.html, ...
 *
 * nginx's `try_files $uri $uri/ /index.html;` serves these directly, so
 * crawlers get real content and per-page meta tags without running JS.
 * The browser then hydrates the same markup (see src/main.tsx).
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("dist/index.html is missing the <!--app-head--> marker or the empty #root div");
}

const { render, PRERENDER_ROUTES } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const failures = [];
for (const route of PRERENDER_ROUTES) {
  try {
    const { html, head } = render(route);
    if (!html || html.length < 500) throw new Error(`rendered only ${html.length} characters`);
    if (!head.includes("<title")) throw new Error("no <title> from Helmet");

    const page = template
      .replace(/<title>[\s\S]*?<\/title>\s*/, "")
      .replace("<!--app-head-->", head)
      .replace(
        '<div id="root"></div>',
        `<div id="root" data-prerendered="${route}">${html}</div>`
      );

    const outFile =
      route === "/" ? join(dist, "index.html") : join(dist, route.slice(1), "index.html");
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, page);
    console.log(`prerendered ${route.padEnd(26)} -> ${outFile.slice(root.length + 1)}`);
  } catch (error) {
    failures.push(route);
    console.error(`prerender failed for ${route}:`, error);
  }
}

rmSync(ssrDir, { recursive: true, force: true });

if (failures.length) {
  console.error(`\n${failures.length} route(s) failed to prerender: ${failures.join(", ")}`);
  process.exit(1);
}
