import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-[94vh] max-h-[960px] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-26 pb-4 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Full 100% Photographic Hero Background (Includes Student, Board, Gold Arch, Palace Window & Knight Silhouette) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ref_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
        
        {/* Subtle translucent gradient overlay to guarantee crystal clear contrast for top headline */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#FFF8EE]/90 via-[#FFF8EE]/50 to-transparent pointer-events-none z-0" />
      </div>

      {/* 2. Top Center Overlay: Eyebrow Tagline, Headline, & Subtitle */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center space-y-2 pt-2 sm:pt-4">
        
        {/* Eyebrow Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#F2A000]/30 shadow-md text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-widest text-[#10294F]">
          <span>DISCIPLINE</span>
          <span className="text-[#F2A000]">·</span>
          <span>STRATEGY</span>
          <span className="text-[#F2A000]">·</span>
          <span>CONFIDENCE</span>
          <span className="text-[#F2A000]">·</span>
          <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] text-[#10294F] tracking-tight leading-[1.1] drop-shadow-sm">
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
        <p className="text-sm sm:text-base text-[#10294F] font-sans font-semibold max-w-lg mx-auto leading-relaxed drop-shadow-sm">
          Nurturing confident, creative and strategic thinkers through the power of chess.
        </p>
      </div>

      {/* 3. Middle Section: Floating Left-Side Achievements Card */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 my-auto py-4">
        <div className="flex justify-start items-center">
          <AchievementCard />
        </div>
      </div>

      {/* 4. Bottom Section: Floating Statistics Capsule */}
      <div className="relative z-10 pt-2 pb-1">
        <StatisticsBar />
      </div>

    </section>
  );
};
