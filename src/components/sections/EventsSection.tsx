import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Users, Star, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const navigate = useNavigate();

  const eventPanels = [
    {
      id: 'tournaments',
      title: 'Chess Tournaments',
      description: 'Participate in exciting tournaments and experience competitive chess.',
      image: '/assets/classroom_hero_bg.jpg',
      icon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      isNavy: false,
      rotationClass: 'rotate-[-2deg] hover:rotate-0 hover:scale-105 z-10',
      highlights: [
        'Inter-school & open tournaments',
        'Tournament highlights & results',
        'Photos and winners',
        'All age categories'
      ]
    },
    {
      id: 'workshops',
      title: 'Workshops & Training Camps',
      description: 'Learn from expert coaches through structured workshops and training.',
      image: '/assets/ref_hero_bg.jpg',
      icon: <Users className="w-4 h-4 text-[#10264B]" />,
      isNavy: true,
      rotationClass: 'rotate-0 md:scale-[1.03] hover:scale-105 z-20',
      highlights: [
        'Beginner to advanced batches',
        'Specialized training sessions',
        'Strategy & endgame workshops',
        'Holiday camps & practice sessions'
      ]
    },
    {
      id: 'special',
      title: 'Special Events',
      description: 'Beyond tournaments, we host unique events building confidence.',
      image: '/assets/clean_player_hero_bg.jpg',
      icon: <Star className="w-4 h-4 text-[#10264B]" />,
      isNavy: false,
      rotationClass: 'rotate-[2deg] hover:rotate-0 hover:scale-105 z-10',
      highlights: [
        'Award ceremonies',
        'Simultaneous chess events',
        'Exhibitions & guest lectures',
        'Academy celebrations'
      ]
    }
  ];

  return (
    <section id="events" className="relative py-10 sm:py-12 lg:py-14 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25 scroll-mt-24">
      
      {/* 1. PRESERVED EVENTS CHESS-THEMED BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#FFF9EF]">
        <img
          src="/assets/events-bg.jpg"
          alt="Velocity Chess Academy Events Background"
          className="w-full h-full object-cover object-center opacity-35"
        />
        {/* Soft translucent warm cream overlay ensuring optimal legibility */}
        <div className="absolute inset-0 bg-[#FFF9EF]/55 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-1">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-7 h-[2px] bg-[#F2A000] rounded-full" />
            <span className="text-[#D98A00] font-sans font-extrabold text-[11px] uppercase tracking-[0.2em]">
              OUR EVENTS
            </span>
            <span className="w-7 h-[2px] bg-[#F2A000] rounded-full" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-[38px] leading-[1.1] tracking-tight">
            <span className="text-[#10264B]">Events That </span>
            <span className="text-[#E99A00] font-serif relative inline-block">
              Inspire
              <svg className="w-full h-2.5 text-[#F2A000] absolute -bottom-1.5 left-0" viewBox="0 0 240 20" fill="none">
                <path d="M5 12 C 80 4, 160 18, 235 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#25334A]/85 font-sans leading-relaxed max-w-2xl mx-auto pt-0.5">
            From competitive tournaments to enriching workshops, our events create opportunities for every chess enthusiast to learn, grow, and shine.
          </p>

        </div>

        {/* 3. THREE SLANTED & COMPACT LANDSCAPE-STYLE EVENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch max-w-5xl mx-auto py-2 px-2">
          {eventPanels.map((panel) => (
            <div
              key={panel.id}
              className={`relative flex flex-col justify-between transition-all duration-300 transform group min-h-[350px] sm:min-h-[365px] ${panel.rotationClass}`}
            >
              
              {/* INTEGRATED CUSTOM EVENT CARD SVG (Background Fill, Slanted Wave Image Clip & Double Gold Borders) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                viewBox="0 0 340 370"
                fill="none"
              >
                <defs>
                  {/* Dedicated Wave ClipPath matching arched top crown & sloping lower wave edge */}
                  <clipPath id={`upper-event-clip-${panel.id}`}>
                    <path d="M 15 28 C 15 15 35 5 170 5 C 305 5 325 15 325 28 L 325 140 C 220 120 100 160 15 138 Z" />
                  </clipPath>
                </defs>

                {/* 1. Main Card Background Fill */}
                <path
                  d="M 15 28 C 15 15 35 5 170 5 C 305 5 325 15 325 28 L 325 350 C 325 362 310 367 285 367 L 55 367 C 30 367 15 362 15 350 Z"
                  fill={panel.isNavy ? '#10264B' : '#FFF8EE'}
                />

                {/* 2. Event Image Clipped to Asymmetrical Sloping Wave Contour */}
                <g clipPath={`url(#upper-event-clip-${panel.id})`}>
                  <image
                    href={panel.image}
                    x="0"
                    y="0"
                    width="340"
                    height="165"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* 3. Gold Sloping Wave Divider Line */}
                <path
                  d="M 15 138 C 100 160 220 120 325 140"
                  stroke="#E99A00"
                  strokeWidth="3"
                  fill="none"
                />

                {/* 4. Outer Gold Border */}
                <path
                  d="M 15 28 C 15 15 35 5 170 5 C 305 5 325 15 325 28 L 325 350 C 325 362 310 367 285 367 L 55 367 C 30 367 15 362 15 350 Z"
                  fill="none"
                  stroke="#E99A00"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 19 30 C 19 18 37 9 170 9 C 303 9 321 18 321 30 L 321 346 C 321 356 308 361 283 361 L 57 361 C 32 361 19 356 19 346 Z"
                  fill="none"
                  stroke="#FFE29A"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                />
              </svg>

              {/* CIRCULAR NAVY & GOLD ICON BADGE OVERLAPPING IMAGE BOUNDARY */}
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-8.5 h-8.5 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] border-2 border-white shadow-md flex items-center justify-center text-[#10264B] z-30">
                {panel.icon}
              </div>

              {/* CARD HTML CONTENT LAYER */}
              <div
                className={`relative flex flex-col justify-between h-full pt-[43%] px-4 sm:px-4.5 pb-4 z-20 ${
                  panel.isNavy ? 'text-white' : 'text-[#10264B]'
                }`}
              >
                <div>
                  {/* Card Title */}
                  <div className="text-center pt-0.5">
                    <h3
                      className={`font-serif font-extrabold text-sm sm:text-base leading-tight mb-0.5 ${
                        panel.isNavy ? 'text-[#FFE29A]' : 'text-[#10264B]'
                      }`}
                    >
                      {panel.title}
                    </h3>

                    {/* Thin Gold Decorative Divider with Diamond */}
                    <div className="flex items-center justify-center my-1">
                      <div className="w-5 h-[1.5px] bg-[#F2A000]" />
                      <div className="w-1.2 h-1.2 rotate-45 bg-[#F2A000] mx-1" />
                      <div className="w-5 h-[1.5px] bg-[#F2A000]" />
                    </div>

                    {/* Short Description */}
                    <p
                      className={`text-[10.5px] sm:text-[11px] font-medium leading-tight px-0.5 mb-2 ${
                        panel.isNavy ? 'text-gray-300' : 'text-[#25334A]/80'
                      }`}
                    >
                      {panel.description}
                    </p>
                  </div>

                  {/* Four Checklist Highlights */}
                  <div className="space-y-0.5 border-t border-current/15 pt-1.5 mb-2.5">
                    {panel.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-[10px] sm:text-[10.5px] font-semibold leading-tight">
                        <CheckCircle2 className="w-3 h-3 text-[#F2A000] shrink-0" />
                        <span className={panel.isNavy ? 'text-gray-200' : 'text-[#10264B]'}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full-width Navy View Events Button */}
                <div className="pt-0.5">
                  <button
                    onClick={() => navigate('/events')}
                    className={`w-full py-2 rounded-full font-bold text-[11px] sm:text-xs flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg transition-all duration-300 ${
                      panel.isNavy
                        ? 'bg-gradient-to-r from-[#FFE29A] via-[#F2A000] to-[#FFE29A] text-[#10264B] hover:scale-102'
                        : 'bg-[#10264B] hover:bg-[#071A38] text-white hover:scale-102 border border-[#F2A000]/40'
                    }`}
                  >
                    <span>View Events</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${
                        panel.isNavy ? 'text-[#10264B]' : 'text-[#F2A000]'
                      }`}
                    />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 4. BOTTOM ORNAMENTAL CTA ACCENT */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[180px]">
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent to-[#F2A000]" />
            <div className="w-2 h-2 rotate-45 bg-[#F2A000] shrink-0" />
          </div>

          <button
            onClick={() => navigate('/events')}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-[#FFE29A] via-[#F2A000] to-[#FFE29A] text-[#10264B] font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 border border-white/60"
          >
            <Calendar className="w-4 h-4 text-[#10264B]" />
            <span>Explore All Events</span>
            <ArrowRight className="w-4 h-4 text-[#10264B]" />
          </button>

          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[180px]">
            <div className="w-2 h-2 rotate-45 bg-[#F2A000] shrink-0" />
            <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent to-[#F2A000]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
