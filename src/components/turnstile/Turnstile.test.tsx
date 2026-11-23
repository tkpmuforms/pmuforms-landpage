import { createRef } from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Turnstile, { type TurnstileHandle } from "./Turnstile";

type Options = Record<string, unknown> & {
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": (code?: string) => void;
};

let options: Options;
const fake = {
  render: vi.fn((_el: HTMLElement, opts: Options) => {
    options = opts;
    return "widget-1";
  }),
  reset: vi.fn(),
  remove: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
  window.turnstile = fake as unknown as Window["turnstile"];
});

afterEach(() => {
  delete window.turnstile;
});

const setup = (siteKey = "site-key") => {
  const onVerify = vi.fn();
  const ref = createRef<TurnstileHandle>();
  const utils = render(
    <Turnstile ref={ref} siteKey={siteKey} action="contact" onVerify={onVerify} />
  );
  return { ...utils, onVerify, ref };
};

const rendered = () => waitFor(() => expect(fake.render).toHaveBeenCalled());

describe("Turnstile", () => {
  it("renders the widget with the site key and action", async () => {
    setup();
    await rendered();
    expect(options).toMatchObject({
      sitekey: "site-key",
      action: "contact",
      "refresh-expired": "auto",
    });
  });

  it("passes the token on, and withdraws it when it expires", async () => {
    const { onVerify } = setup();
    await rendered();
    act(() => options.callback("tok"));
    expect(onVerify).toHaveBeenLastCalledWith("tok");

    act(() => options["expired-callback"]());
    expect(onVerify).toHaveBeenLastCalledWith(null);
    expect(screen.getByRole("status")).toHaveTextContent("expired");
  });

  it("shows an error with a way to try again", async () => {
    const { onVerify } = setup();
    await rendered();
    act(() => options["error-callback"]("300030"));
    expect(onVerify).toHaveBeenLastCalledWith(null);
    expect(screen.getByRole("alert")).toHaveTextContent("couldn't load");

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(fake.reset).toHaveBeenCalledWith("widget-1");
  });

  it("can be reset after a submission", async () => {
    const { ref, onVerify } = setup();
    await rendered();
    act(() => ref.current?.reset());
    expect(fake.reset).toHaveBeenCalledWith("widget-1");
    expect(onVerify).toHaveBeenLastCalledWith(null);
  });

  it("removes the widget when the page closes", async () => {
    const { unmount } = setup();
    await rendered();
    unmount();
    expect(fake.remove).toHaveBeenCalledWith("widget-1");
  });

  it("says so, instead of rendering, when no site key is configured", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    setup("");
    expect(screen.getByRole("alert")).toHaveTextContent("can't be sent right now");
    expect(fake.render).not.toHaveBeenCalled();
  });

  it("loads Cloudflare's script when it isn't on the page yet", async () => {
    delete window.turnstile;
    const append = vi.spyOn(document.head, "appendChild");
    setup();
    const script = append.mock.calls[0][0] as HTMLScriptElement;
    expect(script.src).toContain("challenges.cloudflare.com/turnstile");
    expect(script.src).toContain("render=explicit");

    window.turnstile = fake as unknown as Window["turnstile"];
    act(() => script.onload?.(new Event("load")));
    await rendered();
    append.mockRestore();
  });
});
