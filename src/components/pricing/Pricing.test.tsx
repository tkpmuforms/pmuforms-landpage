import { render, screen, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FAQ_ITEMS } from "../home/faqItems";
import { HOLIDAY_CLAIM_URL } from "../../constants/holiday";
import { WEB_APP_URL } from "../../constants/links";
import {
  INCLUDED,
  PRICING_FAQ,
  PRICING_OFFERS,
  STARTER_APPOINTMENT_LIMIT,
  STARTER_CLIENT_LIMIT,
  STARTER_PRICE,
  YEARLY_PER_MONTH,
  YEARLY_SAVINGS,
  YEARLY_SAVINGS_PERCENT,
} from "../../constants/pricing";
import PricingPage from "../../pages/pricing/PricingPage";
import { homeStructuredData } from "../../seo/schema";
import Pricing from "./Pricing";

const at = (iso: string) => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(iso));
};

describe("pricing numbers", () => {
  it("works out Pro's yearly savings from $19.99/month and $149.99/year", () => {
    expect(YEARLY_PER_MONTH).toBe(12.5);
    expect(YEARLY_SAVINGS).toBe(89.89);
    expect(YEARLY_SAVINGS_PERCENT).toBe(37);
  });

  it("has Starter at $9.99 with 10 clients and 5 appointments a month", () => {
    expect(STARTER_PRICE).toBe(9.99);
    expect(STARTER_CLIENT_LIMIT).toBe(10);
    expect(STARTER_APPOINTMENT_LIMIT).toBe(5);
  });

  it("gives search engines the same prices as the page", () => {
    expect(PRICING_OFFERS.map((o) => [o.name, o.price, o.priceCurrency])).toEqual([
      ["Starter (monthly)", "9.99", "USD"],
      ["Pro (monthly)", "19.99", "USD"],
      ["Pro (yearly)", "149.99", "USD"],
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

  it("never says the plans differ only in price", () => {
    const text = JSON.stringify([PRICING_FAQ, FAQ_ITEMS]);
    expect(text).not.toMatch(/only the price|one plan|both plans include everything/i);
  });

  it("answers the Starter questions", () => {
    const questions = PRICING_FAQ.map((q) => q.question);
    expect(questions).toEqual(
      expect.arrayContaining([
        "Which plan is right for me?",
        "What happens when I reach the Starter limit?",
        "Can I upgrade to Pro anytime?",
      ]),
    );
    const limit = PRICING_FAQ.find((q) => q.question.includes("Starter limit"))!;
    expect(limit.answer).toMatch(/Nothing is deleted/);
    expect(limit.answer).toMatch(/Square booking/);
    expect(limit.answer).toMatch(/email you/);
  });
});

describe("Pricing section", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows the first month free on any plan while the holiday offer runs", () => {
    at("2026-12-15T12:00:00Z");
    render(<Pricing />);
    expect(screen.getByText("First month free on any plan.")).toBeInTheDocument();
    expect(screen.getByText("PMUSTUDIO2027")).toBeInTheDocument();
    // both plans' buttons carry the code into the app
    for (const [plan, cta] of [
      ["Starter", "Get Starter"],
      ["Pro Monthly", "Get Pro Monthly"],
      ["Pro Yearly", "Get Pro Yearly"],
    ]) {
      const card = screen.getByRole("article", { name: plan });
      expect(within(card).getByRole("link", { name: cta })).toHaveAttribute(
        "href",
        HOLIDAY_CLAIM_URL,
      );
    }
  });

  it("hides the holiday line after the offer ends", () => {
    at("2027-03-01T12:00:00Z");
    render(<Pricing />);
    expect(screen.queryByText("First month free on any plan.")).toBeNull();
    expect(screen.queryByText("PMUSTUDIO2027")).toBeNull();
  });

  it("shows Starter with its price and limits, and everything else included", () => {
    at("2027-03-01T12:00:00Z");
    render(<Pricing />);

    const starter = screen.getByRole("article", { name: "Starter" });
    expect(starter).toHaveTextContent("$9.99/month");
    expect(starter).toHaveTextContent("Best for part-time artists. We've got you covered.");
    expect(starter).toHaveTextContent("Up to 10 clients at a time.");
    expect(starter).toHaveTextContent("Deleting a client frees a space.");
    expect(starter).toHaveTextContent("Up to 5 appointments a month.");
    expect(starter).toHaveTextContent("Everything else is included, just like Pro.");
    expect(starter).not.toHaveTextContent("/year");
    expect(within(starter).getByRole("link", { name: "Get Starter" })).toHaveAttribute(
      "href",
      WEB_APP_URL,
    );
  });

  it("shows Pro monthly and Pro yearly as their own unlimited plans", () => {
    at("2027-03-01T12:00:00Z");
    render(<Pricing />);

    const monthly = screen.getByRole("article", { name: "Pro Monthly" });
    expect(monthly).toHaveTextContent("$19.99/month");
    expect(monthly).toHaveTextContent("Unlimited clients");
    expect(monthly).toHaveTextContent("Unlimited appointments");
    expect(within(monthly).getByRole("link", { name: "Get Pro Monthly" })).toHaveAttribute(
      "href",
      WEB_APP_URL,
    );

    const yearly = screen.getByRole("article", { name: "Pro Yearly" });
    expect(yearly).toHaveTextContent("Best value · Save 37%");
    expect(yearly).toHaveTextContent("$149.99/year");
    expect(yearly).toHaveTextContent("Just $12.50 a month. You save $89.89 a year.");
    expect(yearly).toHaveTextContent("Unlimited clients");
    expect(within(yearly).getByRole("link", { name: "Get Pro Yearly" })).toHaveAttribute(
      "href",
      WEB_APP_URL,
    );
  });

  it("explains upgrading and the referral discount", () => {
    render(<Pricing />);
    expect(screen.getByText(/upgrade to Pro anytime in the web app/)).toBeInTheDocument();
    expect(
      screen.getByText(/\$19\.99 off your first payment in the web app\. That's your first month free on Starter or Pro monthly\./),
    ).toBeInTheDocument();
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
      screen.getByRole("heading", { level: 1, name: "Two plans. Every feature in both." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Billing questions" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Can I cancel anytime?" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "What happens when I reach the Starter limit?" }),
    ).toBeInTheDocument();
  });
});
