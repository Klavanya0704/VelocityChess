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
    <section className="relative min-h-[90vh] lg:h-[93vh] max-h-[960px] flex flex-col justify-between pt-24 sm:pt-28 pb-4 overflow-hidden">
      
      {/* 1. 100% Photographic Quality Background with Bottom Chessboard Visibility extending to top-0 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ref_hero_bg.jpg"
          alt="Velocity Chess Academy Environment"
          className="w-full h-full object-cover object-[center_bottom] filter brightness-[1.02] contrast-[1.02]"
        />

        {/* Minimal localized soft shadow behind left headline text for contrast */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/15 via-black/5 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content Grid */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 py-2 sm:py-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Eyebrow, Headline, Description, CTAs, 4 Highlights */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          
          {/* Eyebrow Line */}
          <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-[0.2em] text-[#E99A00] glass-btn-ivory px-3 py-1 rounded-full border border-white/50 shadow-sm">
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
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#10264B] tracking-tight leading-[1.05] drop-shadow-sm">
              Every Move Builds a
            </h1>
            <div className="relative inline-block">
              <h2 className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#E99A00] tracking-tight leading-[1.05] drop-shadow-sm">
                Brighter Tomorrow
              </h2>
              {/* Refined Gold Underline Stroke */}
              <svg className="w-full h-2.5 text-[#E99A00] -mt-1" viewBox="0 0 400 20" fill="none">
                <path d="M5 12 C 120 4, 280 18, 395 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#202A38] font-sans font-semibold max-w-md leading-relaxed drop-shadow-xs">
            Nurturing confident, creative and strategic thinkers through the power of chess.
          </p>

          {/* Glassmorphism CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Primary CTA — Explore Our Programs */}
            <button
              onClick={() => navigate('/programs')}
              className="glass-btn-navy text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide inline-flex items-center space-x-2.5"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-4 h-4 text-[#E99A00]" />
            </button>

            {/* Secondary CTA — Watch Our Story */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="glass-btn-ivory text-[#10264B] px-5 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center space-x-2"
            >
              <div className="w-5 h-5 rounded-full bg-[#10264B] text-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* 4 Feature Highlights */}
          <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mt-4">
            {/* Feature 1 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <Crown className="w-3.5 h-3.5 text-[#E99A00]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-[#10264B] leading-tight drop-shadow-xs">Builds Focus</h4>
                <p className="text-[10px] text-[#202A38] font-medium leading-tight mt-0.5">Higher levels, better decisions.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <TrendingUp className="w-3.5 h-3.5 text-[#E99A00]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-[#10264B] leading-tight drop-shadow-xs">Enhances Decision Making</h4>
                <p className="text-[10px] text-[#202A38] font-medium leading-tight mt-0.5">Smarter choices in life.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 text-[#E99A00]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-[#10264B] leading-tight drop-shadow-xs">Develops Confidence</h4>
                <p className="text-[10px] text-[#202A38] font-medium leading-tight mt-0.5">Stronger mind, brighter future.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full glass-btn-icon flex items-center justify-center shrink-0">
                <BookOpen className="w-3.5 h-3.5 text-[#E99A00]" />
              </div>
              <div>
                <h4 className="font-bold text-[11px] text-[#10264B] leading-tight drop-shadow-xs">Prepares for Future</h4>
                <p className="text-[10px] text-[#202A38] font-medium leading-tight mt-0.5">Skills that last a lifetime.</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Achievements Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-14 xl:pt-16">
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
