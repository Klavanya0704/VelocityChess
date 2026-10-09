import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`flex items-center select-none ${heightClasses[size]} ${className}`}>
      {/* 100% Precision Vector Logo matching reference image */}
      <svg
        viewBox="0 0 530 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Stylized Red S-Knight Emblem (Rich Red #E53935) */}
        <g fill="#E53935">
          {/* Knight Head & Ear */}
          <path d="M 124 18 L 140 45 L 128 58 L 105 45 C 108 34 116 24 124 18 Z" />
          <path d="M 124 18 C 104 22 84 38 80 62 C 76 84 92 100 112 96 L 145 96 C 152 96 156 102 152 108 L 98 108 C 90 108 86 114 90 120 L 152 120 C 158 120 162 126 158 132 L 62 132 C 54 132 50 138 54 144 L 168 144 C 176 144 180 138 176 132 L 78 132 L 172 120 C 180 120 184 112 178 106 L 170 96 C 170 86 162 76 150 70 L 112 70 C 98 70 90 56 100 42 L 124 18 Z" />
          {/* Pedestal Base */}
          <path d="M 45 152 L 185 152 C 192 152 195 158 188 162 L 42 162 C 35 162 38 152 45 152 Z" />
        </g>

        {/* VELOCITY Brand Text */}
        <g fill="#E53935">
          {/* V */}
          <path d="M 215 60 L 228 108 L 241 60 H 253 L 234 118 H 222 L 203 60 H 215 Z" />
          {/* E */}
          <path d="M 258 60 H 288 V 70 H 269 V 83 H 285 V 93 H 269 V 108 H 289 V 118 H 258 V 60 Z" />
          {/* L */}
          <path d="M 295 60 H 306 V 108 H 325 V 118 H 295 V 60 Z" />
          {/* O */}
          <path d="M 330 89 C 330 72 342 60 357 60 C 372 60 384 72 384 89 C 384 106 372 118 357 118 C 342 118 330 106 330 89 Z M 342 89 C 342 100 348 109 357 109 C 366 109 372 100 372 89 C 372 78 366 69 357 69 C 348 69 342 78 342 89 Z" />
          {/* C */}
          <path d="M 416 72 L 406 79 C 401 73 396 69 389 69 C 378 69 371 78 371 89 C 371 100 378 109 389 109 C 396 109 402 105 407 98 L 416 106 C 409 114 399 118 388 118 C 370 118 359 105 359 89 C 359 73 370 60 389 60 C 400 60 410 65 416 72 Z" />
          
          {/* Solid Red King Chess Piece (Replaces 'I') */}
          <g transform="translate(420, 56)">
            {/* Cross */}
            <path d="M 11 4 H 13 V 8 H 15 V 10 H 13 V 13 H 11 V 10 H 9 V 8 H 11 V 4 Z" />
            {/* Crown Head */}
            <path d="M 12 13 C 7.5 13 4 16.5 4 21 C 4 23.5 5.5 25.5 7.5 26.5 L 6 36 H 18 L 16.5 26.5 C 18.5 25.5 20 23.5 20 21 C 20 16.5 16.5 13 12 13 Z" />
            {/* Mid Ring */}
            <path d="M 5 38 H 19 V 43 H 5 V 38 Z" />
            {/* Base */}
            <path d="M 3 45 H 21 V 62 H 3 V 45 Z" />
          </g>

          {/* T */}
          <path d="M 445 60 H 477 V 70 H 467 V 118 H 455 V 70 H 445 V 60 Z" />
          {/* Y */}
          <path d="M 479 60 L 493 90 L 507 60 H 519 L 499 98 V 118 H 487 V 98 L 467 60 H 479 Z" />
        </g>

        {/* CHESS ACADEMY Subtitle (Golden Orange #D98B00) */}
        <text
          x="215"
          y="152"
          fill="#D98B00"
          fontSize="24"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="7.5"
        >
          CHESS ACADEMY
        </text>
      </svg>
    </div>
  );
};
