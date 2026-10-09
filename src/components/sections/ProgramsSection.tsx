import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Zap, Trophy, Laptop, ArrowRight, CheckCircle2 } from 'lucide-react';

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
      icon: <Crown className="w-4 h-4 text-[#D98A00]" />,
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
      icon: <Zap className="w-4 h-4 text-[#D98A00]" />,
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
      icon: <Trophy className="w-4 h-4 text-[#D98A00]" />,
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
      icon: <Laptop className="w-4 h-4 text-[#D98A00]" />,
      features: [
        'Live online classes (1-on-1 & group)',
        'Personalized guidance',
        'Game analysis & feedback',
        'Access from anywhere'
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#FFF8EE] relative overflow-hidden select-none">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Large Faded Chess Knight Silhouette on the Left */}
        <div className="absolute top-1/2 -left-12 sm:left-0 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] text-[#F2A000]/[0.08] pointer-events-none select-none z-0">
          <svg viewBox="0 0 500 500" fill="currentColor" className="w-full h-full">
            <path d="M 140 440 L 380 440 L 370 410 C 360 380 340 360 330 330 C 320 300 325 270 335 240 C 345 210 355 180 350 150 C 342 100 310 65 260 50 C 210 35 160 45 125 80 C 95 110 85 150 95 190 C 100 210 110 230 120 245 C 105 250 90 250 80 240 C 70 230 68 215 70 200 C 60 215 55 235 60 255 C 68 280 90 295 115 300 C 100 320 90 350 95 385 L 140 440 Z M 210 110 C 220 110 230 118 230 128 C 230 138 220 146 210 146 C 200 146 190 138 190 128 C 190 118 200 110 210 110 Z" />
          </svg>
        </div>

        {/* Subtle Checkerboard Grid Pattern in Upper-Right Corner */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none z-0 opacity-20">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#F2A000]">
            <rect x="100" y="0" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="150" y="0" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="75" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="125" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="175" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="100" y="50" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="150" y="50" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="125" y="75" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="175" y="75" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
            <rect x="150" y="100" width="25" height="25" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>

        {/* Thin Gold Curved Lines & Accent Dots */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          <path d="M -100,60 Q 350,0 700,220 T 1300,550" stroke="#F2A000" strokeWidth="1.2" strokeOpacity="0.35" />
          <path d="M -50,-20 Q 400,-10 750,320 T 1350,220" stroke="#F2A000" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.25" />
        </svg>

        {/* Gold Decorative Dots */}
        <div className="absolute top-28 left-6 w-3 h-3 rounded-full bg-[#F2A000] z-0 shadow-sm" />
        <div className="absolute top-1/2 right-24 w-3.5 h-3.5 rounded-full bg-[#F2A000] z-0 shadow-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#FFEED4]/80 border border-[#F2A000]/30 rounded-full text-[10px] sm:text-xs font-sans font-extrabold uppercase tracking-wider text-[#10264B] shadow-sm mb-4">
            <span>TAILORED COACHING PROGRAMS</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#10264B] leading-tight mb-3">
            Designed for Every{' '}
            <span className="italic font-serif text-[#F2A000] inline-block">
              Skill Level
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#25334A]/80 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
            From first-time learners to tournament contenders, our structured programs help every student grow, improve, and <strong className="font-bold text-[#10264B]">achieve</strong> their <strong className="font-bold text-[#10264B]">chess goals.</strong>
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#F2A000]/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative"
            >
              <div>
                {/* Image Header with Age Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Age Badge Top Right */}
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#10264B] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md z-10">
                    {prog.ageBadge}
                  </span>

                  {/* Overlapping Icon Badge */}
                  <div className="absolute -bottom-4 left-5 w-9 h-9 rounded-full bg-[#FFF5E5] text-[#D98A00] flex items-center justify-center border-2 border-white shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    {prog.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-6 p-5 space-y-3">
                  <div>
                    <h3 className="font-serif font-extrabold text-xl text-[#10264B] leading-tight mb-0.5">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F2A000]">
                      {prog.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#25334A]/75 font-medium leading-relaxed min-h-[3.25rem]">
                    {prog.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-[#25334A] font-medium leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F2A000] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="p-5 pt-2">
                <button
                  onClick={() => navigate('/programs')}
                  className="w-full py-2.5 bg-[#10264B] hover:bg-[#071A38] text-white rounded-full font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F2A000] group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
