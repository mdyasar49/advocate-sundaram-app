import React from 'react';

const AdvocateBandLogo = ({ size = 48, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      style={{ verticalAlign: 'middle', display: 'inline-block', filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))' }}
    >
      <defs>
        <linearGradient id="goldLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8ecbf" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#b8860b" />
          <stop offset="100%" stopColor="#8a5a00" />
        </linearGradient>

        {/* Arc Paths for Curved Text */}
        <path id="topArcPath" d="M 21,60 A 39,39 0 1,1 99,60" fill="none" />
        <path id="bottomArcPath" d="M 99,60 A 39,39 0 0,1 21,60" fill="none" />
      </defs>

      {/* Dark Outer Shield Background */}
      <circle cx="60" cy="60" r="57" fill="#060a14" stroke="url(#goldLogoGrad)" strokeWidth="3.5" />
      
      {/* Golden Filigree Inner Dash Ring */}
      <circle cx="60" cy="60" r="51.5" fill="none" stroke="url(#goldLogoGrad)" strokeWidth="1" strokeDasharray="4 2.5" opacity="0.6" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="#d4af37" strokeWidth="0.6" opacity="0.3" />

      {/* Curved Name Typography along Top Arc: ADVOCATE SUNDARAM */}
      <text fontFamily="'Cinzel', 'Mukta Malar', serif">
        <textPath
          href="#topArcPath"
          startOffset="50%"
          textAnchor="middle"
          fill="url(#goldLogoGrad)"
          fontSize="9.2"
          fontWeight="800"
          letterSpacing="1.4px"
        >
          ADVOCATE SUNDARAM
        </textPath>
      </text>

      {/* Curved Subtitle Typography along Bottom Arc: TRICHY COURT */}
      <text fontFamily="'Plus Jakarta Sans', sans-serif">
        <textPath
          href="#bottomArcPath"
          startOffset="50%"
          textAnchor="middle"
          fill="#cbd5e1"
          fontSize="6.8"
          fontWeight="700"
          letterSpacing="1.2px"
          opacity="0.9"
        >
          TRICHY CITY COURT
        </textPath>
      </text>

      {/* Center Group: Scales of Justice + Advocates Collar Neckband */}
      <g transform="translate(0, 3)">
        {/* Scales of Justice Beam & Pillar */}
        <line x1="60" y1="40" x2="60" y2="58" stroke="url(#goldLogoGrad)" strokeWidth="2" strokeLinecap="round" />
        <line x1="42" y1="44" x2="78" y2="44" stroke="url(#goldLogoGrad)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Scales Plates Left */}
        <line x1="42" y1="44" x2="36" y2="52" stroke="url(#goldLogoGrad)" strokeWidth="0.9" />
        <line x1="42" y1="44" x2="48" y2="52" stroke="url(#goldLogoGrad)" strokeWidth="0.9" />
        <path d="M 34 52 Q 42 56 50 52 Z" fill="url(#goldLogoGrad)" opacity="0.85" />

        {/* Scales Plates Right */}
        <line x1="78" y1="44" x2="72" y2="52" stroke="url(#goldLogoGrad)" strokeWidth="0.9" />
        <line x1="78" y1="44" x2="84" y2="52" stroke="url(#goldLogoGrad)" strokeWidth="0.9" />
        <path d="M 70 52 Q 78 56 86 52 Z" fill="url(#goldLogoGrad)" opacity="0.85" />

        {/* Advocates Collar Wing */}
        <path d="M 38 56 C 45 53.5, 52 53.5, 60 56 C 68 53.5, 75 53.5, 82 56 L 84 60 L 60 58.5 L 36 60 Z" fill="#ffffff" />
        <path d="M 39 56.5 L 60 59 L 81 56.5" fill="none" stroke="#94a3b8" strokeWidth="0.8" />

        {/* Left White Neckband Strip */}
        <polygon points="49,59 58,59 57,84 48,82" fill="#ffffff" />
        <polygon points="53.5,59 58,59 57,84" fill="#e2e8f0" opacity="0.6" />

        {/* Right White Neckband Strip */}
        <polygon points="62,59 71,59 72,82 63,84" fill="#ffffff" />
        <polygon points="62,59 66.5,59 66.5,83.5" fill="#e2e8f0" opacity="0.6" />

        {/* Golden Base Crest Accent */}
        <polygon points="60,86 61.5,89.5 65.5,89.5 62.3,91.8 63.5,95.5 60,93 56.5,95.5 57.7,91.8 54.5,89.5 58.5,89.5" fill="url(#goldLogoGrad)" />
      </g>
    </svg>
  );
};

export default AdvocateBandLogo;
