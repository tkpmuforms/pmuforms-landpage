import { describe, expect, it } from "vitest";
import llms from "../../public/llms.txt?raw";
import { SITE_URL } from "../constants/links";
import {
  MONTHLY_PRICE,
  STARTER_APPOINTMENT_LIMIT,
  STARTER_CLIENT_LIMIT,
  STARTER_PRICE,
  YEARLY_PRICE,
  formatPrice,
} from "../constants/pricing";
import { FORM_TEMPLATES, templatePath } from "../pages/templates/templateData";

describe("llms.txt", () => {
  it("starts with the site name and a summary", () => {
    expect(llms.startsWith("# PMU Forms\n\n> ")).toBe(true);
  });

  it("links every free template", () => {
    for (const t of FORM_TEMPLATES) {
      expect(llms).toContain(`[${t.title}](${SITE_URL}${templatePath(t.slug)})`);
    }
  });

  it("has the current prices and Starter limits", () => {
    for (const price of [STARTER_PRICE, MONTHLY_PRICE, YEARLY_PRICE]) {
      expect(llms).toContain(formatPrice(price));
    }
    expect(llms).toContain(`up to ${STARTER_CLIENT_LIMIT} clients`);
    expect(llms).toContain(`${STARTER_APPOINTMENT_LIMIT} appointments a month`);
  });
});
