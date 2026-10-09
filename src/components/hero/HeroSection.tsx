import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:h-[95vh] max-h-[960px] flex flex-col justify-between pt-22 sm:pt-24 lg:pt-26 pb-3 overflow-hidden select-none bg-[#FFF8EE]">
      
      {/* 1. Classroom Photograph Hero Background with Subtle Warm Ivory Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/classroom_hero_bg.jpg"
          alt="Velocity Chess Academy Classroom Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01]"
        />
        
        {/* Soft translucent warm ivory overlay keeping students and chessboards visible */}
        <div className="absolute inset-0 bg-[#FFF8EE]/20 pointer-events-none z-0" />
      </div>

      {/* 2. Subtle Chess-Themed Decorative Ornaments Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Faint Ivory Chess Knight Silhouette on the Upper-Left Edge */}
        <div className="absolute top-8 -left-16 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] text-[#F2A000]/[0.10] pointer-events-none select-none z-0">
          <svg viewBox="0 0 500 500" fill="currentColor" className="w-full h-full">
            <path d="M 140 440 L 380 440 L 370 410 C 360 380 340 360 330 330 C 320 300 325 270 335 240 C 345 210 355 180 350 150 C 342 100 310 65 260 50 C 210 35 160 45 125 80 C 95 110 85 150 95 190 C 100 210 110 230 120 245 C 105 250 90 250 80 240 C 70 230 68 215 70 200 C 60 215 55 235 60 255 C 68 280 90 295 115 300 C 100 320 90 350 95 385 L 140 440 Z M 210 110 C 220 110 230 118 230 128 C 230 138 220 146 210 146 C 200 146 190 138 190 128 C 190 118 200 110 210 110 Z" />
          </svg>
        </div>

        {/* Subtle Checkerboard Grid Pattern in Upper-Right Corner */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none z-0 opacity-20">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#F2A000]">
            <rect x="100" y="0" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="150" y="0" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="75" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="125" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="175" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="100" y="50" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="150" y="50" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="125" y="75" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="175" y="75" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="150" y="100" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>

        {/* Thin Gold Circular Arcs & Dots */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          <path d="M -100,60 Q 350,0 700,220 T 1300,550" stroke="#F2A000" strokeWidth="1.2" strokeOpacity="0.35" />
          <path d="M -50,-20 Q 400,-10 750,320 T 1350,220" stroke="#F2A000" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.25" />
        </svg>

        {/* Decorative Gold Dots */}
        <div className="absolute top-24 left-10 w-3.5 h-3.5 rounded-full bg-[#F2A000] z-0 shadow-sm" />
        <div className="absolute top-1/2 left-6 w-3 h-3 rounded-full bg-[#F2A000] z-0 shadow-sm" />
        <div className="absolute bottom-24 right-12 w-3 h-3 rounded-full bg-[#F2A000] z-0 shadow-sm" />
      </div>

      {/* 3. Top Center Main Headline Glassmorphism Card */}
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

      {/* 4. Hero Main Content Grid: Lower-Left Achievements Card & Classroom View */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 my-auto py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LOWER LEFT COLUMN: Our Achievements Glassmorphism Card */}
          <div className="lg:col-span-5 flex justify-start items-center">
            <AchievementCard />
          </div>

          {/* RIGHT COLUMN: Open space allowing clear view of the students playing chess in the classroom */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>

      {/* 5. Bottom Section: Wide Floating Glassmorphism Statistics Capsule */}
      <div className="relative z-10 pt-1 pb-1">
        <StatisticsBar />
      </div>

    </section>
  );
};
