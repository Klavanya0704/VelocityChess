import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, GraduationCap, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FFF9EF] px-4 pt-28 pb-16 text-center">
      <SEO
        title="Page Not Found (404) | Velocity Chess Academy"
        description="The square or page you requested does not exist on our board. Return to Velocity Chess Academy homepage or explore our coaching programs."
      />

      <div className="max-w-lg w-full bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-[#E5A51B]/40 shadow-2xl space-y-6">
        
        {/* Chess Knight / 404 Emblem */}
        <div className="w-20 h-20 rounded-full bg-[#FFF5E5] border-2 border-[#E5A51B] text-[#D98A00] flex items-center justify-center mx-auto shadow-md">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 22H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM17 14c0-2.2-1.8-4-4-4h-1c0-1.1-.9-2-2-2V7c0-1.1.9-2 2-2h1c.6 0 1-.4 1-1s-.4-1-1-1h-3c-2.2 0-4 1.8-4 4v3c0 1.1.9 2 2 2h1c1.1 0 2 .9 2 2v1h6v-1z" />
          </svg>
        </div>

        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D98A00] bg-[#FFF5E5] px-4 py-1.5 rounded-full border border-[#E5A51B]/40 inline-block">
          404 — Tactical Blunder!
        </span>

        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264A] leading-tight">
          Square Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#25334A]/80 leading-relaxed font-sans max-w-sm mx-auto">
          It looks like this move landed off the board. Let&apos;s get you back to the home file or onto a winning track.
        </p>

        {/* Navigation Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-bold text-xs shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#E5A51B]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white hover:bg-[#FFF9EF] text-[#10264A] border border-[#E5A51B]/60 rounded-full font-bold text-xs shadow-sm transition cursor-pointer"
          >
            <GraduationCap className="w-4 h-4 text-[#D98A00]" />
            <span>Explore Programs</span>
          </Link>
        </div>

        {/* Helpline */}
        <div className="pt-2 border-t border-[#E5A51B]/20 text-[11px] text-[#25334A]/70 flex items-center justify-center space-x-1.5">
          <Phone className="w-3.5 h-3.5 text-[#D98A00]" />
          <span>Need help? Call admissions:</span>
          <a href="tel:+919876543210" className="font-bold text-[#10264A] hover:text-[#D98A00] underline">
            +91 98765 43210
          </a>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
