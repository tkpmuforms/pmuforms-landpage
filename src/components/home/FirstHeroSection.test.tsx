import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DEMO_URL } from "../../constants/links";
import FirstHeroSection from "./FirstHeroSection";

describe("FirstHeroSection", () => {
  it("offers the demo video instead of a second sign-up button", () => {
    render(<FirstHeroSection />);
    expect(screen.getByRole("link", { name: /Watch a Demo/ })).toHaveAttribute(
      "href",
      DEMO_URL,
    );
    expect(DEMO_URL).toMatch(/Complete-video\.MP4$/);
    expect(screen.queryByText("Try For Free")).not.toBeInTheDocument();
  });
});
