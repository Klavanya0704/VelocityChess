import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Crown, TrendingUp, Users, BookOpen } from 'lucide-react';
import { AchievementCard } from './AchievementCard';
import { StatisticsBar } from './StatisticsBar';
import { VideoModal } from '../common/VideoModal';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[88vh] lg:h-[92vh] max-h-[960px] flex flex-col justify-between pt-20 sm:pt-24 pb-3 overflow-hidden">
      
      {/* 1. 100% Photographic Quality Background with Bottom Chessboard Visibility extending to top-0 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ref_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-[center_bottom] filter brightness-[1.02] contrast-[1.02]"
        />

        {/* Localized soft shadow gradient behind left headline text for enhanced contrast */}
        <div className="absolute inset-y-0 left-0 w-1/2 sm:w-[45%] bg-gradient-to-r from-black/35 via-black/15 to-transparent pointer-events-none z-0" />
      </div>

      {/* Main Hero Content Grid */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 py-1 sm:py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Eyebrow, Headline, Description, CTAs, 4 Highlights */}
        <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
          
          {/* Eyebrow Line */}
          <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] font-sans font-extrabold uppercase tracking-[0.2em] text-[#F5A000] glass-btn-ivory px-3 py-1 rounded-full border border-white/50 shadow-sm">
            <span>STRATEGY</span>
            <span className="text-[#10264B]/40 font-normal">·</span>
            <span>DISCIPLINE</span>
            <span className="text-[#10264B]/40 font-normal">·</span>
            <span>CONFIDENCE</span>
            <span className="text-[#10264B]/40 font-normal">·</span>
            <span className="text-[#10264B]">A BRIGHTER TOMORROW</span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-0.5">
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-[#10264B] tracking-tight leading-[1.05] drop-shadow-sm">
              Every Move Builds a
            </h1>
            <div className="relative inline-block pr-3 overflow-visible">
              <h2
                className="font-serif italic font-medium text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-[#F5A000] tracking-tight leading-[1.08]"
                style={{ textShadow: '0 2px 5px rgba(20, 30, 45, 0.45)' }}
              >
                Brighter Tomorrow
              </h2>
              {/* Refined Gold Underline Stroke */}
              <svg className="w-full h-2.5 text-[#F5A000] -mt-1" viewBox="0 0 400 20" fill="none">
                <path d="M5 12 C 120 4, 280 18, 395 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#10264B] font-sans font-semibold max-w-md leading-relaxed drop-shadow-xs">
            Nurturing confident, creative and strategic thinkers through the power of chess.
          </p>

          {/* Glassmorphism CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            {/* Primary CTA — Explore Our Programs */}
            <button
              onClick={() => navigate('/programs')}
              className="glass-btn-navy text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide inline-flex items-center space-x-2"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F2A000]" />
            </button>

            {/* Secondary CTA — Watch Our Story */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="glass-btn-ivory text-[#10264B] px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm inline-flex items-center space-x-2"
            >
              <div className="w-4.5 h-4.5 rounded-full bg-[#10264B] text-white flex items-center justify-center">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* 4 Feature Highlights (White text with dark text shadow directly over photograph) */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mt-3">
            {/* Feature 1 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <Crown className="w-3.5 h-3.5 text-[#F2A000]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-white leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Builds Focus</h4>
                <p className="font-medium text-[10px] text-white/95 leading-tight mt-0.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Higher levels, better decisions.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <TrendingUp className="w-3.5 h-3.5 text-[#F2A000]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-white leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Enhances Decision Making</h4>
                <p className="font-medium text-[10px] text-white/95 leading-tight mt-0.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Smarter choices in life.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 text-[#F2A000]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-white leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Develops Confidence</h4>
                <p className="font-medium text-[10px] text-white/95 leading-tight mt-0.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Stronger mind, brighter future.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <BookOpen className="w-3.5 h-3.5 text-[#F2A000]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-white leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Prepares for Future</h4>
                <p className="font-medium text-[10px] text-white/95 leading-tight mt-0.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}>Skills that last a lifetime.</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Achievements Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-8 xl:pt-10">
          <AchievementCard />
        </div>

      </div>

      {/* BOTTOM: Floating Statistics Capsule */}
      <div className="relative z-10 pt-1">
        <StatisticsBar />
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
};
