"use client";

import { AppleButtonSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import Button from "../shared/Button";
import "./smartconsentforms.scss";

const SmartConsentForms = () => {
  const videolink =
    "https://pmuforms.crunch.help/en/pmuforms-functionality/how-to-use-pmu-forms";

  return (
    <section className="smart-consent-forms">
      <div className="smart-consent-forms__container">
        <h2 className="smart-consent-forms__title">
          Smart Consent Forms Designed for the Beauty Industry.
        </h2>
        <p className="smart-consent-forms__description">
          PMU Forms is a fast, HIPAA-compliant digital forms app built for
          permanent makeup and beauty professionals. Whether you offer
          microblading, lip blush, microneedling, or 20+ other services, PMU
          Forms helps you collect legally sound, fully customizable consent
          forms in under 10 minutes.
        </p>
        <div className="smart-consent-forms__buttons">
          <Button
            href="https://apps.apple.com/ng/app/pmu-forms/id1497270923"
            target="_blank"
            icon={<AppleButtonSvg />}
            variant="primary"
            size="small"
            className="smart-consent-forms__download-btn"
          >
            Download on iOS
          </Button>
          <Button
            href={videolink}
            target="_blank"
            icon={<WatchADemoSvg />}
            variant="secondary"
            size="small"
            className="smart-consent-forms__demo-btn"
          >
            Watch a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartConsentForms;
