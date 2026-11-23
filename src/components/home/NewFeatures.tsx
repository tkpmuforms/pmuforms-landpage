import type React from "react";
import { AppleButtonSvg, WatchADemoSvg } from "../../assets/svgs/Svg";
import Button from "../shared/Button";
import { GooglePlaySvg } from "../../assets/svgs/GooglePlaySvg";
import { WebAppSvg } from "../../assets/svgs/WebAppSvg";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "../../constants/links";
import {
  BottleIcon,
  CalendarIcon,
  CameraIcon,
  CardIcon,
  CheckIcon,
  LinkIcon,
  MailIcon,
} from "./featureIcons";
import "./newfeatures.scss";

interface Feature {
  id: string;
  tag: string;
  icon: React.ReactNode;
  title: string;
  lead: string;
  points: string[];
  note?: string;
  visual: React.ReactNode;
}

// ------------------------------------------------------- product sketches
// Simplified pictures of the real screens, drawn in HTML so they stay sharp.

const Badge: React.FC<{ tone: "green" | "amber" | "red" | "purple"; children: React.ReactNode }> = ({
  tone,
  children,
}) => <span className={`nf-badge nf-badge--${tone}`}>{children}</span>;

const SquareSyncVisual = () => (
  <div className="nf-mock" aria-hidden="true">
    <div className="nf-mock__bar">
      <span className="nf-mock__square">■</span> New booking from Square
    </div>
    <div className="nf-mock__body">
      <p className="nf-mock__strong">Jane Smith · Microblading</p>
      <p className="nf-mock__muted">Tue, Dec 1 · 10:00 AM</p>
      <ul className="nf-checks">
        <li>
          <CheckIcon /> Client added to PMU Forms
        </li>
        <li>
          <CheckIcon /> Appointment created
        </li>
        <li>
          <CheckIcon /> Microblading consent form sent
        </li>
      </ul>
    </div>
  </div>
);

const PaymentsVisual = () => (
  <div className="nf-mock" aria-hidden="true">
    <div className="nf-mock__bar">Payments · Jane Smith</div>
    <div className="nf-mock__body">
      <div className="nf-row">
        <div>
          <p className="nf-mock__strong">Deposit · $50.00</p>
          <p className="nf-mock__muted">Payment received Nov 24</p>
        </div>
        <Badge tone="green">Paid</Badge>
      </div>
      <div className="nf-row">
        <div>
          <p className="nf-mock__strong">Balance · $350.00</p>
          <p className="nf-mock__muted">Emailed to jane@example.com</p>
        </div>
        <Badge tone="amber">Waiting for payment</Badge>
      </div>
      <div className="nf-mock__actions">
        <span className="nf-chip">
          <LinkIcon /> Copy link
        </span>
        <span className="nf-chip nf-chip--primary">Request payment</span>
      </div>
    </div>
  </div>
);

const CareVisual = () => (
  <div className="nf-mock nf-mock--email" aria-hidden="true">
    <div className="nf-mock__bar">
      <MailIcon /> Your microblading aftercare
    </div>
    <div className="nf-mock__body">
      <p>
        Hi <strong>Jane</strong>, here's how to care for your brows over the
        next few days.
      </p>
      <p className="nf-mock__heading">First 7 days</p>
      <ul className="nf-list">
        <li>Keep the area clean and dry</li>
        <li>Apply a thin layer of the balm twice a day</li>
      </ul>
      <p className="nf-mock__heading">Avoid</p>
      <ul className="nf-list">
        <li>Swimming, saunas and direct sun</li>
      </ul>
      <p className="nf-mock__muted">Saved to Jane's notes · Sent Dec 1</p>
    </div>
  </div>
);

const CheckInVisual = () => (
  <div className="nf-mock" aria-hidden="true">
    <div className="nf-mock__bar">
      <CameraIcon /> Healing check-in · in 4 weeks
    </div>
    <div className="nf-mock__body">
      <p>
        Hi Jane, how are your brows healing? Send us a few photos so we can
        plan your touch-up.
      </p>
      <span className="nf-chip nf-chip--primary nf-chip--block">
        Upload healing photos
      </span>
      <div className="nf-photos">
        <span />
        <span />
        <span />
      </div>
      <p className="nf-mock__muted">3 photos added to Jane's notes</p>
    </div>
  </div>
);

const InventoryVisual = () => (
  <div className="nf-mock" aria-hidden="true">
    <div className="nf-mock__bar">
      <BottleIcon /> Inventory · Batches
    </div>
    <div className="nf-mock__body nf-mock__body--flush">
      {[
        { name: "Dark Brown pigment", lot: "DB2026-104", exp: "Jun 30, 2028", qty: "9.5 ml", tone: "green", label: "In stock" },
        { name: "Rose lip pigment", lot: "LR-2207", exp: "Jan 12, 2027", qty: "4 ml", tone: "amber", label: "Expiring soon" },
        { name: "Soft Taupe pigment", lot: "ST-0412", exp: "Mar 3, 2028", qty: "6 ml", tone: "red", label: "Recalled" },
      ].map((row) => (
        <div className="nf-batch" key={row.lot}>
          <div>
            <p className="nf-mock__strong">{row.name}</p>
            <p className="nf-mock__muted">
              Lot {row.lot} · Exp {row.exp} ·{" "}
              <span className="nf-nowrap">{row.qty}</span>
            </p>
          </div>
          <Badge tone={row.tone as "green" | "amber" | "red"}>{row.label}</Badge>
        </div>
      ))}
      <div className="nf-passport">
        <span>Compliance passport</span>
        <span>SDS · COA · Ingredients</span>
      </div>
    </div>
  </div>
);

