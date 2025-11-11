import { useState } from "react";
import "./contactform.scss";

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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.firstName.trim() ||
      !formData.email.trim() ||
      !formData.subject ||
      !formData.message.trim()
    ) {
      setNotification({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);
    setNotification({ type: null, message: "" });

    try {
      const response = await fetch("https://admin.pmuforms.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
        setNotification({
          type: "error",
          message:
            "Failed to send your message. Please try again or contact us directly.",
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
      setIsLoading(false);
    }
  };

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
            <form className="contact-form" onSubmit={handleSubmit}>
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
                />
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
                />
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
                >
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
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
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
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
