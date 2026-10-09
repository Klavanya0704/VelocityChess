import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-[94vh] max-h-[940px] flex flex-col justify-between pt-18 sm:pt-20 lg:pt-22 pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Full 100% Photographic Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ref_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
        
        {/* Soft subtle gradient behind top text area to ensure readability */}
        <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-[#FFF8EE]/90 via-[#FFF8EE]/40 to-transparent pointer-events-none z-0" />
      </div>

      {/* 2. Top Center Overlay: Eyebrow Tagline, Headline, & Subtitle */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center pt-1 sm:pt-2">
        <div className="inline-block bg-white/75 backdrop-blur-md px-6 py-3.5 rounded-3xl border border-white/60 shadow-lg space-y-1.5 max-w-3xl mx-auto">
          
          {/* Eyebrow Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/30 shadow-xs text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-widest text-[#10294F]">
            <span>DISCIPLINE</span>
            <span className="text-[#F2A000]">·</span>
            <span>STRATEGY</span>
            <span className="text-[#F2A000]">·</span>
            <span>CONFIDENCE</span>
            <span className="text-[#F2A000]">·</span>
            <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-[44px] xl:text-[48px] text-[#10294F] tracking-tight leading-[1.1]">
            Every Move Builds a{' '}
            <span className="relative inline-block font-serif italic font-normal text-[#F2A000]">
              Brighter Tomorrow
              {/* Refined Gold Underline Stroke */}
              <svg className="w-full h-2.5 text-[#F2A000] -mt-1 absolute -bottom-2 left-0" viewBox="0 0 200 20" fill="none">
                <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#10294F] font-sans font-semibold max-w-lg mx-auto leading-relaxed">
            Nurturing confident, creative and strategic thinkers through the power of chess.
          </p>
        </div>
      </div>

      {/* 3. Middle Section: Floating Left-Side Achievements Card */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 my-auto py-2">
        <div className="flex justify-start items-center">
          <AchievementCard />
        </div>
      </div>

      {/* 4. Bottom Section: Floating Statistics Capsule */}
      <div className="relative z-10 pt-1 pb-1">
        <StatisticsBar />
      </div>

    </section>
  );
};
