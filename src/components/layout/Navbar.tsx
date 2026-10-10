import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { SearchModal } from '../common/SearchModal';
import { EnrollmentModal } from '../common/EnrollmentModal';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="absolute top-3 sm:top-4 left-0 right-0 z-40 w-full pointer-events-none px-4 sm:px-6 lg:px-8">
        
        {/* 1. SEPARATE HORIZONTAL "SLEEPING CYLINDER" LOGO CAPSULE (NO YELLOW BG) */}
        <Link
          to="/"
          className="absolute top-0 left-8 sm:left-14 lg:left-20 pointer-events-auto group shrink-0 hidden sm:block"
        >
          <div className="bg-white/45 backdrop-blur-md border border-white/85 shadow-md hover:shadow-lg rounded-full h-[46px] sm:h-[50px] lg:h-[52px] w-[150px] sm:w-[170px] lg:w-[185px] flex items-center justify-center px-3.5 py-1.5 hover:scale-[1.02] transition-all duration-200">
            <img
              src="/assets/velocity_logo_tight_transparent.png"
              alt="Velocity Chess Academy"
              className="w-full h-full object-contain filter brightness-[0.95]"
            />
          </div>
        </Link>

        {/* Mobile Logo Fallback */}
        <Link to="/" className="sm:hidden pointer-events-auto inline-block">
          <div className="bg-white/45 backdrop-blur-md border border-white/85 shadow-sm rounded-full px-3.5 py-1 flex items-center h-[40px]">
            <img
              src="/assets/velocity_logo_tight_transparent.png"
              alt="Velocity Chess Academy"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* 2. TRULY VIEWPORT-CENTERED NAVIGATION GLASS CAPSULE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto w-full max-w-[920px] px-4">
          <div className="glass-nav rounded-full px-4 sm:px-6 py-2 flex items-center justify-between shadow-lg border border-white/80">
            
            {/* CENTER: Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5.5 mx-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-xs xl:text-sm font-semibold transition-colors duration-200 py-1 ${
                        isActive ? 'text-[#10264B]' : 'text-[#10264B]/80 hover:text-[#10264B]'
                      }`
                    }
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F2A000] rounded-full" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* RIGHT: Search Button & Enroll Now CTA */}
            <div className="flex items-center space-x-2.5 ml-auto">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8.5 h-8.5 rounded-full glass-btn-ivory text-[#10264B] flex items-center justify-center transition"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 text-[#10264B]" />
              </button>

              {/* Enroll Now Button */}
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 glass-btn-navy text-white rounded-full text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F2A000]" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#10264B] glass-btn-ivory transition"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-16 p-5 glass-card rounded-2xl space-y-3 border border-white/50 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto max-w-sm mx-auto">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'glass-btn-navy text-white'
                        : 'glass-btn-ivory text-[#10264B]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-[#F2A000]/20">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsEnrollOpen(true);
                }}
                className="w-full py-2.5 glass-btn-navy text-white rounded-full font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F2A000]" />
              </button>
            </div>
          </div>
        )}

      </header>

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </>
  );
};

export default Navbar;
