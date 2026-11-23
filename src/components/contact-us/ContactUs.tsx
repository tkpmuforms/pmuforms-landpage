import { useRef, useState } from "react";
import Turnstile, { type TurnstileHandle } from "../turnstile/Turnstile";
import { trackEvent } from "../../analytics";
import "./contactform.scss";

const API_URL = import.meta.env.VITE_API_URL || "https://admin.pmuforms.com";

interface FormData {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

interface NotificationState {
  type: "success" | "error" | null;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;

/** Same limits the API enforces. */
const LIMITS = {
  firstName: 100,
  email: 254,
  subject: 150,
  message: { min: 10, max: 5000 },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINK_OR_MARKUP = /https?:\/\/|www\.|[<>]/i;

const validate = (data: FormData): FieldErrors => {
  const errors: FieldErrors = {};
  const firstName = data.firstName.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!firstName) errors.firstName = "Please enter your name.";
  else if (firstName.length > LIMITS.firstName)
    errors.firstName = `Use at most ${LIMITS.firstName} characters.`;
  else if (LINK_OR_MARKUP.test(firstName))
    errors.firstName = "Your name can't contain links or < > characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email))
    errors.email = "Enter a valid email address.";

  if (!data.subject) errors.subject = "Please choose a subject.";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length < LIMITS.message.min)
    errors.message = `Please write at least ${LIMITS.message.min} characters.`;
  else if (message.length > LIMITS.message.max)
    errors.message = `Use at most ${LIMITS.message.max} characters.`;

  return errors;
};

/** What to tell the visitor when the API refuses the message. */
const failureMessage = (status: number, body: unknown) => {
  if (status === 429) {
    return "You've sent several messages in a short time. Please wait a few minutes and try again.";
  }
  const data = (body ?? {}) as { code?: unknown; message?: unknown };
  if (typeof data.code === "string" && typeof data.message === "string") {
    return data.message;
  }
  if (Array.isArray(data.message) && typeof data.message[0] === "string") {
    return data.message[0];
  }
  return "Failed to send your message. Please try again or contact us directly.";
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState<NotificationState>({
    type: null,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  // honeypot: hidden from people, so only bots fill it in
  const [website, setWebsite] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const turnstile = useRef<TurnstileHandle>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => {
      if (!prev[id as keyof FormData]) return prev;
      const next = { ...prev };
      delete next[id as keyof FormData];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setNotification({
        type: "error",
        message: "Please check the highlighted fields.",
      });
      return;
    }
    if (!token) {
      setNotification({
        type: "error",
        message: "Please complete the verification check.",
      });
      return;
    }

    setIsLoading(true);
    setNotification({ type: null, message: "" });

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          turnstileToken: token,
          website,
        }),
      });

      if (response.ok) {
        trackEvent("generate_lead", { form: "contact" });
        setNotification({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const body = await response.json().catch(() => null);
        setNotification({
          type: "error",
          message: failureMessage(response.status, body),
        });
      }
    } catch (error) {
      setNotification({
        type: "error",
        message:
          "An error occurred while sending your message. Please try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      // a token can only be used once, so get a fresh one for the next try
      setToken(null);
      turnstile.current?.reset();
      setIsLoading(false);
    }
  };

  const fieldProps = (name: keyof FormData) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const fieldError = (name: keyof FormData) =>
    errors[name] ? (
      <span id={`${name}-error`} className="field-error">
        {errors[name]}
      </span>
    ) : null;

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-content">
          <div className="contact-text">
            <h1 className="contact-title">
              Get in Touch with the PMU Forms Team
            </h1>
            <p className="contact-description">
              Whether you have a question, need help getting started, or just
              want to say hi — we'd love to hear from you.
            </p>

            <div className="contact-info">
              <h3 className="contact-info-title">
                Prefer to reach us directly?
              </h3>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📧</span>
                  Email: contact@pmuforms.com
                </li>
                <li>
                  <span className="contact-icon">📱</span>
                  Text Support: 5125211052 (Mon-Fri, 9am-5pm EST)
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {notification.type && (
              <div className={`notification ${notification.type}`} role="alert">
                <span className="notification-icon">
                  {notification.type === "success" ? "✓" : "✗"}
                </span>
                <span className="notification-message">
                  {notification.message}
                </span>
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div
                className="form-group"
                style={{ "--field-index": 0 } as React.CSSProperties}
              >
                <label htmlFor="firstName">Full Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your name"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  maxLength={LIMITS.firstName}
                  autoComplete="name"
                  {...fieldProps("firstName")}
                />
                {fieldError("firstName")}
              </div>

              <div
                className="form-group"
                style={{ "--field-index": 1 } as React.CSSProperties}
              >
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg.yourmail@pmuforms.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  maxLength={LIMITS.email}
                  autoComplete="email"
                  {...fieldProps("email")}
                />
                {fieldError("email")}
              </div>

              <div
                className="form-group"
                style={{ "--field-index": 2 } as React.CSSProperties}
              >
                <label htmlFor="subject">How Can We Help?</label>
                <select
                  id="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  {...fieldProps("subject")}
                >
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
                {fieldError("subject")}
              </div>

              <div
                className="form-group"
                style={{ "--field-index": 3 } as React.CSSProperties}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Type your message here..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  maxLength={LIMITS.message.max}
                  {...fieldProps("message")}
                />
                {fieldError("message")}
              </div>

              {/* Honeypot. Off-screen rather than display:none, which some bots skip. */}
              <div className="contact-hp" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <Turnstile ref={turnstile} action="contact" onVerify={setToken} />

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading || !token}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
