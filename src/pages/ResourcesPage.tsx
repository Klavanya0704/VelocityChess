import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Download,
  FileText,
  Video,
  Sparkles,
  ChevronRight,
  Check,
  Play,
  Award,
  Clock,
  Layers,
  X,
  Printer,
  Search,
  ExternalLink
} from 'lucide-react';
import { resourcesData } from '../data/mockData';

// Extended study materials data
const studyMaterialsData = [
  {
    id: 'mat-1',
    title: 'Official FIDE Tournament Scoresheet',
    category: 'Tournament Form',
    format: 'Printable PDF',
    pages: '2 Pages',
    size: '420 KB',
    difficulty: 'All Levels',
    description: 'Official double-column 60-move scoresheet used in FIDE rated classical events. Includes move counters, clock time records, and player signature sections.',
    previewPoints: [
      'Standard 60-move notation grid',
      'Time spent tracking per move',
      'Player FIDE ID and signature validation',
      'Compact printable A4 format'
    ]
  },
  {
    id: 'mat-2',
    title: '50 Essential Checkmate-in-2 Tactical Worksheets',
    category: 'Tactics Worksheet',
    format: 'Printable PDF',
    pages: '12 Pages',
    size: '2.4 MB',
    difficulty: 'Beginner & Intermediate',
    description: 'Curated diagram worksheet featuring 50 critical checkmate combinations. Designed for daily 15-minute tactical training with a complete solution key.',
    previewPoints: [
      '50 curated tactical positions',
      'Back-rank, corridor, and smothered mates',
      'Time target tracker for speed drills',
      'Comprehensive step-by-step solution index'
    ]
  },
  {
    id: 'mat-3',
    title: 'Algebraic Chess Notation Mastery Guide',
    category: 'Fundamentals',
    format: 'Study Guide PDF',
    pages: '4 Pages',
    size: '850 KB',
    difficulty: 'Beginner',
    description: 'A beginner-friendly visual guide to reading and recording algebraic notation, pawn captures, castling symbols, en passant, and common evaluation marks.',
    previewPoints: [
      'Board coordinate grid reference (a1-h8)',
      'Piece abbreviation conventions (K, Q, R, B, N)',
      'Special move annotations (O-O, O-O-O, e.p., =Q)',
      '10 practice recording exercises'
    ]
  },
  {
    id: 'mat-4',
    title: 'The Complete 1.e4 Opening Repertoire Cheat Sheet',
    category: 'Opening Notes',
    format: 'Reference Sheet',
    pages: '8 Pages',
    size: '1.8 MB',
    difficulty: 'Intermediate',
    description: 'High-level visual move trees covering White responses to the Open Game (1...e5), Sicilian Defense, French Defense, and Caro-Kann with key positional ideas.',
    previewPoints: [
      'Visual branching move decision trees',
      'Pawn structure plans for each major defense',
      'Critical pawn breaks (d4, f4, c3)',
      'Anti-Sicilian shortcut recommendations'
    ]
  },
  {
    id: 'mat-5',
    title: '100 Key Endgame Positions Quick Reference Guide',
    category: 'Endgame Sheet',
    format: 'Reference Sheet',
    pages: '6 Pages',
    size: '1.5 MB',
    difficulty: 'Intermediate & Advanced',
    description: 'Essential endgame benchmarks: Lucena position, Philidor defense, Vancura defense, King & Pawn opposition rules, and pawn triangulation patterns.',
    previewPoints: [
      'Lucena bridge-building step-by-step',
      'Philidor 3rd rank defense technique',
      'Rule of the square quick calculation',
      'Opposition & outflanking principles'
    ]
  },
  {
    id: 'mat-6',
    title: 'Weekly Tournament Preparation & Blunder Checklist',
    category: 'Tournament Prep',
    format: 'Pocket Guide',
    pages: '3 Pages',
    size: '620 KB',
    difficulty: 'All Levels',
    description: 'Pre-round psychological routines, board safety mental checklist ("Checks, Captures, Threats"), and time management rules for tournament competitors.',
    previewPoints: [
      'Pre-move safety verification routine',
      'Managing time trouble under 5 minutes',
      'Handling post-loss emotional reset',
      'Nutrition & focus tips between rounds'
    ]
  }
];

