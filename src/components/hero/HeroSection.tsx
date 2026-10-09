import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:h-[95vh] max-h-[960px] flex flex-col justify-between pt-22 sm:pt-24 lg:pt-26 pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Full-Bleed Photorealistic Hero Background (Player Seated at Chessboard, Trophy Shelves & Academy Environment) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/player_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
        
        {/* Soft translucent warm ivory overlay keeping player, chessboard, and background environment details 100% visible */}
        <div className="absolute inset-0 bg-[#FFF8EE]/15 pointer-events-none z-0" />
      </div>

      {/* 2. Top Center Main Headline Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center pt-2 sm:pt-3">
        <div className="glass-headline-card p-5 sm:p-6 space-y-2.5 max-w-3xl mx-auto text-center shadow-2xl">
          
          {/* Eyebrow Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/30 shadow-xs text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-widest text-[#10294F]">
            <span>DISCIPLINE</span>
            <span className="text-[#F2A000]">·</span>
            <span>STRATEGY</span>
            <span className="text-[#F2A000]">·</span>
            <span>CONFIDENCE</span>
            <span className="text-[#F2A000]">·</span>
            <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] text-[#10294F] tracking-tight leading-[1.1]">
            Every Move Builds a{' '}
            <span className="relative inline-block font-serif italic font-normal text-[#F2A000]">
              Brighter Tomorrow
              {/* Refined Gold Underline Stroke */}
              <svg className="w-full h-2.5 text-[#F2A000] -mt-1 absolute -bottom-2 left-0" viewBox="0 0 200 20" fill="none">
                <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm text-[#10294F] font-sans font-semibold max-w-xl mx-auto leading-relaxed">
            Nurturing confident, creative and strategic thinkers through the power of chess.
          </p>
        </div>
      </div>

      {/* 3. Hero Main Content Grid: Lower-Left Achievements Card & Seated Player Scene */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 my-auto py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LOWER LEFT COLUMN: Our Achievements Glassmorphism Card */}
          <div className="lg:col-span-5 flex justify-start items-center">
            <AchievementCard />
          </div>

          {/* RIGHT COLUMN: Open space allowing clear view of the seated player, chessboard & books */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>

      {/* 4. Bottom Section: Wide Floating Glassmorphism Statistics Capsule */}
      <div className="relative z-10 pt-1 pb-1">
        <StatisticsBar />
      </div>

    </section>
  );
};
