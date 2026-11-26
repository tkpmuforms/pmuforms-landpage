import { render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_SIGNUP_URL } from "../constants/links";

/** Every spot that offers the iOS app, rendered with IOS_APP_LIVE set as given. */
async function renderAll(live: boolean) {
  vi.resetModules();
  vi.doMock("../constants/links", async (importOriginal) => ({
    ...(await importOriginal<typeof import("../constants/links")>()),
    IOS_APP_LIVE: live,
  }));
  const modules = await Promise.all([
    import("./home/FirstHeroSection"),
    import("./home/SmartConsentForms"),
    import("./home/SetUpInFourSteps"),
    import("./home/NewFeatures"),
    import("./footer/Footer"),
    import("./pricing/Pricing"),
    import("./navbar/Navbar"),
  ]);
  const { default: TemplateCta } = await import("../pages/templates/TemplateCta");
  render(
    <MemoryRouter>
      {modules.map(({ default: Section }: { default: ComponentType }, i) => (
        <Section key={i} />
      ))}
      <TemplateCta heading="Use it" text="Free" />
    </MemoryRouter>,
  );
  const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href") ?? "");
  return {
    ios: hrefs.filter((h) => h.includes("apps.apple.com")),
    android: hrefs.filter((h) => h === ANDROID_APP_URL),
  };
}

describe("iOS app links", () => {
  afterEach(() => {
    vi.doUnmock("../constants/links");
    vi.resetModules();
  });

  it("sends iPhone visitors to web signup while the new iOS app is in review", async () => {
    const { ios, android } = await renderAll(false);
    expect(ios).toEqual([]);
    expect(screen.queryByText("Download on iOS")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Download on iOS")).not.toBeInTheDocument();
    // Google Play stays everywhere it was
    expect(android).toHaveLength(8);
    const signups = screen.getAllByRole("link", { name: /Sign up free on the web/ });
    expect(signups).toHaveLength(3); // smart consent forms, step 1, footer
    signups.forEach((a) => expect(a).toHaveAttribute("href", WEB_SIGNUP_URL));
    expect(screen.getByRole("link", { name: "sign up on the web" })).toHaveAttribute(
      "href",
      WEB_SIGNUP_URL,
    );
  });

  it("shows the App Store links once the new iOS app is live", async () => {
    const { ios, android } = await renderAll(true);
    expect(ios).toHaveLength(android.length);
    ios.forEach((h) => expect(h).toBe(IOS_APP_URL));
    expect(screen.queryByText(/Sign up free on the web/)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "sign up on the web" })).not.toBeInTheDocument();
  });
});
