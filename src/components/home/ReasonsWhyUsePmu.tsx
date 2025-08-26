import { ReasonsWhyImageSvg, SeeMoreSvg } from "../../assets/svgs/Svg";
import "./reasonwhyusepmu.scss";

const ReasonsWhyUsePmu = () => {
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
  ];

  return (
    <section className="reasons-section">
      <div className="reasons-container">
        <h2 className="reasons-title">
          13 Reasons Why You Should Use
          <br />
          PMU Forms
        </h2>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="see-more-container">
          <button className="see-more-btn">
            <SeeMoreSvg />
            See all benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsWhyUsePmu;
