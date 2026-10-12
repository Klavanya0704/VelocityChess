import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  yellowBg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-14 sm:h-16 lg:h-18',
  };

  return (
    <Link
      to="/"
      aria-label="Velocity Chess Academy Home"
      className={`inline-flex items-center rounded-2xl overflow-hidden transition-transform hover:scale-105 cursor-pointer ${className}`}
    >
      <img
        src="/assets/velocity_logo.png"
        alt="Velocity Chess Academy"
        className={`${heightClasses[size]} w-auto object-contain rounded-2xl filter brightness-[1.02]`}
      />
    </Link>
  );
};

export default Logo;
