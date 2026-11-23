import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import FAQ from "./FAQ";
import { FAQ_ITEMS } from "./faqItems";

const renderFAQ = () =>
  render(
    <MemoryRouter>
      <FAQ />
    </MemoryRouter>
  );

describe("FAQ", () => {
  it("keeps every answer in the page so search engines can read them", () => {
    const { container } = renderFAQ();
    const answers = container.querySelectorAll(".faq__answer");
    expect(answers).toHaveLength(FAQ_ITEMS.length);
    FAQ_ITEMS.forEach((item) => {
      expect(container.textContent).toContain(item.answer);
    });
  });

  it("uses buttons that expand and collapse their answer", () => {
    renderFAQ();
    const question = screen.getByRole("button", { name: "Does PMU Forms work with Square?" });
    expect(question).toHaveAttribute("aria-expanded", "false");

    const answerId = question.getAttribute("aria-controls")!;
    const answer = document.getElementById(answerId)!;
    expect(answer).not.toBeVisible();

    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(answer).toBeVisible();

    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "false");
  });

  it("opens only one answer at a time", () => {
    renderFAQ();
    const [first, second] = screen.getAllByRole("button", { expanded: false }).slice(0, 2);
    fireEvent.click(first);
    fireEvent.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });
});
