import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Zap, Trophy, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 'kids-chess',
      title: 'Kids Chess',
      subtitle: 'Pawn to King (Foundations)',
      ageBadge: 'AGES 5–8',
      description: 'A fun and structured introduction to chess, building focus, patience, and problem-solving skills.',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
      icon: <Crown className="w-5 h-5 text-[#F2A000]" />,
      features: [
        'Interactive chessboard stories',
        'Basic piece value & captures',
        'Fun mini-puzzles',
        'Focus & attention building'
      ]
    },
    {
      id: 'school-chess',
      title: 'School Chess',
      subtitle: 'Strategic Mastery (Intermediate)',
      ageBadge: 'AGES 8–14',
      description: 'Learn tactical patterns, middle-game plans, and opening principles with structured guidance.',
      image: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800',
      icon: <Zap className="w-5 h-5 text-[#F2A000]" />,
      features: [
        'Pin, fork & skewer tactics',
        'Basic opening principles',
        'Rook & Pawn endgames',
        'Tournament rules & clock play'
      ]
    },
    {
      id: 'competitive-chess',
      title: 'Competitive Chess',
      subtitle: 'Grandmaster Blueprint (Advanced)',
      ageBadge: 'AGES 10+',
      description: 'Intensive training for aspiring state, national, and FIDE-level players.',
      image: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800',
      icon: <Trophy className="w-5 h-5 text-[#F2A000]" />,
      features: [
        'Deep engine opening analysis',
        'Positional & calculation training',
        'Complex endgame techniques',
        'Psychological match preparation'
      ]
    },
    {
      id: 'online-chess',
      title: 'Online Chess',
      subtitle: 'Learn from Anywhere',
      ageBadge: 'ALL AGES',
      description: 'Live interactive classes with expert coaches, flexible timings, and personalized learning paths.',
      image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800',
      icon: <Monitor className="w-5 h-5 text-[#F2A000]" />,
      features: [
        'Live online classes (1-on-1 & group)',
        'Personalized guidance',
        'Game analysis & feedback',
        'Access from anywhere'
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF8EE] relative overflow-hidden">
      {/* Subtle Chessboard & Gold Curved Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#F2A000]/[0.035] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#FFF3D6]/60 rounded-full blur-3xl" />

        {/* Delicate Gold Flowing Curves */}
        <svg
          className="absolute top-10 left-0 w-80 h-80 text-[#F2A000]/15"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="50" cy="50" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="50" cy="50" r="300" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>

        <svg
          className="absolute bottom-10 right-0 w-80 h-80 text-[#F2A000]/15"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="350" cy="350" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="350" cy="350" r="300" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#F2A000]/10 border border-[#F2A000]/30 rounded-full text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-[0.2em] text-[#10264B]">
            <span>TAILORED COACHING PROGRAMS</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#10264B] leading-tight tracking-tight">
            Designed for Every{' '}
            <span className="relative inline-block font-serif italic font-normal text-[#F2A000] pt-1">
              Skill Level
              {/* Gold Underline Stroke */}
              <svg className="w-full h-2.5 text-[#F2A000] -mt-1 absolute -bottom-2 left-0" viewBox="0 0 200 20" fill="none">
                <path d="M5 12 C 60 4, 140 18, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#26354A]/80 font-sans font-medium leading-relaxed max-w-2xl mx-auto pt-1">
            From first-time learners to tournament contenders, our structured programs help every student grow, improve, and achieve their chess goals.
          </p>
        </div>

        {/* 4 Photographic Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white/95 rounded-3xl overflow-hidden border border-[#F2A000]/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Photographic Header Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black/10">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  {/* Subtle Gradient Shadow at Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Age Badge */}
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#10264B]/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-white/40 shadow-sm">
                    {prog.ageBadge}
                  </span>
                </div>

                {/* Overlapping Gold Circular Icon */}
                <div className="relative px-6">
                  <div className="w-10 h-10 rounded-full bg-[#FFF5E0] border-2 border-white shadow-md flex items-center justify-center -mt-5 relative z-10">
                    {prog.icon}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 pt-3 space-y-3">
                  <div>
                    <h3 className="font-serif font-extrabold text-xl text-[#10264B] leading-tight">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F2A000] mt-0.5">
                      {prog.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#26354A]/80 font-medium leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Divider Line */}
                  <div className="border-t border-[#FFF5E0] pt-3" />

                  {/* Highlights List */}
                  <div className="space-y-2 pt-0.5">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-[#26354A] font-medium leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F2A000] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full-width View Details Button at Bottom */}
              <div className="p-6 pt-2">
                <button
                  onClick={() => navigate('/programs')}
                  className="w-full py-2.5 glass-btn-navy text-white rounded-full font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:scale-[1.02] transition-all duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F2A000]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

