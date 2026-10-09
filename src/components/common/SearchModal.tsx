import React, { useState } from 'react';
import { Search, X, Trophy, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { programsData, achievementsData, eventsData, resourcesData } from '../../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredPrograms = programsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAchievements = achievementsData.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) || a.winnerName.toLowerCase().includes(query.toLowerCase()) || a.tournament.toLowerCase().includes(query.toLowerCase())
  );

  const filteredEvents = eventsData.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase()) || e.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredResources = resourcesData.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) || r.summary.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#FFF9EF] rounded-3xl border border-[#E5A51B]/30 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header Search Bar */}
        <div className="flex items-center px-6 py-4 border-b border-[#F8F0E3] bg-white">
          <Search className="w-5 h-5 text-[#E5A51B] mr-3" />
          <input
            type="text"
            placeholder="Search programs, achievements, events, tactics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-lg bg-transparent text-[#10264A] placeholder-[#25334A]/50 focus:outline-none font-sans"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 text-[#25334A]/60 hover:text-[#10264A] rounded-full hover:bg-[#F8F0E3] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-[#25334A]/70">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#E5A51B] mb-2">Quick Shortcuts</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <button onClick={() => handleSelect('/programs')} className="px-4 py-2 bg-white rounded-full border border-[#E5A51B]/20 text-sm font-medium hover:border-[#E5A51B] hover:text-[#10264A]">Explore Programs</button>
                <button onClick={() => handleSelect('/achievements')} className="px-4 py-2 bg-white rounded-full border border-[#E5A51B]/20 text-sm font-medium hover:border-[#E5A51B] hover:text-[#10264A]">State Champion 2025</button>
                <button onClick={() => handleSelect('/resources')} className="px-4 py-2 bg-white rounded-full border border-[#E5A51B]/20 text-sm font-medium hover:border-[#E5A51B] hover:text-[#10264A]">Opening Guides</button>
                <button onClick={() => handleSelect('/contact')} className="px-4 py-2 bg-white rounded-full border border-[#E5A51B]/20 text-sm font-medium hover:border-[#E5A51B] hover:text-[#10264A]">Enroll Now</button>
              </div>
            </div>
          ) : (
            <>
              {/* Programs */}
              {filteredPrograms.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5A51B] mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Programs ({filteredPrograms.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredPrograms.map(p => (
                      <div
                        key={p.id}
                        onClick={() => handleSelect('/programs')}
                        className="p-3 bg-white hover:bg-[#F8F0E3] rounded-xl border border-[#E5A51B]/10 cursor-pointer flex items-center justify-between transition"
                      >
                        <div>
                          <p className="font-semibold text-[#10264A] text-sm">{p.title}</p>
                          <p className="text-xs text-[#25334A]/70">{p.ageGroup} · {p.level}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {filteredAchievements.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5A51B] mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Achievements ({filteredAchievements.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredAchievements.map(a => (
                      <div
                        key={a.id}
                        onClick={() => handleSelect('/achievements')}
                        className="p-3 bg-white hover:bg-[#F8F0E3] rounded-xl border border-[#E5A51B]/10 cursor-pointer flex items-center justify-between transition"
                      >
                        <div>
                          <p className="font-semibold text-[#10264A] text-sm">{a.title} — {a.winnerName}</p>
                          <p className="text-xs text-[#25334A]/70">{a.tournament}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {filteredEvents.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5A51B] mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Events ({filteredEvents.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredEvents.map(e => (
                      <div
                        key={e.id}
                        onClick={() => handleSelect('/events')}
                        className="p-3 bg-white hover:bg-[#F8F0E3] rounded-xl border border-[#E5A51B]/10 cursor-pointer flex items-center justify-between transition"
                      >
                        <div>
                          <p className="font-semibold text-[#10264A] text-sm">{e.title}</p>
                          <p className="text-xs text-[#25334A]/70">{e.date} · {e.location}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources */}
              {filteredResources.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5A51B] mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Learning Resources ({filteredResources.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredResources.map(r => (
                      <div
                        key={r.id}
                        onClick={() => handleSelect('/resources')}
                        className="p-3 bg-white hover:bg-[#F8F0E3] rounded-xl border border-[#E5A51B]/10 cursor-pointer flex items-center justify-between transition"
                      >
                        <div>
                          <p className="font-semibold text-[#10264A] text-sm">{r.title}</p>
                          <p className="text-xs text-[#25334A]/70">{r.category} · {r.readTime}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredPrograms.length === 0 && filteredAchievements.length === 0 && filteredEvents.length === 0 && filteredResources.length === 0 && (
                <div className="text-center py-8 text-[#25334A]/60">
                  <p>No results found for "{query}". Try searching for "champion", "beginner", "tactics", or "tournaments".</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
