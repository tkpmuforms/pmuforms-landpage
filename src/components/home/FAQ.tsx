import { useState } from "react";
import "./faq.scss";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is PMU Forms?",
      answer:
        "PMU Forms is a simple, secure platform for artists and professionals to create, share, and manage digital consent forms with their clients. No paper, no stress — everything in one place.",
    },
    {
      question: "Does PMU Forms work with Square?",
      answer:
        "Yes. Connect Square Appointments and match your Square services to your PMU Forms services. New bookings then add the client and appointment to PMU Forms and send the right consent forms, and reschedules in Square move the appointment for you.",
    },
    {
      question: "Can I take deposits and payments from clients?",
      answer:
        "Yes, if you use Square. From any appointment, request a deposit or the balance and PMU Forms emails your client a secure Square payment link. The money goes straight to your Square account, and the appointment shows Paid once the client pays. PMU Forms doesn't add a fee on top; Square's standard processing fees apply.",
    },
    {
      question: "Can I send pre-care, aftercare and healing check-ins?",
      answer:
        "Yes. Send pre-care before the visit and aftercare when you mark the appointment complete, starting from your own forms or with an AI draft if you'd like help. You can also schedule a healing check-in for later, and clients can upload healing photos from a link without logging in. Every email and photo is saved to the client's notes.",
    },
    {
      question: "Can I track my pigments and supplies?",
      answer:
        "Yes. Inventory tracks each product by lot number and expiration date, shows what's low, expiring or expired, and lets you quarantine or recall a lot. Each product has a compliance passport to keep its SDS, certificate of analysis and ingredient documents together. PMU Forms organizes your documentation; it doesn't certify products.",
    },
    {
      question: "Do I need to pay to get started?",
      answer:
        "PMU Forms offers a free trial that lets you explore all features. After the trial period, affordable subscription plans are available to continue using the service.",
    },
    {
      question: "Why do I need to add a card for the free trial?",
      answer:
        "Adding your card ensures a seamless transition after your trial ends. You won't be charged during the trial period, and you can cancel anytime before it ends to avoid any charges.",
    },
    {
      question: "Can I customize the forms?",
      answer:
        "Yes! PMU Forms allows you to customize templates to match your brand and specific service needs. You can add your logo, adjust form fields, and tailor the content to your requirements.",
    },
    {
      question: "Is PMU Forms secure?",
      answer:
        "Absolutely. PMU Forms uses industry-standard encryption to protect all data. Your clients' information and your business documents are stored securely and accessible only to authorized users.",
    },
    {
      question: "Do my clients need to download anything?",
      answer:
        "No, your clients don't need to download anything. They can complete and sign forms directly on their device through a secure link you send them.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <p className="faq__subtitle">
          Everything you need to know about PMU Forms
        </p>

        <div className="faq__list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${
                openIndex === index ? "faq__item--active" : ""
              }`}
            >
              <div className="faq__question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <span className="faq__icon">
                  {openIndex === index ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq__contact-section">
          <div className="faq__avatars">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Support Team"
            />
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Support Team"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Support Team"
            />
          </div>
          <h3 className="faq__contact-title">Still have questions?</h3>
          <p className="faq__contact-text">
            Can't find the answer you're looking for? Please reach out to our
            friendly team.
          </p>

          <Button
            onClick={() => navigate("/contact")}
            className=""
            variant="primary"
            size="small"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
