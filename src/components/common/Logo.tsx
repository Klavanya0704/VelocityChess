import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-xl',
    lg: 'text-xl sm:text-3xl',
  };

  const subTextSizes = {
    sm: 'text-[7.5px]',
    md: 'text-[9px]',
    lg: 'text-[11px]',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Red Stylized S-Knight Emblem matching Reference Image 2 */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-[#E03824]">
          {/* Outlined Stylized S-Knight Crest Path */}
          <path
            d="M 60,12 L 78,35 L 68,46 L 52,35 L 44,46 L 76,66 C 80,68 82,72 82,76 L 82,82 L 32,82 L 32,72 L 70,72 L 44,52 C 40,49 38,44 38,39 L 38,34 L 78,34 C 70,22 58,16 50,22 Z"
            fill="currentColor"
          />
          {/* Main S-Curve Body & Knight Head */}
          <path
            d="M 52,10 C 58,10 65,14 70,22 L 78,34 C 84,42 80,50 72,52 L 48,36 C 42,36 38,42 44,50 L 70,70 L 22,70 L 22,80 L 80,80 C 85,80 88,84 86,88 L 18,88 C 14,88 12,92 14,96 L 86,96 C 90,96 92,92 90,88 L 84,78 C 84,72 80,66 74,62 L 48,42 L 74,42 C 84,42 90,32 82,22 L 68,12 C 62,8 56,8 52,10 Z"
            fill="currentColor"
          />
          {/* Pedestal Base Lines */}
          <path
            d="M 12,104 L 88,104 C 92,104 94,108 90,110 L 10,110 C 6,110 8,104 12,104 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Brand Name: VELOCITY with Red Chess King for 'I', and GOLD CHESS ACADEMY */}
      <div className="flex flex-col justify-center">
        <div className={`font-serif font-black ${textSizes[size]} tracking-wider text-[#10264B] leading-none flex items-center`}>
          <span className="text-[#10264B]">VELOC</span>
          
          {/* Red Chess King Piece for 'I' matching Reference Image */}
          <span className="inline-flex items-center justify-center mx-[1.5px] text-[#E03824]">
            <svg className="w-3.5 sm:w-4.5 h-4 sm:h-5 text-[#E03824]" viewBox="0 0 24 24" fill="currentColor">
              {/* Cross on Top */}
              <path d="M11 2h2v2h-2zM10 3h4v1.5h-4z" />
              {/* King Crown, Body & Base */}
              <path d="M12 4.5c-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7V10H9c-.6 0-1 .4-1 1v1.5c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1h-2V8.2c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2zM7 16.5h10v2H7zM6 19.5h12v2.5H6z" />
            </svg>
          </span>

          <span className="text-[#10264B]">TY</span>
        </div>
        
        <span className={`block font-sans font-bold tracking-[0.28em] text-[#D98B00] uppercase leading-tight mt-1 ${subTextSizes[size]}`}>
          CHESS ACADEMY
        </span>
      </div>
    </div>
  );
};
