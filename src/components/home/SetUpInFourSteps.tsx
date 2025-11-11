import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import { AppleButtonSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import Button from "../shared/Button";
import "./setupinfoursteps.scss";

const SetUpInFourSteps = () => {
  const videolink =
    "https://pmuforms.crunch.help/en/pmuforms-functionality/how-to-use-pmu-forms";

  const steps = [
    {
      id: 1,
      title: "Use PMU Forms anywhere",
      description:
        "Access the web version right from your browser, or download the app from the App Store to use it on the go.",
      buttonSvg: <AppleButtonSvg />,
      button2Svg: <WatchADemoSvg />,
      buttonText: "Download on iOS",
      button2Text: "Open Web Version",
      buttonHref: "https://apps.apple.com/ng/app/pmu-forms/id1497270923",
      button2Href: "https://artist.pmuforms.com/",
      image: <img src={step1 || "/placeholder.svg"} alt="Step 1" />,
    },
    {
      id: 2,
      title: "Choose Your Services",
      description: "Access 30+ ready-made forms or tailor your own.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      buttonHref: videolink,
      image: <img src={step2 || "/placeholder.svg"} alt="Step 2" />,
    },
    {
      id: 3,
      title: "Send to Clients",
      description:
        "Clients fill and sign digitally — no printing, no scanning.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      buttonHref: videolink,
      image: <img src={step3 || "/placeholder.svg"} alt="Step 3" />,
    },
    {
      id: 4,
      title: "Manage With Ease",
      description:
        "Track client notes, store signatures, and keep all records organized securely.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      buttonHref: videolink,
      image: <img src={step4 || "/placeholder.svg"} alt="Step 4" />,
    },
  ];

  return (
    <section className="setup-steps" id="howItWorks">
      <div className="setup-steps__container">
        <div className="setup-steps__header">
          <h2 className="setup-steps__title">Set Up in 4 Easy Steps</h2>
          <p className="setup-steps__subtitle">
            Get started with PMU Forms for easy client intake, business
            protection, and a more professional studio.
          </p>
        </div>

        <div className="setup-steps__grid">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="setup-steps__card"
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <div className="setup-steps__card-content">
                <h3 className="setup-steps__card-title">{step.title}</h3>
                <p className="setup-steps__card-description">
                  {step.description}
                </p>
                <div className="setup-steps__buttons-container">
                  <Button
                    href={step.buttonHref}
                    target="_blank"
                    icon={step.buttonSvg}
                    variant="primary"
                    size="small"
                    className={`smart-consent-forms__download-btn ${
                      step.buttonText === "Watch a Demo"
                        ? "smart-consent-forms__download-btn--demo"
                        : ""
                    }`}
                  >
                    {step.buttonText}
                  </Button>
                  {step.button2Href && (
                    <Button
                      href={step.button2Href}
                      target="_blank"
                      icon={step.button2Svg}
                      variant="primary"
                      size="small"
                      className={`smart-consent-forms__download-btn ${
                        step.button2Text === "Watch a Demo"
                          ? "smart-consent-forms__download-btn--demo"
                          : "smart-consent-forms__download-btn--web"
                      }`}
                    >
                      {step.button2Text}
                    </Button>
                  )}
                </div>
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
