import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen max-h-[960px] flex flex-col justify-between pt-20 sm:pt-22 lg:pt-24 pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Exact Reference Background Scene (Photorealistic Academy Interior with Seated Player & Headline) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/player_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
      </div>

      {/* 2. Top Center Spacer ensuring ideal vertical layout positioning */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center pt-2 sm:pt-3 space-y-2 pointer-events-none" />

      {/* 3. Hero Main Content Grid: Lower-Left Functional Achievements Card */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 my-auto py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LOWER LEFT COLUMN: Functional Our Achievements Glassmorphism Card */}
          <div className="lg:col-span-5 flex justify-start items-center">
            <AchievementCard />
          </div>

          {/* RIGHT COLUMN: Open space showcasing the seated Indian chess player */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>

      {/* 4. Bottom Section: Wide Functional Glassmorphism Statistics Capsule */}
      <div className="relative z-10 pt-1 pb-2">
        <StatisticsBar />
      </div>

    </section>
  );
};
