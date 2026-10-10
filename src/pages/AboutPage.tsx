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

/* PROMINENT 3D METALLIC GOLD CHESS PIECE SCULPTURE SVG / IMAGE COMPONENT */
const GoldChessPiece3D: React.FC<{ piece: string; className?: string }> = ({ piece, className = "w-16 h-24" }) => {
  const p = piece.toLowerCase();

  if (p === 'king') {
    return (
      <img
        src="/assets/3d_gold_king.png"
        alt="3D Gold King Piece"
        className={`${className} object-contain filter drop-shadow-md`}
      />
    );
  }

  if (p === 'knight') {
    return (
      <img
        src="/assets/3d_gold_knight.png"
        alt="3D Gold Knight Piece"
        className={`${className} object-contain filter drop-shadow-md`}
      />
    );
  }

  if (p === 'bishop') {
    return (
      <img
        src="/assets/3d_gold_bishop.png"
        alt="3D Gold Bishop Piece"
        className={`${className} object-contain filter drop-shadow-md`}
      />
    );
  }

  return (
    <svg viewBox="0 0 80 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Rich 3D Gold Metallic Linear Gradient */}
        <linearGradient id={`gold-metal-main-${p}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF0" />
          <stop offset="15%" stopColor="#FFE585" />
          <stop offset="40%" stopColor="#F0A300" />
          <stop offset="68%" stopColor="#AD7000" />
          <stop offset="88%" stopColor="#6E4400" />
          <stop offset="100%" stopColor="#422700" />
        </linearGradient>

        {/* Specular Highlight Overlay Gradient */}
        <linearGradient id={`gold-specular-${p}`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#FFF2B8" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#F0A300" stopOpacity="0" />
        </linearGradient>

        {/* Deep Bevel Gold Stroke */}
        <linearGradient id={`gold-stroke-${p}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="50%" stopColor="#FFE080" />
          <stop offset="100%" stopColor="#8A5600" />
        </linearGradient>

        {/* Radial Gold Sphere Highlight */}
        <radialGradient id={`gold-sphere-${p}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#FFF1B0" />
          <stop offset="55%" stopColor="#EA9C00" />
          <stop offset="85%" stopColor="#965D00" />
          <stop offset="100%" stopColor="#4A2D00" />
        </radialGradient>

        {/* Realistic Drop Shadow */}
        <filter id={`gold-drop-shadow-${p}`} x="-20%" y="-15%" width="140%" height="135%">
          <feDropShadow dx="2" dy="5" stdDeviation="3.5" floodColor="#241400" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter={`url(#gold-drop-shadow-${p})`}>

        {/* ------------------------------------------------------------- */}
        {/* 1. KING (MATCHING USER'S REFINED 3D GOLD KING IMAGE) */}
        {/* ------------------------------------------------------------- */}
        {p === 'king' && (
          <g>
            {/* Formée Cross Finial Top */}
            <path
              d="M 36 3 H 44 V 7 L 48 4 L 48 10 L 44 9 V 15 H 36 V 9 L 32 10 L 32 4 L 36 7 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Cross Mount Sphere */}
            <circle cx="40" cy="16.5" r="2.5" fill={`url(#gold-sphere-${p})`} stroke="#FFF7D1" strokeWidth="0.8" />

            {/* Inverted Cone Crown Flare Top Rim */}
            <ellipse cx="40" cy="20" rx="19" ry="4" fill={`url(#gold-metal-main-${p})`} stroke="#FFF7D1" strokeWidth="1" />
            <path
              d="M 21 20 L 59 20 L 47 34 L 33 34 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Specular Highlight on Crown Flare */}
            <path d="M 23 20 C 28 25, 33 30, 34 34 H 40 C 37 30, 32 25, 27 20 Z" fill={`url(#gold-specular-${p})`} />

            {/* Upper Collar Ring (Double Torus) */}
            <ellipse cx="40" cy="34" rx="14" ry="3.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="38" rx="16" ry="4" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="43" rx="17.5" ry="4.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1.2" />

            {/* Main Hourglass Column Stem */}
            <path
              d="M 30 43 C 33 60, 24 74, 20 84 H 60 C 56 74, 47 60, 50 43 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Stem Gloss Reflection */}
            <path d="M 31 44 Q 38 62, 23 83 H 32 Q 44 62, 38 44 Z" fill={`url(#gold-specular-${p})`} />

            {/* Pedestal Base (Double Heavy Torus Base) */}
            <ellipse cx="40" cy="84" rx="20" ry="5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 18 86 C 16 90, 14 94, 12 98 L 68 98 C 66 94, 64 90, 62 86 Z" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />
            <ellipse cx="40" cy="98" rx="28" ry="6.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFF7D1" strokeWidth="1.2" />
            <rect x="11" y="98" width="58" height="12" rx="3" fill={`url(#gold-metal-main-${p})`} stroke="#FFF3D6" strokeWidth="1" />
            <rect x="11" y="98" width="58" height="4" rx="1" fill={`url(#gold-specular-${p})`} opacity="0.6" />
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 2. QUEEN (♕) */}
        {/* ------------------------------------------------------------- */}
        {p === 'queen' && (
          <g>
            {/* Top Orb Finial */}
            <circle cx="40" cy="7" r="4" fill={`url(#gold-sphere-${p})`} stroke="#FFF7D1" strokeWidth="0.8" />

            {/* Coronet Pearls (7 Jewels) */}
            <circle cx="21" cy="20" r="2.2" fill={`url(#gold-sphere-${p})`} />
            <circle cx="27" cy="15" r="2.2" fill={`url(#gold-sphere-${p})`} />
            <circle cx="33" cy="12" r="2.2" fill={`url(#gold-sphere-${p})`} />
            <circle cx="40" cy="11" r="2.5" fill={`url(#gold-sphere-${p})`} />
            <circle cx="47" cy="12" r="2.2" fill={`url(#gold-sphere-${p})`} />
            <circle cx="53" cy="15" r="2.2" fill={`url(#gold-sphere-${p})`} />
            <circle cx="59" cy="20" r="2.2" fill={`url(#gold-sphere-${p})`} />

            {/* Coronet Body Flared Petals */}
            <path
              d="M 19 25 L 25 46 L 33 22 L 40 46 L 47 22 L 55 46 L 61 25 L 56 48 C 56 52, 24 52, 24 48 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Coronet Inner Curve Shadow */}
            <path d="M 23 27 Q 40 42, 57 27 Q 40 50, 23 27 Z" fill="#6E4400" opacity="0.3" />

            {/* Beaded Collar */}
            <ellipse cx="40" cy="48" rx="17" ry="4" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="52" rx="15" ry="3.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />

            {/* Slender Waist Stem */}
            <path
              d="M 27 52 C 27 52, 30 74, 23 84 H 57 C 50 74, 53 52, 53 52 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            <path d="M 28 53 Q 33 68, 27 83 H 33 Q 37 68, 32 53 Z" fill={`url(#gold-specular-${p})`} />

            {/* Pedestal Stand */}
            <ellipse cx="40" cy="84" rx="18" ry="4.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 18 88 L 62 88 L 67 100 C 67 104, 13 104, 13 100 Z" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />
            <rect x="10" y="100" width="60" height="12" rx="3" fill={`url(#gold-metal-main-${p})`} stroke="#FFF3D6" strokeWidth="1" />
            <rect x="10" y="100" width="60" height="4" rx="1" fill={`url(#gold-specular-${p})`} opacity="0.6" />
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 3. BISHOP (♗) */}
        {/* ------------------------------------------------------------- */}
        {p === 'bishop' && (
          <g>
            {/* Top Orb Finial */}
            <circle cx="40" cy="10" r="4.5" fill={`url(#gold-sphere-${p})`} stroke="#FFF7D1" strokeWidth="0.8" />

            {/* Oval Mitre Head */}
            <path
              d="M 40 16 C 23 28, 23 52, 40 58 C 57 52, 57 28, 40 16 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="1"
            />
            {/* Mitre Specular Highlight */}
            <path d="M 29 28 C 26 36, 28 48, 33 54 C 28 48, 27 34, 31 27 Z" fill={`url(#gold-specular-${p})`} />

            {/* Traditional Staunton Cut-Out Slit */}
            <path d="M 31 30 L 46 42" stroke="#3D2400" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 31 30 L 46 42" stroke="#FFF7D1" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

            {/* Mitre Collar Rings */}
            <ellipse cx="40" cy="58" rx="16" ry="4" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="62" rx="14" ry="3.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />

            {/* Stem */}
            <path
              d="M 27 62 C 27 62, 30 75, 23 84 H 57 C 50 75, 53 62, 53 62 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            <path d="M 28 63 Q 33 74, 27 83 H 33 Q 37 74, 32 63 Z" fill={`url(#gold-specular-${p})`} />

            {/* Pedestal Stand */}
            <ellipse cx="40" cy="84" rx="18" ry="4.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 18 88 L 62 88 L 67 100 C 67 104, 13 104, 13 100 Z" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />
            <rect x="10" y="100" width="60" height="12" rx="3" fill={`url(#gold-metal-main-${p})`} stroke="#FFF3D6" strokeWidth="1" />
            <rect x="10" y="100" width="60" height="4" rx="1" fill={`url(#gold-specular-${p})`} opacity="0.6" />
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 2. KNIGHT (MATCHING USER'S REFINED 3D GOLD KNIGHT IMAGE) */}
        {/* ------------------------------------------------------------- */}
        {p === 'knight' && (
          <g>
            {/* Mane Pleated Ridges (Back of Neck Spine) */}
            <path
              d="M 48 10 C 58 16, 68 34, 66 68 L 56 68 C 58 38, 52 20, 44 14 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Individual Mane Segment Ridges */}
            <path d="M 49 14 L 62 18" stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 52 22 L 65 27" stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 54 30 L 67 36" stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 55 38 L 67 45" stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 55 46 L 66 53" stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 54 54 L 65 61" stroke="#FFE08A" strokeWidth="1.2" />

            {/* Pointed Ears Top */}
            <path
              d="M 42 16 L 45 4 L 49 18 L 51 6 L 56 20 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Inner Ear Highlights */}
            <path d="M 45 7 L 47 16" stroke="#FFF7D1" strokeWidth="1" />
            <path d="M 52 9 L 53 18" stroke="#FFF7D1" strokeWidth="1" />

            {/* Main Horse Head, Neck & Chest Contour Facing Left */}
            <path
              d="M 44 15 C 38 15, 30 22, 25 32 C 21 38, 20 42, 27 42 C 34 42, 38 36, 42 36 C 46 36, 48 40, 44 48 C 36 52, 28 60, 24 78 H 58 C 58 64, 56 46, 52 30 C 50 22, 48 16, 44 15 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />

            {/* Eye Socket & Almond Pupil */}
            <ellipse cx="36" cy="27" rx="3.5" ry="2.2" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <circle cx="35" cy="27" r="1.5" fill="#3D2400" />
            <circle cx="34.5" cy="26.3" r="0.6" fill="#FFFFFF" />

            {/* Muzzle & Nostril Details */}
            <circle cx="25" cy="36" r="1.3" fill="#3D2400" />
            <path d="M 21 38 C 24 40, 28 40, 31 38" stroke="#3D2400" strokeWidth="1" fill="none" />

            {/* Muscle Contour Curves & Gloss Highlights */}
            <path d="M 42 32 C 48 40, 48 56, 42 74" fill="none" stroke="#FFF7D1" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
            <path d="M 28 62 Q 38 68, 46 76" fill="none" stroke={`url(#gold-specular-${p})`} strokeWidth="3" opacity="0.6" />

            {/* Pedestal Base (Double Torus & Cylinder Base) */}
            <ellipse cx="40" cy="78" rx="18" ry="4.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="83" rx="20" ry="5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1.2" />
            <path d="M 18 85 C 16 89, 14 93, 12 97 L 68 97 C 66 93, 64 89, 62 85 Z" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />
            <ellipse cx="40" cy="97" rx="28" ry="6.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFF7D1" strokeWidth="1.2" />
            <rect x="11" y="97" width="58" height="12" rx="3" fill={`url(#gold-metal-main-${p})`} stroke="#FFF3D6" strokeWidth="1" />
            <rect x="11" y="97" width="58" height="4" rx="1" fill={`url(#gold-specular-${p})`} opacity="0.6" />
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 5. ROOK (♖) */}
        {/* ------------------------------------------------------------- */}
        {p === 'rook' && (
          <g>
            {/* Castle Battlements (4 Crenellations) */}
            <path
              d="M 20 16 H 29 V 24 H 35 V 16 H 45 V 24 H 51 V 16 H 60 V 34 H 20 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="1"
            />
            {/* Inner Dark Chamber Gap Top */}
            <rect x="22" y="18" width="36" height="4" fill="#422700" opacity="0.4" />
            {/* Battlements Highlight Line */}
            <path d="M 21 17 H 59" stroke="#FFF7D1" strokeWidth="1.2" />

            {/* Castle Rampart Rim Collar */}
            <rect x="18" y="34" width="44" height="6" rx="2" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />

            {/* Solid Flared Castle Tower Column */}
            <path
              d="M 24 40 L 56 40 L 52 84 L 28 84 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Tower Masonry Texture Lines */}
            <path d="M 25 54 H 55" stroke="#FFE08A" strokeWidth="1" opacity="0.6" />
            <path d="M 27 68 H 53" stroke="#FFE08A" strokeWidth="1" opacity="0.6" />
            {/* Tower Specular Shine */}
            <path d="M 25 41 L 33 41 L 31 83 L 29 83 Z" fill={`url(#gold-specular-${p})`} />

            {/* Pedestal Stand */}
            <ellipse cx="40" cy="84" rx="18" ry="4.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 18 88 L 62 88 L 67 100 C 67 104, 13 104, 13 100 Z" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />
            <rect x="10" y="100" width="60" height="12" rx="3" fill={`url(#gold-metal-main-${p})`} stroke="#FFF3D6" strokeWidth="1" />
            <rect x="10" y="100" width="60" height="4" rx="1" fill={`url(#gold-specular-${p})`} opacity="0.6" />
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 6. PAWN (♙) */}
        {/* ------------------------------------------------------------- */}
        {p === 'pawn' && (
          <g>
            {/* Pawn Top Head Sphere */}
            <circle cx="40" cy="24" r="14" fill={`url(#gold-sphere-${p})`} stroke="#FFF7D1" strokeWidth="1" />
            <circle cx="35" cy="19" r="3.5" fill="#FFFFFF" opacity="0.8" />

            {/* Neck Ring Collar */}
            <ellipse cx="40" cy="42" rx="16" ry="4" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <ellipse cx="40" cy="46" rx="14" ry="3.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />

            {/* Graceful Swooping Pawn Body Stem */}
            <path
              d="M 27 46 C 27 46, 30 72, 22 84 H 58 C 50 72, 53 46, 53 46 Z"
              fill={`url(#gold-metal-main-${p})`}
              stroke={`url(#gold-stroke-${p})`}
              strokeWidth="0.8"
            />
            {/* Specular Highlight */}
            <path d="M 28 47 Q 33 66, 26 83 H 32 Q 37 66, 32 47 Z" fill={`url(#gold-specular-${p})`} />

            {/* Pedestal Stand */}
            <ellipse cx="40" cy="84" rx="18" ry="4.5" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="1" />
            <path d="M 18 88 L 62 88 L 67 100 C 67 104, 13 104, 13 100 Z" fill={`url(#gold-metal-main-${p})`} stroke="#FFE08A" strokeWidth="0.8" />
            <rect x="10" y="100" width="60" height="12" rx="3" fill={`url(#gold-metal-main-${p})`} stroke="#FFF3D6" strokeWidth="1" />
            <rect x="10" y="100" width="60" height="4" rx="1" fill={`url(#gold-specular-${p})`} opacity="0.6" />
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
      <div className="relative z-10 space-y-0 pt-16 sm:pt-20 lg:pt-24">

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

        {/* SECTION 5: ACADEMY FACILITIES & TRAINING ENVIRONMENT */}
        <section id="facilities" className="relative py-12 sm:py-16 border-t border-[#F2A000]/20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#F2A000]" />
                <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                  ACADEMY FACILITIES & ENVIRONMENT
                </span>
                <span className="w-6 h-[2px] bg-[#F2A000]" />
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264B]">
                World-Class Chess Training Environment
              </h2>
              <p className="text-xs sm:text-sm text-[#25334A]/85 max-w-2xl mx-auto leading-relaxed">
                Step inside our dedicated chess academy classroom in Kukatpally, Hyderabad — designed to foster deep tactical focus, calm composure, and championship-caliber practice.
              </p>
            </div>

            {/* WIDE LANDSCAPE-ORIENTED FRAME PRESERVING THE ROOM, STUDENTS, TABLES & WALL MOTTO */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2A000]/40 shadow-2xl bg-[#10264B] group max-w-5xl mx-auto">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black/10">
                <img
                  src="/assets/academy-classroom.jpg"
                  alt="Velocity Chess Academy Training Classroom with Students and Coaches"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Subtle vignette gradient overlay at bottom for readable badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10264B]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                  <div className="space-y-1 max-w-xl text-left">
                    <span className="px-3 py-1 rounded-full bg-[#F2A000] text-[#10264B] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider inline-block shadow-sm">
                      Velocity Chess Academy · Kukatpally Campus
                    </span>
                    <h3 className="font-serif font-extrabold text-lg sm:text-2xl text-[#FFF9EF] drop-shadow-md">
                      "Chess teaches you to think ahead in life."
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 font-medium">
                      Equipped with tournament boards, digital DGT clocks, analysis boards, and comfortable study seating.
                    </p>
                  </div>
                  <div className="shrink-0 hidden sm:block">
                    <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/25 text-center">
                      <div className="text-sm sm:text-base font-extrabold text-[#FFE8AB]">In-Person Batches</div>
                      <div className="text-[10px] text-gray-300">Mon - Sat Coaching</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: MEET OUR COACH (LIGHT ELEGANT CREAM CONTAINER) */}
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
