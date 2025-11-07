import {
  AppleButtonSvg,
  CloudBasedSvg,
  HippaSvg,
  SecureDigitalSvg,
  WatchADemoSvg,
} from "../../assets/svgs/Svg";

import iphone1 from "../../assets/images/iPhone1.png";
import iphone2 from "../../assets/images/iPhone2.png";
import iphone3 from "../../assets/images/iPhone3.png";
import Button from "../shared/Button";
import "./firstherosection.scss";

const FirstHeroSection = () => {
  const videolink =
    "https://pmuforms.crunch.help/en/pmuforms-functionality/how-to-use-pmu-forms";

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Secure digital consent <br />
            forms for PMU artists, ready <br /> in minutes.
          </h1>
          <p className="hero-description">
            Collect signatures, manage clients, and protect your business with{" "}
            <span className="highlight">HIPAA-compliant</span> digital consent
            forms — all from one app.
          </p>

          <Button
            href="https://apps.apple.com/ng/app/pmu-forms/id1497270923"
            target="_blank"
            className="download-button"
            icon={<AppleButtonSvg />}
            variant="custom"
            size="small"
          >
            Download on iOS
          </Button>
          <Button
            href={videolink}
            target="_blank"
            icon={<WatchADemoSvg />}
            variant="secondary"
            size="small"
            className="try-button"
          >
            Try For Free
          </Button>
        </div>

        <div className="features-section">
          <div className="feature-item">
            <SecureDigitalSvg />
            <span>Secure Digital Signatures</span>
          </div>
          <div className="feature-item">
            <HippaSvg />
          </div>
          <div className="feature-item">
            <CloudBasedSvg />
            <span>Cloud-based & Paperless</span>
          </div>
        </div>

        <div className="phones-container">
          <div className="phone-stack">
            <img
              src={iphone2 || "/placeholder.svg"}
              alt="iPhone showing consent form editing"
              className="phone phone-1"
            />
            <img
              src={iphone1 || "/placeholder.svg"}
              alt="iPhone showing client management"
              className="phone phone-3"
            />
            <img
              src={iphone3 || "/placeholder.svg"}
              alt="iPhone showing form sending"
              className="phone phone-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeroSection;
