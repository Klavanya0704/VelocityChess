import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import { CtaSection } from '../components/sections/CtaSection';
import {
  Trophy,
  Award,
  TrendingUp,
  Target,
  Sparkles,
  BookOpen,
  Brain,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Zap,
  ArrowRight
} from 'lucide-react';

/* 3D Gold Metallic Chess Piece SVG Component */
const ChessPieceIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-10 h-16" }) => {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none">
      <defs>
        <linearGradient id={`gold-3d-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4DB" />
          <stop offset="30%" stopColor="#FFE08A" />
          <stop offset="65%" stopColor="#D98A00" />
          <stop offset="100%" stopColor="#7A4D00" />
        </linearGradient>
        <filter id={`gold-glow-${type}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D98A00" floodOpacity="0.3" />
        </filter>
      </defs>

      {type === 'king' && (
        <g filter={`url(#gold-glow-${type})`}>
          <path d="M 27 6 L 33 6 L 33 11 L 38 11 L 38 17 L 33 17 L 33 22 L 27 22 L 27 17 L 22 17 L 22 11 L 27 11 Z" fill={`url(#gold-3d-${type})`} />
          <path d="M 18 34 C 18 22, 42 22, 42 34 L 40 48 H 20 Z" fill={`url(#gold-3d-${type})`} />
          <ellipse cx="30" cy="52" rx="14" ry="4" fill={`url(#gold-3d-${type})`} stroke="#FFFDF8" strokeWidth="1" />
          <path d="M 20 54 L 40 54 L 44 74 C 44 78, 16 78, 16 74 Z" fill={`url(#gold-3d-${type})`} />
          <rect x="12" y="74" width="36" height="8" rx="2" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
        </g>
      )}

      {type === 'knight' && (
        <g filter={`url(#gold-glow-${type})`}>
          <path d="M 18 52 C 14 34, 20 16, 36 10 C 46 14, 44 24, 40 30 C 46 30, 48 36, 44 40 C 38 40, 32 38, 28 44 L 24 52 Z" fill={`url(#gold-3d-${type})`} />
          <ellipse cx="30" cy="54" rx="14" ry="4" fill={`url(#gold-3d-${type})`} stroke="#FFFDF8" strokeWidth="1" />
          <path d="M 20 56 L 40 56 L 44 74 C 44 78, 16 78, 16 74 Z" fill={`url(#gold-3d-${type})`} />
          <rect x="12" y="74" width="36" height="8" rx="2" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
        </g>
      )}

      {type === 'bishop' && (
        <g filter={`url(#gold-glow-${type})`}>
          <circle cx="30" cy="12" r="4" fill={`url(#gold-3d-${type})`} />
          <path d="M 30 18 C 18 26, 18 44, 30 50 C 42 44, 42 26, 30 18 Z" fill={`url(#gold-3d-${type})`} />
          <path d="M 24 30 L 36 38" stroke="#FFFDF8" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="30" cy="52" rx="14" ry="4" fill={`url(#gold-3d-${type})`} stroke="#FFFDF8" strokeWidth="1" />
          <path d="M 20 54 L 40 54 L 44 74 C 44 78, 16 78, 16 74 Z" fill={`url(#gold-3d-${type})`} />
          <rect x="12" y="74" width="36" height="8" rx="2" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
        </g>
      )}

      {type === 'rook' && (
        <g filter={`url(#gold-glow-${type})`}>
          <path d="M 18 14 L 24 14 L 24 20 L 30 20 L 30 14 L 36 14 L 36 20 L 42 20 L 42 14 L 42 24 L 18 24 Z" fill={`url(#gold-3d-${type})`} />
          <path d="M 20 26 L 40 26 L 38 50 L 22 50 Z" fill={`url(#gold-3d-${type})`} />
          <ellipse cx="30" cy="52" rx="14" ry="4" fill={`url(#gold-3d-${type})`} stroke="#FFFDF8" strokeWidth="1" />
          <path d="M 20 54 L 40 54 L 44 74 C 44 78, 16 78, 16 74 Z" fill={`url(#gold-3d-${type})`} />
          <rect x="12" y="74" width="36" height="8" rx="2" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
        </g>
      )}

      {type === 'pawn' && (
        <g filter={`url(#gold-glow-${type})`}>
          <circle cx="30" cy="22" r="10" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
          <ellipse cx="30" cy="36" rx="12" ry="3.5" fill={`url(#gold-3d-${type})`} stroke="#FFFDF8" strokeWidth="1" />
          <path d="M 22 38 C 22 38, 20 52, 18 56 L 42 56 C 40 52, 38 38, 38 38 Z" fill={`url(#gold-3d-${type})`} />
          <rect x="14" y="58" width="32" height="6" rx="1.5" fill={`url(#gold-3d-${type})`} />
          <rect x="10" y="66" width="40" height="8" rx="2" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
        </g>
      )}

      {type === 'queen' && (
        <g filter={`url(#gold-glow-${type})`}>
          <circle cx="18" cy="16" r="2.5" fill={`url(#gold-3d-${type})`} />
          <circle cx="24" cy="12" r="2.5" fill={`url(#gold-3d-${type})`} />
          <circle cx="30" cy="10" r="3" fill={`url(#gold-3d-${type})`} />
          <circle cx="36" cy="12" r="2.5" fill={`url(#gold-3d-${type})`} />
          <circle cx="42" cy="16" r="2.5" fill={`url(#gold-3d-${type})`} />
          <path d="M 16 20 L 20 34 L 30 18 L 40 34 L 44 20 L 42 48 L 18 48 Z" fill={`url(#gold-3d-${type})`} />
          <ellipse cx="30" cy="52" rx="14" ry="4" fill={`url(#gold-3d-${type})`} stroke="#FFFDF8" strokeWidth="1" />
          <path d="M 20 54 L 40 54 L 44 74 C 44 78, 16 78, 16 74 Z" fill={`url(#gold-3d-${type})`} />
          <rect x="12" y="74" width="36" height="8" rx="2" fill={`url(#gold-3d-${type})`} stroke="#FFE08A" strokeWidth="1" />
        </g>
      )}
    </svg>
  );
};

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#meet-coach') {
      const el = document.getElementById('meet-coach');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const whyChooseCards = [
    {
      id: 1,
      title: 'IM Led Instruction',
      description: 'Direct mentorship from International Master Krishna Teja, ensuring grandmaster-level insights and battle-tested strategies.',
      icon: ShieldCheck,
      pieceType: 'king',
    },
    {
      id: 2,
      title: 'Small Batch Sizes',
      description: 'Intimate group sizes to guarantee individual attention, continuous Q&A, and customized progress tracking for every child.',
      icon: Users,
      pieceType: 'knight',
    },
    {
      id: 3,
      title: 'Tournament Preparation',
      description: 'Mock tournament games, clock management, psychological preparation, and pre-round opponent preparation.',
      icon: Zap,
      pieceType: 'bishop',
    },
    {
      id: 4,
      title: 'Personalized Homework',
      description: "Targeted tactics puzzles, position studies, and weekly assignments matched to each student's weaknesses.",
      icon: CheckCircle2,
      pieceType: 'rook',
    },
    {
      id: 5,
      title: 'FIDE Rating Guidance',
      description: 'Clear pathways to achieving official FIDE ratings and competing in state, national, and international events.',
      icon: Trophy,
      pieceType: 'pawn',
    },
    {
      id: 6,
      title: 'Regular Progress Reports',
      description: 'Detailed quarterly evaluations and parent updates documenting tactical accuracy, rating milestones, and key areas for growth.',
      icon: TrendingUp,
      pieceType: 'queen',
    },
  ];

  return (
    <div className="relative min-h-screen text-[#25334A] select-none overflow-x-hidden bg-[#FFF9EF]">
      
      {/* FULL ABOUT US PAGE BACKGROUND (COVERING ALL SECTIONS FROM TOP TO BOTTOM) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/about_us_full_bg.png"
          alt="Velocity Chess Academy Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm ivory cream base layer */}
        <div className="absolute inset-0 bg-[#FFF9EF]/20 pointer-events-none" />
      </div>

      {/* FOREGROUND MAIN CONTENT WRAPPER */}
      <div className="relative z-10 space-y-0">

        {/* SECTION 1: ABOUT US HERO / STORY SECTION */}
        <AboutUsSection />

        {/* SECTION 2: MISSION & VISION */}
        <section className="relative py-12 sm:py-16 border-t border-[#F2A000]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#F2A000]" />
                <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                  CORE VALUES & PURPOSE
                </span>
                <span className="w-6 h-[2px] bg-[#F2A000]" />
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B]">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Mission Card */}
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border-2 border-[#F2A000]/30 shadow-xl gold-glow-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF5E5] border border-[#F2A000]/40 flex items-center justify-center text-[#D98A00] mb-4 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#10264B] mb-3">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-[#25334A]/85 leading-relaxed font-sans">
                  To empower young minds with critical thinking, resilience, and strategic clarity through structured master-level chess education. We strive to nurture not just tournament champions, but lifelong strategic thinkers.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border-2 border-[#F2A000]/30 shadow-xl gold-glow-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF5E5] border border-[#F2A000]/40 flex items-center justify-center text-[#D98A00] mb-4 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#10264B] mb-3">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#25334A]/85 leading-relaxed font-sans">
                  To become India’s premier chess academy, setting the gold standard for youth chess training, FIDE rating development, and producing International Masters and Grandmasters who inspire the next generation.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: COACHING PHILOSOPHY (LIGHT WARM THEME) */}
        <section className="relative py-12 sm:py-16 border-t border-[#F2A000]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#F2A000]" />
                <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                  METHODOLOGY & CURRICULUM
                </span>
                <span className="w-6 h-[2px] bg-[#F2A000]" />
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B]">
                Our Coaching Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-[#25334A]/85 max-w-2xl mx-auto leading-relaxed">
                We move beyond simple rote memorization. Our holistic approach builds deep positional understanding, tactical instincts, and psychological toughness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Pillar 1 */}
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm gold-glow-hover hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E5] border border-[#F2A000]/40 text-[#D98A00] flex items-center justify-center mb-4 font-bold shadow-xs group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#10264B] mb-1.5">Opening Preparation</h4>
                <p className="text-xs text-[#25334A]/80 leading-relaxed">
                  Structured opening repertoire aligned with student playing style and pawn structure understanding.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm gold-glow-hover hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E5] border border-[#F2A000]/40 text-[#D98A00] flex items-center justify-center mb-4 font-bold shadow-xs group-hover:scale-110 transition-transform">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#10264B] mb-1.5">Middlegame Strategy</h4>
                <p className="text-xs text-[#25334A]/80 leading-relaxed">
                  Calculation trees, piece activity, tactical motif recognition, and plan formulation under pressure.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm gold-glow-hover hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E5] border border-[#F2A000]/40 text-[#D98A00] flex items-center justify-center mb-4 font-bold shadow-xs group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#10264B] mb-1.5">Endgame Theory</h4>
                <p className="text-xs text-[#25334A]/80 leading-relaxed">
                  Essential theoretical endgames, king activity, pawn promotion techniques, and precise technique.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm gold-glow-hover hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E5] border border-[#F2A000]/40 text-[#D98A00] flex items-center justify-center mb-4 font-bold shadow-xs group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#10264B] mb-1.5">Game Analysis</h4>
                <p className="text-xs text-[#25334A]/80 leading-relaxed">
                  In-depth post-tournament game review, blunder identification, and personalized homework assignments.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE VELOCITY (EXACT MATCHING 6 CONTENT CARDS REFERENCE media_1791627364299_be23807d.jpg) */}
        <section className="relative py-12 sm:py-16 border-t border-[#F2A000]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#F2A000]" />
                <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                  THE VELOCITY ADVANTAGE
                </span>
                <span className="w-6 h-[2px] bg-[#F2A000]" />
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B]">
                Why Choose Velocity Chess <span className="text-[#E99A00]">Academy</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#25334A]/85 max-w-2xl mx-auto leading-relaxed">
                We combine elite master-level instruction with personalized student care to deliver tangible rating growth and tournament success.
              </p>
            </div>

            {/* SIX CONTENT CARDS IN 3 COLUMNS MATCHING REFERENCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {whyChooseCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={card.id}
                    className="bg-[#FFFDF8] backdrop-blur-md rounded-2xl border-2 border-[#F2A000]/40 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group border-t-white"
                  >
                    {/* Main Card Content */}
                    <div className="flex items-start flex-1 p-5 gap-4">
                      
                      {/* Left Column: 3D Metallic Gold Chess Piece */}
                      <div className="w-16 sm:w-20 shrink-0 self-stretch flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-b from-[#FFF7EA] via-[#FFEED4]/80 to-[#FFF7EA] border border-[#F2A000]/30 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <ChessPieceIcon type={card.pieceType} className="w-10 h-16 text-[#D98A00]" />
                      </div>

                      {/* Right Column: Icon Badge, Heading, and Description */}
                      <div className="flex-1 flex flex-col justify-start text-left space-y-2">
                        
                        {/* Icon Badge */}
                        <div className="w-8 h-8 rounded-lg bg-[#FFEED4] border border-[#F2A000]/40 flex items-center justify-center text-[#D98A00] shadow-xs">
                          <IconComp className="w-4 h-4" />
                        </div>

                        {/* Heading */}
                        <h3 className="font-serif font-extrabold text-base sm:text-lg text-[#10264B] leading-snug">
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#25334A]/85 font-medium leading-relaxed">
                          {card.description}
                        </p>

                      </div>

                    </div>

                    {/* Bottom Base: Checkerboard Strip matching reference image */}
                    <div className="grid grid-cols-8 h-3.5 w-full border-t border-[#F2A000]/30 bg-[#FFF5E5] shrink-0">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={i % 2 === 0 ? 'bg-[#FFE29A]/70' : 'bg-[#FFFDF8]'}
                        />
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 5: MEET OUR COACH (LIGHT ELEGANT CREAM CONTAINER) */}
        <section id="meet-coach" className="relative py-14 sm:py-18 border-t border-[#F2A000]/20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#F2A000]" />
                <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                  LEAD COACH PROFILE
                </span>
                <span className="w-6 h-[2px] bg-[#F2A000]" />
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B]">
                Meet Founder & Head Coach
              </h2>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-[#F2A000]/40 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center gold-glow-hover">
              
              {/* Coach Portrait */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#F2A000]/60 shadow-xl max-w-[340px] w-full group">
                  <img
                    src="/assets/player_hero_bg.jpg"
                    alt="International Master Krishna Teja Portrait"
                    className="w-full h-[360px] object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10264B]/80 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#F2A000]/40 text-center shadow-md">
                    <h4 className="font-serif font-bold text-sm text-[#10264B]">IM Krishna Teja</h4>
                    <p className="text-[11px] text-[#D98A00] font-semibold">Head Coach & Founder</p>
                  </div>
                </div>
              </div>

              {/* Coach Bio & Accolades */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-[#D98A00] uppercase tracking-wider">
                    International Master & FIDE Instructor
                  </span>
                  <h3 className="font-serif font-extrabold text-3xl text-[#10264B]">
                    K. Krishna Teja
                  </h3>
                  <p className="text-xs sm:text-sm text-[#25334A]/85 leading-relaxed font-sans">
                    With over a decade of competitive professional experience and coaching expertise, IM Krishna Teja has mentored hundreds of young players, transforming beginner students into State Champions, FIDE Rated Masters, and International Medalists.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#FFF9EF] border border-[#F2A000]/30">
                    <div className="text-xl font-extrabold text-[#10264B] font-serif">Peak FIDE 2400+</div>
                    <div className="text-[11px] text-[#25334A]/80 font-medium">International Master Title</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFF9EF] border border-[#F2A000]/30">
                    <div className="text-xl font-extrabold text-[#10264B] font-serif">10+ Years</div>
                    <div className="text-[11px] text-[#25334A]/80 font-medium">Coaching Excellence</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Book a Trial Session with IM Teja</span>
                    <ArrowRight className="w-4 h-4 text-[#10264B]" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6: ACHIEVEMENTS HIGHLIGHTS */}
        <section className="relative py-12 sm:py-16 border-t border-[#F2A000]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#F2A000]" />
                <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                  ACADEMY MILESTONES
                </span>
                <span className="w-6 h-[2px] bg-[#F2A000]" />
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B]">
                Track Record of Excellence
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm">
                <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B] mb-1">500+</div>
                <div className="text-xs text-[#25334A]/80 font-medium">Students Trained</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm">
                <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B] mb-1">100+</div>
                <div className="text-xs text-[#25334A]/80 font-medium">Tournaments Participated</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm">
                <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B] mb-1">50+</div>
                <div className="text-xs text-[#25334A]/80 font-medium">Medals Won</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#F2A000]/30 shadow-sm">
                <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B] mb-1">10+</div>
                <div className="text-xs text-[#25334A]/80 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CALL TO ACTION */}
        <CtaSection />

      </div>

    </div>
  );
};

export default AboutPage;
