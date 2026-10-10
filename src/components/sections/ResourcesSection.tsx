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
      rotationClass: 'rotate-[-2deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-300 z-10',
      // Card 1 SVG Silhouette: Top edge slopes up right, wave divider dips in center
      outerPath: "M 15 45 C 15 25, 35 20, 60 15 L 280 5 C 300 2, 325 8, 325 28 L 325 350 C 325 366, 308 376, 290 376 L 50 376 C 32 376, 15 366, 15 350 Z",
      innerBorderPath: "M 18 47 C 18 29, 36 23, 61 18 L 278 8 C 297 5, 321 11, 321 29 L 321 347 C 321 362, 305 372, 288 372 L 52 372 C 35 372, 18 362, 18 347 Z",
      imageClipPath: "M 15 45 C 15 25, 35 20, 60 15 L 280 5 C 300 2, 325 8, 325 28 L 325 180 C 265 205, 215 210, 170 210 C 125 210, 75 195, 15 175 Z",
      creamPanelPath: "M 15 175 C 75 195, 125 210, 170 210 C 215 210, 265 205, 325 180 L 325 350 C 325 366, 308 376, 290 376 L 50 376 C 32 376, 15 366, 15 350 Z",
      dividerPath: "M 15 175 C 75 195, 125 210, 170 210 C 215 210, 265 205, 325 180",
      badgeLeft: "top-[2px] left-[6px]"
    },
    {
      id: 'res-2',
      number: '02',
      title: 'Study Materials',
      description: 'Practice worksheets, chess notation, downloadable notes, and structured learning resources.',
      image: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800',
      rotationClass: 'rotate-0 md:scale-[1.02] hover:scale-[1.04] transition-all duration-300 z-20',
      // Card 2 SVG Silhouette: Arch top crown, symmetrical center U-dip wave
      outerPath: "M 15 30 C 15 15, 45 8, 170 4 C 295 8, 325 15, 325 30 L 325 350 C 325 366, 308 376, 290 376 L 50 376 C 32 376, 15 366, 15 350 Z",
      innerBorderPath: "M 18 32 C 18 18, 47 11, 170 7 C 292 11, 321 18, 321 32 L 321 347 C 321 362, 305 372, 288 372 L 52 372 C 35 372, 18 362, 18 347 Z",
      imageClipPath: "M 15 30 C 15 15, 45 8, 170 4 C 295 8, 325 15, 325 30 L 325 170 C 265 175, 220 210, 170 210 C 120 210, 75 175, 15 170 Z",
      creamPanelPath: "M 15 170 C 75 175, 120 210, 170 210 C 220 210, 265 175, 325 170 L 325 350 C 325 366, 308 376, 290 376 L 50 376 C 32 376, 15 366, 15 350 Z",
      dividerPath: "M 15 170 C 75 175, 120 210, 170 210 C 220 210, 265 175, 325 170",
      badgeLeft: "top-[0px] left-[6px]"
    },
    {
      id: 'res-3',
      number: '03',
      title: 'Videos & Game Analysis',
      description: 'Chess lessons, recorded games, strategy explanations, and in-depth analysis from experts.',
      image: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800',
      rotationClass: 'rotate-[2deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-300 z-10',
      // Card 3 SVG Silhouette: Top edge slopes down right, wave divider slopes up right
      outerPath: "M 15 10 C 15 2, 40 2, 60 5 L 280 22 C 300 26, 325 32, 325 48 L 325 350 C 325 366, 308 376, 290 376 L 50 376 C 32 376, 15 366, 15 350 Z",
      innerBorderPath: "M 18 12 C 18 5, 41 4, 61 7 L 278 24 C 297 28, 321 34, 321 49 L 321 347 C 321 362, 305 372, 288 372 L 52 372 C 35 372, 18 362, 18 347 Z",
      imageClipPath: "M 15 10 C 15 2, 40 2, 60 5 L 280 22 C 300 26, 325 32, 325 48 L 325 180 C 265 205, 215 210, 170 210 C 125 210, 75 195, 15 175 Z",
      creamPanelPath: "M 15 175 C 75 195, 125 210, 170 210 C 215 210, 265 205, 325 180 L 325 350 C 325 366, 308 376, 290 376 L 50 376 C 32 376, 15 366, 15 350 Z",
      dividerPath: "M 15 175 C 75 195, 125 210, 170 210 C 215 210, 265 205, 325 180",
      badgeLeft: "top-[4px] left-[6px]"
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

          {/* Main Heading: Learn. Practice. Grow. */}
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
            <span className="text-[#10264B]">Learn. Practice. </span>
            <span className="text-[#E99A00] font-serif">Grow.</span>
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
              className={`relative flex flex-col justify-between w-full max-w-[340px] mx-auto aspect-[340/380] min-h-[370px] sm:min-h-[380px] group ${card.rotationClass}`}
            >
              
              {/* GOLD CIRCULAR NUMBER BADGE (01, 02, 03) MOUNTED TOP-LEFT OVERLAY */}
              <div className={`absolute ${card.badgeLeft} w-8.5 h-8.5 rounded-full bg-gradient-to-br from-[#FFEED4] via-[#FFE29A] to-[#F2A000] text-[#10264B] font-serif font-extrabold text-xs sm:text-sm flex items-center justify-center border-2 border-white shadow-md z-30`}>
                {card.number}
              </div>

              {/* INTEGRATED CUSTOM SVG SILHOUETTE LAYER */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                viewBox="0 0 340 380"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  {/* Gold Gradient for Outer Border */}
                  <linearGradient id={`gold-stroke-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE8AB" />
                    <stop offset="35%" stopColor="#F2A000" />
                    <stop offset="70%" stopColor="#D48F00" />
                    <stop offset="100%" stopColor="#8A5A00" />
                  </linearGradient>

                  {/* Inner Light Gold Accent Line */}
                  <linearGradient id={`gold-inner-${card.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFF2D4" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FFE29A" stopOpacity="0.6" />
                  </linearGradient>

                  {/* Upper Image ClipPath */}
                  <clipPath id={`upper-res-clip-${card.id}`}>
                    <path d={card.imageClipPath} />
                  </clipPath>

                  {/* Checkerboard Pattern for Bottom-Right Corner Accent */}
                  <pattern id={`checker-${card.id}`} width="12" height="12" patternUnits="userSpaceOnUse">
                    <rect width="6" height="6" fill="#F2A000" fillOpacity="0.16" />
                    <rect x="6" y="6" width="6" height="6" fill="#F2A000" fillOpacity="0.16" />
                  </pattern>
                </defs>

                {/* 1. Photographic Upper Section */}
                <g clipPath={`url(#upper-res-clip-${card.id})`}>
                  <image
                    href={card.image}
                    x="0"
                    y="0"
                    width="340"
                    height="220"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  {/* Subtle soft gradient over image bottom */}
                  <rect x="0" y="140" width="340" height="80" fill="url(#image-fade)" fillOpacity="0.15" />
                </g>

                {/* 2. Warm Ivory/Cream Lower Content Panel (No dark navy fill) */}
                <path
                  d={card.creamPanelPath}
                  fill="#FFFDF8"
                  className="drop-shadow-xl"
                />

                {/* Bottom Right Chess Checkered Accent overlay inside Cream panel */}
                <g>
                  <rect x="230" y="300" width="95" height="76" fill={`url(#checker-${card.id})`} />
                </g>

                {/* 3. Gold Sculpted Wave Divider Line */}
                <path
                  d={card.dividerPath}
                  stroke={`url(#gold-stroke-${card.id})`}
                  strokeWidth="3.5"
                  fill="none"
                />

                {/* 4. Outer Gold Border Line (Tracing Custom Silhouette) */}
                <path
                  d={card.outerPath}
                  fill="none"
                  stroke={`url(#gold-stroke-${card.id})`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Inner Light Gold Glow Accent Stroke */}
                <path
                  d={card.innerBorderPath}
                  fill="none"
                  stroke={`url(#gold-inner-${card.id})`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* WARM CREAM PANEL CONTENT AREA (LIGHT THEME) */}
              <div className="relative z-20 flex flex-col justify-between h-full pt-[58%] px-5 pb-5 text-center text-[#10264B]">
                <div className="flex-1 flex flex-col justify-center space-y-2 mb-3">
                  
                  {/* Title in Dark Navy Serif */}
                  <h3 className="font-serif font-extrabold text-base sm:text-lg lg:text-xl text-[#10264B] leading-tight">
                    {card.title}
                  </h3>

                  {/* Diamond Line Flourish */}
                  <div className="flex items-center justify-center py-0.5">
                    <div className="w-5 h-[1.5px] bg-[#F2A000]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#F2A000] mx-1.5" />
                    <div className="w-5 h-[1.5px] bg-[#F2A000]" />
                  </div>

                  {/* Description in Dark Slate Navy (14px desktop, 1.5 line-height) */}
                  <p className="text-xs sm:text-[14px] font-medium text-[#25334A]/85 leading-[1.5] px-1">
                    {card.description}
                  </p>

                </div>

                {/* Gold Gradient Pill Button */}
                <div className="pt-1">
                  <button
                    onClick={() => navigate('/resources')}
                    className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-white/60"
                  >
                    <span>Explore Resources</span>
                    <ArrowRight className="w-4 h-4 text-[#10264B]" />
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
