import { useState } from "react";
import { MONTHLY_PRICE, STARTER_PRICE, formatPrice } from "../../constants/pricing";
import { HOLIDAY_CLAIM_URL, HOLIDAY_OFFER, useHolidayOffer } from "../../constants/holiday";
import "./holidayOffer.scss";

const STEPS = [
  {
    title: "Bring every form online",
    text: "Clients fill out and sign their consent and medical forms on their phone before they arrive. No clipboards in January.",
  },
  {
    title: "Connect Square",
    text: "New bookings send their forms automatically, and deposits come in by payment link, without the chasing.",
  },
  {
    title: "Put aftercare on autopilot",
    text: "Aftercare and healing check-ins go out on time, and healed photos land in each client's notes.",
  },
];

/**
 * The holiday offer: start the new year with PMU Forms set up, and the first
 * month covered. Prerendered with the page; hides itself after the offer ends.
 */
const HolidayOffer = () => {
  const active = useHolidayOffer();
  const [copied, setCopied] = useState(false);

  if (!active) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(HOLIDAY_OFFER.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the code is on screen to type
    }
  };

  return (
    <section className="holiday-offer" id="holiday-offer" aria-labelledby="holiday-offer-title">
      <div className="holiday-offer__sparkles" aria-hidden="true" />
      <div className="holiday-offer__inner">
        <div className="holiday-offer__pitch">
          <p className="holiday-offer__eyebrow">Holiday offer</p>
          <h2 className="holiday-offer__title" id="holiday-offer-title">
            Start {HOLIDAY_OFFER.year} strong.
            <span> Your first month is on us.</span>
          </h2>
          <p className="holiday-offer__lead">
            Use the quiet weeks to set up your studio, and walk into the new year with forms,
            deposits and aftercare that run themselves. Subscribe with the code below and we'll
            cover your first month, on any plan.
          </p>

          <div className="holiday-offer__code-row">
            <div className="holiday-offer__code" aria-label={`Code ${HOLIDAY_OFFER.code}`}>
              <span className="holiday-offer__code-label">Your code</span>
              <span className="holiday-offer__code-value">{HOLIDAY_OFFER.code}</span>
              <button type="button" className="holiday-offer__copy" onClick={copy}>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <a
              className="holiday-offer__cta"
              href={HOLIDAY_CLAIM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Claim my free month
            </a>
          </div>
          <p className="holiday-offer__fine">
            $0 for your first month, then {formatPrice(STARTER_PRICE)}/month on Starter or{" "}
            {formatPrice(MONTHLY_PRICE)}/month on Pro. On Pro yearly, it's{" "}
            {formatPrice(HOLIDAY_OFFER.discount)} off your first year. Cancel anytime. For new
            subscribers. Works on iPhone, Android and the web.
          </p>
        </div>

        <div className="holiday-offer__plan">
          <p className="holiday-offer__plan-title">Set up over the holidays</p>
          <ol className="holiday-offer__steps">
            {STEPS.map((step, i) => (
              <li key={step.title} className="holiday-offer__step">
                <span className="holiday-offer__step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <p className="holiday-offer__step-title">{step.title}</p>
                  <p className="holiday-offer__step-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="holiday-offer__plan-foot">
            Most artists are set up in about 5 minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HolidayOffer;
