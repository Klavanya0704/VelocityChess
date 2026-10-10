import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ChevronRight, Crown, Image, BookOpen, Video, FileText } from 'lucide-react';

/* 3D Metallic Gold Chess Pieces for Left & Right Edges */
const GoldKingEdge: React.FC = () => (
  <svg viewBox="0 0 90 180" className="w-24 h-48 sm:w-28 sm:h-56 filter drop-shadow-xl opacity-90" fill="none">
    <defs>
      <linearGradient id="edge-gold-king" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4DB" />
        <stop offset="30%" stopColor="#FFE08A" />
        <stop offset="65%" stopColor="#D98A00" />
        <stop offset="100%" stopColor="#7A4D00" />
      </linearGradient>
    </defs>
    {/* Cross Top */}
    <path d="M 40 10 L 50 10 L 50 18 L 58 18 L 58 26 L 50 26 L 50 34 L 40 34 L 40 26 L 32 26 L 32 18 L 40 18 Z" fill="url(#edge-gold-king)" stroke="#FFE29A" strokeWidth="1" />
    {/* Crown Dome */}
    <path d="M 26 55 C 26 35, 64 35, 64 55 L 60 115 H 30 Z" fill="url(#edge-gold-king)" stroke="#FFE29A" strokeWidth="1" />
    <ellipse cx="45" cy="115" rx="22" ry="7" fill="url(#edge-gold-king)" stroke="#FFFDF8" strokeWidth="1.5" />
    {/* Pedestal Stand */}
    <path d="M 28 120 L 62 120 L 68 150 C 68 156, 22 156, 22 150 Z" fill="url(#edge-gold-king)" />
    <rect x="14" y="150" width="62" height="14" rx="3" fill="url(#edge-gold-king)" stroke="#FFE29A" strokeWidth="1.5" />
  </svg>
);