const FEATURES: Feature[] = [
  {
    id: "square",
    tag: "Square integration",
    icon: <CalendarIcon />,
    title: "Your Square bookings, ready for consent.",
    lead: "Connect Square once and stop typing the same booking into two apps.",
    points: [
      "Match your Square services to your PMU Forms services once",
      "New bookings add the client and appointment and send the right consent forms",
      "Reschedule in Square and the appointment moves with it",
    ],
    visual: <SquareSyncVisual />,
  },
  {
    id: "payments",
    tag: "Payments",
    icon: <CardIcon />,
    title: "Collect deposits without the chasing.",
    lead: "Request a deposit or the balance from any appointment and let Square handle the checkout.",
    points: [
      "Email the client a secure Square payment link, or copy it to text",
      "Money goes straight to your Square account",
      "The appointment shows Paid as soon as the client pays",
    ],
    note: "Available to artists who connect a Square account.",
    visual: <PaymentsVisual />,
  },
  {
    id: "care",
    tag: "Pre-care & aftercare",
    icon: <MailIcon />,
    title: "Pre-care and aftercare in a tap.",
    lead: "Clients arrive prepared and leave knowing exactly how to look after their results.",
    points: [
      "Send pre-care before the visit and aftercare when you mark it complete",
      "Start from your own aftercare form, or let AI draft it when you want a hand",
      "Every email is saved to the client's notes, so you have a record of what you sent",
    ],
    visual: <CareVisual />,
  },
  {
    id: "check-ins",
    tag: "Healing check-ins",
    icon: <CameraIcon />,
    title: "Check in on healing. Collect the photos.",
    lead: "A thoughtful follow-up that clients love, and healed photos for your records.",
    points: [
      "Schedule a check-in days, weeks or months after the appointment",
      "Clients upload healing photos from a link, no login or app needed",
      "Photos land in the client's notes, ready for the touch-up",
    ],
    visual: <CheckInVisual />,
  },
  {
    id: "inventory",
    tag: "Inventory & traceability",
    icon: <BottleIcon />,
    title: "Know every lot on your shelf.",
    lead: "Track pigments and supplies by lot, so you're ready if a product is ever recalled.",
    points: [
      "Track products by lot number and expiration date as you receive stock",
      "See what's low, expiring or expired, and quarantine or recall a lot in one tap",
      "Keep SDS, COA and ingredient documents together in each product's compliance passport",
    ],
    note: "PMU Forms organizes your product documents; it doesn't certify products.",
    visual: <InventoryVisual />,
  },
];

const NewFeatures = () => (
  <section className="new-features" id="whats-new" aria-labelledby="whats-new-title">
    <div className="new-features__container">
      <div className="new-features__header">
        <p className="new-features__eyebrow">What's new</p>
        <h2 className="new-features__title" id="whats-new-title">
          More time for your art. Less admin.
        </h2>
        <p className="new-features__lead">
          Five new tools that work alongside the consent forms you already
          use.
        </p>
        <nav className="new-features__jump" aria-label="New features">
          {FEATURES.map((f) => (
            <a key={f.id} href={`#feature-${f.id}`}>
              {f.tag}
            </a>
          ))}
        </nav>
      </div>

      {FEATURES.map((feature, index) => (
        <article
          key={feature.id}
          id={`feature-${feature.id}`}
          className={`new-features__row ${index % 2 ? "new-features__row--reverse" : ""}`}
        >
          <div className="new-features__copy">
            <span className="new-features__tag">
              {feature.icon}
              {feature.tag}
            </span>
            <h3 className="new-features__row-title">{feature.title}</h3>
            <p className="new-features__row-lead">{feature.lead}</p>
            <ul className="new-features__points">
              {feature.points.map((point) => (
                <li key={point}>
                  <span className="new-features__tick">
                    <CheckIcon size={14} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            {feature.note && <p className="new-features__note">{feature.note}</p>}
          </div>
          <div className="new-features__visual">{feature.visual}</div>
        </article>
      ))}

      <div className="new-features__cta">
        <h3>Try every feature free.</h3>
        <p>Start on the web today, or download the app for iPhone or Android.</p>
        <div className="new-features__cta-buttons">
          <Button
            href={WEB_APP_URL}
            target="_blank"
            icon={<WatchADemoSvg />}
            variant="secondary"
            size="small"
          >
            Try For Free
          </Button>
          <Button
            href={IOS_APP_URL}
            target="_blank"
            icon={<AppleButtonSvg />}
            variant="primary"
            size="small"
          >
            Download on iOS
          </Button>
          <Button
            href={ANDROID_APP_URL}
            target="_blank"
            icon={<GooglePlaySvg />}
            variant="primary"
            size="small"
          >
            Download on Android
          </Button>
          <Button
            href={WEB_APP_URL}
            target="_blank"
            icon={<WebAppSvg />}
            variant="primary"
            size="small"
          >
            Open Web App
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default NewFeatures;
