import React, { useState } from 'react';
import { X, CheckCircle, Send, Crown, Sparkles } from 'lucide-react';
import { programsData } from '../../data/mockData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, defaultProgramId }) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(defaultProgramId || programsData[0].id);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg bg-[#FFF9EF] rounded-3xl border border-[#E5A51B]/30 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="px-6 py-5 bg-[#10264A] text-white flex items-center justify-between border-b border-[#E5A51B]/20">
          <div className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-[#E5A51B]" />
            <h3 className="font-serif text-xl font-bold">Enroll at Velocity Chess</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#E5A51B]/20 text-[#E5A51B] border border-[#E5A51B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#10264A]">Application Received!</h4>
            <p className="text-sm text-[#25334A]/80 leading-relaxed">
              Thank you, <span className="font-semibold text-[#10264A]">{parentName || studentName}</span>. Our admissions team will contact you within 24 hours to schedule a complimentary chess assessment session.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-medium text-sm transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#10264A] uppercase tracking-wider mb-1">Select Program</label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-[#E5A51B]/30 rounded-xl text-sm text-[#10264A] focus:outline-none focus:border-[#E5A51B]"
                required
              >
                {programsData.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({p.ageGroup})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#10264A] uppercase tracking-wider mb-1">Student Name</label>
                <input
                  type="text"
                  placeholder="e.g. Master Aditya"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-[#E5A51B]/20 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#10264A] uppercase tracking-wider mb-1">Parent / Guardian</label>
                <input
                  type="text"
                  placeholder="Parent Name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-[#E5A51B]/20 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#10264A] uppercase tracking-wider mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-[#E5A51B]/20 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#10264A] uppercase tracking-wider mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-[#E5A51B]/20 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                  required
                />
              </div>
            </div>

            <div className="p-3 bg-[#F8F0E3] rounded-xl flex items-center gap-2 text-xs text-[#10264A]">
              <Sparkles className="w-4 h-4 text-[#E5A51B] shrink-0" />
              <span>Includes 1 Free Assessment Session & Skill Evaluation by Senior Master Coach.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#10264A]/20 transition"
              >
                <span>Submit Enrollment Application</span>
                <Send className="w-4 h-4 text-[#E5A51B]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
