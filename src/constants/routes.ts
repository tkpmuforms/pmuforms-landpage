import { FORM_TEMPLATES, templatePath } from "../pages/templates/templateData";

/** Routes rendered to static HTML at build time (see scripts/prerender.mjs). */
export const PRERENDER_ROUTES = [
  "/",
  "/contact",
  "/privacy",
  "/terms",
  "/pricing",
  "/templates",
  ...FORM_TEMPLATES.map((t) => templatePath(t.slug)),
];
