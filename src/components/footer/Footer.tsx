"use client";
import {
  AppleButtonSvg,
  FaceBookSvg,
  HippaSvg,
  InstagramSvg,
  LinkendInSvg,
  PmuLogoFooter,
  WatchADemoSvg,
} from "../../assets/svgs/Svg";
import Button from "../shared/Button";
import { GooglePlaySvg } from "../../assets/svgs/GooglePlaySvg";
import { WebAppSvg } from "../../assets/svgs/WebAppSvg";
import { ANDROID_APP_URL, DEMO_URL, IOS_APP_URL, WEB_APP_URL } from "../../constants/links";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <PmuLogoFooter />
      </div>

      <nav className="footer__nav">
        <a href="#howItWorks">HOW IT WORKS</a>
        <a href="#features">FEATURES</a>
        <a href="#whats-new">WHAT'S NEW</a>
        <a href="#review">REVIEWS</a>
        <a href="#blogs">BLOGS</a>
        <a href="#faq">FAQS</a>
        <a href="/pricing">PRICING</a>
        <a href="/templates">FREE TEMPLATES</a>
      </nav>

      <div className="footer__secondary-links">
        <a href="/contact">Contact</a>
        <span>|</span>
        <a href="#support">Support</a>
        <span>|</span>
        <a href="/terms">Terms</a>
        <span>|</span>
        <a href="/privacy">Privacy</a>
      </div>

      <div className="footer__social">
        <a href="https://www.linkedin.com/company/pmu-forms">
          <LinkendInSvg onClick={() => console.log("LinkedIn clicked")} />
        </a>
        <a href="https://web.facebook.com/pmuforms/?_rdc=1&_rdr">
          <FaceBookSvg onClick={() => console.log("Facebook clicked")} />
        </a>
        <a href="https://www.instagram.com/pmuformsofficial/">
          <InstagramSvg onClick={() => console.log("Instagram clicked")} />
        </a>
        {/* <TwitterSvg onClick={() => console.log("Twitter clicked")} /> */}
        {/* <YoutubeSvg onClick={() => console.log("YouTube clicked")} /> */}
      </div>

      <div className="footer__buttons">
        <Button
          href={IOS_APP_URL}
          target="_blank"
          icon={<AppleButtonSvg />}
          variant="primary"
          size="small"
          className=""
        >
          Download on iOS
        </Button>
        <Button
          href={ANDROID_APP_URL}
          target="_blank"
          icon={<GooglePlaySvg />}
          variant="primary"
          size="small"
          className=""
        >
          Download on Android
        </Button>
        <Button
          href={WEB_APP_URL}
          target="_blank"
          icon={<WebAppSvg />}
          variant="primary"
          size="small"
          className=""
        >
          Open Web App
        </Button>
        <Button
          href={DEMO_URL}
          target="_blank"
          icon={<WatchADemoSvg />}
          variant="secondary"
          size="small"
          className=""
        >
          Watch a Demo
        </Button>
      </div>

      <div className="footer__hipaa">
        <HippaSvg />
      </div>

      <div className="footer__copyright">
        © 2025 PMU Forms. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
