import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();

  const programCards = [
    {
      id: 'online',
      title: 'Online Chess Classes',
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
      title: 'Group Chess Classes',
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
      title: 'Private Coaching',
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
      title: 'Academy / Offline Classes',
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
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25">
      
      {/* 1. DEDICATED CHESS-THEMED BACKGROUND IMAGE ASSET */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#FFF9EF]">
        <img
          src="/assets/programs_bg.png"
          alt="Velocity Chess Academy Programs Background"
          className="w-full h-full object-cover object-center opacity-35"
        />
        {/* Soft translucent warm cream overlay */}
        <div className="absolute inset-0 bg-[#FFF9EF]/55 pointer-events-none" />
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

        {/* 3. FOUR SCULPTED CHESS CARDS WITH SEPARATE KING IMAGE HEADER & DEDICATED TITLE CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {programCards.map((card) => (
            <div
              key={card.id}
              className={`relative flex flex-col justify-between h-full rounded-[24px] sm:rounded-[28px] overflow-hidden border-2 border-[#F2A000] shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                card.isNavy ? 'bg-[#10264B] text-white' : 'bg-[#FFFDF8] text-[#10264B]'
              }`}
            >
              
              {/* UPPER CHESS KING SILHOUETTE IMAGE HEADER */}
              <div className="relative w-full h-[190px] shrink-0 bg-transparent overflow-hidden">
                <svg
                  viewBox="0 0 300 190"
                  className="w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <defs>
                    <clipPath id={`king-clip-${card.id}`}>
                      <path d="M 150 8 C 175 14, 240 30, 286 80 L 286 178 C 200 188, 100 188, 14 178 L 14 80 C 60 30, 125 14, 150 8 Z" />
                    </clipPath>
                  </defs>

                  {/* Program Photo Clipped inside King Silhouette */}
                  <g clipPath={`url(#king-clip-${card.id})`}>
                    <image
                      href={card.image}
                      x="0"
                      y="0"
                      width="300"
                      height="190"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>

                  {/* Metallic Gold Edge Accents */}
                  <path
                    d="M 150 8 C 175 14, 240 30, 286 80 L 286 178 L 14 178 L 14 80 C 60 30, 125 14, 150 8 Z"
                    fill="none"
                    stroke="#F2A000"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Gold Bottom Curved Divider Line */}
                  <path
                    d="M 14 178 C 100 188, 200 188, 286 178"
                    fill="none"
                    stroke="#F2A000"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* DEDICATED TITLE & DESCRIPTION CONTAINER (POSITIONED COMPLETELY BELOW THE IMAGE) */}
              <div className="relative z-10 text-center px-4 sm:px-5 pt-3 pb-2 flex-none">
                <h3
                  className={`font-serif font-extrabold text-xl sm:text-2xl leading-tight tracking-tight mb-2 ${
                    card.isNavy ? 'text-[#FFE8AB]' : 'text-[#10264B]'
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm font-medium leading-relaxed max-w-xs mx-auto min-h-[40px] ${
                    card.isNavy ? 'text-gray-200' : 'text-[#25334A]/80'
                  }`}
                >
                  {card.description}
                </p>
              </div>

              {/* BENEFITS LIST & CTA BUTTON (FLEX-1 TO EVEN OUT CARD HEIGHTS) */}
              <div className="flex flex-col justify-between flex-1 px-4 sm:px-5 pb-5 pt-2">
                
                {/* Benefits Checklist */}
                <div className="space-y-2.5 border-t border-current/15 pt-3 mb-5">
                  {card.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-[#F2A000] shrink-0 fill-[#F2A000]/20" />
                      <span className={card.isNavy ? 'text-gray-200' : 'text-[#10264B]'}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/programs')}
                    className={`w-full py-3 rounded-full font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300 ${
                      card.isNavy
                        ? 'bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] hover:scale-[1.02]'
                        : 'bg-[#10264B] hover:bg-[#071A38] text-white hover:scale-[1.02]'
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      className={`w-4 h-4 ${
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
        <div className="mt-12 flex items-center justify-center space-x-4">
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
