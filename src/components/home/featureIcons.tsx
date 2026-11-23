import type React from "react";

/** Small line icons for the client journey and new feature sections. */
const Icon: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const CalendarIcon = () => (
  <Icon>
    <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
    <path d="M8 2.5v4M16 2.5v4M3 9.5h18M8 14h3M8 17h6" />
  </Icon>
);

export const ClipboardIcon = () => (
  <Icon>
    <rect x="5" y="4" width="14" height="17" rx="2.5" />
    <path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6" />
  </Icon>
);

export const CardIcon = () => (
  <Icon>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 10h19M6.5 15h4" />
  </Icon>
);

export const BottleIcon = () => (
  <Icon>
    <path d="M9.5 2.5h5M10 2.5v4L7 10.5V19a2.5 2.5 0 0 0 2.5 2.5h5A2.5 2.5 0 0 0 17 19v-8.5l-3-4v-4" />
    <path d="M7 14h10" />
  </Icon>
);

export const MailIcon = () => (
  <Icon>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Icon>
);

export const CameraIcon = () => (
  <Icon>
    <path d="M4 8h3l1.5-2.5h7L17 8h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 8Z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </Icon>
);

export const LinkIcon = () => (
  <Icon>
    <path d="M10 13.5a4 4 0 0 0 5.7.3l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2" />
    <path d="M14 10.5a4 4 0 0 0-5.7-.3l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2" />
  </Icon>
);

export const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <Icon size={size}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);
