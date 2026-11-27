import { FAQ_ITEMS } from "../components/home/faqItems";
import { ANDROID_APP_URL, IOS_APP_URL, SITE_URL, SUPPORT_EMAIL } from "../constants/links";

/**
 * JSON-LD for the home page. Only facts we can stand behind: no ratings or
 * certifications, which Google treats as spam when unverifiable.
 *
 * No SoftwareApplication node: Google (and Semrush's audit) treat it as
 * invalid without aggregateRating or review, and we have no verified ratings
 * to give. The app store links are on the Organization (sameAs) instead.
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
