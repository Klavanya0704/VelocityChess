import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:h-[95vh] max-h-[940px] flex flex-col justify-between pt-22 sm:pt-24 lg:pt-26 pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Full 100% Photographic Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ref_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
        
        {/* Soft subtle gradient behind left text area to ensure 100% crystal contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#FFF8EE]/90 via-[#FFF8EE]/50 to-transparent pointer-events-none z-0" />
      </div>

      {/* 2. Main Hero Content Grid: Left Column (Headline + Achievements Card), Right Column (Open View) */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 pt-2 sm:pt-4 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Headline block (Set to Left Side) + Achievements Card */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4 text-left">
            
            {/* Frosted Container for Headline Block */}
            <div className="bg-white/85 backdrop-blur-md p-4.5 sm:p-5.5 rounded-3xl border border-white/70 shadow-lg space-y-2 text-left">
              
              {/* Eyebrow Tagline Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/30 shadow-xs text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-widest text-[#10294F]">
                <span>DISCIPLINE</span>
                <span className="text-[#F2A000]">·</span>
                <span>STRATEGY</span>
                <span className="text-[#F2A000]">·</span>
                <span>CONFIDENCE</span>
                <span className="text-[#F2A000]">·</span>
                <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
              </div>

              {/* Main Editorial Headline (Left Aligned) */}
              <h1 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] text-[#10294F] tracking-tight leading-[1.12]">
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
              <p className="text-xs sm:text-sm text-[#10294F] font-sans font-semibold leading-relaxed">
                Nurturing confident, creative and strategic thinkers through the power of chess.
              </p>
            </div>

            {/* Our Achievements Card (Left Side) */}
            <AchievementCard />
          </div>

          {/* RIGHT COLUMN: Open space allowing unobstructed view of background student and gold arch */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />

        </div>
      </div>

      {/* 3. Bottom Section: Floating Statistics Capsule */}
      <div className="relative z-10 pt-1 pb-1">
        <StatisticsBar />
      </div>

    </section>
  );
};
