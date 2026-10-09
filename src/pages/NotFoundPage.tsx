import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF9EF] px-4 py-16 text-center">
      <div className="max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-[#E5A51B]/30 shadow-2xl space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#E5A51B]/15 border border-[#E5A51B]/40 text-[#E5A51B] flex items-center justify-center mx-auto">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 22H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM17 14c0-2.2-1.8-4-4-4h-1c0-1.1-.9-2-2-2V7c0-1.1.9-2 2-2h1c.6 0 1-.4 1-1s-.4-1-1-1h-3c-2.2 0-4 1.8-4 4v3c0 1.1.9 2 2 2h1c1.1 0 2 .9 2 2v1h6v-1z" />
          </svg>
        </div>

        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] block">
          404 — Tactical Blunder!
        </span>

        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#10264A]">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#25334A]/80 leading-relaxed">
          It looks like this square doesn't exist on the board. Let's get you back to the home file.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs shadow-md transition"
          >
            <Home className="w-4 h-4 text-[#E5A51B]" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
