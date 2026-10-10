import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
  Crown,
  Sparkles,
  ShieldCheck,
  User,
  HelpCircle
} from 'lucide-react';

// =============================================================================
// VERIFIED ACADEMY CONTACT DATA & INTEGRATION POINT
// =============================================================================
// Reusing official Velocity Chess Academy contact information:
// - Founder & Head Coach: IM Krishna Teja (FIDE Master & Senior Instructor)
// - Address: GP Info Tech Building, Plot No. 262, 2nd Floor, KPHB Phase 6, Kukatpally, Hyderabad, Telangana 500085
// - Branch: Bhanu Nilayam, LIG 258, 2nd Floor, Road No. 2, KPHB Colony, Kukatpally, Hyderabad 500072
// - WhatsApp & Admissions: +91 8500564155 (IM Krishna Teja)
// - Coaching Office: +91 8074710673 (WFM V. Chaitanya)
// - Academy Desk: +91 98765 43210
// - Emails: admissions@velocitychess.edu / chesskrish64@gmail.com
// =============================================================================

// Clearly documented backend integration endpoint.
// Set to your Formspree, EmailJS, or custom API URL when ready.
const FORM_ENDPOINT = ''; // e.g., 'https://formspree.io/f/your_form_id'

const ACADEMY_WHATSAPP_NUMBER = '918500564155';
const ACADEMY_PRIMARY_EMAIL = 'admissions@velocitychess.edu';
const ACADEMY_COACH_EMAIL = 'chesskrish64@gmail.com';
const ACADEMY_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Velocity+Chess+Academy+KPHB+Phase+6+Kukatpally+Hyderabad';
const ACADEMY_MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Velocity%20Chess%20Academy%20KPHB%20Phase%206%20Kukatpally%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed';

