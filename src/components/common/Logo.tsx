import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  yellowBg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg', yellowBg = false }) => {
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-14 sm:h-16 lg:h-18',
  };

  const logoSrc = yellowBg
    ? '/assets/velocity_logo.png'
    : '/assets/velocity_logo_tight_transparent.png';

  return (
    <Link
      to="/"
      aria-label="Velocity Chess Academy Home"
      className={`inline-flex items-center rounded-2xl overflow-hidden transition-transform hover:scale-105 cursor-pointer ${className}`}
    >
      <img
        src={logoSrc}
        alt="Velocity Chess Academy"
        className={`${heightClasses[size]} w-auto object-contain ${yellowBg ? 'rounded-2xl shadow-sm' : ''}`}
      />
    </Link>
  );
};

export default Logo;
