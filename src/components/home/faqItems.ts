export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Shared by the FAQ section and the FAQPage structured data on the home page.
 * Keep answers true to the app today, with no legal, HIPAA or compliance claims.
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is PMU Forms?",
    answer:
      "PMU Forms is a client management app for permanent makeup and beauty artists. Send consent and intake forms clients sign on their phone, keep every signed form with the client and appointment, and handle pre-care, aftercare, deposits and healing check-ins in one place, on iPhone, Android and the web.",
  },
  {
    question: "Can I use my own forms?",
    answer:
      "Yes. Start from 30+ ready-made PMU and beauty forms and edit them, build your own, or scan or upload the paper forms you already use. You choose which forms go with each service, including services you add yourself.",
  },
  {
    question: "Do my clients need to download anything?",
    answer:
      "No. Clients open a link on their phone or computer, fill in the form and sign with their finger or mouse. You're notified when it comes in.",
  },
  {
    question: "Can my team use PMU Forms?",
    answer:
      "Yes. Invite up to 5 people by email to work in your account, at no extra cost. They can see clients, appointments and forms and add notes, while only you manage billing, settings and integrations. Each appointment records who performed it, and printed forms show “Performed by” with their name.",
  },
  {
    question: "Can I record that I checked a client's ID?",
    answer:
      "Yes. After you look at the client's photo ID in person, record the ID check on the appointment: the type of ID, whether they're over 18, who checked it and when. It shows on the client's printed forms. PMU Forms doesn't store ID numbers or photos of IDs, and please don't upload pictures of IDs as notes or photos.",
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
    question: "How is my clients' information kept private?",
    answer:
      "Client records are private to your business: in the app, only you and the people you invite can see them. Information is sent over encrypted connections and stored with cloud providers, we don't sell client data, and when you delete a client, note or photo we delete it from our systems. PMU Forms isn't built for HIPAA-covered medical practices. See our Privacy Policy for the details.",
  },
  {
    question: "How much does PMU Forms cost?",
    answer:
      "Creating your account is free. To send forms to clients and use every feature, subscribe for $19.99 a month or $149.99 a year (about $12.50 a month). Both plans include everything, including your team, one subscription works on iPhone, Android and the web, and you can cancel anytime. See pmuforms.com/pricing for the full list of what's included.",
  },
];
