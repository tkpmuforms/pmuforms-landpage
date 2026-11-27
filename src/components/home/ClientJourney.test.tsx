import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ClientJourney from "./ClientJourney";

describe("ClientJourney", () => {
  it("walks from booking to healing without a payment step", () => {
    render(<ClientJourney />);
    const steps = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(steps).toEqual([
      "Booked",
      "Forms & pre-care",
      "Treatment",
      "Aftercare",
      "Healing check-in",
    ]);
    expect(screen.queryByText(/Deposit/)).toBeNull();
    expect(screen.getByText(/create your own forms and services/)).toBeInTheDocument();
  });
});
