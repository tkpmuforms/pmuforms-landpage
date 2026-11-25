import { useEffect, useState } from "react";
import { WEB_APP_URL } from "./links";
import { MONTHLY_PRICE } from "./pricing";

/**
 * The holiday offer: the first month free with a Stripe promotion code
 * ($19.99 off the first payment). The API offers the same code in the
 * welcome emails and on the web payment step (SIGNUP_PROMO_CODE).
 *
 * After `endsAt` the section, banner and pricing note hide by themselves.
 * Keep it in step with the code's expiry in Stripe.
 */
export const HOLIDAY_OFFER = {
  code: "PMUSTUDIO2027",
  /** the end of Jan 31, 2027, US Central time */
  endsAt: "2027-02-01T06:00:00Z",
  discount: MONTHLY_PRICE,
  year: 2027,
} as const;

export const holidayOfferActive = (now: Date = new Date()) =>
  now.getTime() < new Date(HOLIDAY_OFFER.endsAt).getTime();

/** Opens the artist app with the code saved, so it's applied at payment. */
export const HOLIDAY_CLAIM_URL = `${WEB_APP_URL.replace(/\/+$/, "")}/?code=${HOLIDAY_OFFER.code}`;

/**
 * Whether to show the holiday offer. True in the prerendered HTML (so it's
 * there for search engines and doesn't flash in), then checked against the
 * visitor's clock once the page loads.
 */
export const useHolidayOffer = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(holidayOfferActive());
  }, []);
  return active;
};
