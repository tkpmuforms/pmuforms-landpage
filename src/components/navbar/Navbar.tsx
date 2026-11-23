import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppleButtonSvg, LogoSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import "./navbar.scss";
import Button from "../shared/Button";
import { GooglePlaySvg } from "../../assets/svgs/GooglePlaySvg";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "../../constants/links";

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
              to="/#howItWorks"
              onClick={(e) => handleAnchorClick(e, "howItWorks")}
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="/#features"
              onClick={(e) => handleAnchorClick(e, "features")}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/#whats-new"
              onClick={(e) => handleAnchorClick(e, "whats-new")}
            >
              What's New
            </Link>
          </li>
          <li>
            <Link to="/#review" onClick={(e) => handleAnchorClick(e, "review")}>
              Review
            </Link>
          </li>
          <li>
            <Link to="/#blogs" onClick={(e) => handleAnchorClick(e, "blogs")}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/#faq" onClick={(e) => handleAnchorClick(e, "faq")}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      <div className="buttons">
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
          className="android-button"
        >
          Download on Android
        </Button>
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
