import React, { useState, useEffect } from 'react';

export const LogoIntro: React.FC = () => {
  const [stage, setStage] = useState<'entering' | 'filling' | 'complete' | 'exiting' | 'done'>('entering');

  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        setStage('done');
      }, 350);
      return () => clearTimeout(quickTimer);
    }

    // 2. Animation sequence timeline:
    // T = 0ms: Initial subtle outline logo display
    // T = 250ms: Begin smooth left-to-right color-fill animation
    const fillTimer = setTimeout(() => {
      setStage('filling');
    }, 250);

    // T = 1450ms: Color fill completes (1200ms sweep)
    const completeTimer = setTimeout(() => {
      setStage('complete');
    }, 1450);

    // T = 1750ms: Hold full logo for 300ms, then begin fluid fade-out transition
    const exitTimer = setTimeout(() => {
      setStage('exiting');
    }, 1750);

    // T = 2150ms: Transition finishes, remove overlay from DOM
    const doneTimer = setTimeout(() => {
      setStage('done');
    }, 2150);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Allow user to dismiss on click or Escape key if desired
  const handleDismiss = () => {
    setStage('done');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        setStage('done');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (stage === 'done') {
    return null;
  }

  const isExiting = stage === 'exiting';
  const isFillingOrComplete = stage === 'filling' || stage === 'complete' || stage === 'exiting';

  return (
    <div
      role="status"
      aria-label="Velocity Chess Academy loading intro"
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5E913] transition-all duration-400 select-none ${
        isExiting ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '400ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Centered Logo Presentation Container */}
      <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[620px] px-4">
        {/* Aspect Ratio Box matching the authentic logo dimensions (656x357 ≈ 1.838) */}
        <div className="relative aspect-[656/357] w-full flex items-center justify-center">
          
          {/* Layer 1: Base low-opacity faint silhouette artwork */}
          <img
            src="/assets/velocity_logo_tight_transparent.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain opacity-20 filter contrast-125 transition-opacity duration-300"
            loading="eager"
            decoding="sync"
          />

          {/* Layer 2: Animated Color-Fill Artwork Layer */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              clipPath: isFillingOrComplete ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: isFillingOrComplete && stage === 'filling'
                ? 'clip-path 1200ms cubic-bezier(0.25, 1, 0.5, 1)'
                : isFillingOrComplete
                ? 'none'
                : 'none',
              WebkitClipPath: isFillingOrComplete ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
            }}
          >
            <img
              src="/assets/velocity_logo_tight_transparent.png"
              alt="Velocity Chess Academy"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(220,54,39,0.18)]"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Layer 3: Soft subtle leading shimmer sweep (active during filling phase) */}
          {stage === 'filling' && (
            <div
              className="absolute inset-y-0 w-12 pointer-events-none opacity-40 blur-[4px]"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.65), transparent)',
                animation: 'introSweep 1200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
              }}
            />
          )}

        </div>
      </div>

      {/* Global CSS for the subtle leading shimmer sweep */}
      <style>{`
        @keyframes introSweep {
          0% {
            left: 0%;
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;
