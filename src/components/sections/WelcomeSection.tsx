import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, Crown } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9EF] relative overflow-hidden">
      {/* Background Subtle Premium Decorations (No Chess-Piece Silhouettes) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Faint Ivory-to-Cream Radial Gradient Blurs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FFF3D6]/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[650px] bg-[#F2A000]/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-[#FFF3D6]/40 rounded-full blur-3xl" />

        {/* Thin Flowing Gold Curves & Sparkle Stars (Top Right) */}
        <svg
          className="absolute -top-10 right-0 w-96 h-96 text-[#F2A000]/15"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Concentric Flowing Circles */}
          <circle cx="350" cy="50" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="350" cy="50" r="260" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="350" cy="50" r="340" stroke="currentColor" strokeWidth="1" />
          {/* Floating Sparkle Stars */}
          <path d="M 280 160 L 283 170 L 293 173 L 283 176 L 280 186 L 277 176 L 267 173 L 277 170 Z" fill="currentColor" fillOpacity="0.6" />
          <path d="M 180 80 L 182 87 L 189 89 L 182 91 L 180 98 L 178 91 L 171 89 L 178 87 Z" fill="currentColor" fillOpacity="0.5" />
        </svg>

        {/* Delicate Geometric Grid Accent & Sparkle Star (Bottom Left) */}
        <svg
          className="absolute bottom-0 -left-10 w-96 h-96 text-[#F2A000]/15"
          viewBox="0 0 400 400"
          fill="none"
        >
          <g stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6">
            <line x1="20" y1="200" x2="220" y2="200" />
            <line x1="20" y1="230" x2="220" y2="230" />
            <line x1="20" y1="260" x2="220" y2="260" />
            <line x1="20" y1="290" x2="220" y2="290" />
            <line x1="20" y1="320" x2="220" y2="320" />

            <line x1="50" y1="170" x2="50" y2="350" />
            <line x1="80" y1="170" x2="80" y2="350" />
            <line x1="110" y1="170" x2="110" y2="350" />
            <line x1="140" y1="170" x2="140" y2="350" />
            <line x1="170" y1="170" x2="170" y2="350" />
          </g>
          <path d="M 120 140 L 123 150 L 133 153 L 123 156 L 120 166 L 117 156 L 107 153 L 117 150 Z" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Large Circular Chess Photograph with Layered Navy & Gold Rings */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6 sm:py-8">
            
            {/* SVG Background Decorative Rings, Arc Curves & Orbital Beads */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-[125%] h-[125%] max-w-[660px] max-h-[660px] text-[#F2A000]" viewBox="0 0 500 500" fill="none">
                {/* Outer Dashed Gold Ring */}
                <circle cx="250" cy="250" r="235" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 6" />
                {/* Curved Gold Accent Arc */}
                <path d="M 40 250 A 210 210 0 0 1 460 250" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.45" strokeLinecap="round" />
                {/* Orbital Gold Beads */}
                <circle cx="250" cy="15" r="5.5" fill="currentColor" fillOpacity="0.8" />
                <circle cx="485" cy="250" r="4.5" fill="currentColor" fillOpacity="0.8" />
                <circle cx="250" cy="485" r="5.5" fill="currentColor" fillOpacity="0.8" />
                <circle cx="15" cy="250" r="4.5" fill="currentColor" fillOpacity="0.8" />
              </svg>
            </div>

            {/* Matrix of Decorative Gold Dots (Left Side) */}
            <div className="absolute left-2 sm:left-4 top-1/4 z-0 hidden sm:grid grid-cols-5 gap-2 opacity-40 pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F2A000]" />
              ))}
            </div>

            {/* Main Circular Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px]">
              
              {/* Outer Navy Ring Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border-[3px] border-[#10264B] shadow-2xl pointer-events-none" />
              
              {/* Inner Gold Accent Ring */}
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border-2 border-[#F2A000]/70 pointer-events-none" />

              {/* True Circular Masked Photograph */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-black/10">
                <img
                  src="/assets/ref_hero_bg.jpg"
                  alt="Young Velocity Chess Academy Player Moving a Piece"
                  className="w-full h-full object-cover object-[58%_center] scale-110 hover:scale-115 transition duration-700"
                />
              </div>

              {/* Floating Crown Badge on Left Outer Ring Edge */}
              <div className="absolute top-1/2 -left-3.5 sm:-left-5 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#10264B] border-2 border-[#F2A000] text-[#F2A000] flex items-center justify-center shadow-xl">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              </div>

              {/* Floating Translucent Cream FIDE Badge overlapping bottom-left */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-2 sm:left-6 z-20 glass-card px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/80 max-w-[280px] sm:max-w-xs shadow-2xl flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#FFF3D6] to-[#FFE29A] border border-[#F2A000]/40 text-[#754600] flex items-center justify-center font-serif font-extrabold text-xs sm:text-sm tracking-wider shrink-0 shadow-xs">
                  FIDE
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm text-[#10264B] leading-tight">Certified FIDE Coaches</p>
                  <p className="text-[10px] sm:text-[11px] text-[#26354A]/80 font-medium leading-tight mt-0.5">International Masters & Rated Mentors</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: About Us Editorial Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Small Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#F2A000]/10 border border-[#F2A000]/30 rounded-full text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-[0.2em] text-[#10264B]">
              <span>WELCOME TO VELOCITY CHESS</span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-1">
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-[#10264B] leading-[1.12] tracking-tight">
                Where Young Minds Become{' '}
                <span className="relative inline-block font-serif italic font-normal text-[#F2A000] pt-1">
                  Strategic Thinkers
                  {/* Underline Gold Stroke */}
                  <svg className="w-full h-2.5 text-[#F2A000] -mt-1 absolute -bottom-2 left-0" viewBox="0 0 300 20" fill="none">
                    <path d="M5 12 C 90 4, 210 18, 295 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#26354A] font-sans font-medium leading-relaxed max-w-xl">
              At Velocity Chess Academy, we believe chess is far more than a board game. It is a powerful catalyst for cognitive growth, logical decision-making, emotional resilience, and lifelong academic confidence.
            </p>

            {/* Two Side-by-Side Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Card 1 */}
              <div className="p-4 rounded-2xl bg-white/90 border border-white/80 shadow-xs hover:shadow-md transition duration-300 flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E0] border border-[#F2A000]/25 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#F2A000]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#10264B] leading-tight">Structured Curriculum</h4>
                  <p className="text-xs text-[#26354A]/80 font-medium leading-snug mt-1">Progressive 4-stage learning path designed for all age groups.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-2xl bg-white/90 border border-white/80 shadow-xs hover:shadow-md transition duration-300 flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E0] border border-[#F2A000]/25 flex items-center justify-center shrink-0 shadow-2xs">
                  <Award className="w-5 h-5 text-[#F2A000]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#10264B] leading-tight">Proven Championship Record</h4>
                  <p className="text-xs text-[#26354A]/80 font-medium leading-snug mt-1">Over 50+ state, national, and FIDE rated medals won.</p>
                </div>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="glass-btn-navy px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white inline-flex items-center space-x-2 shadow-md hover:scale-105 transition-all duration-300"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 text-[#F2A000]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

