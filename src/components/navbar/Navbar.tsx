import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppleButtonSvg, LogoSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import "./navbar.scss";
import Button from "../shared/Button";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuVisible(false);
    }
  };

  const videolink =
    "https://pmuforms.crunch.help/en/pmuforms-functionality/how-to-use-pmu-forms";

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
      <div onClick={() => navigate("/")} className="logo">
        <LogoSvg />
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776;
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
          Try For Free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
