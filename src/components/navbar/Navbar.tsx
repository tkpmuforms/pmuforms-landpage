import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogoSvg } from "../../assets/svgs/Svg";
import "./navbar.scss";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
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

  return (
    <div className="navbar">
      <div onClick={() => {}} className="logo">
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
            <Link to="/privacy-policy">How It Works</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      {/* Buttons (Hidden in Mobile) */}
      <div className="buttons">
        <button onClick={() => {}} className="download-app">
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
