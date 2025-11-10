import EverythingYouNeed from "../../components/home/EverthingYouNeed";
import FAQ from "../../components/home/FAQ";
import FirstHeroSection from "../../components/home/FirstHeroSection";
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
        title="PMU Forms - Smart Consent & Aftercare Forms for Permanent Makeup Artists"
        description="PMU Forms is the leading digital consent and aftercare solution for permanent makeup artists. Streamline client onboarding, ensure legal compliance, and grow your PMU business with smart digital forms."
        keywords="PMU forms, permanent makeup, consent forms, aftercare, digital forms, PMU artist, eyebrow, eyeliner, lips, PMU software"
        canonical="https://pmuforms.com/"
        ogTitle="PMU Forms - Smart Consent & Aftercare Forms"
        ogDescription="The leading digital consent and aftercare solution for permanent makeup artists. Streamline your PMU business today."
        ogUrl="https://pmuforms.com/"
      />
      <FirstHeroSection />
      <SmartConsentForms />
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
