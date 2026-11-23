import { beforeEach, describe, expect, it } from "vitest";
import {
  ATTRIBUTION_COOKIE,
  captureAttribution,
  normalizeReferralCode,
  readAttribution,
} from "./attribution";

const visit = (search: string, referrer = "", pathname = "/") =>
  captureAttribution({ search, pathname }, referrer);

const rawCookie = () =>
  document.cookie.split("; ").find((c) => c.startsWith(`${ATTRIBUTION_COOKIE}=`));

describe("attribution", () => {
  beforeEach(() => {
    document.cookie = `${ATTRIBUTION_COOKIE}=; Path=/; Max-Age=0`;
  });

  it("stores campaign parameters in the shared cookie", () => {
    visit("?utm_source=instagram&utm_medium=paid_social&utm_campaign=nov-launch&fbclid=abc123", "", "/templates");

    expect(rawCookie()).toBeDefined();
    expect(readAttribution()).toEqual(
      expect.objectContaining({
        source: "instagram",
        medium: "paid_social",
        campaign: "nov-launch",
        fbclid: "abc123",
        landingPage: "/templates",
        firstSeenAt: expect.any(String),
      })
    );
  });

  it("keeps a referral code when a later ad visit has none", () => {
    visit("?ref=jane-7k2q");
    visit("?utm_source=google&utm_medium=cpc");

    expect(readAttribution()).toEqual(
      expect.objectContaining({ source: "google", medium: "cpc", ref: "JANE-7K2Q" })
    );
  });

  it("lets a new referral code replace the old one", () => {
    visit("?ref=JANE-7K2Q");
    visit("?ref=MIA-22");
    expect(readAttribution()?.ref).toBe("MIA-22");
  });

  it("stores an outside referrer on the first visit only", () => {
    visit("", "https://www.google.com/search?q=pmu+consent+form");
    expect(readAttribution()).toEqual(
      expect.objectContaining({ referrer: "https://www.google.com/search", landingPage: "/" })
    );

    visit("", "https://www.bing.com/");
    expect(readAttribution()?.referrer).toBe("https://www.google.com/search");
  });

  it("ignores our own sites as referrers", () => {
    visit("", "https://pmuforms.com/blogs");
    visit("", "https://artist.pmuforms.com/");
    expect(rawCookie()).toBeUndefined();
  });

  it("drops a malformed referral code", () => {
    visit("?ref=%3Cscript%3E");
    expect(rawCookie()).toBeUndefined();

    visit("?utm_source=tiktok&ref=no");
    expect(readAttribution()).toEqual(expect.objectContaining({ source: "tiktok" }));
    expect(readAttribution()?.ref).toBeUndefined();
  });

  it("normalizes referral codes", () => {
    expect(normalizeReferralCode(" jane-7k2q ")).toBe("JANE-7K2Q");
    expect(normalizeReferralCode("ab")).toBeUndefined();
    expect(normalizeReferralCode("a b c d")).toBeUndefined();
  });

  it("survives a garbled cookie", () => {
    document.cookie = `${ATTRIBUTION_COOKIE}=%7Bnot-json; Path=/`;
    expect(readAttribution()).toBeNull();
  });
});
