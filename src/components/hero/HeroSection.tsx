import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-0 xl:min-h-screen flex flex-col justify-between pt-15 sm:pt-17 lg:pt-18 xl:pt-20 pb-3 sm:pb-4 lg:pb-4 select-none bg-[#FFF8EE]">
      
      {/* 1. Velocity Chess Academy Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero_bg_seated_player.jpg"
          alt="Velocity Chess Academy Student Player Background"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 2. Top Center Main Editorial Headline & Tagline Slogan Glass Panel (Viewport Centered & Compact) */}
      <div className="relative z-10 w-full max-w-xl lg:max-w-2xl mx-auto px-3 sm:px-4 text-center pt-0.5 sm:pt-1">
        <div className="relative inline-block w-full px-3 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-3 xl:px-8 xl:py-3.5 rounded-2xl sm:rounded-3xl bg-[rgba(255,250,240,0.85)] backdrop-blur-md border border-[#F2A000]/30 shadow-[0_8px_30px_rgb(0,0,0,0.06)] space-y-1 transition-all">
          
          {/* Eyebrow Tagline Pill */}
          <div className="inline-flex flex-wrap justify-center items-center gap-1 sm:gap-2 px-2.5 py-0.5 sm:px-4 sm:py-1 rounded-full bg-[#FFEED4]/95 border border-[#F2A000]/40 shadow-sm text-[8.5px] xs:text-[9.5px] sm:text-[11px] lg:text-xs font-sans font-extrabold uppercase tracking-wider sm:tracking-widest text-[#10294F]">
            <span>DISCIPLINE</span>
            <span className="text-[#F2A000]">·</span>
            <span>STRATEGY</span>
            <span className="text-[#F2A000]">·</span>
            <span>CONFIDENCE</span>
            <span className="text-[#F2A000]">·</span>
            <span className="text-[#D98A00] font-black">A BRIGHTER TOMORROW</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif font-extrabold text-xl xs:text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-[#10294F] tracking-tight leading-[1.14]">
            <span>Every Move Builds a</span>
            <br className="hidden sm:inline" />{' '}
            <span className="relative inline-block font-serif italic font-normal text-[#D98A00] mt-0.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Brighter Tomorrow
              {/* Refined Gold Underline Stroke */}
              <svg className="w-full h-2 sm:h-2.5 text-[#F2A000] absolute -bottom-1.5 sm:-bottom-2 left-0" viewBox="0 0 200 20" fill="none">
                <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-[11px] sm:text-xs lg:text-[13px] text-[#10294F]/90 font-sans font-semibold max-w-lg mx-auto leading-relaxed pt-0">
            Nurturing confident, creative and strategic thinkers through the power of chess.
          </p>

        </div>
      </div>

      {/* 3. Hero Main Content Grid: Upper-Left Achievement Card */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 mt-0.5 sm:mt-1 lg:mt-0 xl:mt-1 mb-auto py-0.5 sm:py-1">
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
      <div className="relative z-10 pt-1 sm:pt-1.5 pb-1 sm:pb-2">
        <StatisticsBar />
      </div>

    </section>
  );
};

export default HeroSection;
