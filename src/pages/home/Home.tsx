import React from "react";
import FirstHeroSection from "../../components/home/FirstHeroSection";
import SmartConsentForms from "../../components/home/SmartConsentForms";
import ReasonsWhyUsePmu from "../../components/home/ReasonsWhyUsePmu";

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
    </div>
  );
};

export default Home;
