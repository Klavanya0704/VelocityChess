import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { SearchModal } from '../common/SearchModal';
import { EnrollmentModal } from '../common/EnrollmentModal';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route changes, resize, or Escape key
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (path === '/contact' && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/45 backdrop-blur-xs z-40 lg:hidden pointer-events-auto transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full pointer-events-none px-3 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-4'
        }`}
      >
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
          
          {/* 1. SEPARATE HORIZONTAL "SLEEPING CYLINDER" LOGO CAPSULE */}
          {/* Desktop & Tablet Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="Velocity Chess Academy Homepage"
            className="pointer-events-auto group shrink-0 hidden sm:block transition-transform hover:scale-[1.02]"
          >
            <div
              className={`backdrop-blur-md rounded-full h-[46px] sm:h-[50px] lg:h-[52px] w-[150px] sm:w-[170px] lg:w-[185px] flex items-center justify-center px-3.5 py-1.5 transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#FFF9EF]/95 border border-[#F2A000]/40 shadow-lg'
                  : 'bg-white/60 border border-white/85 shadow-md hover:shadow-lg'
              }`}
            >
              <img
                src="/assets/velocity_logo_tight_transparent.png"
                alt="Velocity Chess Academy"
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* Mobile Logo Fallback */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="Velocity Chess Academy Homepage"
            className="sm:hidden pointer-events-auto inline-block shrink-0"
          >
            <div
              className={`backdrop-blur-md rounded-full px-2.5 py-1 flex items-center h-[38px] transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#FFF9EF]/95 border border-[#F2A000]/40 shadow-md'
                  : 'bg-white/60 border border-white/85 shadow-sm'
              }`}
            >
              <img
                src="/assets/velocity_logo_tight_transparent.png"
                alt="Velocity Chess Academy"
                className="h-full max-h-[26px] w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* 2. TRULY VIEWPORT-CENTERED NAVIGATION GLASS CAPSULE */}
          <div className="pointer-events-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[780px] xl:max-w-[890px]">
            <div
              className={`rounded-full px-2.5 sm:px-6 py-1 sm:py-2 flex items-center justify-between transition-all duration-300 ${
                isScrolled
                  ? 'glass-nav-scrolled'
                  : 'glass-nav border border-white/80'
              }`}
            >
              
              {/* CENTER: Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-2.5 xl:space-x-5.5 mx-auto" aria-label="Main Navigation">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.path &&
                    !(link.path === '/contact' && location.pathname === '/');
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={(e) => handleLinkClick(link.path, e)}
                      className={({ isActive: isRouteActive }) => {
                        const active = isRouteActive && !(link.path === '/contact' && location.pathname === '/');
                        return `relative text-xs xl:text-sm font-semibold transition-colors duration-200 py-1 ${
                          active
                            ? 'text-[#10264B] font-bold'
                            : 'text-[#10264B]/80 hover:text-[#10264B]'
                        }`;
                      }}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F2A000] rounded-full" />
                      )}
                    </NavLink>
                  );
                })}
              </nav>

              {/* RIGHT: Search Button, Enroll Now CTA & Mobile Menu Toggle */}
              <div className="flex items-center space-x-1.5 sm:space-x-2.5 ml-auto">
                {/* Search Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-full glass-btn-ivory text-[#10264B] flex items-center justify-center transition hover:scale-105 cursor-pointer"
                  aria-label="Search site"
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10264B]" />
                </button>

                {/* Enroll Now Button */}
                <button
                  onClick={() => setIsEnrollOpen(true)}
                  className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 glass-btn-navy text-white rounded-full text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition hover:scale-103 cursor-pointer"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F2A000]" />
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-1.5 sm:p-2 rounded-xl text-[#10264B] glass-btn-ivory transition hover:scale-105 cursor-pointer"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-nav-drawer"
                >
                  {isMobileMenuOpen ? <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" /> : <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5" />}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden mt-2 p-3.5 sm:p-5 bg-[#FFF9EF]/98 backdrop-blur-2xl rounded-2xl space-y-2.5 sm:space-y-3 border border-[#F2A000]/35 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300 pointer-events-auto w-full max-w-[calc(100vw-24px)] sm:max-w-sm mx-auto z-50 relative"
          >
            {/* Mobile Drawer Brand Logo Header */}
            <div className="flex items-center justify-center pb-2.5 border-b border-[#F2A000]/20">
              <Link
                to="/"
                onClick={(e) => handleLinkClick('/', e)}
                aria-label="Velocity Chess Academy Homepage"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/assets/velocity_logo_tight_transparent.png"
                  alt="Velocity Chess Academy"
                  className="h-8 xs:h-9 w-auto object-contain mx-auto"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition text-center truncate ${
                      isActive
                        ? 'bg-[#10264B] text-white shadow-sm'
                        : 'bg-white/80 border border-[#F2A000]/20 text-[#10264B] hover:bg-[#FFEED4]'
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
                className="w-full py-2 sm:py-2.5 glass-btn-navy text-white rounded-full font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md hover:scale-[1.01] transition cursor-pointer"
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
