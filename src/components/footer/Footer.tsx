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
        <a href="#review">REVIEWS</a>
        <a href="#blogs">BLOGS</a>
        <a href="#faq">FAQS</a>
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
          href="https://apps.apple.com/ng/app/pmu-forms/id1497270923"
          target="_blank"
          icon={<AppleButtonSvg />}
          variant="primary"
          size="small"
          className=""
        >
          Download on iOS
        </Button>
        <Button
          href="https://pmuforms.crunch.help/en/pmuforms-functionality/how-to-use-pmu-forms"
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
