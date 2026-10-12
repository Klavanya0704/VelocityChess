import React, { useState, useEffect } from 'react';

export const LogoIntro: React.FC = () => {
  const [stage, setStage] = useState<'faint' | 'white' | 'filling' | 'complete' | 'exiting' | 'done'>('faint');

  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        setStage('done');
      }, 350);
      return () => clearTimeout(quickTimer);
    }

    // 2. Cinematic 4-frame animation timeline (Total ~2.9s):
    // Frame 1 (0ms - 500ms): Faint dark-grey silhouette on pure black (#000000)
    // Frame 2 (500ms - 1100ms): Transitions to crisp bright white (#FFFFFF)
    const whiteTimer = setTimeout(() => {
      setStage('white');
    }, 500);

    // Frame 3 (1100ms - 2300ms): Vertical bottom-to-top red color fill (#DC3627)
    const fillTimer = setTimeout(() => {
      setStage('filling');
    }, 1100);

    // Color fill completes at 2300ms (1200ms sweep)
    const completeTimer = setTimeout(() => {
      setStage('complete');
    }, 2300);

    // Frame 4 (2550ms - 2950ms): Hold red logo for 250ms, then smoothly fade out black overlay
    const exitTimer = setTimeout(() => {
      setStage('exiting');
    }, 2550);

    // Intro complete (2950ms): Unmount from DOM completely
    const doneTimer = setTimeout(() => {
      setStage('done');
    }, 2950);

    return () => {
      clearTimeout(whiteTimer);
      clearTimeout(fillTimer);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Allow user to dismiss on click or Escape/Space/Enter key
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
  const isWhiteOrLater = stage === 'white' || stage === 'filling' || stage === 'complete' || stage === 'exiting';
  const isFilling = stage === 'filling';
  const isCompleteOrExiting = stage === 'complete' || stage === 'exiting';

  return (
    <div
      role="status"
      aria-label="Velocity Chess Academy loading intro"
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] select-none ${
        isExiting ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '400ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Centered Logo Presentation Container */}
      <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[620px] px-4">
        {/* Aspect Ratio Box matching authentic logo dimensions (656x357 ≈ 1.838) */}
        <div className="relative aspect-[656/357] w-full flex items-center justify-center">

          {/* Layer 1: White/Grey Base Silhouette Layer */}
          {/* Frame 1: Opacity 0.22 (subtle dark grey on black) */}
          {/* Frame 2: Opacity 1.0 (crisp bright white on black) */}
          <img
            src="/assets/velocity_logo_tight_transparent.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              filter: 'brightness(0) invert(1)',
              opacity: isWhiteOrLater ? 1 : 0.22,
              transition: 'opacity 500ms ease-in-out',
            }}
            loading="eager"
            decoding="sync"
          />

          {/* Layer 2: Brand Red (#DC3627) Color-Fill Layer (Vertical Bottom-to-Top) */}
          {/* Frame 3: Progressively fills from bottom edge upward to top edge */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              clipPath: isCompleteOrExiting
                ? 'inset(0% 0 0 0)'
                : isFilling
                ? undefined
                : 'inset(100% 0 0 0)',
              WebkitClipPath: isCompleteOrExiting
                ? 'inset(0% 0 0 0)'
                : isFilling
                ? undefined
                : 'inset(100% 0 0 0)',
              animation: isFilling ? 'riseFill 1200ms cubic-bezier(0.25, 1, 0.5, 1) forwards' : undefined,
              WebkitAnimation: isFilling ? 'riseFill 1200ms cubic-bezier(0.25, 1, 0.5, 1) forwards' : undefined,
            }}
          >
            <img
              src="/assets/velocity_logo_tight_transparent.png"
              alt="Velocity Chess Academy"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(220,54,39,0.35)]"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Layer 3: Rising Subtle Boundary Highlight (Active during vertical fill) */}
          {isFilling && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                WebkitMaskImage: 'url(/assets/velocity_logo_tight_transparent.png)',
                maskImage: 'url(/assets/velocity_logo_tight_transparent.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            >
              <div
                className="absolute left-0 right-0 h-[3px]"
                style={{
                  transform: 'translateY(-50%)',
                  background: 'linear-gradient(90deg, transparent 5%, rgba(255, 140, 120, 0.6) 20%, rgba(255, 245, 220, 0.95) 50%, rgba(255, 140, 120, 0.6) 80%, transparent 95%)',
                  boxShadow: '0 0 8px 1px rgba(255, 230, 160, 0.6), 0 0 14px 2px rgba(220, 54, 39, 0.45)',
                  animation: 'riseBoundary 1200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
                  WebkitAnimation: 'riseBoundary 1200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
                }}
              />
            </div>
          )}

        </div>
      </div>

      {/* Embedded CSS Keyframes for Bottom-to-Top Fill and Rising Boundary Line */}
      <style>{`
        @keyframes riseFill {
          0% {
            clip-path: inset(100% 0 0 0);
            -webkit-clip-path: inset(100% 0 0 0);
          }
          100% {
            clip-path: inset(0% 0 0 0);
            -webkit-clip-path: inset(0% 0 0 0);
          }
        }
        @-webkit-keyframes riseFill {
          0% {
            -webkit-clip-path: inset(100% 0 0 0);
            clip-path: inset(100% 0 0 0);
          }
          100% {
            -webkit-clip-path: inset(0% 0 0 0);
            clip-path: inset(0% 0 0 0);
          }
        }
        @keyframes riseBoundary {
          0% {
            top: 100%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            top: 0%;
            opacity: 0;
          }
        }
        @-webkit-keyframes riseBoundary {
          0% {
            top: 100%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            top: 0%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;
