import { Link } from "react-router-dom";
import ContactForm from "../../components/contact-us/ContactUs";
import Seo from "../../components/seo/Seo";
import { WEB_APP_URL } from "../../constants/links";
import {
  MONTHLY_PRICE,
  STARTER_LIMITS_TEXT,
  STARTER_PRICE,
  YEARLY_PRICE,
  formatPrice,
} from "../../constants/pricing";
import "./contact.scss";

const ContactUs = () => {
  return (
    <div>
      <Seo
        title="Contact Us - PMU Forms Support"
        description="Get in touch with the PMU Forms team. Have questions about our digital consent and aftercare forms? Contact our support team for assistance."
        keywords="PMU Forms contact, support, help, customer service"
        canonical="https://pmuforms.com/contact"
        ogTitle="Contact PMU Forms"
        ogDescription="Reach out to the PMU Forms team for support and inquiries"
        ogUrl="https://pmuforms.com/contact"
      />
      <ContactForm />

      <section className="contact-help" aria-labelledby="contact-help-title">
        <h2 id="contact-help-title">Quick answers</h2>
        <div className="contact-help__grid">
          <div>
            <h3>New to PMU Forms?</h3>
            <p>
              Creating your account is free at{" "}
              <a href={WEB_APP_URL}>artist.pmuforms.com</a>. Set up your services and forms, then
              subscribe when you're ready to send forms to clients. Clients don't need to download
              anything: they open a link, fill in the form and sign on their phone.
            </p>
          </div>
          <div>
            <h3>Plans and billing</h3>
            <p>
              Starter is {formatPrice(STARTER_PRICE)} a month for {STARTER_LIMITS_TEXT}. Pro is{" "}
              {formatPrice(MONTHLY_PRICE)} a month or {formatPrice(YEARLY_PRICE)} a year with no
              limits. Both include every feature. To change or cancel your plan, open Profile →
              Payment in the web app. <Link to="/pricing">See pricing</Link>
            </p>
          </div>
          <div>
            <h3>Need a form today?</h3>
            <p>
              Print our{" "}
              <Link to="/templates">free PMU consent, intake and aftercare templates</Link>,
              including microblading, lip blush and scalp micropigmentation consent forms.
            </p>
          </div>
          <div>
            <h3>How does it work?</h3>
            <p>
              Questions about Square bookings, healing check-ins, pigment lot tracking or adding
              your team are answered in our <Link to="/#faq">frequently asked questions</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
