import React from "react";
import "./legallyProtect.scss";
import FacialImage from "../../assets/images/attractive-african-woman-enjoying-face-massage-spa-salon 1@2x.png";

const LegallyProtect = () => {
  return (
    <div className="legally-protect-container">
      <div className="article-header">
        <h1>How to Legally Protect Your PMU Business with Consent Forms</h1>
        <div className="article-meta">
          <span className="date">June 2025</span>
          <span className="meta-divider">|</span>
          <span className="author">by Michael Reed</span>
          <span className="meta-divider">|</span>
          <span className="read-time">4 minutes read</span>
        </div>
      </div>

      <div className="featured-image">
        <img src={FacialImage} alt="Woman receiving facial treatment" />
      </div>

      <div className="article-content">
        <h2>Why Consent Forms Are More Than Just Paperwork</h2>
        <p>
          As a PMU (Permanent Makeup) artist, you're not just an artist — you're
          also a service provider operating in a highly regulated beauty and
          aesthetics space. That means protecting yourself legally is just as
          important as delivering flawless brows, lips, or SMP work.
        </p>
        <p>Consent forms are your first line of defense.</p>
        <p>
          When done right, they don't just help you stay compliant with
          regulations like HIPAA — they also protect you from liability, improve
          client trust, and make your business look more professional.
        </p>
        <p>Let's break it down.</p>

        <div className="section">
          <h3>What a Strong PMU Consent Form Should Cover</h3>
          <p>A legally sound PMU consent form should do three things well:</p>

          <h3>1. Inform the Client</h3>
          <p>
            The form should clearly explain the procedure, including what to
            expect before, during, and after. It should mention:
          </p>
          <ul>
            <li>The technique used (e.g., microblading, lip blush, SMP)</li>
            <li>Expected results and healing time</li>
            <li>Possible risks or side effects</li>
            <li>Contraindications (e.g., pregnancy, skin conditions)</li>
          </ul>

          <h3>2. Document Consent Clearly</h3>
          <p>You need explicit and trackable consent, including:</p>
          <ul>
            <li>A digital signature</li>
            <li>The date/time of signature</li>
            <li>
              A clear acknowledgment that the client understands the risks and
              still chooses to proceed
            </li>
          </ul>
          <p>
            If you're using PMU Forms, this is automatically built-in with
            secure signature capture and time-stamped form locking.
          </p>

          <h3>3. Provide Legal Protection</h3>
          <p>
            Your form should include language that protects you in the event of:
          </p>
          <ul>
            <li>An allergic reaction</li>
            <li>An unexpected outcome</li>
            <li>Client dissatisfaction with results</li>
            <li>Future claims against your work</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegallyProtect;
