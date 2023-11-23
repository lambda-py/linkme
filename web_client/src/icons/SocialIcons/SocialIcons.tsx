/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SocialIcons = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="48"
      viewBox="0 0 49 48"
      width="49"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_287)">
        <path
          d="M45.2836 0H3.92189C2.97184 0 2.0607 0.373315 1.38891 1.03782C0.717128 1.70232 0.339722 2.60358 0.339722 3.54333V44.4567C0.339722 45.3964 0.717128 46.2977 1.38891 46.9622C2.0607 47.6267 2.97184 48 3.92189 48H45.2836C46.2336 48 47.1448 47.6267 47.8166 46.9622C48.4883 46.2977 48.8657 45.3964 48.8657 44.4567V3.54333C48.8657 2.60358 48.4883 1.70232 47.8166 1.03782C47.1448 0.373315 46.2336 0 45.2836 0ZM14.8032 40.89H7.50742V17.9667H14.8032V40.89ZM11.1502 14.79C10.3227 14.7854 9.51501 14.5384 8.82922 14.0802C8.14342 13.622 7.61021 12.9731 7.29689 12.2154C6.98357 11.4577 6.90418 10.6252 7.06873 9.82291C7.23328 9.02063 7.6344 8.28455 8.22147 7.70756C8.80854 7.13057 9.55525 6.73853 10.3674 6.58092C11.1795 6.42331 12.0206 6.50719 12.7845 6.82197C13.5485 7.13675 14.2011 7.66833 14.6599 8.34962C15.1187 9.03092 15.3632 9.83138 15.3626 10.65C15.3704 11.1981 15.2666 11.7421 15.0573 12.2496C14.848 12.7571 14.5376 13.2178 14.1445 13.6041C13.7514 13.9905 13.2837 14.2946 12.7693 14.4983C12.2549 14.702 11.7043 14.8012 11.1502 14.79ZM41.6947 40.91H34.4023V28.3867C34.4023 24.6933 32.8151 23.5533 30.7662 23.5533C28.6028 23.5533 26.4797 25.1667 26.4797 28.48V40.91H19.184V17.9833H26.2001V21.16H26.2944C26.9987 19.75 29.4655 17.34 33.2296 17.34C37.3004 17.34 41.6981 19.73 41.6981 26.73L41.6947 40.91Z"
          fill="#0A66C2"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_287">
          <rect fill="white" height="48" transform="translate(0.339722)" width="48.526" />
        </clipPath>
      </defs>
    </svg>
  );
};
