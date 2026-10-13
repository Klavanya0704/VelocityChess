import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle,
  Send,
  Loader2,
  BookOpen,
  User,
  Users,
  Mail,
  Phone,
  ChevronDown,
  Star,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { programsData } from '../../data/mockData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

interface FormErrors {
  studentName?: string;
  parentName?: string;
  email?: string;
  phone?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultProgramId
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(defaultProgramId || programsData[0].id);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync defaultProgramId when modal opens
  useEffect(() => {
    if (defaultProgramId) {
      setSelectedProgram(defaultProgramId);
    }
  }, [defaultProgramId, isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!studentName.trim()) {
      newErrors.studentName = 'Please enter the student name';
    }

    if (!parentName.trim()) {
      newErrors.parentName = 'Please enter parent / guardian name';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Phone number must contain at least 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200 overflow-y-auto"
      onClick={handleReset}
    >
      {/* MODAL WRAPPER (allowing decorative chess pieces to overflow naturally) */}
      <div className="relative w-full max-w-xl sm:max-w-2xl my-auto">

        {/* TOP-LEFT 3D GOLDEN CHESS PIECE DECORATION */}
        <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 pointer-events-none z-30 w-32 sm:w-40 select-none drop-shadow-xl">
          <img
            src="/assets/modal_chess_tl_clean.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* BOTTOM-RIGHT 3D GOLDEN CHESS PIECE DECORATION */}
        <div className="absolute -bottom-5 -right-4 sm:-bottom-7 sm:-right-6 pointer-events-none z-30 w-28 sm:w-36 select-none drop-shadow-xl">
          <img
            src="/assets/modal_chess_br_clean.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* MAIN MODAL CARD */}
        <div
          className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFFBF2] to-[#FFF6E5] rounded-[32px] sm:rounded-[36px] border-[2.5px] border-[#F2A000]/80 shadow-[0_25px_60px_-15px_rgba(7,26,56,0.6),0_0_35px_rgba(242,160,0,0.2)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Inner Golden Bevel Highlight Border */}
          <div className="absolute inset-0 rounded-[30px] sm:rounded-[34px] border border-[#FFE8AB]/60 pointer-events-none z-10" />

          {/* Top-Right Decorative Ribbon Curve Overlay */}
          <div className="absolute top-0 right-0 w-44 sm:w-56 h-36 sm:h-44 pointer-events-none z-10 overflow-hidden">
            <svg
              className="w-full h-full text-[#F2A000]"
              viewBox="0 0 200 160"
              fill="none"
            >
              <path
                d="M 20 0 C 80 15, 140 60, 200 130 L 200 0 Z"
                fill="url(#goldGradientTR)"
                opacity="0.08"
              />
              <path
                d="M 40 0 C 95 20, 150 70, 200 145"
                stroke="url(#goldStrokeTR)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 65 0 C 115 25, 165 75, 200 120"
                stroke="url(#goldStrokeTR)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <defs>
                <linearGradient id="goldGradientTR" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF3D6" />
                  <stop offset="100%" stopColor="#E99A00" />
                </linearGradient>
                <linearGradient id="goldStrokeTR" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE29A" />
                  <stop offset="50%" stopColor="#F2A000" />
                  <stop offset="100%" stopColor="#D98A00" />
                </linearGradient>
              </defs>
            </svg>
            {/* Sparkle near top right */}
            <span className="absolute top-10 right-12 text-[#E99A00] text-sm animate-pulse">✦</span>
          </div>

          {/* Bottom-Left Decorative Ribbon Curve Overlay */}
          <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-28 sm:h-36 pointer-events-none z-10 overflow-hidden">
            <svg
              className="w-full h-full text-[#F2A000]"
              viewBox="0 0 160 120"
              fill="none"
            >
              <path
                d="M 0 100 C 50 95, 110 70, 160 0 L 0 0 Z"
                fill="url(#goldGradientBL)"
                opacity="0.08"
              />
              <path
                d="M 0 110 C 60 100, 110 65, 150 10"
                stroke="url(#goldStrokeBL)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="goldGradientBL" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E99A00" />
                  <stop offset="100%" stopColor="#FFF3D6" />
                </linearGradient>
                <linearGradient id="goldStrokeBL" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D98A00" />
                  <stop offset="50%" stopColor="#F2A000" />
                  <stop offset="100%" stopColor="#FFE29A" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Circular Close Button (X) */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-xs border border-[#F2A000]/50 shadow-md flex items-center justify-center text-[#10264B] hover:text-[#D98A00] hover:scale-105 hover:border-[#D98A00] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Header */}
          <div className="text-center pt-6 sm:pt-7 pb-2 px-6 sm:px-14 relative z-20">
            {/* Center Crown with gold horizontal lines */}
            <div className="flex items-center justify-center space-x-3 mb-1.5">
              <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#F2A000]" />
              <img
                src="/assets/modal_crown_clean.png"
                alt=""
                className="h-6 sm:h-7 object-contain inline-block"
              />
              <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#F2A000]" />
            </div>

            <h3
              id="enrollment-modal-title"
              className="font-serif font-extrabold text-2xl sm:text-3xl text-[#10264B] tracking-tight leading-tight"
            >
              Enroll at Velocity Chess
            </h3>
            <p className="text-xs sm:text-[13px] text-[#25334A]/80 font-medium max-w-md mx-auto mt-1 leading-relaxed">
              Begin your child's journey towards strategic thinking, confidence, and a brighter future.
            </p>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto px-5 sm:px-10 pb-6 sm:pb-8 pt-2 relative z-20">
            {submitted ? (
              <div role="status" aria-live="polite" className="py-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] text-[#10264B] border-2 border-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-9 h-9 text-[#10264B]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#10264A]">
                  Application Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#25334A]/85 leading-relaxed max-w-sm mx-auto font-medium">
                  Thank you, <strong className="text-[#10264A]">{parentName}</strong>. We have logged the enrollment application for <strong className="text-[#10264A]">{studentName}</strong>. Our admissions office will contact you via phone (<span className="lining-nums font-semibold">{phone}</span>) within 24 hours to schedule your complimentary chess evaluation session.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-serif font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition cursor-pointer"
                  >
                    Done &amp; Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5 text-left font-sans">
                
                {errorMessage && (
                  <div role="alert" className="p-3 bg-red-50 border border-red-300 text-red-700 rounded-xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Selected Coaching Program */}
                <div>
                  <label htmlFor="modal-program" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                    Selected Coaching Program <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E5A51B]">
                      <BookOpen className="w-4 h-4 text-[#E5A51B]" />
                    </div>
                    <select
                      id="modal-program"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 bg-[#FFFDF9] border border-[#F2A000]/70 rounded-xl text-xs sm:text-sm text-[#10264A] font-medium shadow-2xs focus:outline-none focus:border-[#E5A51B] focus:ring-1 focus:ring-[#E5A51B] transition appearance-none cursor-pointer"
                    >
                      {programsData.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.ageGroup})
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#10264A]">
                      <ChevronDown className="w-4 h-4 text-[#10264A]" />
                    </div>
                  </div>
                </div>

                {/* Student Name & Parent Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-student-name" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                      Student Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E5A51B]">
                        <User className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                      <input
                        id="modal-student-name"
                        type="text"
                        placeholder="e.g. Master Aditya"
                        value={studentName}
                        onChange={(e) => {
                          setStudentName(e.target.value);
                          if (errors.studentName) setErrors({ ...errors, studentName: undefined });
                        }}
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-xs sm:text-sm text-[#10264A] placeholder-[#8A99AD] shadow-2xs focus:outline-none transition ${
                          errors.studentName
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-[#F2A000]/70 focus:border-[#E5A51B] focus:ring-1 focus:ring-[#E5A51B]'
                        }`}
                      />
                    </div>
                    {errors.studentName && (
                      <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.studentName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="modal-parent-name" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                      Parent / Guardian <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E5A51B]">
                        <Users className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                      <input
                        id="modal-parent-name"
                        type="text"
                        placeholder="e.g. Ramesh Varma"
                        value={parentName}
                        onChange={(e) => {
                          setParentName(e.target.value);
                          if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                        }}
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-xs sm:text-sm text-[#10264A] placeholder-[#8A99AD] shadow-2xs focus:outline-none transition ${
                          errors.parentName
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-[#F2A000]/70 focus:border-[#E5A51B] focus:ring-1 focus:ring-[#E5A51B]'
                        }`}
                      />
                    </div>
                    {errors.parentName && (
                      <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.parentName}</p>
                    )}
                  </div>
                </div>

                {/* Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-email" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E5A51B]">
                        <Mail className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                      <input
                        id="modal-email"
                        type="email"
                        placeholder="parent@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-xs sm:text-sm text-[#10264A] placeholder-[#8A99AD] shadow-2xs focus:outline-none transition ${
                          errors.email
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-[#F2A000]/70 focus:border-[#E5A51B] focus:ring-1 focus:ring-[#E5A51B]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E5A51B]">
                        <Phone className="w-4 h-4 text-[#E5A51B]" />
                      </div>
                      <input
                        id="modal-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-xs sm:text-sm text-[#10264A] placeholder-[#8A99AD] shadow-2xs focus:outline-none transition ${
                          errors.phone
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-[#F2A000]/70 focus:border-[#E5A51B] focus:ring-1 focus:ring-[#E5A51B]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Assessment Bonus Banner */}
                <div className="relative overflow-hidden p-3 sm:p-3.5 bg-gradient-to-r from-[#FFF6E3] via-[#FFF9EC] to-[#FFF4DE] rounded-2xl flex items-center gap-3 text-xs text-[#10264A] border border-[#F2A000]/50 shadow-xs">
                  {/* Decorative gold star on left */}
                  <div className="flex items-center pl-1 pr-2.5 border-r border-[#F2A000]/30 shrink-0">
                    <Star className="w-5 h-5 text-[#E99A00] stroke-[1.8]" />
                  </div>
                  <span className="font-medium text-[#25334A] leading-snug">
                    Includes 1 Free Assessment Session &amp; Skill Evaluation by Senior Master Coach.
                  </span>
                  {/* Subtle gold ribbon shine in corner */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-8 bg-gradient-to-l from-[#F2A000]/20 to-transparent rounded-full pointer-events-none" />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#0C1E3C] via-[#10264B] to-[#0A1A36] hover:from-[#142B54] hover:to-[#0F2347] text-white rounded-full font-serif font-bold text-sm sm:text-base flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] border border-[#F2A000]/40 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-[#E5A51B]" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white -rotate-12" />
                        <span className="font-serif tracking-wide">Submit Enrollment Application</span>
                        <ArrowRight className="w-4 h-4 text-[#F2BD48]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
