"use client";

import { AppleButtonSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import Button from "../shared/Button";
import { GooglePlaySvg } from "../../assets/svgs/GooglePlaySvg";
import { WebAppSvg } from "../../assets/svgs/WebAppSvg";
import { ANDROID_APP_URL, DEMO_URL, IOS_APP_URL, WEB_APP_URL } from "../../constants/links";
import "./smartconsentforms.scss";

const SmartConsentForms = () => {
  const videolink = DEMO_URL;

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
            href={IOS_APP_URL}
            target="_blank"
            icon={<AppleButtonSvg />}
            variant="primary"
            size="small"
            className="smart-consent-forms__download-btn"
          >
            Download on iOS
          </Button>
          <Button
            href={ANDROID_APP_URL}
            target="_blank"
            icon={<GooglePlaySvg />}
            variant="primary"
            size="small"
            className="smart-consent-forms__download-btn"
          >
            Download on Android
          </Button>
          <Button
            href={WEB_APP_URL}
            target="_blank"
            icon={<WebAppSvg />}
            variant="primary"
            size="small"
            className="smart-consent-forms__download-btn"
          >
            Open Web App
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
