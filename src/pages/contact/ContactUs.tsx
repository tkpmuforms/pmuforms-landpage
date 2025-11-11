import ContactForm from "../../components/contact-us/ContactUs";
import Seo from "../../components/seo/Seo";

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
    </div>
  );
};

export default ContactUs;
