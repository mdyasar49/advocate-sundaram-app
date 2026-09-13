import React from 'react';

const AdvocateBandLogo = ({ size = 38 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      style={{ verticalAlign: 'middle', display: 'inline-block' }}
    >
      <circle cx="32" cy="32" r="29" fill="#080d1a" stroke="url(#goldLogoGrad)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 2" />

      <path d="M19 18 C24 16, 28 16, 32 18.5 C36 16, 40 16, 45 18 L47 22 L32 20.5 L17 22 Z" fill="#ffffff" />
      <path d="M20 18.5 L32 21 L44 18.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />

      <polygon points="25.5,21 31,21 30.5,45 24.5,44" fill="#ffffff" />
      <polygon points="28,21 31,21 30.5,45" fill="#e2e8f0" opacity="0.7" />

      <polygon points="33,21 38.5,21 39.5,44 33.5,45" fill="#ffffff" />
      <polygon points="33,21 35.5,21 35.5,45" fill="#e2e8f0" opacity="0.7" />

      <polygon points="32,49 33.2,52.5 36.8,52.5 33.8,54.6 35,58 32,55.8 29,58 30.2,54.6 27.2,52.5 30.8,52.5" fill="url(#goldLogoGrad)" />

      <defs>
        <linearGradient id="goldLogoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f3e5ab" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AdvocateBandLogo;
