import { describe, expect, it } from "vitest";
import { FAQ_ITEMS } from "../components/home/faqItems";
import { ANDROID_APP_URL, IOS_APP_URL } from "../constants/links";
import { homeStructuredData } from "./schema";

const byType = (type: string) =>
  homeStructuredData["@graph"].find((node) => node["@type"] === type) as Record<string, unknown>;

describe("home structured data", () => {
  it("mirrors the visible FAQ exactly", () => {
    const faq = byType("FAQPage");
    const entities = faq.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
    expect(entities.map((q) => q.name)).toEqual(FAQ_ITEMS.map((q) => q.question));
    expect(entities.map((q) => q.acceptedAnswer.text)).toEqual(FAQ_ITEMS.map((q) => q.answer));
  });

  it("lists both app stores on the organization", () => {
    const org = byType("Organization");
    expect(org.sameAs).toEqual(expect.arrayContaining([IOS_APP_URL, ANDROID_APP_URL]));
  });

  it("has no SoftwareApplication, which is invalid without ratings", () => {
    expect(byType("SoftwareApplication")).toBeUndefined();
  });

  it("makes no unverifiable claims", () => {
    const json = JSON.stringify(homeStructuredData);
    expect(json).not.toMatch(/aggregateRating|ratingValue|reviewCount|FDA|certified/i);
  });
});
