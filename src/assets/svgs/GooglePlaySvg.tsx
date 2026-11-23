import type React from "react";

/**
 * Single-colour Google Play mark (the four-part "play" triangle in shades of
 * white), sized to sit beside the Apple icon on the dark download buttons.
 */
export const GooglePlaySvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="21"
    height="27"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* left */}
    <path fill="white" d="M2 1.2 12.6 13 2 24.8c-.4-.3-.6-.8-.6-1.4V2.6c0-.6.2-1.1.6-1.4Z" />
    {/* top */}
    <path fill="white" fillOpacity=".72" d="M2 1.2c.5-.4 1.2-.4 1.9 0L17 8.6 12.6 13 2 1.2Z" />
    {/* right */}
    <path
      fill="white"
      fillOpacity=".88"
      d="m17 8.6 4.5 2.6c1.4.8 1.4 2.8 0 3.6L17 17.4 12.6 13 17 8.6Z"
    />
    {/* bottom */}
    <path fill="white" fillOpacity=".55" d="M12.6 13 17 17.4 3.9 24.8c-.7.4-1.4.4-1.9 0L12.6 13Z" />
  </svg>
);

export default GooglePlaySvg;
