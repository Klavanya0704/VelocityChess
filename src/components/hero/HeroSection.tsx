import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-auto min-h-screen lg:min-h-0 lg:h-[100svh] lg:max-h-[100vh] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-22 xl:pt-24 pb-2 sm:pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Velocity Chess Academy Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero_bg_seated_player.jpg"
          alt="Velocity Chess Academy Environment Background"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
      </div>

      {/* 2. Top Center Main Editorial Headline & Tagline Slogan Pill (Viewport Centered) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
        
        {/* Eyebrow Tagline Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-0.5 sm:px-4 sm:py-1 rounded-full bg-[#FFEED4]/95 border border-[#F2A000]/40 shadow-sm text-[9px] sm:text-[11px] lg:text-xs font-sans font-extrabold uppercase tracking-widest text-[#10294F]">
          <span>DISCIPLINE</span>
          <span className="text-[#F2A000]">·</span>
          <span>STRATEGY</span>
          <span className="text-[#F2A000]">·</span>
          <span>CONFIDENCE</span>
          <span className="text-[#F2A000]">·</span>
          <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-[46px] text-[#10294F] tracking-tight leading-[1.1]">
          <span>Every Move Builds a</span>
          <br className="hidden sm:inline" />{' '}
          <span className="relative inline-block font-serif italic font-normal text-[#F2A000] mt-0.5">
            Brighter Tomorrow
            {/* Refined Gold Underline Stroke */}
            <svg className="w-full h-2.5 text-[#F2A000] absolute -bottom-2 left-0" viewBox="0 0 200 20" fill="none">
              <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm text-[#10294F] font-sans font-semibold max-w-xl mx-auto leading-relaxed pt-0.5">
          Nurturing confident, creative and strategic thinkers through the power of chess.
        </p>

      </div>

      {/* 3. Hero Main Content Grid: Upper-Left Achievement Card */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 mt-1 sm:mt-2 lg:-mt-5 xl:-mt-8 mb-auto py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          
          {/* LOWER LEFT COLUMN: Single Our Achievements Card */}
          <div className="lg:col-span-5 flex justify-start items-start">
            <AchievementCard />
          </div>

          {/* RIGHT COLUMN: Open space showcasing the coach & chessboard interior */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>

      {/* 4. Bottom Section: Single Wide Floating Glassmorphism Statistics Capsule */}
      <div className="relative z-10 pt-0.5 pb-2 sm:pb-3">
        <StatisticsBar />
      </div>

    </section>
  );
};

export default HeroSection;