// Video lessons and analysis data
const videoLessonsData = [
  {
    id: 'vid-1',
    title: 'Kasparov vs. Topalov (1999) — "The Pearl of Wijk aan Zee"',
    category: 'Master Game Analysis',
    duration: '24:18',
    instructor: 'GM Senior Coach',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
    description: 'Deep analytical breakdown of Garry Kasparov legendary rook sacrifice on d7. Discover how intuitive calculation and piece coordination overwhelm active defenses.',
    highlights: [
      'Sacrifice on d7: intuitive intuition vs calculation',
      'Forcing king pursuit into the enemy territory',
      'Flawless king triangulation in the finale'
    ]
  },
  {
    id: 'vid-2',
    title: 'Mastering the Lucena Position in Rook Endgames',
    category: 'Endgame Technique',
    duration: '16:45',
    instructor: 'IM Head Trainer',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800',
    description: 'Learn the universal technique for converting rook and pawn vs rook endgames. Clear step-by-step guidance on cutting off the enemy king and building the winning bridge.',
    highlights: [
      'Cutting off the defending king by one file',
      'Placing the rook on the 4th rank',
      'Shielding checks with the bridge maneuver'
    ]
  },
  {
    id: 'vid-3',
    title: 'Positional Mastery: Creating & Exploiting Outposts',
    category: 'Strategy & Planning',
    duration: '21:10',
    instructor: 'FIDE Senior Trainer',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800',
    description: 'How Grandmasters identify weak squares in the opponent camp and transform them into unassailable knight outposts to control the entire board.',
    highlights: [
      'Identifying holes created by premature pawn pushes',
      'Maneuvering knights via auxiliary squares (Nd2-f1-e3-d5)',
      'Trading off the opponent defending minor pieces'
    ]
  },
  {
    id: 'vid-4',
    title: 'How to Calculate 5 Moves Ahead Without Board Fatigue',
    category: 'Calculation Methods',
    duration: '19:35',
    instructor: 'FIDE Trainer',
    level: 'All Levels',
    thumbnail: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800',
    description: 'Practical calculation trees taught at Velocity Academy. Learn candidate move selection, forcing check sequences, and eliminating tactical hallucinations.',
    highlights: [
      'Candidate move brainstorming (CCT protocol)',
      'Visualizing the empty squares after piece movement',
      'Quiet intermediate moves (Zwischenzug)'
    ]
  },
  {
    id: 'vid-5',
    title: 'Punishing Common Opening Traps in 1.e4',
    category: 'Openings',
    duration: '18:20',
    instructor: 'FIDE Master',
    level: 'Beginner & Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800',
    description: 'Refuting aggressive beginner traps including the Fried Liver Attack, Stafford Gambit, and Scholar Mate while developing rapid central supremacy.',
    highlights: [
      'Neutralizing early queen adventures',
      'Trapping overextended knights on g5',
      'Solid counter-development with d5 pawn breaks'
    ]
  },
  {
    id: 'vid-6',
    title: 'Magnus Carlsen Squeeze Technique in Equal Endgames',
    category: 'Master Game Analysis',
    duration: '28:05',
    instructor: 'GM Guest Lecturer',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=800',
    description: 'Study how the World Champion converts symmetrical, seemingly drawn positions into crushing victories through relentless piece pressure and patience.',
    highlights: [
      'The principle of two weaknesses in endgames',
      'Improving piece positions without conceding counterplay',
      'Pawn structure fixing on the opposite wing'
    ]
  }
];

