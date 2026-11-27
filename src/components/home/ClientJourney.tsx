import type React from "react";
import {
  BottleIcon,
  CalendarIcon,
  CameraIcon,
  ClipboardIcon,
  MailIcon,
} from "./featureIcons";
import "./clientjourney.scss";

const STEPS: { title: string; text: string; icon: React.ReactNode }[] = [
  {
    title: "Booked",
    text: "A booking in Square Appointments adds the client and appointment for you.",
    icon: <CalendarIcon />,
  },
  {
    title: "Forms & pre-care",
    text: "Consent forms go out with the booking, and pre-care arrives before the visit.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Treatment",
    text: "Every pigment on your shelf tracked by lot, with expiry and recall status at a glance.",
    icon: <BottleIcon />,
  },
  {
    title: "Aftercare",
    text: "Mark the appointment complete and email aftercare in the same step.",
    icon: <MailIcon />,
  },
  {
    title: "Healing check-in",
    text: "Check in weeks later. Clients reply with healing photos, no login needed.",
    icon: <CameraIcon />,
  },
];

const ClientJourney = () => (
  <section className="client-journey" id="journey" aria-labelledby="journey-title">
    <div className="client-journey__container">
      <p className="client-journey__eyebrow">Beyond consent forms</p>
      <h2 className="client-journey__title" id="journey-title">
        Every client, from booking to healed results.
      </h2>
      <p className="client-journey__lead">
        PMU Forms now handles the whole appointment, not just the paperwork.
        Less chasing, fewer apps, and a record of every step.
      </p>

      <ol className="client-journey__steps">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className="client-journey__step"
            style={{ "--step-index": index } as React.CSSProperties}
          >
            <div className="client-journey__icon">{step.icon}</div>
            <span className="client-journey__number">Step {index + 1}</span>
            <h3 className="client-journey__step-title">{step.title}</h3>
            <p className="client-journey__step-text">{step.text}</p>
          </li>
        ))}
      </ol>

      <p className="client-journey__also">
        <strong>Also included:</strong> 30+ ready-made forms or your own,
        see who hasn&rsquo;t signed yet, forms locked once signed, and a team
        of up to 5 in one account.
      </p>
    </div>
  </section>
);

export default ClientJourney;
