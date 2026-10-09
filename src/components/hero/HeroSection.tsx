import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen max-h-[960px] flex flex-col justify-between pt-20 sm:pt-22 lg:pt-24 pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Photorealistic Hero Background with Seated Indian Player, Trophy Shelves & Yellow Logo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ref_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.01]"
        />
        
        {/* Soft translucent warm ivory overlay keeping background details crisp & legible */}
        <div className="absolute inset-0 bg-[#FFF8EE]/10 pointer-events-none z-0" />
      </div>

      {/* 2. Top Center Main Headline & Tagline Slogan Pill */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center pt-1 space-y-2">
        
        {/* Eyebrow Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFEED4]/95 border border-[#F2A000]/40 shadow-sm text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-widest text-[#10294F]">
          <span>DISCIPLINE</span>
          <span className="text-[#F2A000]">·</span>
          <span>STRATEGY</span>
          <span className="text-[#F2A000]">·</span>
          <span>CONFIDENCE</span>
          <span className="text-[#F2A000]">·</span>
          <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-[#10294F] tracking-tight leading-[1.1] drop-shadow-sm">
          <span>Every Move Builds a</span>
          <br className="hidden sm:inline" />{' '}
          <span className="relative inline-block font-serif italic font-normal text-[#F2A000] drop-shadow-sm mt-0.5">
            Brighter Tomorrow
            {/* Refined Gold Underline Stroke */}
            <svg className="w-full h-2.5 text-[#F2A000] -mt-1 absolute -bottom-2 left-0" viewBox="0 0 200 20" fill="none">
              <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm text-[#10294F] font-sans font-semibold max-w-xl mx-auto leading-relaxed drop-shadow-sm">
          Nurturing confident, creative and strategic thinkers through the power of chess.
        </p>

      </div>

      {/* 3. Hero Main Content Grid: Lower-Left Achievements Card */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 my-auto py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LOWER LEFT COLUMN: Single Our Achievements Glassmorphism Card */}
          <div className="lg:col-span-5 flex justify-start items-center">
            <AchievementCard />
          </div>

          {/* RIGHT COLUMN: Open space allowing clear view of the seated Indian chess player */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>

      {/* 4. Bottom Section: Single Wide Floating Glassmorphism Statistics Capsule */}
      <div className="relative z-10 pt-1 pb-2">
        <StatisticsBar />
      </div>

    </section>
  );
};
