import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Award, TrendingUp, ArrowRight } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent overflow-hidden select-none border-t border-[#F2A000]/25">
      
      {/* 1. DEDICATED FULL CHESS BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/about_us_full_bg.png"
          alt="Velocity Chess Academy Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Checkered Gold Accent Square (Top Center Background) */}
      <div className="absolute top-8 left-1/2 -translate-x-12 pointer-events-none z-0 hidden md:grid grid-cols-2 gap-1 p-1 bg-white/60 backdrop-blur-xs rounded-lg border border-[#F2A000]/30 shadow-xs">
        <div className="w-3 h-3 bg-[#E99A00]/80 rounded-2xs" />
        <div className="w-3 h-3 bg-[#10264B]/80 rounded-2xs" />
        <div className="w-3 h-3 bg-[#10264B]/80 rounded-2xs" />
        <div className="w-3 h-3 bg-[#E99A00]/80 rounded-2xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: Eyebrow, Heading, Description, 3 Achievement Cards & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Small Gold Eyebrow Label */}
            <div className="inline-flex items-center space-x-2.5">
              <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
              <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.25em]">
                ABOUT US
              </span>
            </div>

            {/* Large Serif Heading: Chess Academy for Kids */}
            <div className="space-y-1">
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] text-[#10264B] leading-[1.08] tracking-tight">
                <span>Chess Academy</span>
                <br />
                <span className="relative inline-block font-serif text-[#E99A00] pt-1">
                  for Kids
                  {/* Subtle Gold Underline */}
                  <svg
                    className="w-full h-3 text-[#F2A000] absolute -bottom-1.5 left-0"
                    viewBox="0 0 200 20"
                    fill="none"
                  >
                    <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-sm lg:text-base text-[#25334A]/90 font-sans leading-relaxed max-w-xl">
              Velocity Chess Academy is founded and led by{' '}
              <strong className="font-bold text-[#10264B]">International Master Krishna Teja</strong> from India{' '}
              (FIDE rated 2384, one GM norm), a National and International medalist with over{' '}
              <strong className="font-bold text-[#10264B]">10 years of professional playing experience</strong>. He shares his experience and coaches students in openings, middlegame strategy, endgames, game analysis and personalized homework to help them grow into confident and strong chess players.
            </p>

            {/* Three Compact Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              
              {/* Card 1: International Master */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[#F2A000]/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF5E5] border border-[#F2A000]/40 flex items-center justify-center shrink-0 shadow-2xs">
                  <Trophy className="w-4.5 h-4.5 text-[#D98A00] fill-[#D98A00]/20" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B] leading-tight">
                    International
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B] leading-tight">
                    Master
                  </span>
                </div>
              </div>

              {/* Card 2: 10+ Years Experience */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[#F2A000]/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF5E5] border border-[#F2A000]/40 flex items-center justify-center shrink-0 shadow-2xs">
                  <Award className="w-4.5 h-4.5 text-[#D98A00]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B] leading-tight">
                    10+ Years
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B] leading-tight">
                    Experience
                  </span>
                </div>
              </div>

              {/* Card 3: Personalized Training */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[#F2A000]/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF5E5] border border-[#F2A000]/40 flex items-center justify-center shrink-0 shadow-2xs">
                  <TrendingUp className="w-4.5 h-4.5 text-[#D98A00]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B] leading-tight">
                    Personalized
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B] leading-tight">
                    Training
                  </span>
                </div>
              </div>

            </div>

            {/* CTA Button: Meet Our Coach → */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (window.location.pathname === '/about') {
                    const el = document.getElementById('meet-coach');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    navigate('/about#meet-coach');
                  }
                }}
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-[#10264B] hover:bg-[#071A38] text-white font-sans font-bold text-xs sm:text-sm rounded-full border border-[#F2A000]/90 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Meet Our Coach</span>
                <ArrowRight className="w-4 h-4 text-[#F2A000] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Single Coach Photo in Exact King Crown Gold Frame */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-2 lg:py-4">
            <div className="relative w-full max-w-[580px] aspect-[874/751] mx-auto group transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/perfect_king_crown_frame.png"
                alt="Velocity Chess Academy - International Master Krishna Teja in King Crown Frame"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_32px_rgba(242,160,0,0.45)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
