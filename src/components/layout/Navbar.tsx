import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { SearchModal } from '../common/SearchModal';
import { EnrollmentModal } from '../common/EnrollmentModal';
import { Logo } from '../common/Logo';

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
      <header className="absolute top-3 sm:top-4 left-0 right-0 z-40 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 transition-all duration-300 pointer-events-none">
        <div className="glass-nav rounded-full px-4 sm:px-5 py-2 flex items-center justify-between shadow-lg pointer-events-auto">
          
          {/* LEFT: Academy Brand Logo in Bright Yellow Rounded Badge */}
          <Link to="/" className="flex items-center group">
            <Logo size="md" yellowBg={true} />
          </Link>

          {/* CENTER: Desktop Navigation Links (8 links in exact order) */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs xl:text-sm font-semibold transition-colors duration-200 py-1 ${
                      isActive ? 'text-[#10264B]' : 'text-[#10264B]/90 hover:text-[#10264B]'
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

          {/* RIGHT: Action Buttons with Translucent Glass Styling */}
          <div className="flex items-center space-x-2.5">
            {/* Translucent Glass Circular Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 rounded-full glass-btn-ivory text-[#10264B] flex items-center justify-center"
              aria-label="Search site"
            >
              <Search className="w-4 h-4 text-[#10264B]" />
            </button>

            {/* Translucent Glass Navy Pill "Enroll Now →" Button */}
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 glass-btn-navy text-white rounded-full text-xs font-bold tracking-wide"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F2A000]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#10264B] glass-btn-ivory transition"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-6 glass-card rounded-3xl space-y-4 border border-white/50 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
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
                className="w-full py-3 glass-btn-navy text-white rounded-full font-bold text-sm flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 text-[#F2A000]" />
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
