import {
  ANDROID_APP_URL,
  IOS_APP_LIVE,
  IOS_APP_URL,
  WEB_APP_URL,
  WEB_SIGNUP_URL,
} from "../../constants/links";
import {
  INCLUDED,
  MONTHLY_PRICE,
  REFERRAL_DISCOUNT,
  YEARLY_PER_DAY,
  YEARLY_PER_MONTH,
  YEARLY_PRICE,
  YEARLY_SAVINGS,
  YEARLY_SAVINGS_PERCENT,
  formatPrice,
} from "../../constants/pricing";
import { HOLIDAY_CLAIM_URL, HOLIDAY_OFFER, useHolidayOffer } from "../../constants/holiday";
import "./pricing.scss";

const Check = () => (
  <svg className="pricing__check" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#f4e3f4" />
    <path
      d="M7 12.5l3.2 3.2L17 9"
      fill="none"
      stroke="#8e2d8e"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PricingProps {
  /** h1 on the /pricing page, h2 inside the home page */
  headingLevel?: "h1" | "h2";
}

/** The two plans and everything they include. Used on the home page and /pricing. */
const Pricing = ({ headingLevel = "h2" }: PricingProps) => {
  const Heading = headingLevel;
  const holiday = useHolidayOffer();

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing__container">
        <header className="pricing__header">
          <p className="pricing__eyebrow">Pricing</p>
          <Heading className="pricing__title" id="pricing-title">
            One plan. Everything included.
          </Heading>
          <p className="pricing__lead">
            Every feature, on every device, for one simple price. Pay monthly, or pay
            yearly and save {YEARLY_SAVINGS_PERCENT}%.
          </p>
        </header>

        <div className="pricing__plans">
          <article className="pricing__plan" aria-labelledby="plan-monthly">
            <h3 className="pricing__plan-name" id="plan-monthly">
              Monthly
            </h3>
            <p className="pricing__price">
              <span className="pricing__amount">{formatPrice(MONTHLY_PRICE)}</span>
              <span className="pricing__period">/month</span>
            </p>
            <p className="pricing__note">Billed monthly. Cancel anytime.</p>
            {holiday && (
              <p className="pricing__holiday">
                🎁 Holiday offer: your first month is free with code{" "}
                <strong>{HOLIDAY_OFFER.code}</strong>.
              </p>
            )}
            <a
              className="pricing__cta"
              href={holiday ? HOLIDAY_CLAIM_URL : WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {holiday ? "Claim my free month" : "Get started"}
            </a>
          </article>

          <article
            className="pricing__plan pricing__plan--featured"
            aria-labelledby="plan-yearly"
          >
            <span className="pricing__badge">Best value · Save {YEARLY_SAVINGS_PERCENT}%</span>
            <h3 className="pricing__plan-name" id="plan-yearly">
              Yearly
            </h3>
            <p className="pricing__price">
              <span className="pricing__amount">{formatPrice(YEARLY_PRICE)}</span>
              <span className="pricing__period">/year</span>
            </p>
            <p className="pricing__note">
              Just {formatPrice(YEARLY_PER_MONTH)} a month. You save{" "}
              {formatPrice(YEARLY_SAVINGS)} a year.
            </p>
            <a
              className="pricing__cta pricing__cta--primary"
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the yearly plan
            </a>
          </article>
        </div>

        {IOS_APP_LIVE ? (
          <p className="pricing__apps">
            Prefer your phone? Subscribe in the{" "}
            <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
              iPhone app
            </a>{" "}
            or the{" "}
            <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer">
              Android app
            </a>
            . One subscription works everywhere.
          </p>
        ) : (
          <p className="pricing__apps">
            Prefer your phone? Subscribe in the{" "}
            <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer">
              Android app
            </a>
            , or{" "}
            <a href={WEB_SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              sign up on the web
            </a>{" "}
            from your iPhone's browser. One subscription works everywhere.
          </p>
        )}

        <div className="pricing__included">
          <h3 className="pricing__included-title">Everything included in both plans</h3>
          <div className="pricing__groups">
            {INCLUDED.map((group) => (
              <div className="pricing__group" key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing__value">
          <p>
            <strong>About {formatPrice(YEARLY_PER_DAY)} a day</strong> on the yearly
            plan. One deposit collected instead of a no-show covers months of PMU Forms.
          </p>
          <p className="pricing__referral">
            Invited by another artist? Sign up with their link and get{" "}
            {formatPrice(REFERRAL_DISCOUNT)} off your first payment in the web app.
          </p>
        </div>

        <p className="pricing__fine">
          Prices in US dollars. Taking payments needs a Square account; Square's standard
          processing fees apply.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
