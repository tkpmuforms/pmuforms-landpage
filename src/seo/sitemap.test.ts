import { describe, expect, it } from "vitest";
import { SITE_URL } from "../constants/links";
import { PRERENDER_ROUTES } from "../constants/routes";
import sitemap from "../../public/sitemap.xml?raw";

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

describe("sitemap.xml", () => {
  it("lists every prerendered page exactly once", () => {
    const expected = PRERENDER_ROUTES.map((r) => (r === "/" ? `${SITE_URL}/` : `${SITE_URL}${r}`));
    expect([...locs].sort()).toEqual([...expected].sort());
  });

  it("uses the same URL form as the canonical tags (no trailing slash except home)", () => {
    for (const loc of locs) {
      if (loc === `${SITE_URL}/`) continue;
      expect(loc).not.toMatch(/\/$/);
    }
  });
});
