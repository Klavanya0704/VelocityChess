import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ChevronRight, Crown, Image, BookOpen, Video, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-[#25334A] pt-14 pb-8 select-none z-10 overflow-hidden border-t-2 border-[#F2A000]/40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/footer_bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. MAIN FOOTER FOUR COLUMNS */}
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

            <p className="text-xs sm:text-sm text-[#25334A]/90 font-medium leading-relaxed max-w-sm">
              Nurturing strategic, confident, and resilient thinkers through master-level chess instruction, FIDE tournament prep, and holistic youth growth.
            </p>

            {/* Circular Social Media Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/velocitychessacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/VelocityChess/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@ChessBaseIndiachannel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/50 text-[#D98A00] hover:bg-[#F2A000] hover:text-[#10264B] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
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
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>About Us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/programs" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Coaching Programs</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Student Achievements</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <span className="text-[#F2A000] text-sm">♞</span>
                  <span>Tournaments & Events</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
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
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/resources" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <BookOpen className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>Chess Guides & Tactics</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <Video className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>Enrollment & Contact</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/resources" className="inline-flex items-center space-x-2.5 group hover:text-[#D98A00] transition-colors">
                  <FileText className="w-4 h-4 text-[#F2A000] shrink-0" />
                  <span>FIDE Opening Repertoire</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F2A000] opacity-80 group-hover:translate-x-1 transition-transform" />
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
                <div className="w-7 h-7 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-snug">
                  Velocity Campus, Premier Education District, City Center
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-7 h-7 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold">
                  +91 98765 43210 (Admissions Office)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-7 h-7 rounded-full bg-[#FFEED4]/90 border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold">
                  admissions@velocitychess.edu
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 2. DECORATIVE CENTER GOLD CROWN EMBLEM & CHECKERBOARD STRIP DIVIDER */}
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

        {/* 3. BOTTOM COPYRIGHT & LEGAL TERMS ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-[#10264B] space-y-3 sm:space-y-0 pt-2">
          <p>© {new Date().getFullYear()} Velocity Chess Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#D98A00] transition-colors">Privacy Policy</a>
            <span className="text-[#F2A000]/60">|</span>
            <a href="#terms" className="hover:text-[#D98A00] transition-colors">Terms of Service</a>
            <span className="text-[#F2A000]/60">|</span>
            <a href="#code" className="hover:text-[#D98A00] transition-colors">Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
