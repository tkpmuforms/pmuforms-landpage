import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ReasonsWhyUsePmu from "./ReasonsWhyUsePmu";
import { REASONS } from "./reasons";

describe("why artists switch", () => {
  it("shows every reason at once, with no see-more button", () => {
    render(<ReasonsWhyUsePmu />);

    const section = screen.getByRole("region", { name: "Why artists switch to PMU Forms" });
    const cards = within(section).getAllByRole("listitem");
    expect(cards).toHaveLength(REASONS.length);
    REASONS.forEach((r) => {
      expect(within(section).getByRole("heading", { level: 3, name: r.title })).toBeInTheDocument();
    });
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("makes no legal or compliance claims", () => {
    const text = JSON.stringify(REASONS.map(({ title, description }) => ({ title, description })));
    expect(text).not.toMatch(/legally|binding|legal proof|complian|HIPAA|certif|guarantee/i);
  });
});
