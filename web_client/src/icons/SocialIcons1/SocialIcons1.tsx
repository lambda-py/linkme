/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SocialIcons1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="48"
      viewBox="0 0 49 48"
      width="49"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_284)">
        <path
          d="M48.8548 24C48.8548 10.7452 37.9919 0 24.5917 0C11.1916 0 0.328735 10.7452 0.328735 24C0.328735 35.9789 9.20132 45.908 20.8007 47.7084V30.9375H14.6401V24H20.8007V18.7125C20.8007 12.6975 24.423 9.375 29.9652 9.375C32.6189 9.375 35.3964 9.84375 35.3964 9.84375V15.75H32.337C29.323 15.75 28.3828 17.6002 28.3828 19.5V24H35.112L34.0363 30.9375H28.3828V47.7084C39.9822 45.908 48.8548 35.9789 48.8548 24Z"
          fill="#1877F2"
        />
        <path
          d="M34.0363 30.9375L35.1121 24H28.3829V19.5C28.3829 17.602 29.3231 15.75 32.337 15.75H35.3964V9.84375C35.3964 9.84375 32.6199 9.375 29.9652 9.375C24.4231 9.375 20.8007 12.6975 20.8007 18.7125V24H14.6401V30.9375H20.8007V47.7084C23.3128 48.0972 25.8707 48.0972 28.3829 47.7084V30.9375H34.0363Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_284">
          <rect fill="white" height="48" transform="translate(0.328735)" width="48.526" />
        </clipPath>
      </defs>
    </svg>
  );
};
