export interface FAQItem {
  question: string;
  answer: string;
}

/** Shared by the FAQ section and the FAQPage structured data on the home page. */
export const FAQ_ITEMS: FAQItem[] = [
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
    question: "How much does PMU Forms cost?",
    answer:
      "Creating your account is free. To send forms to clients and use every feature, subscribe for $19.99 a month or $149.99 a year (about $12.50 a month). Both plans include everything, one subscription works on iPhone, Android and the web, and you can cancel anytime. See pmuforms.com/pricing for the full list of what's included.",
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
