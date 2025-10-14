import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import { AppleButtonSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import Button from "../shared/Button";
import "./setupinfoursteps.scss";

const SetUpInFourSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Download the PMU Forms App",
      description: "Find it on the App Store and install in seconds.",
      buttonSvg: <AppleButtonSvg />,
      buttonText: "Download on iOS",
      image: <img src={step1 || "/placeholder.svg"} alt="Step 1" />,
    },
    {
      id: 2,
      title: "Choose Your Services",
      description: "Access 30+ ready-made forms or tailor your own.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      image: <img src={step2 || "/placeholder.svg"} alt="Step 2" />,
    },
    {
      id: 3,
      title: "Send to Clients",
      description:
        "Clients fill and sign digitally — no printing, no scanning.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      image: <img src={step3 || "/placeholder.svg"} alt="Step 3" />,
    },
    {
      id: 4,
      title: "Manage With Ease",
      description:
        "Track client notes, store signatures, and keep all records organized securely.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      image: <img src={step4 || "/placeholder.svg"} alt="Step 4" />,
    },
  ];

  return (
    <section className="setup-steps">
      <div className="setup-steps__container">
        <div className="setup-steps__header">
          <h2 className="setup-steps__title">Set Up in 4 Easy Steps</h2>
          <p className="setup-steps__subtitle">
            Get started with PMU Forms for easy client intake, business
            protection, and a more professional studio.
          </p>
        </div>

        <div className="setup-steps__grid">
          {steps.map((step) => (
            <div key={step.id} className="setup-steps__card">
              <div className="setup-steps__card-content">
                <h3 className="setup-steps__card-title">{step.title}</h3>
                <p className="setup-steps__card-description">
                  {step.description}
                </p>
                <Button
                  onClick={() => console.log("Downloading iOS app...")}
                  icon={step.buttonSvg}
                  variant="primary"
                  size="small"
                  className="smart-consent-forms__download-btn"
                >
                  {step.buttonText}
                </Button>
              </div>
              <div className="setup-steps__card-image">{step.image}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetUpInFourSteps;
