import React, { useState } from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import { EnrollmentModal } from '../common/EnrollmentModal';

export const CtaSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FFF9EF] overflow-hidden border-t border-[#F2A000]/30 select-none">
        {/* 1. ELEGANT CHESS-THEMED BACKGROUND WITH GOLDEN KING & ARCHWAY */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/cta_chess_bg_clean.jpg"
            alt="Velocity Chess Strategic Journey"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          {/* Subtle soft warm cream center wash for guaranteed readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/40 via-[#FFFDF9]/60 to-[#FFFDF9]/40 md:via-[#FFFDF9]/20 pointer-events-none" />
        </div>

        {/* 2. CENTERED CONTENT COMPOSITION MATCHING REFERENCE DESIGN */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3 sm:space-y-4">
          
          {/* Top Decorative Label: —◆ [ 👑 BEGIN YOUR STRATEGIC JOURNEY ] ◆— */}
          <div className="inline-flex items-center justify-center space-x-2 sm:space-x-3 mb-1">
            <div className="hidden sm:flex items-center space-x-1">
              <span className="w-10 sm:w-14 lg:w-16 h-[1.5px] bg-[#E5A51B]/70" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5A51B]" />
            </div>

            <div className="inline-flex items-center space-x-2 px-4 sm:px-5 py-1.5 bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#F2A000]/60 rounded-full text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0C1E3C] shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#E99A00] fill-[#E99A00]" />
              <span>Begin Your Strategic Journey</span>
            </div>

            <div className="hidden sm:flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5A51B]" />
              <span className="w-10 sm:w-14 lg:w-16 h-[1.5px] bg-[#E5A51B]/70" />
            </div>
          </div>

          {/* Large Stately Heading: Your Next Move / Starts Here ✦ */}
          <div className="space-y-0.5">
            <h2 className="font-serif font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[62px] text-[#0C1E3C] tracking-tight leading-[1.08] block drop-shadow-xs">
              <span>Your Next Move</span>
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D98A00] via-[#F2A000] to-[#E99A00] font-serif font-extrabold pt-1">
                Starts Here
                {/* 4-point gold star sparkle */}
                <span className="text-[#E99A00] text-xl sm:text-2xl md:text-3xl ml-1.5 inline-block align-middle select-none">
                  ✦
                </span>
              </span>
            </h2>

            {/* Subtle Curved Gold Wave Underline */}
            <div className="flex justify-center -mt-1 sm:-mt-0.5 pb-1">
              <svg
                className="w-32 sm:w-44 md:w-48 h-3 text-[#F2A000]"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M 5 6 C 60 12, 140 0, 195 6"
                  stroke="url(#ctaGoldUnderline)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ctaGoldUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFE8AB" />
                    <stop offset="50%" stopColor="#F2A000" />
                    <stop offset="100%" stopColor="#D98A00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Supporting Text in Soft Navy */}
          <p className="text-xs sm:text-base md:text-lg text-[#25334A]/85 font-medium max-w-2xl mx-auto leading-relaxed pt-1">
            Schedule a complimentary assessment session with our Grandmaster coaches and discover the exact roadmap to elevate your child’s chess skills.
          </p>

          {/* Prominent Deep Navy & Gold CTA Button */}
          <div className="pt-3 sm:pt-4 flex justify-center">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="group inline-flex items-center space-x-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#0C1E3C] via-[#10264B] to-[#0A1A36] hover:from-[#142B54] hover:to-[#0F2347] text-white rounded-full font-serif font-bold text-sm sm:text-base shadow-[0_12px_28px_-6px_rgba(12,30,60,0.45),0_0_22px_rgba(242,160,0,0.35)] hover:shadow-[0_16px_36px_-6px_rgba(12,30,60,0.55),0_0_30px_rgba(242,160,0,0.5)] hover:scale-105 active:scale-95 border border-[#F2A000]/50 transition-all duration-200 cursor-pointer"
            >
              <span className="font-serif tracking-wide text-white">Join Velocity Chess Academy</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2BD48] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </section>

      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </>
  );
};

export default CtaSection;
