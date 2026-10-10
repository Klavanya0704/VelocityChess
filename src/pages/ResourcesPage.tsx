import React, { useState } from 'react';
import { BookOpen, Download, FileText, Sparkles, ChevronRight, Check } from 'lucide-react';
import { resourcesData } from '../data/mockData';

export const ResourcesPage: React.FC = () => {
  const [activeResId, setActiveResId] = useState(resourcesData[0].id);
  const [downloadedPdf, setDownloadedPdf] = useState<string | null>(null);

  const activeResource = resourcesData.find(r => r.id === activeResId) || resourcesData[0];

  const handleDownload = (id: string, title: string) => {
    setDownloadedPdf(id);
    setTimeout(() => setDownloadedPdf(null), 3000);
  };

  return (
    <div className="bg-[#FFF9EF] pt-24 sm:pt-28 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#E5A51B]" />
          <span>Academy Learning Hub</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4">
          Chess Guides, Tactics & Repertoires
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed">
          Free educational resources curated by Velocity Grandmasters to sharpen your board vision and strategic calculation.
        </p>
      </section>

      {/* Main Learning Hub Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Article Selectors */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#10264A] mb-2">Select Study Topic</h3>
            {resourcesData.map((res) => {
              const isSelected = res.id === activeResId;
              return (
                <div
                  key={res.id}
                  onClick={() => setActiveResId(res.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#10264A] text-white border-[#E5A51B] shadow-lg'
                      : 'bg-white text-[#10264A] border-[#E5A51B]/20 hover:border-[#E5A51B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#E5A51B] text-[#071A38]' : 'bg-[#FFF9EF] text-[#E5A51B] border border-[#E5A51B]/30'
                    }`}>
                      {res.category}
                    </span>
                    <span className="text-xs text-gray-400">{res.readTime}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base mb-1">{res.title}</h4>
                  <p className={`text-xs line-clamp-2 ${isSelected ? 'text-gray-300' : 'text-[#25334A]/70'}`}>
                    {res.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Article Viewer & Download Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-[#E5A51B]/25 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#F8F0E3] pb-4">
              <div>
                <span className="text-xs font-bold text-[#E5A51B] uppercase tracking-wider block">
                  Difficulty: {activeResource.difficulty} Track
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A] mt-1">
                  {activeResource.title}
                </h2>
              </div>

              <button
                onClick={() => handleDownload(activeResource.id, activeResource.title)}
                className="px-4 py-2 bg-[#F8F0E3] hover:bg-[#E5A51B] hover:text-[#071A38] text-[#10264A] border border-[#E5A51B]/30 rounded-full text-xs font-semibold flex items-center space-x-2 transition shrink-0"
              >
                {downloadedPdf === activeResource.id ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>PDF Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#E5A51B]" />
                    <span>Download PDF Guide</span>
                  </>
                )}
              </button>
            </div>

            {/* Article Content Render */}
            <div className="prose prose-navy max-w-none text-sm text-[#25334A] leading-relaxed space-y-4 font-sans">
              <p className="text-base font-medium text-[#10264A] bg-[#FFF9EF] p-4 rounded-xl border border-[#E5A51B]/20 italic">
                "{activeResource.summary}"
              </p>
              <div className="whitespace-pre-line text-sm leading-relaxed text-[#25334A]/90">
                {activeResource.content}
              </div>
            </div>

            {/* Practical Tip Box */}
            <div className="p-5 bg-[#10264A] text-white rounded-2xl border border-[#E5A51B]/30 flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-[#E5A51B] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm text-[#FFF9EF]">Velocity Grandmaster Tip</h4>
                <p className="text-xs text-gray-300 mt-0.5">
                  "Practice solving 10 tactical puzzles every morning before playing rapid clock games. Consistency builds instinctive board vision."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
