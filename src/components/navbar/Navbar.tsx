import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppleButtonSvg, LogoSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import "./navbar.scss";
import Button from "../shared/Button";
import { AndroidSvg } from "../../assets/svgs/AndroidSvg";
import { WebAppSvg } from "../../assets/svgs/WebAppSvg";
import {
  ANDROID_APP_URL,
  IOS_APP_LIVE,
  IOS_APP_URL,
  WEB_APP_URL,
} from "../../constants/links";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node)
    ) {
      setMobileMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ): void => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo" aria-label="PMU Forms home">
        <LogoSvg />
      </Link>
      <div
        className="hamburger-menu"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div
        ref={mobileMenuRef}
        className={`links ${mobileMenuVisible ? "visible" : ""}`}
      >
        <ul>
          <li>
            <Link
              to="/#journey"
              onClick={(e) => handleAnchorClick(e, "journey")}
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="/#whats-new"
              onClick={(e) => handleAnchorClick(e, "whats-new")}
            >
              Features
            </Link>
          </li>
          <li>
            <Link to="/#review" onClick={(e) => handleAnchorClick(e, "review")}>
              Review
            </Link>
          </li>
          <li>
            <Link to="/#faq" onClick={(e) => handleAnchorClick(e, "faq")}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setMobileMenuVisible(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/templates" onClick={() => setMobileMenuVisible(false)}>
              Free Templates
            </Link>
          </li>
        </ul>
      </div>

      <div className="buttons">
        <div className="store-icons" role="group" aria-label="Get PMU Forms">
          {IOS_APP_LIVE && (
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="store-icon store-icon--ios"
              aria-label="Download on iOS"
              title="Download on iOS"
            >
              <AppleButtonSvg width={18} height={22} />
            </a>
          )}
          <a
            href={ANDROID_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="store-icon store-icon--android"
            aria-label="Download on Android"
            title="Download on Android"
          >
            <AndroidSvg width={22} height={22} />
          </a>
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="store-icon store-icon--web"
            aria-label="Open Web App"
            title="Open Web App"
          >
            <WebAppSvg width={20} height={20} />
          </a>
        </div>
        <Button
          href={WEB_APP_URL}
          target="_blank"
          icon={<WatchADemoSvg />}
          variant="secondary"
          size="small"
          className="try-free-button"
        >
          Try For Free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
