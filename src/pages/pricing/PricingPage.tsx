import FAQ from "../../components/home/FAQ";
import Pricing from "../../components/pricing/Pricing";
import Seo from "../../components/seo/Seo";
import { SITE_URL, WEB_APP_URL } from "../../constants/links";
import {
  MONTHLY_PRICE,
  PRICING_FAQ,
  PRICING_OFFERS,
  STARTER_LIMITS_TEXT,
  STARTER_PRICE,
  YEARLY_PRICE,
  formatPrice,
} from "../../constants/pricing";

const pricingStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "PMU Forms",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      url: WEB_APP_URL,
      offers: PRICING_OFFERS,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/pricing#billing-faq`,
      mainEntity: PRICING_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const PricingPage = () => (
  <div style={{ background: "#F5F5F5" }}>
    <Seo
      title="PMU Forms Pricing: Plans for Permanent Makeup Artists"
      description={`PMU Forms starts at ${formatPrice(STARTER_PRICE)} a month. Starter: every feature, ${STARTER_LIMITS_TEXT}. Pro: ${formatPrice(MONTHLY_PRICE)} a month or ${formatPrice(YEARLY_PRICE)} a year, no limits.`}
      keywords="PMU Forms pricing, PMU software price, consent form app price, permanent makeup software cost"
      canonical={`${SITE_URL}/pricing`}
      ogTitle="PMU Forms Pricing: Starter and Pro, every feature in both"
      ogUrl={`${SITE_URL}/pricing`}
      structuredData={pricingStructuredData}
    />
    <Pricing headingLevel="h1" />
    <FAQ
      id="billing-faq"
      items={PRICING_FAQ}
      title="Billing questions"
      subtitle="Plans, cancelling, fees and discounts"
    />
  </div>
);

export default PricingPage;
