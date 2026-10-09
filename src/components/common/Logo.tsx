import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[7.5px]',
    md: 'text-[8.5px]',
    lg: 'text-[10px]',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Red & Gold Stylized S-Knight Emblem matching Reference Logo */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#E03A24]">
          {/* Stylized S-Knight Silhouette */}
          <path
            d="M 60,10 C 65,10 75,18 70,25 C 65,32 50,38 40,32 C 30,26 35,18 50,15 Z"
            fill="currentColor"
          />
          <path
            d="M 75,20 C 85,30 65,50 35,48 C 25,47 20,40 25,35 C 30,30 50,35 65,32 C 75,30 80,25 75,20 Z"
            fill="currentColor"
          />
          <path
            d="M 30,48 C 60,50 85,55 75,70 C 65,85 25,75 20,68 C 15,60 20,55 30,55 C 45,55 60,65 60,68 C 60,72 40,68 30,62 C 25,58 25,50 30,48 Z"
            fill="currentColor"
          />
          <path
            d="M 20,68 C 30,75 70,85 75,88 L 15,88 C 12,88 10,84 12,80 L 18,72 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Typography: VELOCITY with King Icon for 'I', CHESS ACADEMY subtitle */}
      <div className="flex flex-col justify-center">
        <div className={`font-serif font-extrabold ${textSizes[size]} tracking-wider text-[#10264B] leading-none flex items-center`}>
          <span>VELOC</span>
          {/* King Piece replacing / styling the 'I' */}
          <span className="inline-flex items-center justify-center mx-[1px] text-[#E03A24] font-normal">
            <svg className="w-3.5 sm:w-4 h-4 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 22H5c-1.1 0-2-.9-2-2v-1c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v1c0 1.1-.9 2-2 2zM12 2c.6 0 1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1h-1v1c1.7 0 3 1.3 3 3 0 1.1-.6 2.1-1.5 2.6L16 16H8l1.5-3.4C8.6 12.1 8 11.1 8 10c0-1.7 1.3-3 3-3V6h-1c-.6 0-1-.4-1-1s.4-1 1-1h1V3c0-.6.4-1 1-1z" />
            </svg>
          </span>
          <span>TY</span>
        </div>
        <span className={`block font-sans font-bold tracking-[0.28em] text-[#D98B00] uppercase leading-tight mt-0.5 ${subTextSizes[size]}`}>
          CHESS ACADEMY
        </span>
      </div>
    </div>
  );
};
