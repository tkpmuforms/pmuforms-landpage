import { useState } from "react";
import "./faq.scss";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { FAQ_ITEMS as faqItems } from "./faqItems";

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


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
              <h3 className="faq__heading">
              <button
                type="button"
                className="faq__question"
                id={`faq-question-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq__question-text">{item.question}</span>
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
              </button>
              </h3>
              {/* always in the page so search engines can read the answers */}
              <div
                className="faq__answer"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={openIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
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
