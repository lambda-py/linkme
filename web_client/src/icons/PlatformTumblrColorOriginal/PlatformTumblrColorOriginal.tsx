/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  color: string;
  className: any;
}

export const PlatformTumblrColorOriginal = ({ color = "#001935", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.2 48C22 48 16.6 44.3 16.6 35.4V21.2H10V13.5C17.2 11.6 20.2 5.4 20.6 0H28.1V12.2H36.8V21.2H28.1V33.6C28.1 37.3 30 38.6 33 38.6H37.2V48H29.2Z"
        fill={color}
      />
    </svg>
  );
};
