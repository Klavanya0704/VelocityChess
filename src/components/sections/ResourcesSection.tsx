import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const navigate = useNavigate();

  const resourceCards = [
    {
      id: 'res-1',
      number: '01',
      title: 'Chess Guides & Tactics',
      description: 'Opening strategies, tactical puzzles, endgame guides, and expert chess tips to improve your game.',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
      path: '/resources/guides',
      rotationClass: 'md:rotate-[-2deg] md:hover:rotate-0 hover:scale-[1.03] transition-all duration-300 z-10',
      // Card 1: Wave divider dips gently in center
      waveStrokePath: 'M 0 10 C 75 14, 125 24, 170 24 C 215 24, 265 14, 340 10',
      waveFillPath: 'M 0 10 C 75 14, 125 24, 170 24 C 215 24, 265 14, 340 10 L 340 32 L 0 32 Z'
    },
    {
      id: 'res-2',
      number: '02',
      title: 'Study Materials',
      description: 'Practice worksheets, chess notation, downloadable notes, and structured learning resources.',
      image: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800',
      path: '/resources/materials',
      rotationClass: 'rotate-0 md:scale-[1.02] hover:scale-[1.04] transition-all duration-300 z-20',
      // Card 2: Symmetrical arch wave
      waveStrokePath: 'M 0 16 C 65 10, 115 25, 170 25 C 225 25, 275 10, 340 16',
      waveFillPath: 'M 0 16 C 65 10, 115 25, 170 25 C 225 25, 275 10, 340 16 L 340 32 L 0 32 Z'
    },
    {
      id: 'res-3',
      number: '03',
      title: 'Videos & Game Analysis',
      description: 'Chess lessons, recorded games, strategy explanations, and in-depth analysis from experts.',
      image: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800',
      path: '/resources/videos',
      rotationClass: 'md:rotate-[2deg] md:hover:rotate-0 hover:scale-[1.03] transition-all duration-300 z-10',
      // Card 3: Dynamic sloping wave
      waveStrokePath: 'M 0 12 C 85 18, 130 25, 170 25 C 210 25, 265 16, 340 8',
      waveFillPath: 'M 0 12 C 85 18, 130 25, 170 25 C 210 25, 265 16, 340 8 L 340 32 L 0 32 Z'
    }
  ];

  return (
    <section id="resources" className="relative py-10 sm:py-12 lg:py-16 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25 scroll-mt-24">
      
      {/* 1. PRESERVED BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#FFF9EF]">
        <img
          src="/assets/resources-bg.jpg"
          alt="Velocity Chess Academy Resources Background"
          className="w-full h-full object-cover object-center opacity-35"
        />
        {/* Translucent cream overlay */}
        <div className="absolute inset-0 bg-[#FFF9EF]/55 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-1.5">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
            <span className="text-[#D98A00] font-sans font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.22em]">
              OUR RESOURCES
            </span>
            <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
          </div>

          {/* Main Heading: Learn. Practice. Master. */}
          <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
            <span className="text-[#10264B]">Learn. Practice. </span>
            <span className="text-[#E99A00] font-serif">Master.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#25334A]/85 font-sans leading-relaxed max-w-2xl mx-auto pt-1">
            Explore our collection of carefully curated resources to strengthen your chess skills, from beginner basics to advanced strategies.
          </p>

        </div>

        {/* 3. THREE ASYMMETRICAL LIGHT CREAM & GOLD CHESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto py-2 px-2 items-stretch">
          {resourceCards.map((card) => (
            <div
              key={card.id}
              className={`relative flex flex-col justify-between w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[340px] mx-auto min-h-[390px] sm:h-[420px] bg-[#FFFDF8] rounded-[28px] border-2 border-[#F2A000]/70 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group ${card.rotationClass}`}
              style={{
                boxShadow: '0 12px 30px -6px rgba(242, 160, 0, 0.16), 0 8px 16px -4px rgba(16, 38, 75, 0.08)'
              }}
            >
              {/* Inner Light Gold Decorative Border */}
              <div className="absolute inset-0 rounded-[26px] border border-[#FFE8AB]/60 pointer-events-none z-30" />

              {/* 1. UPPER REGION: IMAGE WITH SCULPTED GOLD WAVE BOTTOM */}
              <div className="relative w-full h-[150px] sm:h-[175px] shrink-0 overflow-hidden bg-[#10264B]">
                {/* Photographic Asset */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Soft gradient shadow over bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

                {/* Sculpted Wave Divider at bottom of image */}
                <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg
                    viewBox="0 0 340 32"
                    preserveAspectRatio="none"
                    className="w-full h-8 block text-[#FFFDF8]"
                  >
                    <defs>
                      <linearGradient id={`gold-wave-${card.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFE8AB" />
                        <stop offset="35%" stopColor="#F2A000" />
                        <stop offset="70%" stopColor="#D48F00" />
                        <stop offset="100%" stopColor="#8A5A00" />
                      </linearGradient>
                    </defs>

                    {/* Cream Panel Fill (seamlessly connects to content panel below) */}
                    <path
                      d={card.waveFillPath}
                      fill="currentColor"
                    />

                    {/* Gold Sculpted Wave Stroke */}
                    <path
                      d={card.waveStrokePath}
                      fill="none"
                      stroke={`url(#gold-wave-${card.id})`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* GOLD CIRCULAR NUMBER BADGE (01, 02, 03) MOUNTED TOP-LEFT OVERLAY */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFEED4] via-[#FFE29A] to-[#F2A000] text-[#10264B] font-serif font-extrabold text-xs sm:text-sm flex items-center justify-center border-2 border-white shadow-md z-20">
                  {card.number}
                </div>
              </div>

              {/* 2. LOWER REGION: NORMAL DOM FLOW FOR CONTENT (GUARANTEED NO OVERLAP) */}
              <div className="flex-1 flex flex-col justify-between p-5 pt-3.5 pb-5 text-center text-[#10264B] z-20">
                
                {/* Title & Description Group */}
                <div className="space-y-2">
                  
                  {/* Title in Dark Navy Serif */}
                  <h3 className="font-serif font-extrabold text-base sm:text-lg lg:text-[19px] text-[#10264B] leading-snug px-1">
                    {card.title}
                  </h3>

                  {/* Diamond Line Flourish */}
                  <div className="flex items-center justify-center py-0.5">
                    <div className="w-5 h-[1.5px] bg-[#F2A000]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#F2A000] mx-1.5" />
                    <div className="w-5 h-[1.5px] bg-[#F2A000]" />
                  </div>

                  {/* Description in Dark Slate Navy */}
                  <p className="text-xs sm:text-[13px] font-medium text-[#25334A]/85 leading-relaxed px-1">
                    {card.description}
                  </p>

                </div>

                {/* Gold Gradient Pill Button (Anchored to card bottom, no chessboard decoration) */}
                <div className="pt-3">
                  <button
                    onClick={() => navigate(card.path)}
                    className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 border border-white/60 group/btn cursor-pointer"
                  >
                    <span>Explore Resources</span>
                    <ArrowRight className="w-4 h-4 text-[#10264B] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;
