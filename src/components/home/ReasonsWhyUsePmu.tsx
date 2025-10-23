import { useState } from "react";
import { ReasonsWhyImageSvg, SeeMoreSvg } from "../../assets/svgs/Svg";
import "./reasonwhyusepmu.scss";

const ReasonsWhyUsePmu = () => {
  const [showAllReasons, setShowAllReasons] = useState(false);

  const reasons = [
    {
      id: 1,
      title: "Pre-Appointment Prep",
      description:
        "Clients fill out consent, medical, and model release forms before arriving, so you can start on time without waiting room delays.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 2,
      title: "Declutter Your Studio",
      description:
        "Replace paper stacks with digital forms and create a cleaner, more calming space for you and your clients.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 3,
      title: "Enhanced Legal Protection",
      description:
        "PMUforms protects your consent records with secure cloud storage and legally binding digital signatures.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 4,
      title: "Stay Compliant with HIPAA",
      description:
        "PMUforms helps PMU artists comply with data protection laws like HIPAA and GDPR by securely encrypting client data.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 5,
      title: "Look More Professional",
      description:
        "Offer a smooth, tech-forward intake experience that builds trust with every client.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 6,
      title: "Branded for Your Studio",
      description:
        "Personalize your forms and app page with your business name and details for a cohesive brand experience.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 7,
      title: "Easy Form Tracking",
      description:
        "See which clients have submitted their forms and gently follow up with those who haven't.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 8,
      title: "Instant Aftercare Delivery",
      description:
        "Send aftercare instructions directly from the app so clients leave with everything they need.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 9,
      title: "Fully Customizable Forms",
      description:
        "Adjust or create forms to perfectly match your services, tone, and process.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 10,
      title: "Print When Needed",
      description:
        "Print completed forms in just a few taps to meet local compliance or studio preferences.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 11,
      title: "More Hygienic Appointments",
      description:
        "Minimize shared surfaces and reduce risk by eliminating paper and pen use.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 12,
      title: "Secure Digital Signatures",
      description:
        "Keep signed consent forms safe and accessible for future reference or legal proof.",
      icon: <ReasonsWhyImageSvg />,
    },
    {
      id: 13,
      title: "Ongoing Support & Community",
      description:
        "Get help when needed and connect with other PMU pros in the exclusive user group.",
      icon: <ReasonsWhyImageSvg />,
    },
  ];

  const toggleShowAllReasons = () => {
    setShowAllReasons(!showAllReasons);
  };

  // Show only 5 reasons initially
  const visibleReasons = showAllReasons ? reasons : reasons.slice(0, 5);

  // Create row groups for the 5-3-5 layout when showing all reasons
  const firstRowReasons = reasons.slice(0, 5);
  const secondRowReasons = reasons.slice(5, 8);
  const thirdRowReasons = reasons.slice(8, 13);

  return (
    <section className="reasons-section">
      <div className="reasons-container">
        <h2 className="reasons-title">
          13 Reasons Why You Should Use
          <br />
          PMU Forms
        </h2>

        {!showAllReasons ? (
          <div className="reasons-preview">
            <div className="reasons-grid">
              {visibleReasons.map((reason) => (
                <div key={reason.id} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
            <div className="second-row-preview">
              {secondRowReasons.map((reason) => (
                <div key={reason.id} className="reason-card preview-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="reasons-all-grid">
            <div className="reasons-row first-row">
              {firstRowReasons.map((reason) => (
                <div key={reason.id} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
            <div className="reasons-row second-row">
              {secondRowReasons.map((reason) => (
                <div key={reason.id} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
            <div className="reasons-row third-row">
              {thirdRowReasons.map((reason) => (
                <div key={reason.id} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="see-more-container">
          <button className="see-more-btn" onClick={toggleShowAllReasons}>
            <SeeMoreSvg />
            {showAllReasons ? "See less benefits" : "See all benefits"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsWhyUsePmu;
