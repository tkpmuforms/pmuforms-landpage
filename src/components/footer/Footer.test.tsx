import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DEMO_URL, WEB_APP_URL } from "../../constants/links";
import Footer from "./Footer";

describe("Footer", () => {
  it("has one button per destination", () => {
    render(<Footer />);
    const webLinks = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href") === WEB_APP_URL);
    expect(webLinks).toHaveLength(1);
    expect(webLinks[0]).toHaveTextContent("Open Web App");
    expect(screen.getByRole("link", { name: /Watch a Demo/ })).toHaveAttribute("href", DEMO_URL);
  });

  it("only links to sections that are on the home page", () => {
    render(<Footer />);
    const anchors = screen
      .getAllByRole("link")
      .map((a) => a.getAttribute("href") ?? "")
      .filter((h) => h.startsWith("/#"));
    expect(anchors).toEqual(["/#journey", "/#whats-new", "/#review", "/#faq"]);
  });
});
