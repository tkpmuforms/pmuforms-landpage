import FirstHeroSection from "../../components/home/FirstHeroSection";
import ReasonsWhyUsePmu from "../../components/home/ReasonsWhyUsePmu";
import SetUpInFourSteps from "../../components/home/SetUpInFourSteps";
import SmartConsentForms from "../../components/home/SmartConsentForms";

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
    </div>
  );
};

export default Home;
