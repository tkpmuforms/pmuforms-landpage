import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import { AppleButtonSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import "./setupinfoursteps.scss";

const SetUpInFourSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Download The Pmu Form App",
      description: "Create your account and set up your profile.",
      buttonSvg: <AppleButtonSvg />,
      buttonText: "Get Started",
      image: <img src={step1} alt="Step 1" />,
    },
    {
      id: 2,
      title: "Customize Forms",
      description: "Tailor the consent forms to fit your services.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      image: <img src={step2} alt="Step 2" />,
    },
    {
      id: 3,
      title: "Integrate with Your Practice",
      description: "Connect PMU Forms with your existing tools.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo",
      image: <img src={step3} alt="Step 3" />,
    },
    {
      id: 4,
      title: "Start Using PMU Forms",
      description: "Begin collecting client information seamlessly.",
      buttonSvg: <WatchADemoSvg />,
      buttonText: "Watch a Demo  ",
      image: <img src={step4} alt="Step 4" />,
    },
  ];
  return (
    <div>
      <h5>Set Up in 4 Easy Steps </h5>
      <p>
        Get started with PMU Forms for easy client intake, business protection,
        and a more professional studio.
      </p>
    </div>
  );
};

export default SetUpInFourSteps;
