import type { FAQItem } from "../components/home/faqItems";
import { SUPPORT_EMAIL } from "./links";

/**
 * PMU Forms plans. Starter and Pro include every feature. Starter has two
 * limits (clients and appointments) and is monthly only; Pro is unlimited and
 * can be paid monthly or yearly.
 * Change prices here only; the pricing section, the /pricing page and the
 * structured data all read from this file.
 */

/** Pro, paid monthly. */
export const MONTHLY_PRICE = 19.99;
/** Pro, paid yearly. There's no yearly Starter. */
export const YEARLY_PRICE = 149.99;
export const PRO_MONTHLY_PRICE = MONTHLY_PRICE;
export const PRO_YEARLY_PRICE = YEARLY_PRICE;

/** Starter, monthly only. */
export const STARTER_PRICE = 9.99;
/** Clients in the account at a time. Deleting a client frees a space. */
export const STARTER_CLIENT_LIMIT = 10;
/** Appointments per calendar month, counted by the appointment's date. */
export const STARTER_APPOINTMENT_LIMIT = 5;

export const STARTER_BEST_FOR = "Best for part-time artists. We've got you covered.";
export const PRO_BEST_FOR = "Best for full-time artists and busy studios.";

/** The cheapest way in, for "from $9.99/month" copy. */
export const LOWEST_MONTHLY_PRICE = STARTER_PRICE;

const round2 = (n: number) => Math.round(n * 100) / 100;

export const YEARLY_PER_MONTH = round2(YEARLY_PRICE / 12); // 12.50
export const YEARLY_SAVINGS = round2(MONTHLY_PRICE * 12 - YEARLY_PRICE); // 89.89
export const YEARLY_SAVINGS_PERCENT = Math.round(
  (YEARLY_SAVINGS / (MONTHLY_PRICE * 12)) * 100,
); // 37
export const YEARLY_PER_DAY = round2(YEARLY_PRICE / 365); // 0.41

/**
 * Referral discount a friend gets on their first web payment (matches the API).
 * It covers the first month on Starter or Pro monthly.
 */
export const REFERRAL_DISCOUNT = 19.99;

export const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

/** "up to 10 clients at a time and 5 appointments a month" */
export const STARTER_LIMITS_TEXT = `up to ${STARTER_CLIENT_LIMIT} clients at a time and ${STARTER_APPOINTMENT_LIMIT} appointments a month`;

export interface IncludedGroup {
  title: string;
  items: string[];
}

/** Everything a subscription includes, on either plan, grouped for the pricing section. */
export const INCLUDED: IncludedGroup[] = [
  {
    title: "Consent forms",
    items: [
      "30+ ready-made PMU and beauty forms",
      "Edit any form, or remove questions you don't need",
      "Scan or upload the paper forms you already use",
      "Your own form link clients fill out on their phone",
      "Handwritten e-signatures for client and artist",
      "Signed forms stored for you, with PDF export",
      "In-person ID check record (no ID photos stored)",
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
      "Request extra charges by Square payment link",
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
      "Up to 5 team members at no extra cost",
      `Email support from real people at ${SUPPORT_EMAIL}`,
    ],
  },
];

/** Billing questions, shown on /pricing. */
export const PRICING_FAQ: FAQItem[] = [
  {
    question: "Which plan is right for me?",
    answer: `If you see a few clients a month, Starter is ${formatPrice(STARTER_PRICE)} a month for ${STARTER_LIMITS_TEXT}. If you're busier than that, Pro is ${formatPrice(PRO_MONTHLY_PRICE)} a month, or ${formatPrice(PRO_YEARLY_PRICE)} a year, with unlimited clients and appointments. Both include every feature, so you can start on Starter and upgrade when you need more room.`,
  },
  {
    question: "What's the difference between Starter and Pro?",
    answer: `Only the limits. Starter lets you keep up to ${STARTER_CLIENT_LIMIT} clients in your account at a time and book ${STARTER_APPOINTMENT_LIMIT} appointments a month, counted by the appointment's date. Pro has no limits and can be paid yearly. Everything else is the same: forms, Square sync, payments, care emails, inventory, team members and all the apps.`,
  },
  {
    question: "What happens when I reach the Starter limit?",
    answer:
      "Nothing is deleted or hidden. You just can't add new clients or appointments until you upgrade to Pro. Deleting a client frees a space, and the appointment count starts fresh each month. If a Square booking or a client's online booking would go over the limit, it isn't added, and we email you to let you know.",
  },
  {
    question: "Can I upgrade to Pro anytime?",
    answer:
      "Yes. In the web app, open Profile → Payment and choose Pro. Your clients, forms and appointments stay just as they are.",
  },
  {
    question: "Can I pay yearly?",
    answer: `Yes, on Pro. It's ${formatPrice(YEARLY_PRICE)} a year, which works out to ${formatPrice(YEARLY_PER_MONTH)} a month and saves you ${formatPrice(YEARLY_SAVINGS)} compared with paying monthly. Starter is monthly only. To switch Pro between monthly and yearly, open Profile → Payment in the web app.`,
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. If you subscribed in the web app, cancel from Profile → Payment. If you subscribed in the iPhone or Android app, cancel in your App Store or Google Play subscription settings. You keep access until the end of the period you've paid for.",
  },
  {
    question: "Do I need a separate subscription for the phone and web apps?",
    answer:
      "No. One subscription unlocks PMU Forms on iPhone, Android and the web. Sign in with the same account everywhere.",
  },
  {
    question: "Are there extra fees for taking payments?",
    answer:
      "PMU Forms doesn't add any fee to payments. Payments go through your own Square account, so Square's standard processing fees apply. Taking payments needs a connected Square account.",
  },
  {
    question: "A friend sent me their link. Do I get a discount?",
    answer: `Yes. Sign up with their link and you get ${formatPrice(REFERRAL_DISCOUNT)} off your first payment when you subscribe in the web app. That's your first month free on Starter or Pro monthly. It's applied automatically at checkout.`,
  },
];

