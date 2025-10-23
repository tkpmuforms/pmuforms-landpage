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
