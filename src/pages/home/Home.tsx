import ClientJourney from "../../components/home/ClientJourney";
import FAQ from "../../components/home/FAQ";
import FirstHeroSection from "../../components/home/FirstHeroSection";
import HolidayOffer from "../../components/holiday/HolidayOffer";
import NewFeatures from "../../components/home/NewFeatures";
import Pricing from "../../components/pricing/Pricing";
import ReferralBanner from "../../components/referral/ReferralBanner";
import TrustedByLeadingArtist from "../../components/home/TrustedByLeadingArtist";
import Seo from "../../components/seo/Seo";
import { homeStructuredData } from "../../seo/schema";

const Home = () => {
  return (
    <div
      style={{
        background: "#F5F5F5",
      }}
    >
      <Seo
        title="PMU Forms - Consent Forms, Aftercare & Healing Check-ins for Permanent Makeup Artists"
        description="PMU Forms is the all-in-one app for permanent makeup artists: digital consent forms, pre-care and aftercare emails, healing check-ins, Square booking sync and payment links, and pigment inventory tracked by lot."
        keywords="PMU forms, permanent makeup, consent forms, aftercare, pre-care, healing check-in, Square integration, pigment inventory, lot tracking, PMU artist, PMU software"
        canonical="https://pmuforms.com/"
        ogTitle="PMU Forms - Consent Forms, Aftercare & Healing Check-ins for PMU Artists"
        ogDescription="Consent forms, pre-care and aftercare, healing check-ins, Square booking sync and pigment lot tracking, in one app for permanent makeup artists."
        ogUrl="https://pmuforms.com/"
        structuredData={homeStructuredData}
      />
      <ReferralBanner />
      <FirstHeroSection />
      <HolidayOffer />
      <ClientJourney />
      <NewFeatures />
      <TrustedByLeadingArtist />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
