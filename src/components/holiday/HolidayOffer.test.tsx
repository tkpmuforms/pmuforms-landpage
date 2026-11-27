import { act, fireEvent, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HOLIDAY_CLAIM_URL, holidayOfferActive } from "../../constants/holiday";
import HolidayOffer from "./HolidayOffer";

const at = (iso: string) => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(iso));
};

afterEach(() => {
  vi.useRealTimers();
});

describe("HolidayOffer", () => {
  it("pitches the new year and gives the code and a way to claim it", () => {
    at("2026-12-15T12:00:00Z");
    render(<HolidayOffer />);

    expect(
      screen.getByRole("heading", { name: "Start 2027 strong. Your first month is on us." }),
    ).toBeInTheDocument();
    expect(screen.getByText("PMUSTUDIO2027")).toBeInTheDocument();
    expect(screen.getByText(/cover your first month, on any plan/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /\$0 for your first month, then \$9\.99\/month on Starter or \$19\.99\/month on Pro\. On Pro yearly, it's \$19\.99 off your first year\./,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Claim my free month" })).toHaveAttribute(
      "href",
      HOLIDAY_CLAIM_URL,
    );
    expect(HOLIDAY_CLAIM_URL).toMatch(/\?code=PMUSTUDIO2027$/);
    for (const step of ["Bring every form online", "Connect Square", "Put aftercare on autopilot"]) {
      expect(screen.getByText(step)).toBeInTheDocument();
    }
    expect(document.body.textContent).not.toMatch(/guarantee|HIPAA|complian/i);
  });

  it("copies the code", async () => {
    at("2026-12-15T12:00:00Z");
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<HolidayOffer />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy" }));
    });
    expect(writeText).toHaveBeenCalledWith("PMUSTUDIO2027");
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();
  });

  it("is in the prerendered HTML while the offer runs", () => {
    at("2026-12-15T12:00:00Z");
    expect(renderToString(<HolidayOffer />)).toContain("PMUSTUDIO2027");
  });

  it("hides itself after the offer ends", () => {
    at("2027-02-01T06:00:00Z");
    expect(holidayOfferActive()).toBe(false);
    render(<HolidayOffer />);
    expect(screen.queryByText("PMUSTUDIO2027")).toBeNull();
  });

  it("runs through the end of January 2027", () => {
    expect(holidayOfferActive(new Date("2027-01-31T23:00:00-06:00"))).toBe(true);
    expect(holidayOfferActive(new Date("2027-02-01T00:00:00-06:00"))).toBe(false);
  });
});
