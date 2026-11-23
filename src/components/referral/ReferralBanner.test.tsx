import { fireEvent, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
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
    expect(screen.getByRole("link", { name: "Claim it" })).toHaveAttribute("href", WEB_APP_URL);
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