export const ResourcesPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  // Active Category Tab: 'guides' | 'materials' | 'videos'
  const activeTab = category === 'materials' ? 'materials' : category === 'videos' ? 'videos' : 'guides';

  const [activeResId, setActiveResId] = useState(resourcesData[0].id);
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<typeof videoLessonsData[0] | null>(null);

  // Sync route param changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  const activeResource = resourcesData.find((r) => r.id === activeResId) || resourcesData[0];

  const handleDownload = (id: string) => {
    setDownloadedItem(id);
    setTimeout(() => setDownloadedItem(null), 3000);
  };

  const tabs = [
    {
      id: 'guides',
      name: 'Chess Guides & Tactics',
      path: '/resources/guides',
      icon: BookOpen,
      badge: '01',
      description: 'Opening repertoires, tactical patterns & endgame studies'
    },
    {
      id: 'materials',
      name: 'Study Materials',
      path: '/resources/materials',
      icon: FileText,
      badge: '02',
      description: 'Printable worksheets, FIDE score sheets & notation charts'
    },
    {
      id: 'videos',
      name: 'Videos & Game Analysis',
      path: '/resources/videos',
      icon: Video,
      badge: '03',
      description: 'Masterclass video lectures, game breakdowns & strategy reviews'
    }
  ];

  return (
    <div className="bg-[#FFF9EF] pt-24 sm:pt-28 pb-16 min-h-screen">
      
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#F2A000]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264B] shadow-sm mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#F2A000]" />
          <span>Velocity Learning Academy</span>
        </div>

        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#10264B] mb-4 tracking-tight">
          {activeTab === 'guides' && 'Chess Guides, Tactics & Repertoires'}
          {activeTab === 'materials' && 'Downloadable Study Materials & Worksheets'}
          {activeTab === 'videos' && 'Grandmaster Video Lessons & Game Analysis'}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed font-sans">
          {activeTab === 'guides' &&
            'Curated educational resources and structured master-level guides to sharpen your tactical vision, opening mastery, and endgame calculation.'}
          {activeTab === 'materials' &&
            'Official printable FIDE scoresheets, tactical puzzle sheets, algebraic notation drills, and preparation checklists for competitive training.'}
          {activeTab === 'videos' &&
            'In-depth masterclass video lectures, tournament analysis, and positional breakdowns taught by Velocity Grandmasters and Senior Trainers.'}
        </p>

        {/* 2. TAB SELECTOR BAR */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#F2A000]/30 shadow-md">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => navigate(tab.path)}
                  className={`relative flex items-center justify-center space-x-2.5 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] shadow-md scale-[1.02]'
                      : 'text-[#10264B]/75 hover:text-[#10264B] hover:bg-[#FFEED4]/50'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-serif ${
                      isActive ? 'bg-[#10264B] text-[#FFF9EF]' : 'bg-[#FFF9EF] text-[#F2A000] border border-[#F2A000]/40'
                    }`}
                  >
                    {tab.badge}
                  </span>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT AREA BASED ON ACTIVE TAB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* ================= TAB 1: CHESS GUIDES & TACTICS ================= */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Topic Selectors */}
            <div className="lg:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between px-1">
                <h3 className="font-serif font-bold text-lg text-[#10264B]">Select Study Guide</h3>
                <span className="text-xs text-[#25334A]/60 font-medium">3 Topics Available</span>
              </div>

              {resourcesData.map((res) => {
                const isSelected = res.id === activeResId;
                return (
                  <div
                    key={res.id}
                    onClick={() => setActiveResId(res.id)}
                    className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                      isSelected
                        ? 'bg-[#10264B] text-white border-[#F2A000] shadow-lg scale-[1.01]'
                        : 'bg-white text-[#10264B] border-[#F2A000]/25 hover:border-[#F2A000] hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-[#F2A000] text-[#10264B]'
                            : 'bg-[#FFF9EF] text-[#D98A00] border border-[#F2A000]/30'
                        }`}
                      >
                        {res.category}
                      </span>
                      <span className={`text-xs ${isSelected ? 'text-gray-300' : 'text-gray-400'}`}>
                        {res.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base mb-1.5 leading-snug">{res.title}</h4>
                    <p className={`text-xs line-clamp-2 ${isSelected ? 'text-gray-300' : 'text-[#25334A]/70'}`}>
                      {res.summary}
                    </p>
                  </div>
                );
              })}

              {/* Bonus Academy Tip Box */}
              <div className="p-5 bg-gradient-to-br from-[#FFEED4] to-[#FFF9EF] rounded-2xl border border-[#F2A000]/40 shadow-xs">
                <div className="flex items-center space-x-2 text-[#D98A00] mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="font-serif font-bold text-sm text-[#10264B]">Study Recommendation</h4>
                </div>
                <p className="text-xs text-[#25334A]/85 leading-relaxed font-sans">
                  "Solve tactical exercises without moving physical pieces. Enforce full visualization through the final checkmate before recording your move."
                </p>
              </div>
            </div>

            {/* Right Article Viewer & Download Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F2A000]/30 shadow-xl space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F2A000]/20 pb-5">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D98A00] uppercase tracking-wider">
                    <span>Track: {activeResource.difficulty} Level</span>
                    <span>•</span>
                    <span>{activeResource.readTime}</span>
                  </div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264B] mt-1 leading-snug">
                    {activeResource.title}
                  </h2>
                </div>

                <button
                  onClick={() => handleDownload(activeResource.id)}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] hover:shadow-lg rounded-full text-xs font-extrabold flex items-center justify-center space-x-2 transition shrink-0 border border-white/60 active:scale-95"
                >
                  {downloadedItem === activeResource.id ? (
                    <>
                      <Check className="w-4 h-4 text-green-700" />
                      <span>PDF Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#10264B]" />
                      <span>Download PDF Guide</span>
                    </>
                  )}
                </button>
              </div>

              {/* Article Content Render */}
              <div className="prose prose-navy max-w-none text-sm text-[#25334A] leading-relaxed space-y-4 font-sans text-left">
                <p className="text-sm sm:text-base font-medium text-[#10264B] bg-[#FFF9EF] p-4 rounded-xl border border-[#F2A000]/25 italic">
                  "{activeResource.summary}"
                </p>
                <div className="whitespace-pre-line text-sm sm:text-[15px] leading-relaxed text-[#25334A]/90 space-y-2">
                  {activeResource.content}
                </div>
              </div>

              {/* Practical Tip Box */}
              <div className="p-5 bg-[#10264B] text-white rounded-2xl border border-[#F2A000]/40 flex items-start space-x-3.5 text-left">
                <Sparkles className="w-5 h-5 text-[#F2A000] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#FFF9EF]">Velocity Grandmaster Advice</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    "Practice 15 minutes of tactical calculation daily before rapid clock games. Consistent pattern recognition builds instinctive board mastery."
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================= TAB 2: STUDY MATERIALS & WORKSHEETS ================= */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            
            {/* Introductory Strip */}
            <div className="bg-white rounded-2xl p-5 border border-[#F2A000]/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#10264B]">
                  Official Academy Study Worksheets & Score Sheets
                </h3>
                <p className="text-xs sm:text-sm text-[#25334A]/75 mt-0.5">
                  High-resolution printable PDF downloads ready for home training, academy practice, and tournament match preparation.
                </p>
              </div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D98A00] bg-[#FFF9EF] px-3.5 py-1.5 rounded-full border border-[#F2A000]/30 shrink-0">
                <Printer className="w-4 h-4 text-[#F2A000]" />
                <span>Print-Ready PDFs</span>
              </div>
            </div>

            {/* Grid of Downloadable Materials Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyMaterialsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-[#F2A000]/30 shadow-md hover:shadow-xl hover:border-[#F2A000] transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div className="space-y-3">
                    
                    {/* Header Badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FFF9EF] text-[#D98A00] border border-[#F2A000]/35">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {item.pages} • {item.size}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-extrabold text-lg text-[#10264B] leading-snug group-hover:text-[#D98A00] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#25334A]/80 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Feature Bullets */}
                    <div className="pt-2 border-t border-[#F2A000]/15 space-y-1.5">
                      {item.previewPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-[11px] text-[#25334A]/85">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F2A000] shrink-0" />
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Download Action Button */}
                  <div className="pt-5 mt-4 border-t border-[#F2A000]/20">
                    <button
                      onClick={() => handleDownload(item.id)}
                      className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-extrabold text-xs flex items-center justify-center space-x-2 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-white/60"
                    >
                      {downloadedItem === item.id ? (
                        <>
                          <Check className="w-4 h-4 text-green-700" />
                          <span>PDF Downloaded!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-[#10264B]" />
                          <span>Download {item.format}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================= TAB 3: VIDEOS & GAME ANALYSIS ================= */}
        {activeTab === 'videos' && (
          <div className="space-y-6">
            
            {/* Introductory Strip */}
            <div className="bg-white rounded-2xl p-5 border border-[#F2A000]/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#10264B]">
                  Grandmaster Video Lessons & Interactive Analysis
                </h3>
                <p className="text-xs sm:text-sm text-[#25334A]/75 mt-0.5">
                  Exclusive tactical breakdowns, historical world championship reviews, and endgame masterclasses by Velocity Academy coaches.
                </p>
              </div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D98A00] bg-[#FFF9EF] px-3.5 py-1.5 rounded-full border border-[#F2A000]/30 shrink-0">
                <Video className="w-4 h-4 text-[#F2A000]" />
                <span>6 Masterclass Lessons</span>
              </div>
            </div>

            {/* Grid of Video Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoLessonsData.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#F2A000]/30 shadow-md hover:shadow-xl hover:border-[#F2A000] transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* Video Thumbnail with Play Button Overlay */}
                    <div
                      onClick={() => setActiveVideoModal(vid)}
                      className="relative aspect-video overflow-hidden cursor-pointer bg-[#10264B]"
                    >
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Floating Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFE8AB] to-[#F2A000] text-[#10264B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 text-white text-[10px] font-bold flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-[#F2A000]" />
                        <span>{vid.duration}</span>
                      </div>

                      {/* Level Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#10264B]/85 text-[#FFEED4] border border-[#F2A000]/40 text-[10px] font-extrabold uppercase">
                        {vid.level}
                      </div>
                    </div>

                    {/* Video Info Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-[#D98A00] font-bold uppercase">
                        <span>{vid.category}</span>
                        <span className="text-gray-400 normal-case font-medium">{vid.instructor}</span>
                      </div>

                      <h3
                        onClick={() => setActiveVideoModal(vid)}
                        className="font-serif font-extrabold text-base text-[#10264B] leading-snug group-hover:text-[#D98A00] transition-colors cursor-pointer"
                      >
                        {vid.title}
                      </h3>

                      <p className="text-xs text-[#25334A]/80 leading-relaxed line-clamp-2">
                        {vid.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="px-5 pb-5 pt-1">
                    <button
                      onClick={() => setActiveVideoModal(vid)}
                      className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-extrabold text-xs flex items-center justify-center space-x-2 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-white/60"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Lesson Analysis</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* 4. MODAL FOR VIDEO ANALYSIS PREVIEW */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
          <div className="relative w-full max-w-3xl bg-[#10264B] text-white rounded-3xl border border-[#F2A000]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 hover:bg-black/75 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Banner Screen */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center overflow-hidden">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10264B] via-transparent to-black/50" />

              <div className="relative z-10 text-center px-6 space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFE8AB] to-[#F2A000] text-[#10264B] shadow-xl hover:scale-110 transition cursor-pointer">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white max-w-xl mx-auto leading-snug">
                  {activeVideoModal.title}
                </h3>
                <div className="inline-flex items-center space-x-3 text-xs text-[#FFEED4]">
                  <span>{activeVideoModal.instructor}</span>
                  <span>•</span>
                  <span>Duration: {activeVideoModal.duration}</span>
                  <span>•</span>
                  <span>{activeVideoModal.level}</span>
                </div>
              </div>
            </div>

            {/* Video Takeaways & Notes */}
            <div className="p-6 sm:p-7 bg-[#0B1B36] space-y-4 text-left border-t border-[#F2A000]/25">
              <div className="flex items-center space-x-2 text-[#F2A000] text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Core Tactical Takeaways</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeVideoModal.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
                    <span className="font-bold text-[#F2A000] block mb-1">Point 0{idx + 1}</span>
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-300 leading-relaxed pt-2">
                {activeVideoModal.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ResourcesPage;
