import { FAQ_ITEMS } from "../components/home/faqItems";
import {
  ANDROID_APP_URL,
  IOS_APP_URL,
  SITE_URL,
  SUPPORT_EMAIL,
  WEB_APP_URL,
} from "../constants/links";

/**
 * JSON-LD for the home page. Only facts we can stand behind: no ratings,
 * prices or certifications, which Google treats as spam when unverifiable.
 */
const ORG_ID = `${SITE_URL}/#organization`;

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "PMU Forms",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon-512.png`,
      email: SUPPORT_EMAIL,
      sameAs: [
        "https://www.instagram.com/pmuformsofficial/",
        "https://web.facebook.com/pmuforms/",
        "https://www.linkedin.com/company/pmu-forms",
        IOS_APP_URL,
        ANDROID_APP_URL,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        url: `${SITE_URL}/contact`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "PMU Forms",
      url: `${SITE_URL}/`,
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "PMU Forms",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      url: WEB_APP_URL,
      downloadUrl: [IOS_APP_URL, ANDROID_APP_URL],
      installUrl: [IOS_APP_URL, ANDROID_APP_URL],
      publisher: { "@id": ORG_ID },
      description:
        "Digital consent forms, pre-care and aftercare emails, healing check-ins, Square booking sync and deposits, and pigment inventory tracked by lot, for permanent makeup artists.",
      featureList: [
        "Digital consent forms with handwritten e-signatures",
        "30+ ready-made PMU and beauty forms",
        "Square Appointments booking sync",
        "Deposits and payments through Square payment links",
        "Pre-care and aftercare emails",
        "Healing check-ins with client photo upload",
        "Pigment and supply inventory tracked by lot and expiry",
        "Client notes and before/after photos",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};
