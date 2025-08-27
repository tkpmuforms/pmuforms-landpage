"use client";
import {
  PmuLogoFooter,
  YoutubeSvg,
  TwitterSvg,
  InstagramSvg,
  FaceBookSvg,
  LinkendInSvg,
  AppleButtonSvg,
  WatchADemoSvg,
  HippaSvg,
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
        <a href="#how-it-works">HOW IT WORKS</a>
        <a href="#features">FEATURES</a>
        <a href="#pricing">PRICING</a>
        <a href="#reviews">REVIEWS</a>
        <a href="#faqs">FAQS</a>
      </nav>

      <div className="footer__secondary-links">
        <a href="#contact">Contact</a>
        <span>|</span>
        <a href="#support">Support</a>
        <span>|</span>
        <a href="#terms">Terms</a>
        <span>|</span>
        <a href="#privacy">Privacy</a>
      </div>

      <div className="footer__social">
        <LinkendInSvg onClick={() => console.log("LinkedIn clicked")} />
        <FaceBookSvg onClick={() => console.log("Facebook clicked")} />
        <InstagramSvg onClick={() => console.log("Instagram clicked")} />
        <TwitterSvg onClick={() => console.log("Twitter clicked")} />
        <YoutubeSvg onClick={() => console.log("YouTube clicked")} />
      </div>

      <div className="footer__buttons">
        <Button
          onClick={() => console.log("Downloading iOS app...")}
          icon={<AppleButtonSvg />}
          variant="primary"
          size="small"
          className=""
        >
          Download on iOS
        </Button>
        <Button
          onClick={() => console.log("Watching demo...")}
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
