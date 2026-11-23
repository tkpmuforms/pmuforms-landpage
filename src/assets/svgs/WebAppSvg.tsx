import type React from "react";

/** White globe, sized to sit beside the Apple and Google Play icons on the dark buttons. */
export const WebAppSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="21"
    height="27"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5c2.6 2.6 3.9 5.8 3.9 9.5s-1.3 6.9-3.9 9.5c-2.6-2.6-3.9-5.8-3.9-9.5S9.4 5.1 12 2.5Z" />
  </svg>
);

export default WebAppSvg;