const GoldKnightEdge: React.FC = () => (
  <svg viewBox="0 0 90 180" className="w-24 h-48 sm:w-28 sm:h-56 filter drop-shadow-xl opacity-90" fill="none">
    <defs>
      <linearGradient id="edge-gold-knight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4DB" />
        <stop offset="30%" stopColor="#FFE08A" />
        <stop offset="65%" stopColor="#D98A00" />
        <stop offset="100%" stopColor="#7A4D00" />
      </linearGradient>
    </defs>
    {/* Knight Horse Head */}
    <path d="M 26 115 C 20 75, 28 35, 55 20 C 72 26, 68 45, 60 55 C 70 55, 74 65, 66 75 C 56 75, 46 70, 38 82 L 32 115 Z" fill="url(#edge-gold-knight)" stroke="#FFE29A" strokeWidth="1" />
    <ellipse cx="45" cy="115" rx="22" ry="7" fill="url(#edge-gold-knight)" stroke="#FFFDF8" strokeWidth="1.5" />
    {/* Pedestal Stand */}
    <path d="M 28 120 L 62 120 L 68 150 C 68 156, 22 156, 22 150 Z" fill="url(#edge-gold-knight)" />
    <rect x="14" y="150" width="62" height="14" rx="3" fill="url(#edge-gold-knight)" stroke="#FFE29A" strokeWidth="1.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#FFF9EF] text-[#25334A] pt-14 pb-8 select-none z-10 overflow-hidden border-t-2 border-[#F2A000]/40">
      
      {/* 1. DECORATIVE BACKGROUND LIGHTING, GOLD RIBBONS & CHESS PIECES AT EDGES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Background Warm Glow */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FFEED4]/60 via-[#FFF9EF]/40 to-transparent" />

        {/* Top Gold Sweeping Curve */}
        <svg className="absolute top-0 left-0 right-0 w-full h-16 text-[#F2A000]/30 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 60" fill="none">
          <path d="M 0 35 Q 300 -10, 600 30 T 1200 15 L 1200 0 L 0 0 Z" fill="url(#gold-wave-top)" opacity="0.3" />
          <path d="M 0 35 Q 300 -10, 600 30 T 1200 15" stroke="#F2A000" strokeWidth="2.5" />
          <defs>
            <linearGradient id="gold-wave-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE8AB" />
              <stop offset="50%" stopColor="#F2A000" />
              <stop offset="100%" stopColor="#FFF9EF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Far Left Edge 3D Gold King Piece */}
        <div className="absolute bottom-4 left-0 sm:left-2 lg:left-6 z-0 hidden md:block pointer-events-none">
          <GoldKingEdge />
        </div>

        {/* Far Right Edge 3D Gold Knight Piece */}
        <div className="absolute bottom-4 right-0 sm:right-2 lg:right-6 z-0 hidden md:block pointer-events-none">
          <GoldKnightEdge />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. MAIN FOOTER FOUR COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          
          {/* COL 1: OFFICIAL LOGO, ACADEMY DESCRIPTION & SOCIAL BADGES (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="inline-block transition-transform hover:scale-103">
              <img
                src="/assets/velocity_logo_tight_transparent.png"
                alt="Velocity Chess Academy Official Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#25334A]/85 font-medium leading-relaxed max-w-sm">
              Nurturing strategic, confident, and resilient thinkers through master-level chess instruction, FIDE tournament prep, and holistic youth growth.
            </p>

            {/* Circular Social Media Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="#youtube"
                className="w-9 h-9 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="#website"
                className="w-9 h-9 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COL 2: EXPLORE PAGES (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <div className="space-y-1">
              <h4 className="font-serif font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#10264B]">
                EXPLORE PAGES
              </h4>
              <div className="w-12 h-[2px] bg-[#F2A000] relative">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#F2A000] absolute -top-[2px] left-1/2 -translate-x-1/2" />
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#10264B]">
              <li>
                <Link to="/" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Home</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>About Us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/programs" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Coaching Programs</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Student Achievements</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Tournaments & Events</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: RESOURCES & MEDIA (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <div className="space-y-1">
              <h4 className="font-serif font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#10264B]">
                RESOURCES & MEDIA
              </h4>
              <div className="w-12 h-[2px] bg-[#F2A000] relative">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#F2A000] absolute -top-[2px] left-1/2 -translate-x-1/2" />
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#10264B]">
              <li>
                <Link to="/gallery" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <Image className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>Academy Gallery</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/resources" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <BookOpen className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>Chess Guides & Tactics</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <Video className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>Enrollment & Contact</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/resources" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <FileText className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>FIDE Opening Repertoire</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: ACADEMY CONTACT (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <div className="space-y-1">
              <h4 className="font-serif font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#10264B]">
                ACADEMY CONTACT
              </h4>
              <div className="w-12 h-[2px] bg-[#F2A000] relative">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#F2A000] absolute -top-[2px] left-1/2 -translate-x-1/2" />
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-[#10264B]">
              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-snug">
                  Velocity Campus, Premier Education District, City Center
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-7 h-7 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold">
                  +91 98765 43210 (Admissions Office)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-7 h-7 rounded-full bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold">
                  admissions@velocitychess.edu
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. DECORATIVE CENTER GOLD CROWN EMBLEM & CHECKERBOARD STRIP DIVIDER */}
        <div className="relative flex items-center justify-center my-6">
          {/* Left Gold Line with Checkerboard Tiles */}
          <div className="flex-1 flex items-center justify-end">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F2A000]/60 to-[#F2A000]" />
            <div className="grid grid-cols-6 h-3.5 w-24 shrink-0 border border-[#F2A000]/40 rounded-xs overflow-hidden ml-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={i % 2 === 0 ? 'bg-[#FFE8AB]' : 'bg-[#FFFDF8]'} />
              ))}
            </div>
          </div>

          {/* Center Gold Crown Emblem */}
          <div className="mx-4 w-9 h-9 rounded-full bg-[#FFEED4] border-2 border-[#F2A000] flex items-center justify-center text-[#D98A00] shadow-md shrink-0">
            <Crown className="w-5 h-5 fill-[#F2A000]/30" />
          </div>

          {/* Right Gold Line with Checkerboard Tiles */}
          <div className="flex-1 flex items-center justify-start">
            <div className="grid grid-cols-6 h-3.5 w-24 shrink-0 border border-[#F2A000]/40 rounded-xs overflow-hidden mr-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={i % 2 === 0 ? 'bg-[#FFFDF8]' : 'bg-[#FFE8AB]'} />
              ))}
            </div>
            <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-[#F2A000]/60 to-[#F2A000]" />
          </div>
        </div>

        {/* 4. BOTTOM COPYRIGHT & LEGAL TERMS ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-[#10264B]/80 space-y-3 sm:space-y-0 pt-2">
          <p>© {new Date().getFullYear()} Velocity Chess Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#D98A00] transition-colors">Privacy Policy</a>
            <span className="text-[#F2A000]/50">|</span>
            <a href="#terms" className="hover:text-[#D98A00] transition-colors">Terms of Service</a>
            <span className="text-[#F2A000]/50">|</span>
            <a href="#code" className="hover:text-[#D98A00] transition-colors">Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
