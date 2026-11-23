import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ContactForm from "./ContactUs";

// Stand-in for Cloudflare's widget: the test decides when a token is issued.
const widget = vi.hoisted(() => ({
  issue: (() => {}) as (token: string | null) => void,
  reset: vi.fn(),
}));
vi.mock("../turnstile/Turnstile", async () => {
  const { forwardRef, useImperativeHandle } = await import("react");
  return {
    default: forwardRef<
      { reset: () => void },
      { action: string; onVerify: (token: string | null) => void }
    >(function FakeTurnstile({ action, onVerify }, ref) {
      useImperativeHandle(ref, () => ({ reset: widget.reset }));
      widget.issue = onVerify;
      return <div data-testid="turnstile" data-action={action} />;
    }),
  };
});

const fetchMock = vi.fn();

const respond = (status: number, body: unknown) =>
  fetchMock.mockResolvedValueOnce(
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    })
  );

const fill = (values: Partial<Record<string, string>> = {}) => {
  const v = {
    name: "Jane Doe",
    email: "jane@example.com",
    subject: "billing",
    message: "How do I change my subscription plan?",
    ...values,
  };
  fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: v.name } });
  fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: v.email } });
  fireEvent.change(screen.getByLabelText("How Can We Help?"), { target: { value: v.subject } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: v.message } });
};

const pass = (token = "token-1") => act(() => widget.issue(token));
const submitButton = () => screen.getByRole("button", { name: "Send Message" });
const sentBody = (call = 0) => JSON.parse(fetchMock.mock.calls[call][1].body);

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
});

describe("Landing page contact form", () => {
  it("can't be sent until the verification check passes", () => {
    render(<ContactForm />);
    fill();
    expect(screen.getByTestId("turnstile")).toHaveAttribute("data-action", "contact");
    expect(submitButton()).toBeDisabled();
    pass();
    expect(submitButton()).toBeEnabled();
  });

  it("sends trimmed fields with the token, then resets the check", async () => {
    respond(201, { message: {} });
    render(<ContactForm />);
    fill({ name: "  Jane Doe ", message: "  How do I change my subscription plan?  " });
    pass();
    fireEvent.click(submitButton());

    expect(await screen.findByText(/Your message has been sent/)).toBeInTheDocument();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://admin.pmuforms.com/api/messages");
    expect(init.method).toBe("POST");
    expect(sentBody()).toEqual({
      firstName: "Jane Doe",
      email: "jane@example.com",
      subject: "billing",
      message: "How do I change my subscription plan?",
      turnstileToken: "token-1",
      website: "",
    });
    // tokens are single use
    expect(widget.reset).toHaveBeenCalled();
    expect(submitButton()).toBeDisabled();
    expect(screen.getByLabelText("Message")).toHaveValue("");
  });

  it("checks the fields before sending", () => {
    render(<ContactForm />);
    fill({ email: "jane@", message: "hi", name: "Visit www.spam.example", subject: "" });
    pass();
    fireEvent.click(submitButton());

    expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument();
    expect(screen.getByText("Please write at least 10 characters.")).toBeInTheDocument();
    expect(screen.getByText("Your name can't contain links or < > characters.")).toBeInTheDocument();
    expect(screen.getByText("Please choose a subject.")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toHaveAttribute("aria-invalid", "true");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects a message that is only spaces, and caps the length", () => {
    render(<ContactForm />);
    fill({ message: "      " });
    pass();
    fireEvent.click(submitButton());
    expect(screen.getByText("Please enter a message.")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toHaveAttribute("maxLength", "5000");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows the server's reason when the check expired, and keeps what was typed", async () => {
    respond(400, {
      statusCode: 400,
      code: "turnstile_expired",
      message: "The verification check expired. Please complete it again.",
    });
    render(<ContactForm />);
    fill();
    pass();
    fireEvent.click(submitButton());

    expect(
      await screen.findByText("The verification check expired. Please complete it again.")
    ).toBeInTheDocument();
    expect(widget.reset).toHaveBeenCalled();
    expect(submitButton()).toBeDisabled();
    expect(screen.getByLabelText("Message")).toHaveValue("How do I change my subscription plan?");
  });

  it("explains the rate limit", async () => {
    respond(429, { statusCode: 429, message: "ThrottlerException: Too Many Requests" });
    render(<ContactForm />);
    fill();
    pass();
    fireEvent.click(submitButton());
    expect(await screen.findByText(/wait a few minutes/)).toBeInTheDocument();
  });

  it("handles the network being down", async () => {
    fetchMock.mockRejectedValueOnce(new TypeError("Failed to fetch"));
    render(<ContactForm />);
    fill();
    pass();
    fireEvent.click(submitButton());
    expect(await screen.findByText(/An error occurred while sending/)).toBeInTheDocument();
    expect(widget.reset).toHaveBeenCalled();
  });

  it("includes the hidden honeypot field so the server can reject bots", async () => {
    respond(400, { statusCode: 400, code: "rejected", message: "Your message could not be sent." });
    render(<ContactForm />);
    fill();
    const honeypot = screen.getByLabelText("Leave this field empty");
    expect(honeypot).toHaveAttribute("tabIndex", "-1");
    // hidden from screen readers, so people never fill it in
    expect(screen.queryByRole("textbox", { name: "Leave this field empty" })).toBeNull();
    fireEvent.change(honeypot, { target: { value: "http://spam.example" } });
    pass();
    fireEvent.click(submitButton());
    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(sentBody()).toMatchObject({ website: "http://spam.example" });
  });
});
