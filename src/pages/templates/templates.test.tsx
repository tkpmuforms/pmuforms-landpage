import { fireEvent, render, screen, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { PRERENDER_ROUTES } from "../../constants/routes";
import { WEB_APP_URL } from "../../constants/links";
import TemplatePage from "./TemplatePage";
import TemplatesHub from "./TemplatesHub";
import { FORM_TEMPLATES, TEMPLATE_DISCLAIMER } from "./templateData";

const renderAt = (url: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[url]}>
        <Routes>
          <Route path="/templates" element={<TemplatesHub />} />
          <Route path="/templates/:slug" element={<TemplatePage />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );

describe("free template pages", () => {
  it("lists every template on the hub", () => {
    renderAt("/templates");

    expect(screen.getByRole("heading", { level: 1, name: "Free PMU form templates" })).toBeInTheDocument();
    for (const t of FORM_TEMPLATES) {
      expect(screen.getByRole("link", { name: t.title })).toHaveAttribute("href", `/templates/${t.slug}`);
    }
  });

  it.each(FORM_TEMPLATES)("shows the $title with its sections, disclaimer and call to action", (t) => {
    renderAt(`/templates/${t.slug}`);

    expect(screen.getByRole("heading", { level: 1, name: t.title })).toBeInTheDocument();
    const sheet = screen.getByRole("article", { name: t.title });
    for (const section of t.sections) {
      expect(within(sheet).getByRole("heading", { level: 3, name: section.heading })).toBeInTheDocument();
    }
    expect(screen.getByText(TEMPLATE_DISCLAIMER)).toBeInTheDocument();
    const ctas = screen.getAllByRole("link", { name: /Use this form in PMU Forms free/ });
    ctas.forEach((a) => expect(a).toHaveAttribute("href", WEB_APP_URL));
  });

  it("prints the page", () => {
    const print = vi.spyOn(window, "print").mockImplementation(() => {});
    renderAt("/templates/microblading-consent-form");

    fireEvent.click(screen.getByRole("button", { name: "Print this template" }));
    expect(print).toHaveBeenCalledTimes(1);
    print.mockRestore();
  });

  it("shows the not-found page for an unknown template", () => {
    renderAt("/templates/does-not-exist");
    expect(screen.queryByRole("article")).toBeNull();
  });

  it("prerenders the hub and every template", () => {
    expect(PRERENDER_ROUTES).toEqual(
      expect.arrayContaining(["/templates", ...FORM_TEMPLATES.map((t) => `/templates/${t.slug}`)])
    );
  });

  it("makes no approval or compliance claims", () => {
    const text = JSON.stringify(FORM_TEMPLATES).toLowerCase();
    for (const word of ["fda", "certified", "compliant", "compliance", "hipaa", "approved by", "guarantee"]) {
      expect(text).not.toContain(word);
    }
  });
});
