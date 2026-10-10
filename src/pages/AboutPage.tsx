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

/* PROMINENT 3D METALLIC GOLD CHESS PIECE SCULPTURE SVG COMPONENT */
const GoldChessPiece3D: React.FC<{ piece: string; className?: string }> = ({ piece, className = "w-16 h-24" }) => {
  return (
    <svg viewBox="0 0 80 120" className={className} fill="none">
      <defs>
        {/* Rich 3D Gold Metallic Linear Gradients */}
        <linearGradient id={`gold-3d-main-${piece}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7E0" />
          <stop offset="25%" stopColor="#FFE08A" />
          <stop offset="55%" stopColor="#E59C00" />
          <stop offset="85%" stopColor="#996300" />
          <stop offset="100%" stopColor="#5E3B00" />
        </linearGradient>

        {/* 3D Drop Shadow */}
        <filter id={`gold-shadow-${piece}`} x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#3D2600" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter={`url(#gold-shadow-${piece})`}>
        
        {/* PEDESTAL STAND (COMMON FOR ALL PIECES) */}
        <path d="M 15 95 L 65 95 L 70 106 C 70 110, 10 110, 10 106 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF3D6" strokeWidth="0.8" />
        <rect x="8" y="106" width="64" height="10" rx="3" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />

        {/* INDIVIDUAL 3D SCULPTURES */}
        {piece === 'king' && (
          <g>
            {/* Cross Finial */}
            <path d="M 36 6 H 44 V 14 H 52 V 22 H 44 V 30 H 36 V 22 H 28 V 14 H 36 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF5E0" strokeWidth="1" />
            {/* King Crown Dome */}
            <path d="M 22 46 C 22 30, 58 30, 58 46 L 54 75 H 26 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            {/* Crown Ridges & Details */}
            <path d="M 30 36 Q 40 30, 50 36" stroke="#FFF7E0" strokeWidth="2" strokeLinecap="round" fill="none" />
            <ellipse cx="40" cy="75" rx="16" ry="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 24 80 L 56 80 L 60 95 L 20 95 Z" fill={`url(#gold-3d-main-${piece})`} />
          </g>
        )}

        {piece === 'knight' && (
          <g>
            {/* Knight Head & Mane */}
            <path d="M 22 75 C 16 50, 24 24, 48 14 C 62 20, 60 36, 54 44 C 62 44, 66 52, 60 60 C 52 60, 44 56, 38 64 L 32 75 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF5E0" strokeWidth="1" />
            {/* Eye & Snout Details */}
            <circle cx="48" cy="28" r="2.5" fill="#3D2600" />
            <path d="M 44 24 C 48 22, 54 24, 56 28" stroke="#FFF7E0" strokeWidth="1.5" fill="none" />
            <ellipse cx="40" cy="75" rx="16" ry="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 24 80 L 56 80 L 60 95 L 20 95 Z" fill={`url(#gold-3d-main-${piece})`} />
          </g>
        )}

        {piece === 'bishop' && (
          <g>
            {/* Orb Top */}
            <circle cx="40" cy="14" r="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF7E0" strokeWidth="1" />
            {/* Mitre Head */}
            <path d="M 40 22 C 24 34, 24 60, 40 68 C 56 60, 56 34, 40 22 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            {/* Slit Cut */}
            <path d="M 32 38 L 48 48" stroke="#FFF7E0" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="40" cy="75" rx="16" ry="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 24 80 L 56 80 L 60 95 L 20 95 Z" fill={`url(#gold-3d-main-${piece})`} />
          </g>
        )}

        {piece === 'rook' && (
          <g>
            {/* Castle Battlements Top */}
            <path d="M 22 20 H 30 V 28 H 38 V 20 H 46 V 28 H 54 V 20 H 58 V 34 H 22 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF7E0" strokeWidth="1" />
            {/* Rook Body */}
            <path d="M 26 36 H 54 L 50 72 H 30 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="75" rx="16" ry="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 24 80 L 56 80 L 60 95 L 20 95 Z" fill={`url(#gold-3d-main-${piece})`} />
          </g>
        )}

        {piece === 'pawn' && (
          <g>
            {/* Pawn Head Orb */}
            <circle cx="40" cy="30" r="14" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF7E0" strokeWidth="1.5" />
            <ellipse cx="40" cy="50" rx="18" ry="4.5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            {/* Pawn Body */}
            <path d="M 28 54 C 28 54, 25 72, 22 76 H 58 C 55 72, 52 54, 52 54 Z" fill={`url(#gold-3d-main-${piece})`} />
            <ellipse cx="40" cy="76" rx="18" ry="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 24 80 L 56 80 L 60 95 L 20 95 Z" fill={`url(#gold-3d-main-${piece})`} />
          </g>
        )}

        {piece === 'queen' && (
          <g>
            {/* Queen Coronet Points */}
            <circle cx="22" cy="22" r="3" fill={`url(#gold-3d-main-${piece})`} />
            <circle cx="31" cy="16" r="3" fill={`url(#gold-3d-main-${piece})`} />
            <circle cx="40" cy="14" r="3.5" fill={`url(#gold-3d-main-${piece})`} />
            <circle cx="49" cy="16" r="3" fill={`url(#gold-3d-main-${piece})`} />
            <circle cx="58" cy="22" r="3" fill={`url(#gold-3d-main-${piece})`} />
            {/* Coronet Body */}
            <path d="M 20 28 L 26 44 L 40 24 L 54 44 L 60 28 L 56 65 H 24 Z" fill={`url(#gold-3d-main-${piece})`} stroke="#FFF7E0" strokeWidth="1" />
            <ellipse cx="40" cy="75" rx="16" ry="5" fill={`url(#gold-3d-main-${piece})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 24 80 L 56 80 L 60 95 L 20 95 Z" fill={`url(#gold-3d-main-${piece})`} />
          </g>
        )}

      </g>
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
      isLightGold: false,
    },
    {
      id: 2,
      title: 'Small Batch Sizes',
      description: 'Intimate group sizes to guarantee individual attention, continuous Q&A, and customized progress tracking for every child.',
      icon: Users,
      pieceType: 'knight',
      isLightGold: true,
    },
    {
      id: 3,
      title: 'Tournament Preparation',
      description: 'Mock tournament games, clock management, psychological preparation, and pre-round opponent preparation.',
      icon: Zap,
      pieceType: 'bishop',
      isLightGold: false,
    },
    {
      id: 4,
      title: 'Personalized Homework',
      description: "Targeted tactics puzzles, position studies, and weekly assignments matched to each student's weaknesses.",
      icon: CheckCircle2,
      pieceType: 'rook',
      isLightGold: true,
    },
    {
      id: 5,
      title: 'FIDE Rating Guidance',
      description: 'Clear pathways to achieving official FIDE ratings and competing in state, national, and international events.',
      icon: Trophy,
      pieceType: 'pawn',
      isLightGold: false,
    },
    {
      id: 6,
      title: 'Regular Progress Reports',
      description: 'Detailed quarterly evaluations and parent updates documenting tactical accuracy, rating milestones, and key areas for growth.',
      icon: TrendingUp,
      pieceType: 'queen',
      isLightGold: true,
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

        {/* SECTION 4: WHY CHOOSE VELOCITY (EXACT 3D TROPHY PLAQUE DISPLAY CARDS REFERENCE media_1791627912683_5876cfd8.jpg) */}
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

            {/* SIX 3D GOLD DISPLAY PLAQUE CARDS IN 3 COLUMNS MATCHING REFERENCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {whyChooseCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`relative flex flex-col justify-between rounded-3xl border-[3.5px] border-[#F2A000] shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden ${
                      card.isLightGold
                        ? 'bg-gradient-to-b from-[#FFFDF8] via-[#FFEED4]/80 to-[#FFF7E5]'
                        : 'bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF8] to-[#FFF9EF]'
                    }`}
                  >
                    {/* Inner Gold Bevel Accent */}
                    <div className="absolute inset-0 rounded-[21px] border border-[#FFE29A] pointer-events-none z-20 opacity-80" />

                    {/* Main Card Content */}
                    <div className="flex items-center flex-1 p-5 sm:p-6 gap-4 sm:gap-5 relative z-10">
                      
                      {/* Left Column: Prominent 3D Metallic Gold Chess Piece Sculpture */}
                      <div className="w-20 sm:w-24 shrink-0 flex flex-col items-center justify-center p-2 rounded-2xl bg-gradient-to-b from-[#FFEED4]/90 via-[#FFF9EF] to-[#FFE8AB]/90 border-2 border-[#F2A000]/40 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <GoldChessPiece3D piece={card.pieceType} className="w-14 h-22 sm:w-16 sm:h-24 drop-shadow-md" />
                      </div>

                      {/* Vertical Gold Molded Separator Line */}
                      <div className="w-[2px] self-stretch bg-gradient-to-b from-transparent via-[#F2A000]/50 to-transparent shrink-0" />

                      {/* Right Column: Icon Badge, Heading, and Description */}
                      <div className="flex-1 flex flex-col justify-center text-left space-y-2 py-1">
                        
                        {/* Small Gold Icon Badge */}
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFE8AB] to-[#F2A000]/40 border border-[#F2A000]/60 flex items-center justify-center text-[#10264B] shadow-sm">
                          <IconComp className="w-4 h-4 text-[#0A1D37]" />
                        </div>

                        {/* Heading */}
                        <h3 className="font-serif font-extrabold text-lg sm:text-xl text-[#10264B] leading-tight tracking-tight pt-0.5">
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#25334A]/90 font-medium leading-relaxed">
                          {card.description}
                        </p>

                      </div>

                    </div>

                    {/* Bottom Base: 3D Bevelled Gold Checkerboard Tile Strip */}
                    <div className="grid grid-cols-8 h-4 w-full border-t-2 border-[#F2A000] bg-[#FFF5E5] shrink-0 relative z-10">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-full border-r border-[#F2A000]/20 ${
                            i % 2 === 0
                              ? 'bg-gradient-to-b from-[#FFE8AB] to-[#F2A000]/60'
                              : 'bg-gradient-to-b from-[#FFFFFF] to-[#FFFDF8]'
                          }`}
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
