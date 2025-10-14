import "./contactform.scss";

const ContactForm = () => {
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
                  Email: support@pmuforms.com
                </li>
                <li>
                  <span className="contact-icon">📱</span>
                  Text Support: 857-222-5582 (Mon-Fri, 9am-5pm EST)
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Your name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg.yourmail@pmuforms.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">How Can We Help?</label>
                <select id="subject" className="form-select">
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Type your message here..."
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
