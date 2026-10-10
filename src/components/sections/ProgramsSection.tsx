import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();

  const programCards = [
    {
      id: 'online',
      title: 'Online\nChess Classes',
      description: 'Interactive online classes with expert coaching from the comfort of your home.',
      image: '/assets/classroom_hero_bg.jpg',
      isNavy: true,
      benefits: [
        'Live interactive sessions',
        'Structured curriculum',
        'Flexible timings',
        'Regular assessments'
      ]
    },
    {
      id: 'group',
      title: 'Group\nChess Classes',
      description: 'Learn and grow with friends in small group batches with a structured learning path.',
      image: '/assets/ref_hero_bg.jpg',
      isNavy: false,
      benefits: [
        'Small batch sizes',
        'Peer learning environment',
        'Regular practice sessions',
        'Tournaments & activities'
      ]
    },
    {
      id: 'private',
      title: 'Private\nCoaching',
      description: 'Personalized one-on-one training tailored to individual strengths and goals.',
      image: '/assets/hero_bg_seated_player.jpg',
      isNavy: true,
      benefits: [
        'Customized lesson plans',
        'Focus on individual growth',
        'Advanced strategy & analysis',
        'Flexible scheduling'
      ]
    },
    {
      id: 'academy',
      title: 'Academy /\nOffline Classes',
      description: 'In-person classes at our academy with a professional and inspiring learning environment.',
      image: '/assets/player_hero_bg.jpg',
      isNavy: false,
      benefits: [
        'Expert guidance',
        'Well-equipped facilities',
        'Regular tournaments',
        'Chess community & events'
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25">
      
      {/* 1. DEDICATED CHESS-THEMED BACKGROUND IMAGE ASSET WITH CHESSBOARD & PIECE SILHOUETTES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#FFF9EF]">
        <img
          src="/assets/programs_bg.png"
          alt="Velocity Chess Academy Programs Background"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-105"
        />
        {/* Soft translucent warm cream overlay */}
        <div className="absolute inset-0 bg-[#FFF9EF]/45 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
            <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
              OUR PROGRAMS
            </span>
            <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
          </div>

          {/* Main Heading matching reference exactly */}
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[48px] leading-[1.1] tracking-tight">
            <span className="text-[#10264B]">Learn. Practice. Compete. </span>
            <span className="relative inline-block font-serif text-[#E99A00]">
              Grow.
              {/* Gold Underline */}
              <svg className="w-full h-2.5 text-[#F2A000] absolute -bottom-1.5 left-0" viewBox="0 0 100 20" fill="none">
                <path d="M5 12 C 35 4, 65 18, 95 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#25334A]/85 font-sans leading-relaxed max-w-2xl mx-auto pt-1">
            Structured and engaging chess programs designed for children of all levels, from{' '}
            <strong className="font-bold text-[#10264B]">beginners</strong> to advanced players.
          </p>

        </div>

        {/* 3. FOUR CHESS ROOK (CASTLE PIECE) SILHOUETTE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-center">
          {programCards.map((card) => (
            <div
              key={card.id}
              className="relative w-full max-w-[330px] sm:max-w-none mx-auto aspect-[320/540] transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* VECTOR SVG CHESS ROOK (CASTLE PIECE) SILHOUETTE & BORDER FRAME */}
              <svg
                viewBox="0 0 320 540"
                className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  {/* Soft 3D Drop Shadow */}
                  <filter id={`rook-shadow-${card.id}`} x="-15%" y="-10%" width="130%" height="125%">
                    <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#071A38" floodOpacity="0.22" />
                  </filter>
                </defs>

                {/* MAIN ROOK SILHOUETTE FILL */}
                <path
                  d="M 30 22 
                     L 65 22 L 65 42 L 95 42 L 95 22 
                     L 225 22 L 225 42 L 255 42 L 255 22 
                     L 290 22 
                     L 290 75 
                     C 290 92, 272 100, 262 108 
                     L 266 280 
                     C 272 300, 296 312, 296 325 
                     L 296 462 
                     C 296 470, 308 472, 308 478 
                     L 308 520 
                     Q 308 534, 294 534 
                     L 26 534 
                     Q 12 534, 12 520 
                     L 12 478 
                     C 12 472, 24 470, 24 462 
                     L 24 325 
                     C 24 312, 48 300, 54 280 
                     L 58 108 
                     C 48 100, 30 92, 30 75 
                     Z"
                  fill={card.isNavy ? '#0A1D37' : '#FFFDF8'}
                  filter={`url(#rook-shadow-${card.id})`}
                />

                {/* OUTER METALLIC GOLD BORDER STROKE */}
                <path
                  d="M 30 22 
                     L 65 22 L 65 42 L 95 42 L 95 22 
                     L 225 22 L 225 42 L 255 42 L 255 22 
                     L 290 22 
                     L 290 75 
                     C 290 92, 272 100, 262 108 
                     L 266 280 
                     C 272 300, 296 312, 296 325 
                     L 296 462 
                     C 296 470, 308 472, 308 478 
                     L 308 520 
                     Q 308 534, 294 534 
                     L 26 534 
                     Q 12 534, 12 520 
                     L 12 478 
                     C 12 472, 24 470, 24 462 
                     L 24 325 
                     C 24 312, 48 300, 54 280 
                     L 58 108 
                     C 48 100, 30 92, 30 75 
                     Z"
                  fill="none"
                  stroke="#F2A000"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                />

                {/* INNER HIGHLIGHT GOLD STROKE */}
                <path
                  d="M 32 24 
                     L 63 24 L 63 40 L 97 40 L 97 24 
                     L 223 24 L 223 40 L 257 40 L 257 24 
                     L 288 24 
                     L 288 74 
                     C 288 89, 270 98, 260 106 
                     L 264 278 
                     C 270 298, 294 310, 294 323 
                     L 294 460 
                     C 294 468, 306 470, 306 476 
                     L 306 518 
                     Q 306 532, 292 532 
                     L 28 532 
                     Q 14 532, 14 518 
                     L 14 476 
                     C 14 470, 26 468, 26 460 
                     L 26 323 
                     C 26 310, 50 298, 56 278 
                     L 60 106 
                     C 50 98, 32 89, 32 74 
                     Z"
                  fill="none"
                  stroke="#FFE29A"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                  strokeLinejoin="round"
                />

                {/* DECORATIVE GOLD MOLDING LINES */}
                {/* Neck Molding Line at y=105 */}
                <path d="M 46 105 Q 160 112, 274 105" fill="none" stroke="#F2A000" strokeWidth="2.5" />
                
                {/* Waist-to-Base Molding Line at y=285 */}
                <path d="M 44 285 Q 160 292, 276 285" fill="none" stroke="#F2A000" strokeWidth="2.5" />

                {/* Pedestal Step Line at y=464 */}
                <path d="M 22 464 Q 160 470, 298 464" fill="none" stroke="#F2A000" strokeWidth="1.5" strokeDasharray="5 3" />
              </svg>

              {/* CARD CONTENT LAYER (LOCK POSITIONED EXACTLY INSIDE ROOK REGIONS) */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-3 select-none">
                
                {/* 1. BATTLEMENTS TITLE HEADER (y = 22 to y = 105) */}
                <div className="h-[21%] flex flex-col justify-center items-center px-4 pt-3.5 text-center">
                  <h3
                    className={`font-serif font-extrabold text-sm sm:text-base lg:text-[18px] leading-tight tracking-tight whitespace-pre-line ${
                      card.isNavy ? 'text-[#FFE8AB]' : 'text-[#10264B]'
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* 2. MIDDLE PHOTO FRAME IN ROOK WAIST (y = 108 to y = 280) */}
                <div className="h-[33%] px-5 py-0.5 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#F2A000] shadow-md">
                    <img
                      src={card.image}
                      alt={card.title.replace('\n', ' ')}
                      className="w-full h-full object-cover object-center filter brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 3. LOWER BODY DESCRIPTION & FEATURES (y = 285 to y = 460) */}
                <div className="h-[34%] px-4 pt-1 flex flex-col justify-start text-center">
                  
                  {/* Description */}
                  <p
                    className={`text-[11px] sm:text-xs font-medium leading-tight mb-2 min-h-[32px] flex items-center justify-center ${
                      card.isNavy ? 'text-gray-200' : 'text-[#25334A]/90'
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-1.5 text-left pt-1 border-t border-current/15">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-semibold leading-none">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F2A000] shrink-0 fill-[#F2A000]/20" />
                        <span className={card.isNavy ? 'text-gray-100' : 'text-[#10264B]'}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* 4. PEDESTAL FOOT CTA BUTTON (y = 464 to y = 534) */}
                <div className="h-[12%] px-3 flex items-center justify-center pb-2">
                  <button
                    onClick={() => navigate('/programs')}
                    className={`w-full py-2 sm:py-2.5 rounded-full font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg transition-all duration-300 ${
                      card.isNavy
                        ? 'bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] hover:scale-[1.02]'
                        : 'bg-[#0A1D37] hover:bg-[#071A38] text-white hover:scale-[1.02]'
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${
                        card.isNavy ? 'text-[#10264B]' : 'text-[#F2A000]'
                      }`}
                    />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* 4. BOTTOM CALL TO ACTION BUTTON */}
        <div className="mt-12 sm:mt-14 flex items-center justify-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[200px]">
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent to-[#F2A000]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#F2A000] shrink-0" />
          </div>

          <button
            onClick={() => navigate('/programs')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2.5 border border-white/60"
          >
            <GraduationCap className="w-4.5 h-4.5 text-[#10264B]" />
            <span>Explore All Programs</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[200px]">
            <div className="w-2.5 h-2.5 rotate-45 bg-[#F2A000] shrink-0" />
            <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent to-[#F2A000]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
