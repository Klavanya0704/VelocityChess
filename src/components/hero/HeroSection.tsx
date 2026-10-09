import React from 'react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#FFF8EE] relative overflow-hidden select-none">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Large Faded Chess Knight Silhouette on the Upper Left */}
        <div className="absolute top-10 -left-16 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] text-[#F2A000]/[0.07] pointer-events-none select-none z-0">
          <svg viewBox="0 0 500 500" fill="currentColor" className="w-full h-full">
            <path d="M 140 440 L 380 440 L 370 410 C 360 380 340 360 330 330 C 320 300 325 270 335 240 C 345 210 355 180 350 150 C 342 100 310 65 260 50 C 210 35 160 45 125 80 C 95 110 85 150 95 190 C 100 210 110 230 120 245 C 105 250 90 250 80 240 C 70 230 68 215 70 200 C 60 215 55 235 60 255 C 68 280 90 295 115 300 C 100 320 90 350 95 385 L 140 440 Z M 210 110 C 220 110 230 118 230 128 C 230 138 220 146 210 146 C 200 146 190 138 190 128 C 190 118 200 110 210 110 Z" />
          </svg>
        </div>

        {/* Subtle Checkerboard Grid Pattern in Lower-Left Corner */}
        <div className="absolute bottom-10 left-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none z-0 opacity-20">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#F2A000]">
            <rect x="0" y="100" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="50" y="100" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="25" y="125" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="75" y="125" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="0" y="150" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="50" y="150" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="25" y="175" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="75" y="175" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>

        {/* Gold Circular Curves */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          <path d="M -100,100 Q 300,10 650,220 T 1300,450" stroke="#F2A000" strokeWidth="1.2" strokeOpacity="0.35" />
          <path d="M -50,20 Q 350,20 700,280 T 1350,300" stroke="#F2A000" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.25" />
        </svg>

        {/* Decorative Gold Dots */}
        <div className="absolute top-28 left-10 w-3 h-3 rounded-full bg-[#F2A000] z-0 shadow-sm" />
        <div className="absolute top-1/2 left-4 w-3.5 h-3.5 rounded-full bg-[#F2A000] z-0 shadow-sm" />
        <div className="absolute bottom-20 right-12 w-3 h-3 rounded-full bg-[#F2A000] z-0 shadow-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP CENTER: Tagline, Headline, & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          
          {/* Eyebrow Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#F2A000]/30 shadow-sm text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#10294F] mb-3">
            <span>DISCIPLINE</span>
            <span className="text-[#F2A000]">·</span>
            <span>STRATEGY</span>
            <span className="text-[#F2A000]">·</span>
            <span>CONFIDENCE</span>
            <span className="text-[#F2A000]">·</span>
            <span className="text-[#F2A000]">A BRIGHTER TOMORROW</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#10294F] tracking-tight leading-tight mb-2">
            Every Move Builds a{' '}
            <span className="relative inline-block font-serif italic font-normal text-[#F2A000]">
              Brighter Tomorrow
              {/* Refined Gold Underline */}
              <svg className="w-full h-2.5 text-[#F2A000] -mt-1 absolute -bottom-2 left-0" viewBox="0 0 200 20" fill="none">
                <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#25334A]/80 font-sans font-medium leading-relaxed max-w-xl mx-auto pt-1">
            Nurturing confident, creative and strategic thinkers through the power of chess.
          </p>
        </div>

        {/* HERO MAIN BODY: Left Achievements Card & Right Student Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-12">
          
          {/* LEFT SIDE: Our Achievements Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <AchievementCard />
          </div>

          {/* RIGHT SIDE: Large Realistic Student Photograph */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#F2A000]/25 group bg-slate-900">
              <img
                src="/assets/ref_hero_bg.jpg"
                alt="Focused young student playing chess at Velocity Chess Academy"
                className="w-full h-[340px] sm:h-[420px] lg:h-[450px] object-cover object-center group-hover:scale-102 transition-transform duration-700 filter brightness-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* BOTTOM: Floating Statistics Capsule */}
        <div className="pt-2">
          <StatisticsBar />
        </div>

      </div>
    </section>
  );
};
