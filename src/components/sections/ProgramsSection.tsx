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
      image: '/assets/academy-classroom.jpg',
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
    <section id="programs" className="relative py-12 sm:py-16 lg:py-24 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25 scroll-mt-24">
      
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
              className="relative w-full max-w-[320px] sm:max-w-none mx-auto aspect-[310/530] transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* VECTOR SVG CHESS ROOK (CASTLE PIECE) SILHOUETTE & BORDER FRAME */}
              <svg
                viewBox="0 0 310 530"
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
                  d="M 28 20 
                     L 62 20 L 62 40 L 92 40 L 92 20 
                     L 218 20 L 218 40 L 248 40 L 248 20 
                     L 282 20 
                     L 282 72 
                     C 282 88, 264 96, 254 104 
                     L 258 274 
                     C 264 294, 288 306, 288 318 
                     L 288 454 
                     C 288 462, 300 464, 300 470 
                     L 300 512 
                     Q 300 524, 286 524 
                     L 24 524 
                     Q 10 524, 10 512 
                     L 10 470 
                     C 10 464, 22 462, 22 454 
                     L 22 318 
                     C 22 306, 46 294, 52 274 
                     L 56 104 
                     C 46 96, 28 88, 28 72 
                     Z"
                  fill={card.isNavy ? '#0A1D37' : '#FFFDF8'}
                  filter={`url(#rook-shadow-${card.id})`}
                />

                {/* OUTER METALLIC GOLD BORDER STROKE */}
                <path
                  d="M 28 20 
                     L 62 20 L 62 40 L 92 40 L 92 20 
                     L 218 20 L 218 40 L 248 40 L 248 20 
                     L 282 20 
                     L 282 72 
                     C 282 88, 264 96, 254 104 
                     L 258 274 
                     C 264 294, 288 306, 288 318 
                     L 288 454 
                     C 288 462, 300 464, 300 470 
                     L 300 512 
                     Q 300 524, 286 524 
                     L 24 524 
                     Q 10 524, 10 512 
                     L 10 470 
                     C 10 464, 22 462, 22 454 
                     L 22 318 
                     C 22 306, 46 294, 52 274 
                     L 56 104 
                     C 46 96, 28 88, 28 72 
                     Z"
                  fill="none"
                  stroke="#F2A000"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />

                {/* INNER HIGHLIGHT GOLD STROKE */}
                <path
                  d="M 30 22 
                     L 60 22 L 60 38 L 94 38 L 94 22 
                     L 216 22 L 216 38 L 250 38 L 250 22 
                     L 280 22 
                     L 280 70 
                     C 280 85, 262 94, 252 102 
                     L 256 272 
                     C 262 292, 286 304, 286 316 
                     L 286 452 
                     C 286 460, 298 462, 298 468 
                     L 298 510 
                     Q 298 522, 284 522 
                     L 26 522 
                     Q 12 522, 12 510 
                     L 12 468 
                     C 12 462, 24 460, 24 452 
                     L 24 316 
                     C 24 304, 48 292, 54 272 
                     L 58 102 
                     C 48 94, 30 85, 30 70 
                     Z"
                  fill="none"
                  stroke="#FFE29A"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                  strokeLinejoin="round"
                />

                {/* DECORATIVE GOLD MOLDING LINES */}
                {/* Top Neck Molding Line at y=102 */}
                <path d="M 44 102 Q 155 108, 266 102" fill="none" stroke="#F2A000" strokeWidth="2.5" />
                
                {/* Waist-to-Base Molding Line at y=278 */}
                <path d="M 42 278 Q 155 284, 268 278" fill="none" stroke="#F2A000" strokeWidth="2.5" />

                {/* Pedestal Step Line at y=456 */}
                <path d="M 20 456 Q 155 462, 290 456" fill="none" stroke="#F2A000" strokeWidth="1.5" strokeDasharray="5 3" />
              </svg>

              {/* CARD CONTENT LAYER (LOCK POSITIONED EXACTLY INSIDE ROOK REGIONS) */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-3 select-none">
                
                {/* 1. BATTLEMENTS TITLE HEADER (y = 20 to y = 102) */}
                <div className="h-[19%] flex flex-col justify-center items-center px-4 pt-3 text-center">
                  <h3
                    className={`font-serif font-extrabold text-sm sm:text-base lg:text-[17px] leading-tight tracking-tight whitespace-pre-line ${
                      card.isNavy ? 'text-[#FFE8AB]' : 'text-[#10264B]'
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* 2. MIDDLE PHOTO FRAME IN ROOK WAIST (y = 104 to y = 278) */}
                <div className="h-[34%] px-5 py-0.5 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#F2A000] shadow-md">
                    <img
                      src={card.image}
                      alt={card.title.replace('\n', ' ')}
                      className="w-full h-full object-cover object-center filter brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 3. LOWER BODY DESCRIPTION & FEATURES (y = 280 to y = 456) */}
                <div className="h-[34%] px-4 pt-1 flex flex-col justify-start text-center">
                  
                  {/* Description */}
                  <p
                    className={`text-[10px] sm:text-[11px] font-medium leading-snug max-w-[210px] mx-auto px-1 mb-2 flex items-center justify-center ${
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

                {/* 4. PEDESTAL FOOT CTA BUTTON (y = 458 to y = 524) */}
                <div className="h-[13%] px-3 flex items-center justify-center pb-2">
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
