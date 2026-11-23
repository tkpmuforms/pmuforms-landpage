import type { FAQItem } from "../components/home/faqItems";
import { SUPPORT_EMAIL } from "./links";

/**
 * PMU Forms plans. Both include every feature; the yearly plan is cheaper.
 * Change prices here only; the pricing section, the /pricing page and the
 * structured data all read from this file.
 */
export const MONTHLY_PRICE = 19.99;
export const YEARLY_PRICE = 149.99;

const round2 = (n: number) => Math.round(n * 100) / 100;

export const YEARLY_PER_MONTH = round2(YEARLY_PRICE / 12); // 12.50
export const YEARLY_SAVINGS = round2(MONTHLY_PRICE * 12 - YEARLY_PRICE); // 89.89
export const YEARLY_SAVINGS_PERCENT = Math.round(
  (YEARLY_SAVINGS / (MONTHLY_PRICE * 12)) * 100,
); // 37
export const YEARLY_PER_DAY = round2(YEARLY_PRICE / 365); // 0.41

/** Referral discount a friend gets on their first web payment (matches the API). */
export const REFERRAL_DISCOUNT = 19.99;

export const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

export interface IncludedGroup {
  title: string;
  items: string[];
}

/** Everything a subscription includes, grouped for the pricing section. */
export const INCLUDED: IncludedGroup[] = [
  {
    title: "Consent forms",
    items: [
      "30+ ready-made PMU and beauty forms",
      "Edit any form, or remove questions you don't need",
      "Your own form link clients fill out on their phone",
      "Handwritten e-signatures for client and artist",
      "Signed forms stored for you, with PDF export",
    ],
  },
  {
    title: "Client care",
    items: [
      "Pre-care emails before the appointment",
      "Aftercare emails when you mark it complete",
      "Healing check-ins with client photo upload",
      "Client notes and before/after photos",
      "Optional AI drafts for care emails",
    ],
  },
  {
    title: "Bookings and payments",
    items: [
      "Square Appointments sync: new bookings get their forms automatically",
      "Deposits and payments by Square payment link",
      "No PMU Forms fee on payments (Square's standard fees apply)",
    ],
  },
  {
    title: "Inventory",
    items: [
      "Pigments and supplies tracked by lot and expiry",
      "See what's low, expiring or expired at a glance",
      "Record which lot you used on each client",
      "SDS and product documents kept in one place",
    ],
  },
  {
    title: "Everywhere you work",
    items: [
      "iPhone, Android and web apps",
      "One subscription works on all of them",
      `Email support from real people at ${SUPPORT_EMAIL}`,
    ],
  },
];

/** Billing questions, shown on /pricing. */
export const PRICING_FAQ: FAQItem[] = [
  {
    question: "What's the difference between the monthly and yearly plans?",
    answer: `Only the price. Both include every feature. The yearly plan is ${formatPrice(YEARLY_PRICE)} a year, which works out to ${formatPrice(YEARLY_PER_MONTH)} a month and saves you ${formatPrice(YEARLY_SAVINGS)} compared with paying monthly.`,
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. If you subscribed in the web app, cancel from Profile → Payment. If you subscribed in the iPhone or Android app, cancel in your App Store or Google Play subscription settings. You keep access until the end of the period you've paid for.",
  },
  {
    question: "Can I switch between monthly and yearly?",
    answer:
      "Yes. In the web app, open Profile → Payment and choose the other plan.",
  },
  {
    question: "Do I need a separate subscription for the phone and web apps?",
    answer:
      "No. One subscription unlocks PMU Forms on iPhone, Android and the web. Sign in with the same account everywhere.",
  },
  {
    question: "Are there extra fees for taking deposits?",
    answer:
      "PMU Forms doesn't add any fee to deposits or payments. Payments go through your own Square account, so Square's standard processing fees apply. Taking payments needs a connected Square account.",
  },
  {
    question: "A friend sent me their link. Do I get a discount?",
    answer: `Yes. Sign up with their link and you get ${formatPrice(REFERRAL_DISCOUNT)} off your first payment when you subscribe in the web app. It's applied automatically at checkout.`,
  },
];

/** schema.org Offers for the SoftwareApplication structured data. */
export const PRICING_OFFERS = [
  {
    "@type": "Offer",
    name: "Monthly",
    price: MONTHLY_PRICE.toFixed(2),
    priceCurrency: "USD",
    category: "subscription",
  },
  {
    "@type": "Offer",
    name: "Yearly",
    price: YEARLY_PRICE.toFixed(2),
    priceCurrency: "USD",
    category: "subscription",
  },
];