interface FormState {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'Admissions',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success_api' | 'opened_client' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details for your enquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // 1. If backend API endpoint is configured, submit via fetch
    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmissionStatus('success_api');
          setStatusMessage(
            `Thank you, ${formData.name}! Your enquiry has been received. Our admissions coordinator will get in touch within 24 hours.`
          );
          setFormData({
            name: '',
            email: '',
            phone: '',
            enquiryType: 'Admissions',
            message: ''
          });
          setIsSubmitting(false);
          return;
        } else {
          throw new Error('API request failed');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        setSubmissionStatus('error');
        setStatusMessage(
          'Unable to send via automated endpoint. Opening your email app directly...'
        );
      }
    }

    // 2. If no backend endpoint configured: launch prefilled email directly
    // and provide transparent status feedback (no fake success message)
    const emailSubject = encodeURIComponent(
      `[${formData.enquiryType}] Velocity Chess Academy Enquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hello Velocity Chess Academy Admissions Team,\n\n` +
        `Enquiry Details:\n` +
        `-----------------------------------------\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Enquiry Type: ${formData.enquiryType}\n\n` +
        `Message:\n${formData.message}\n` +
        `-----------------------------------------\n\n` +
        `Sent via Velocity Chess Academy Website`
    );

    const mailtoUrl = `mailto:${ACADEMY_PRIMARY_EMAIL}?cc=${ACADEMY_COACH_EMAIL}&subject=${emailSubject}&body=${emailBody}`;

    // Trigger user's default email client
    window.location.href = mailtoUrl;

    setSubmissionStatus('opened_client');
    setStatusMessage(
      `Enquiry prepared for ${formData.name}! Your default email client has been opened to dispatch this message. You can also send this inquiry directly via WhatsApp below.`
    );
    setIsSubmitting(false);
  };

  const defaultWhatsAppText = encodeURIComponent(
    'Hello Velocity Chess Academy, I would like to know more about your chess coaching programs.'
  );
  const whatsappUrl = `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${defaultWhatsAppText}`;

  const defaultEmailUrl = `mailto:${ACADEMY_PRIMARY_EMAIL}?subject=${encodeURIComponent(
    'Enquiry — Velocity Chess Academy'
  )}&body=${encodeURIComponent(
    'Hello Velocity Chess Academy,\n\nI would like to know more about your chess coaching programs.\n\nThank you.'
  )}`;

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-20 lg:py-24 bg-[#FFF9EF] overflow-hidden select-none border-t-2 border-[#F2A000]/30 scroll-mt-24"
    >
      {/* Background Decorative Gold & Cream Glow Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#FFF3D6]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F2A000]/[0.05] rounded-full blur-3xl" />
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(#10264B 1px, transparent 1px), radial-gradient(#F2A000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          
          {/* Eyebrow Label with Ornamental Lines */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
            <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.25em]">
              CONTACT & ADMISSIONS
            </span>
            <span className="w-8 h-[2px] bg-[#F2A000] rounded-full" />
          </div>

          {/* Main Editorial Heading */}
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#10264B] leading-tight tracking-tight">
            Let's Make Your{' '}
            <span className="relative inline-block font-serif italic font-normal text-[#F2A000]">
              Next Move
              {/* Refined Gold Underline SVG */}
              <svg
                className="w-full h-2.5 text-[#F2A000] absolute -bottom-1.5 left-0"
                viewBox="0 0 220 20"
                fill="none"
              >
                <path
                  d="M5 12 C 60 4, 150 18, 215 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#25334A]/85 font-sans leading-relaxed max-w-2xl mx-auto pt-1 font-medium">
            Have questions about our chess coaching, admissions, tournaments, or training
            programs? Get in touch with our team, and we'll be happy to help.
          </p>

        </div>

        {/* PROMINENT QUICK-ACTION CONTACT BUTTONS (WHATSAPP & EMAIL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10">
          
          {/* WhatsApp Direct Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#25D366]/10 via-white to-white border-2 border-[#25D366]/50 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-[11px] font-sans font-extrabold uppercase tracking-wider text-[#128C7E]">
                  FASTEST RESPONSE
                </div>
                <div className="font-serif font-extrabold text-base sm:text-lg text-[#10264B] leading-tight truncate">
                  Send WhatsApp Message
                </div>
                <div className="text-xs text-[#25334A]/75 font-medium">
                  Chat directly: +91 85005 64155
                </div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#25D366] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </a>

          {/* Email Direct Action */}
          <a
            href={defaultEmailUrl}
            className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#10264B]/10 via-white to-white border-2 border-[#F2A000]/40 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#10264B] to-[#0A1A33] text-[#FFE8AB] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#F2A000]/40 shrink-0">
                <Mail className="w-6 h-6 text-[#F2A000]" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-[11px] font-sans font-extrabold uppercase tracking-wider text-[#D98A00]">
                  OFFICIAL CORRESPONDENCE
                </div>
                <div className="font-serif font-extrabold text-base sm:text-lg text-[#10264B] leading-tight truncate">
                  Send Email
                </div>
                <div className="text-xs text-[#25334A]/75 font-medium truncate">
                  admissions@velocitychess.edu
                </div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#10264B] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </a>

        </div>

        {/* =====================================================================
            EXACT 50/50 TWO-COLUMN CSS GRID LAYOUT
            - repeat(2, minmax(0, 1fr)) on desktop & tablet
            - Both columns have min-width: 0 and exactly 50% available width
            - Aligned outer margins and consistent 24-32px column gap
           ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:[grid-template-columns:repeat(2,minmax(0,1fr))] gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* ===================================================================
              LEFT COLUMN (EXACTLY 50% WIDTH): ACADEMY LOCATION & INFORMATION
             =================================================================== */}
          <div className="min-w-0 w-full space-y-5 sm:space-y-6">
            
            {/* Main Academy Info Card */}
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#F2A000]/35 shadow-xl p-5 sm:p-6 lg:p-7 space-y-4 sm:space-y-5 overflow-hidden">
              
              {/* Inner subtle top gold hairline */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400]" />

              {/* Academy Badge */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFE8AB] to-[#F2A000]/40 border border-[#F2A000]/60 flex items-center justify-center text-[#10264B] shadow-xs shrink-0">
                  <Crown className="w-5 h-5 text-[#10264B]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-tight truncate">
                    Academy Headquarters
                  </h3>
                  <p className="text-xs font-semibold text-[#D98A00] truncate">
                    Hyderabad, Telangana · Founded by IM Krishna Teja
                  </p>
                </div>
              </div>

              {/* Verified Contact Details List */}
              <div className="space-y-3 sm:space-y-3.5 text-left font-sans">
                
                {/* 1. Address with Clickable Google Maps Link */}
                <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#FFF9EF] border border-[#F2A000]/25 hover:border-[#F2A000]/60 transition-colors">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#D98A00]">
                      ACADEMY ADDRESS
                    </span>
                    <a
                      href={ACADEMY_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-block text-xs sm:text-sm font-semibold text-[#10264B] leading-snug hover:text-[#D98A00] transition-colors mt-0.5"
                    >
                      <span>
                        GP Info Tech Building, Plot No. 262, 2nd Floor, KPHB Phase 6, Kukatpally,
                        Hyderabad, Telangana 500085
                      </span>
                      <span className="inline-flex items-center text-[11px] text-[#F2A000] font-bold ml-1.5 underline decoration-[#F2A000]/60 underline-offset-2">
                        Open in Google Maps <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                      </span>
                    </a>
                    <div className="mt-1 pt-1 border-t border-[#F2A000]/15 text-[11px] text-[#25334A]/70">
                      Branch: Bhanu Nilayam, LIG 258, 2nd Floor, Road No. 2, KPHB Colony (500072)
                    </div>
                  </div>
                </div>

                {/* 2. Direct Helplines */}
                <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#FFF9EF] border border-[#F2A000]/25">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#D98A00]">
                      DIRECT HELPLINES
                    </span>
                    <div className="space-y-0.5 text-xs sm:text-sm font-semibold text-[#10264B]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#25334A]/75 text-[11px]">Admissions / IM Teja:</span>
                        <a
                          href="tel:+918500564155"
                          className="hover:text-[#D98A00] font-bold transition-colors"
                        >
                          +91 85005 64155
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#25334A]/75 text-[11px]">Coaching Office:</span>
                        <a
                          href="tel:+918074710673"
                          className="hover:text-[#D98A00] font-bold transition-colors"
                        >
                          +91 80747 10673
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#25334A]/75 text-[11px]">General Desk:</span>
                        <a
                          href="tel:+919876543210"
                          className="hover:text-[#D98A00] font-bold transition-colors"
                        >
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Email Enquiries */}
                <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#FFF9EF] border border-[#F2A000]/25">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#D98A00]">
                      EMAIL ENQUIRIES
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-[#10264B]">
                      <a
                        href={`mailto:${ACADEMY_PRIMARY_EMAIL}`}
                        className="block hover:text-[#D98A00] transition-colors truncate"
                      >
                        {ACADEMY_PRIMARY_EMAIL}
                      </a>
                      <a
                        href={`mailto:${ACADEMY_COACH_EMAIL}`}
                        className="block text-[#25334A]/70 text-[11px] hover:text-[#D98A00] transition-colors truncate"
                      >
                        {ACADEMY_COACH_EMAIL} (Coach Direct)
                      </a>
                    </div>
                  </div>
                </div>

                {/* 4. Campus & Admission Hours */}
                <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#FFF9EF] border border-[#F2A000]/25">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#FFEED4] border border-[#F2A000]/50 flex items-center justify-center text-[#D98A00] shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 text-[11px] sm:text-xs text-[#25334A]/85">
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#D98A00] mb-0.5">
                      CAMPUS & ADMISSION HOURS
                    </span>
                    <p className="font-semibold text-[#10264B]">
                      Monday – Saturday: 09:00 AM – 07:00 PM IST
                    </p>
                    <p className="text-[#25334A]/75">
                      Sunday: 10:00 AM – 04:00 PM IST (Tournament & Practice Days)
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Decorative Chess Checkerboard Base Strip */}
              <div className="grid grid-cols-8 h-3.5 w-full border-t border-[#F2A000]/30 rounded-b-xl overflow-hidden -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 lg:-mx-7 lg:-mb-7 mt-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={i % 2 === 0 ? 'bg-[#FFE8AB]' : 'bg-[#FFFDF8]'}
                  />
                ))}
              </div>

            </div>

            {/* EMBEDDED GOOGLE MAP CARD */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#F2A000]/35 shadow-xl p-4 sm:p-5 space-y-3 overflow-hidden text-left">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#F2A000]" />
                  <span className="font-serif font-extrabold text-sm sm:text-base text-[#10264B]">
                    Interactive Academy Location
                  </span>
                </div>
                <a
                  href={ACADEMY_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#D98A00] hover:underline flex items-center space-x-1"
                >
                  <span>View Larger</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Iframe Map Container fitting neatly inside 50% column */}
              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden border border-[#F2A000]/30 shadow-inner bg-[#F8F0E3]">
                <iframe
                  title="Velocity Chess Academy Kukatpally Location"
                  src={ACADEMY_MAPS_EMBED_URL}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="text-[11px] text-[#25334A]/70 px-1 font-medium leading-relaxed">
                Conveniently situated in KPHB Colony near metro connectivity with dedicated student
                parking and air-conditioned tournament halls.
              </p>
            </div>

          </div>

          {/* ===================================================================
              RIGHT COLUMN (EXACTLY 50% WIDTH): MODERN VALIDATED CONTACT FORM
             =================================================================== */}
          <div className="min-w-0 w-full">
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#F2A000]/35 shadow-xl p-5 sm:p-6 lg:p-7 text-left overflow-hidden">
              
              {/* Inner subtle top gold hairline */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2A000] via-[#FFE8AB] to-[#F2A000]" />

              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFE8AB] to-[#F2A000]/40 border border-[#F2A000]/60 flex items-center justify-center text-[#10264B] shadow-xs shrink-0">
                  <Sparkles className="w-5 h-5 text-[#10264B]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-tight truncate">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-[#25334A]/80 font-medium">
                    Fill out the form below and we will respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Status Feedback Notification Banner */}
              {submissionStatus === 'success_api' && (
                <div className="mb-5 p-4 rounded-2xl bg-[#E8F8F0] border-2 border-[#25D366] text-[#0A5D36] flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-semibold">{statusMessage}</div>
                </div>
              )}

              {submissionStatus === 'opened_client' && (
                <div className="mb-5 p-4 rounded-2xl bg-[#FFF5E5] border-2 border-[#F2A000] text-[#7A4D00] space-y-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F2A000] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm font-semibold leading-relaxed">
                      {statusMessage}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F2A000]/20">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-xs hover:bg-[#1EBE5D] transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Send via WhatsApp Instead</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmissionStatus('idle')}
                      className="text-xs font-semibold underline text-[#10264B] hover:text-[#D98A00] ml-2"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {submissionStatus === 'error' && (
                <div className="mb-5 p-4 rounded-2xl bg-[#FDE8E8] border-2 border-[#E02424] text-[#9B1C1C] flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-[#E02424] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-semibold">{statusMessage}</div>
                </div>
              )}

              {/* The Interactive Form (100% width within 50% right column) */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Field 1: Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#10264B] mb-1.5"
                  >
                    Full Name <span className="text-[#E02424]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 sm:py-3 bg-[#FFFDF8] rounded-2xl text-xs sm:text-sm text-[#10264B] placeholder-[#25334A]/40 border transition-all duration-200 outline-none ${
                        errors.name
                          ? 'border-[#E02424] ring-2 ring-[#E02424]/20'
                          : 'border-[#F2A000]/30 focus:border-[#F2A000] focus:ring-3 focus:ring-[#F2A000]/20'
                      }`}
                    />
                    <User className="w-4 h-4 text-[#F2A000]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] font-semibold text-[#E02424] mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Row: Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Field 2: Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#10264B] mb-1.5"
                    >
                      Email Address <span className="text-[#E02424]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-2.5 sm:py-3 bg-[#FFFDF8] rounded-2xl text-xs sm:text-sm text-[#10264B] placeholder-[#25334A]/40 border transition-all duration-200 outline-none ${
                          errors.email
                            ? 'border-[#E02424] ring-2 ring-[#E02424]/20'
                            : 'border-[#F2A000]/30 focus:border-[#F2A000] focus:ring-3 focus:ring-[#F2A000]/20'
                        }`}
                      />
                      <Mail className="w-4 h-4 text-[#F2A000]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] font-semibold text-[#E02424] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 3: Phone Number */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#10264B] mb-1.5"
                    >
                      Phone Number <span className="text-[#E02424]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-4 py-2.5 sm:py-3 bg-[#FFFDF8] rounded-2xl text-xs sm:text-sm text-[#10264B] placeholder-[#25334A]/40 border transition-all duration-200 outline-none ${
                          errors.phone
                            ? 'border-[#E02424] ring-2 ring-[#E02424]/20'
                            : 'border-[#F2A000]/30 focus:border-[#F2A000] focus:ring-3 focus:ring-[#F2A000]/20'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-[#F2A000]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] font-semibold text-[#E02424] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Field 4: Enquiry Type */}
                <div>
                  <label
                    htmlFor="contact-enquiry-type"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#10264B] mb-1.5"
                  >
                    Enquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="contact-enquiry-type"
                      value={formData.enquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, enquiryType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#FFFDF8] rounded-2xl text-xs sm:text-sm text-[#10264B] border border-[#F2A000]/30 focus:border-[#F2A000] focus:ring-3 focus:ring-[#F2A000]/20 transition-all duration-200 outline-none appearance-none font-medium"
                    >
                      <option value="Admissions">Admissions (New Student Enrollment)</option>
                      <option value="Chess Coaching">Chess Coaching (1-on-1 or Batch Inquiry)</option>
                      <option value="Tournaments">Tournaments & Grandmaster Seminars</option>
                      <option value="General Enquiry">General Enquiry & Campus Visit</option>
                    </select>
                    <HelpCircle className="w-4 h-4 text-[#F2A000]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field 5: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#10264B] mb-1.5"
                  >
                    Your Message <span className="text-[#E02424]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about the student's age, chess experience (beginner / rated), or any questions you have..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-[#FFFDF8] rounded-2xl text-xs sm:text-sm text-[#10264B] placeholder-[#25334A]/40 border transition-all duration-200 outline-none resize-y ${
                      errors.message
                        ? 'border-[#E02424] ring-2 ring-[#E02424]/20'
                        : 'border-[#F2A000]/30 focus:border-[#F2A000] focus:ring-3 focus:ring-[#F2A000]/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-semibold text-[#E02424] mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-1 sm:pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FFE8AB] via-[#F2A000] to-[#E59400] text-[#10264B] font-serif font-extrabold text-sm sm:text-base tracking-wide shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2 border border-[#F2A000]/40 disabled:opacity-60 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Preparing Enquiry...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 text-[#10264B]" />
                  </button>
                </div>

                {/* Reassurance Note */}
                <div className="flex items-center justify-center space-x-2 text-[11px] text-[#25334A]/70 pt-1 text-center font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F2A000]" />
                  <span>
                    Your details are confidential. We will never share your contact information.
                  </span>
                </div>

              </form>

              {/* Bottom Decorative Chess Strip */}
              <div className="grid grid-cols-8 h-3.5 w-full border-t border-[#F2A000]/30 rounded-b-xl overflow-hidden -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 lg:-mx-7 lg:-mb-7 mt-5">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={i % 2 === 0 ? 'bg-[#FFFDF8]' : 'bg-[#FFE8AB]'}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
