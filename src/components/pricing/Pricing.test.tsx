import { render, screen, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HOLIDAY_CLAIM_URL } from "../../constants/holiday";
import { WEB_APP_URL } from "../../constants/links";
import {
  INCLUDED,
  PRICING_FAQ,
  PRICING_OFFERS,
  YEARLY_PER_MONTH,
  YEARLY_SAVINGS,
  YEARLY_SAVINGS_PERCENT,
} from "../../constants/pricing";
import PricingPage from "../../pages/pricing/PricingPage";
import { homeStructuredData } from "../../seo/schema";
import Pricing from "./Pricing";

describe("pricing numbers", () => {
  it("works out the yearly savings from $19.99/month and $149.99/year", () => {
    expect(YEARLY_PER_MONTH).toBe(12.5);
    expect(YEARLY_SAVINGS).toBe(89.89);
    expect(YEARLY_SAVINGS_PERCENT).toBe(37);
  });

  it("gives search engines the same prices as the page", () => {
    expect(PRICING_OFFERS.map((o) => [o.name, o.price, o.priceCurrency])).toEqual([
      ["Monthly", "19.99", "USD"],
      ["Yearly", "149.99", "USD"],
    ]);
    const app = homeStructuredData["@graph"].find(
      (n) => n["@type"] === "SoftwareApplication",
    ) as { offers?: unknown };
    expect(app.offers).toEqual(PRICING_OFFERS);
  });

  it("makes no certification or compliance claims", () => {
    const text = JSON.stringify([INCLUDED, PRICING_FAQ]);
    expect(text).not.toMatch(/FDA|certif|complian|HIPAA|guarantee/i);
  });
});

describe("Pricing section", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows the holiday code on the monthly plan while the offer runs", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-12-15T12:00:00Z"));
    render(<Pricing />);
    const monthly = screen.getByRole("article", { name: "Monthly" });
    expect(monthly).toHaveTextContent(
      "Holiday offer: your first month is free with code PMUSTUDIO2027.",
    );
    expect(within(monthly).getByRole("link", { name: "Claim my free month" })).toHaveAttribute(
      "href",
      HOLIDAY_CLAIM_URL,
    );
  });

  it("shows both plans with their prices and a way to start", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2027-03-01T12:00:00Z")); // after the holiday offer
    render(<Pricing />);

    const monthly = screen.getByRole("article", { name: "Monthly" });
    expect(monthly).toHaveTextContent("$19.99/month");
    expect(within(monthly).getByRole("link", { name: "Get started" })).toHaveAttribute(
      "href",
      WEB_APP_URL,
    );

    const yearly = screen.getByRole("article", { name: "Yearly" });
    expect(yearly).toHaveTextContent("$149.99/year");
    expect(yearly).toHaveTextContent("Just $12.50 a month. You save $89.89 a year.");
    expect(yearly).toHaveTextContent("Best value · Save 37%");
  });

  it("lists everything included", () => {
    render(<Pricing />);
    for (const group of INCLUDED) {
      expect(screen.getByRole("heading", { name: group.title })).toBeInTheDocument();
      for (const item of group.items) expect(screen.getByText(item)).toBeInTheDocument();
    }
    expect(screen.getByText(/About \$0\.41 a day/)).toBeInTheDocument();
  });

  it("is the page's h1 on /pricing, with billing questions", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <PricingPage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "One plan. Everything included." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Billing questions" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Can I cancel anytime?" })).toBeInTheDocument();
  });
});
