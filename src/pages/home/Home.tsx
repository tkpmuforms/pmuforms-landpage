import EverythingYouNeed from "../../components/home/EverthingYouNeed";
import FAQ from "../../components/home/FAQ";
import FirstHeroSection from "../../components/home/FirstHeroSection";
import ReasonsWhyUsePmu from "../../components/home/ReasonsWhyUsePmu";
import SetUpInFourSteps from "../../components/home/SetUpInFourSteps";
import SmartConsentForms from "../../components/home/SmartConsentForms";
import TipsandTrends from "../../components/home/TipsandTrends";
import TrustedByLeadingArtist from "../../components/home/TrustedByLeadingArtist";

const Home = () => {
  return (
    <div
      style={{
        background: "#F5F5F5",
      }}
    >
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
