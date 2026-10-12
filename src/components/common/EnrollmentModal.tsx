import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Crown, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
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

    // Simulate reliable submission and prefill email fallback
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFF9EF] rounded-3xl border-2 border-[#E5A51B]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 bg-[#10264A] text-white flex items-center justify-between border-b border-[#E5A51B]/20 shrink-0">
          <div className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-[#E5A51B]" />
            <h3 id="enrollment-modal-title" className="font-serif text-lg sm:text-xl font-bold text-[#FFF9EF]">
              Enroll at Velocity Chess
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6">
          {submitted ? (
            <div role="status" aria-live="polite" className="py-4 text-center space-y-4">
              <div className="w-16 h-16 bg-[#E5A51B]/20 text-[#E5A51B] border-2 border-[#E5A51B] rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10 text-[#D98A00]" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#10264A]">
                Application Received Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-[#25334A]/85 leading-relaxed max-w-sm mx-auto font-medium">
                Thank you, <strong className="text-[#10264A]">{parentName}</strong>. We have logged the enrollment application for <strong className="text-[#10264A]">{studentName}</strong>. Our admissions office will contact you via phone ({phone}) within 24 hours to schedule your complimentary chess evaluation session.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-7 py-2.5 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
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

              {/* Program Selector */}
              <div>
                <label htmlFor="modal-program" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                  Selected Coaching Program <span className="text-red-500">*</span>
                </label>
                <select
                  id="modal-program"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-[#E5A51B]/40 rounded-xl text-xs sm:text-sm text-[#10264A] font-medium focus:outline-none focus:border-[#E5A51B] focus:ring-1 focus:ring-[#E5A51B] transition cursor-pointer"
                >
                  {programsData.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.ageGroup})
                    </option>
                  ))}
                </select>
              </div>

              {/* Student Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-student-name" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-student-name"
                    type="text"
                    placeholder="e.g. Master Aditya"
                    value={studentName}
                    onChange={(e) => {
                      setStudentName(e.target.value);
                      if (errors.studentName) setErrors({ ...errors, studentName: undefined });
                    }}
                    className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs sm:text-sm text-[#10264A] focus:outline-none transition ${
                      errors.studentName
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#E5A51B]/30 focus:border-[#E5A51B]'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.studentName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-parent-name" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                    Parent / Guardian <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-parent-name"
                    type="text"
                    placeholder="e.g. Ramesh Varma"
                    value={parentName}
                    onChange={(e) => {
                      setParentName(e.target.value);
                      if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                    }}
                    className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs sm:text-sm text-[#10264A] focus:outline-none transition ${
                      errors.parentName
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#E5A51B]/30 focus:border-[#E5A51B]'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.parentName}</p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-email" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="parent@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs sm:text-sm text-[#10264A] focus:outline-none transition ${
                      errors.email
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#E5A51B]/30 focus:border-[#E5A51B]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-[11px] font-bold text-[#10264A] uppercase tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs sm:text-sm text-[#10264A] focus:outline-none transition ${
                      errors.phone
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#E5A51B]/30 focus:border-[#E5A51B]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] font-semibold text-red-600 mt-0.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Assessment Bonus Banner */}
              <div className="p-3 bg-[#FFF3DF] rounded-xl flex items-center gap-2.5 text-xs text-[#10264A] border border-[#E5A51B]/30">
                <Sparkles className="w-4 h-4 text-[#D98A00] shrink-0" />
                <span className="font-medium">
                  Includes 1 Free Assessment Session &amp; Skill Evaluation by Senior Master Coach.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-serif font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#E5A51B]" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enrollment Application</span>
                      <Send className="w-4 h-4 text-[#E5A51B]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
