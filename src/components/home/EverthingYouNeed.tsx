import type React from "react";
import "./everythingyouneed.scss";
import EveryThingImage from "../../assets/images/EverythingImage.png";
import {
  AddPrivateClientNoteSvg,
  EmailSignedAndPrintSvg,
  ThirtyMadeReadySvg,
  WorksOnTabletSvg,
  LockFormsAfterSigningSvg,
  RequestNewformsOrServicesSvg,
  AddBeforeandAfterPhotosSvg,
  RealHandwrittingSignatureSvg,
  EditAndBuildCustomForms,
  SendLinktoClientSvg,
} from "../../assets/svgs/Svg";
const EverythingYouNeed: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Email or print signed PDFs",
      icon: <EmailSignedAndPrintSvg />,
      position: "left",
    },
    {
      id: 2,
      title: "Add private client notes",
      icon: <AddPrivateClientNoteSvg />,
      position: "left",
    },
    {
      id: 3,
      title: "Works on phone, tablet & desktop",
      icon: <WorksOnTabletSvg />,
      position: "left",
    },
    {
      id: 4,
      title: "Lock forms after signing",
      icon: <LockFormsAfterSigningSvg />,
      position: "left",
    },
    {
      id: 5,
      title: "Request new forms or services",
      icon: <RequestNewformsOrServicesSvg />,
      position: "left",
    },
    {
      id: 6,
      title: "30+ ready-made PMU & beauty forms",
      icon: <ThirtyMadeReadySvg />,
      position: "right",
    },
    {
      id: 7,
      title: "Edit or build custom forms fast",
      icon: <EditAndBuildCustomForms />,
      position: "right",
    },
    {
      id: 8,
      title: "Add before/after photos per client",
      icon: <AddBeforeandAfterPhotosSvg />,
      position: "right",
    },
    {
      id: 9,
      title: "Real handwritten e-signatures",
      icon: <RealHandwrittingSignatureSvg />,
      position: "right",
    },
    {
      id: 10,
      title: "Send link so clients fill forms right away",
      icon: <SendLinktoClientSvg />,
      position: "right",
    },
  ];

  const leftFeatures = features.filter(
    (feature) => feature.position === "left"
  );
  const rightFeatures = features.filter(
    (feature) => feature.position === "right"
  );

  return (
    <section className="everything-you-need" id="features">
      <div className="everything-you-need__container">
        <div className="everything-you-need__header">
          <h2 className="everything-you-need__title">
            Everything You Need,
            <br />
            Already Done for You.
          </h2>
        </div>

        <div className="everything-you-need__content">
          <div className="everything-you-need__features everything-you-need__features--left">
            {leftFeatures.map((feature) => (
              <div key={feature.id} className="everything-you-need__feature">
                <div className="everything-you-need__feature-icon">
                  {feature.icon}
                </div>
                <h3 className="everything-you-need__feature-title">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="everything-you-need__phone">
            <img
              src={EveryThingImage}
              alt="PMU Forms app interface showing client management dashboard"
              className="everything-you-need__phone-image"
            />
          </div>

          <div className="everything-you-need__features everything-you-need__features--right">
            {rightFeatures.map((feature) => (
              <div key={feature.id} className="everything-you-need__feature">
                <div className="everything-you-need__feature-icon">
                  {feature.icon}
                </div>
                <h3 className="everything-you-need__feature-title">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
