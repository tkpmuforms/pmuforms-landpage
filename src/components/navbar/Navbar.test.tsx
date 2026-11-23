import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "../../constants/links";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("shows iOS, Android and web app icon links with readable names", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const group = screen.getByRole("group", { name: "Get PMU Forms" });
    const links = within(group).getAllByRole("link");
    expect(links.map((a) => [a.getAttribute("aria-label"), a.getAttribute("href")])).toEqual([
      ["Download on iOS", IOS_APP_URL],
      ["Download on Android", ANDROID_APP_URL],
      ["Open Web App", WEB_APP_URL],
    ]);
    links.forEach((a) => {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a).toHaveAttribute("rel", "noopener noreferrer");
    });
    // the old text button is gone from the navbar
    expect(screen.queryByText("Download on iOS")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Try For Free/ })).toHaveAttribute("href", WEB_APP_URL);
  });

  it("links the logo to the home page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "PMU Forms home" })).toHaveAttribute("href", "/");
  });
});
