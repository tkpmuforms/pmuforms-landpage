import EverythingYouNeed from "../../components/home/EverthingYouNeed";
import ClientJourney from "../../components/home/ClientJourney";
import FAQ from "../../components/home/FAQ";
import FirstHeroSection from "../../components/home/FirstHeroSection";
import NewFeatures from "../../components/home/NewFeatures";
import ReasonsWhyUsePmu from "../../components/home/ReasonsWhyUsePmu";
import SetUpInFourSteps from "../../components/home/SetUpInFourSteps";
import SmartConsentForms from "../../components/home/SmartConsentForms";
import TipsandTrends from "../../components/home/TipsandTrends";
import TrustedByLeadingArtist from "../../components/home/TrustedByLeadingArtist";
import Seo from "../../components/seo/Seo";

const Home = () => {
  return (
    <div
      style={{
        background: "#F5F5F5",
      }}
    >
      <Seo
        title="PMU Forms - Consent Forms, Aftercare & Deposits for Permanent Makeup Artists"
        description="PMU Forms is the all-in-one app for permanent makeup artists: digital consent forms, pre-care and aftercare emails, healing check-ins, Square booking sync and deposits, and pigment inventory tracked by lot."
        keywords="PMU forms, permanent makeup, consent forms, aftercare, pre-care, healing check-in, PMU deposits, Square integration, pigment inventory, lot tracking, PMU artist, PMU software"
        canonical="https://pmuforms.com/"
        ogTitle="PMU Forms - Consent Forms, Aftercare & Deposits for PMU Artists"
        ogDescription="Consent forms, pre-care and aftercare, healing check-ins, Square deposits and pigment lot tracking, in one app for permanent makeup artists."
        ogUrl="https://pmuforms.com/"
      />
      <FirstHeroSection />
      <SmartConsentForms />
      <ClientJourney />
      <NewFeatures />
      <ReasonsWhyUsePmu />
      <SetUpInFourSteps />
      <EverythingYouNeed />
      <TrustedByLeadingArtist />
      <TipsandTrends />
      <FAQ />
    </div>
  );
};

export default Home;
