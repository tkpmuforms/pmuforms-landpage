import type React from "react";
import {
  BellIcon,
  CardIcon,
  ClipboardIcon,
  FolderIcon,
  ScanIcon,
  TeamIcon,
} from "./featureIcons";

/**
 * Why artists switch. Keep every line true to what the app does today and
 * free of legal or compliance claims (no "legally binding", "compliant").
 */
export const REASONS: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Forms done before they arrive",
    description:
      "Clients fill in their consent and health questions and sign on their phone before the appointment, so you start on time.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Bring your own forms",
    description:
      "Scan or upload the paper forms you already use, start from ours, or build your own for every service you offer.",
    icon: <ScanIcon />,
  },
  {
    title: "Know who hasn't signed",
    description:
      "See at a glance which clients still have forms to complete, and send a friendly reminder in one tap.",
    icon: <BellIcon />,
  },
  {
    title: "Deposits and Square bookings",
    description:
      "Request a deposit with a Square payment link, and Square bookings send the right forms for you.",
    icon: <CardIcon />,
  },
  {
    title: "Every signed form, organized",
    description:
      "Signed forms, notes and the in-person ID check stay with each client and appointment, ready to print or download. The paper binder can go.",
    icon: <FolderIcon />,
  },
  {
    title: "Your team, one account",
    description:
      "Invite up to 5 people to work in your account. Each appointment shows who performed it, and only you manage billing and settings.",
    icon: <TeamIcon />,
  },
];
