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
      <header className="absolute top-4 sm:top-5 left-0 right-0 z-40 w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 transition-all duration-300 pointer-events-none">
        <div className="glass-nav rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg pointer-events-auto">
          
          {/* LEFT: Academy Translucent Glass Logo Container */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="glass-btn-ivory p-2 rounded-2xl border border-white/60 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              {/* Gold Chess Knight Emblem */}
              <svg className="w-7 h-7 text-[#E5A51B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 22H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM17 14c0-2.2-1.8-4-4-4h-1c0-1.1-.9-2-2-2V7c0-1.1.9-2 2-2h1c.6 0 1-.4 1-1s-.4-1-1-1h-3c-2.2 0-4 1.8-4 4v3c0 1.1.9 2 2 2h1c1.1 0 2 .9 2 2v1h6v-1z" />
              </svg>
            </div>
            <div>
              <span className="block font-serif font-extrabold text-lg tracking-wider text-[#10264A] leading-tight">
                VELOCITY
              </span>
              <span className="block text-[9px] font-sans font-bold tracking-[0.25em] text-[#E5A51B] uppercase leading-none">
                CHESS ACADEMY
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Navigation Links (8 links in exact order) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs xl:text-sm font-medium transition-colors duration-200 py-1 ${
                      isActive ? 'text-[#10264A] font-semibold' : 'text-[#25334A]/85 hover:text-[#10264A]'
                    }`
                  }
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E5A51B] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* RIGHT: Action Buttons with Translucent Glass Styling */}
          <div className="flex items-center space-x-3">
            {/* Translucent Glass Circular Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full glass-btn-ivory text-[#10264A] flex items-center justify-center"
              aria-label="Search site"
            >
              <Search className="w-4 h-4 text-[#10264A]" />
            </button>

            {/* Translucent Glass Navy Pill "Enroll Now →" Button */}
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 glass-btn-navy text-white rounded-full text-xs font-semibold tracking-wide"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5A51B]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#10264A] glass-btn-ivory transition"
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
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? 'glass-btn-navy text-white font-semibold'
                        : 'glass-btn-ivory text-[#10264A]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E5A51B]/20">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsEnrollOpen(true);
                }}
                className="w-full py-3 glass-btn-navy text-white rounded-full font-semibold text-sm flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
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
