import { fireEvent, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HOLIDAY_CLAIM_URL } from "../../constants/holiday";
import { ATTRIBUTION_COOKIE, captureAttribution } from "../../attribution";
import { WEB_APP_URL } from "../../constants/links";
import ReferralBanner from "./ReferralBanner";

const at = (url: string) => (
  <MemoryRouter initialEntries={[url]}>
    <ReferralBanner />
  </MemoryRouter>
);

describe("ReferralBanner", () => {
  beforeEach(() => {
    document.cookie = `${ATTRIBUTION_COOKIE}=; Path=/; Max-Age=0`;
    window.localStorage.clear();
  });

  it("invites visitors who came through a referral link", async () => {
    render(at("/?ref=TEST-1234"));

    expect(await screen.findByText(/A fellow artist invited you/)).toBeInTheDocument();
    expect(screen.getByText(/Your first month is free/)).toBeInTheDocument();
    // carries the code into the app, in case the cookie isn't shared
    expect(screen.getByRole("link", { name: "Claim it" })).toHaveAttribute(
      "href",
      `${WEB_APP_URL.replace(/\/+$/, "")}/?code=TEST-1234`,
    );
  });

  it("works for ?code= links and promotion codes too", async () => {
    render(at("/?code=pmu_20_off"));

    expect(await screen.findByText(/A fellow artist invited you/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Claim it" }).getAttribute("href")).toMatch(
      /\?code=PMU_20_OFF$/,
    );
  });

  it("is never part of the prerendered HTML", () => {
    expect(renderToString(at("/?ref=TEST-1234"))).not.toContain("fellow artist");
  });

  it("remembers the invitation on the home page from the stored cookie", async () => {
    captureAttribution({ search: "?ref=TEST-1234", pathname: "/" }, "");
    render(at("/"));
    expect(await screen.findByText(/A fellow artist invited you/)).toBeInTheDocument();
  });

  it("stays hidden without a valid code", () => {
    render(at("/?ref=x"));
    expect(screen.queryByRole("complementary", { name: "Referral invitation" })).toBeNull();
  });

  it("can be dismissed and stays dismissed", async () => {
    const { unmount } = render(at("/?ref=TEST-1234"));

    fireEvent.click(await screen.findByRole("button", { name: "Dismiss invitation" }));
    expect(screen.queryByText(/A fellow artist invited you/)).toBeNull();

    unmount();
    render(at("/?ref=TEST-1234"));
    expect(screen.queryByText(/A fellow artist invited you/)).toBeNull();
  });
});

describe("ReferralBanner during the holiday offer", () => {
  beforeEach(() => {
    document.cookie = `${ATTRIBUTION_COOKIE}=; Path=/; Max-Age=0`;
    window.localStorage.clear();
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-12-15T12:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows the holiday offer to everyone on the home page", async () => {
    render(at("/"));
    const banner = await screen.findByRole("complementary", { name: "Holiday offer" });
    expect(banner).toHaveTextContent("Holiday offer: start 2027 strong.");
    expect(banner).toHaveTextContent("code PMUSTUDIO2027");
    expect(screen.getByRole("link", { name: "Claim it" })).toHaveAttribute(
      "href",
      HOLIDAY_CLAIM_URL,
    );
  });

  it("uses the holiday wording for holiday links, not the referral invitation", async () => {
    render(at("/templates?code=pmustudio2027"));
    expect(await screen.findByRole("complementary", { name: "Holiday offer" })).toBeInTheDocument();
    expect(screen.queryByText(/fellow artist/)).toBeNull();
  });

  it("still shows a friend's invitation first", async () => {
    render(at("/?ref=TEST-1234"));
    expect(await screen.findByText(/A fellow artist invited you/)).toBeInTheDocument();
    expect(screen.queryByRole("complementary", { name: "Holiday offer" })).toBeNull();
  });

  it("is gone once the offer ends", () => {
    vi.setSystemTime(new Date("2027-02-01T07:00:00Z"));
    render(at("/"));
    expect(screen.queryByRole("complementary", { name: "Holiday offer" })).toBeNull();
  });
});
