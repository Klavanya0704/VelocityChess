import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  User,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Car,
  Users,
  Trophy,
  Compass,
  Edit3
} from 'lucide-react';

// =============================================================================
// VERIFIED ACADEMY CONTACT DATA & INTEGRATION POINT
// =============================================================================
const FORM_ENDPOINT = ''; // Set to Formspree, EmailJS, or backend endpoint when ready

const ACADEMY_WHATSAPP_NUMBER = '918500564155';
const ACADEMY_PRIMARY_EMAIL = 'admissions@velocitychess.edu';
const ACADEMY_COACH_EMAIL = 'chesskrish64@gmail.com';
const ACADEMY_PRIMARY_PHONE = '+91 98765 43210';

const ACADEMY_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Velocity+Chess+Academy+KPHB+Phase+6+Kukatpally+Hyderabad';
const ACADEMY_MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Velocity%20Chess%20Academy%20KPHB%20Phase%206%20Kukatpally%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed';

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
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
    inquiryType: 'General Inquiry',
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
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Phone number must have at least 10 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your questions or requirements';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message should be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

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
            `Thank you, ${formData.name}! Your message has been received. Our admissions team will get back to you shortly.`
          );
          setFormData({
            name: '',
            email: '',
            phone: '',
            inquiryType: 'General Inquiry',
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
          'Automated endpoint unavailable. Opening your email app directly...'
        );
      }
    }

    // Fallback: Dispatch prefilled email client
    const emailSubject = encodeURIComponent(
      `[${formData.inquiryType}] Velocity Chess Academy Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hello Velocity Chess Academy Admissions Team,\n\n` +
        `Inquiry Details:\n` +
        `-----------------------------------------\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Inquiry Type: ${formData.inquiryType}\n\n` +
        `Message:\n${formData.message}\n` +
        `-----------------------------------------\n\n` +
        `Sent via Velocity Chess Academy Contact Form`
    );

    const mailtoUrl = `mailto:${ACADEMY_PRIMARY_EMAIL}?cc=${ACADEMY_COACH_EMAIL}&subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;

    setSubmissionStatus('opened_client');
    setStatusMessage(
      `Inquiry prepared for ${formData.name}! Your email application has been opened with your details prefilled.`
    );
    setIsSubmitting(false);
  };

  const whatsappUrl = `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Velocity Chess Academy, I would like to enquire about your chess coaching programs and admissions.'
  )}`;

  return (
    <section
      id="contact"
      className="relative pt-12 sm:pt-16 pb-8 sm:pb-10 overflow-hidden select-none border-t border-[#EBD7B2]/40 scroll-mt-20"
    >
      {/* =====================================================================
          1. REAL ACADEMY INTERIOR BACKGROUND (IMAGE 1)
             Preserves original golden lighting, dark wood, marble desk, illuminated logo,
             plants, and chess tables without heavy washouts or global filters.
         ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/contact_full_bg.jpg"
          alt="Velocity Chess Academy Reception and Training Interior"
          className="w-full h-full object-cover object-[15%_center] sm:object-center select-none"
        />
        {/* Soft translucent warm cream overlay ensuring optimal legibility */}
        <div className="absolute inset-0 bg-[#FFF9EF]/35 pointer-events-none" />
        {/* Localized subtle warm gradient glow strictly behind the heading area on the right */}
        <div className="hidden md:block absolute top-0 right-0 w-3/5 h-64 bg-gradient-to-b from-[#FFFDF8]/40 via-[#FFFDF8]/20 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================================
            2. HEADING AREA (POSITIONED IN UPPER-RIGHT / CENTER COMPOSITION)
               Keeps the left side unobstructed so the illuminated academy wall
               and reception desk remain visible, matching the reference.
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end mb-4 sm:mb-5 pt-2">
          
          {/* Empty left spacer on desktop (columns 1 to 6) leaving academy logo, desk & glass doors clear */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

          {/* Heading content positioned in the right 6 columns with an elegant ivory translucent glass panel */}
          <div className="lg:col-span-6 bg-[rgba(255,250,240,0.88)] backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5.5 border border-[#F2A000]/35 shadow-[0_8px_30px_rgba(16,38,75,0.06)] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-left">
            
            {/* Main Heading Group */}
            <div className="space-y-1 max-w-sm">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D98A00] inline-block font-sans">
                GET IN TOUCH
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] text-[#10264B] leading-[1.14] tracking-tight">
                Contact &amp;<br />
                Academy Admissions
              </h2>
              <p className="text-xs sm:text-[13px] text-[#25334A]/85 leading-normal font-sans pt-1">
                Have questions about our coaching programs, tournament registration, or free
                evaluation session? Reach out to our admissions team.
              </p>
            </div>

            {/* Handwritten Decorative Script Message aligned on the far right */}
            <div className="hidden sm:flex flex-col items-end text-right shrink-0 pb-1 select-none pl-2">
              <p
                className="text-2xl sm:text-[26px] lg:text-[28px] text-[#10264B] font-normal leading-tight drop-shadow-xs"
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Have Questions?<br />
                <span className="text-[#D98A00]">Let&apos;s Plan</span><br />
                <span className="text-[#D98A00]">Your Next Move</span>
              </p>
              <div className="w-20 h-[1.5px] bg-[#D98A00] mt-1 rounded-full" />
            </div>

          </div>

        </div>

        {/* =====================================================================
            3. MAIN TWO-COLUMN CONTACT CARDS (BALANCED DESKTOP HEIGHT & PROPORTIONS)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-4 sm:mb-5">
          
          {/* ===================================================================
              LEFT CARD: ACADEMY CONTACT INFORMATION + STUDENT PHOTOGRAPH
             =================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 bg-[#FFFDF9] rounded-[24px] border border-[#EBD7B2] shadow-xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch">
            
            {/* Left Sub-Column: 4 Contact Information Details */}
            <div className="sm:col-span-7 p-4 sm:p-5 flex flex-col justify-between space-y-2.5 text-left">
              
              {/* Detail 1: Academy Campus */}
              <div className="flex items-start space-x-3 group/item">
                <div className="w-8 h-8 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform mt-0.5">
                  <MapPin className="w-4 h-4 text-[#D98A00]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B]">Academy Campus</h4>
                  <p className="text-[11px] font-semibold text-[#10264B]">Velocity Chess Academy</p>
                  <p className="text-[10px] text-[#4A5568] leading-tight">
                    Premiere Educational District, City Center, Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

              {/* Detail 2: Admissions Helpline */}
              <div className="flex items-start space-x-3 group/item">
                <div className="w-8 h-8 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform mt-0.5">
                  <Phone className="w-4 h-4 text-[#D98A00]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B]">Admissions Helpline</h4>
                  <a
                    href={`tel:${ACADEMY_PRIMARY_PHONE.replace(/\s+/g, '')}`}
                    className="block text-xs font-bold text-[#10264B] hover:text-[#D98A00] transition-colors"
                  >
                    {ACADEMY_PRIMARY_PHONE}
                  </a>
                  <p className="text-[10px] text-[#4A5568]">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Detail 3: Email Address */}
              <div className="flex items-start space-x-3 group/item">
                <div className="w-8 h-8 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform mt-0.5">
                  <Mail className="w-4 h-4 text-[#D98A00]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B]">Email Address</h4>
                  <a
                    href={`mailto:${ACADEMY_PRIMARY_EMAIL}`}
                    className="block text-xs font-bold text-[#10264B] hover:text-[#D98A00] transition-colors truncate"
                  >
                    {ACADEMY_PRIMARY_EMAIL}
                  </a>
                  <p className="text-[10px] text-[#4A5568]">We usually respond within one business day.</p>
                </div>
              </div>

              {/* Detail 4: Campus Timings */}
              <div className="flex items-start space-x-3 group/item">
                <div className="w-8 h-8 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform mt-0.5">
                  <Clock className="w-4 h-4 text-[#D98A00]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#10264B]">Campus Timings</h4>
                  <p className="text-[10px] text-[#4A5568] leading-tight">
                    Monday – Saturday: 09:00 AM – 07:00 PM IST
                  </p>
                  <p className="text-[10px] text-[#4A5568] leading-tight">
                    Sunday: 10:00 AM – 04:00 PM IST (Tournament Days)
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sub-Column: Real Academy Student Photograph (Full Height, Matching Reference) */}
            <div className="sm:col-span-5 relative h-[135px] xs:h-[150px] sm:h-auto sm:min-h-full overflow-hidden bg-slate-900">
              <img
                src="/assets/contact_student_learning.jpg"
                alt="Velocity Chess Academy Student in Training"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* ===================================================================
              RIGHT CARD: SEND US A MESSAGE FORM
             =================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 bg-[#FFFDF9] rounded-[24px] p-4 sm:p-5 border border-[#EBD7B2] shadow-xl flex flex-col justify-between text-left">
            
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#10264B] leading-tight mb-0.5">
                Send Us a Message
              </h3>
              <p className="text-[11px] text-[#4A5568] mb-3">
                Fill out the form below and our admissions team will get back to you shortly.
              </p>

              {/* Status Notifications */}
              {submissionStatus === 'success_api' && (
                <div className="mb-3 p-2.5 rounded-xl bg-[#E8F8F0] border border-[#25D366] text-[#0A5D36] flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div className="text-xs font-semibold">{statusMessage}</div>
                </div>
              )}

              {submissionStatus === 'opened_client' && (
                <div className="mb-3 p-2.5 rounded-xl bg-[#FFF5E5] border border-[#D98A00] text-[#7A4D00] space-y-1.5">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98A00] shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold leading-relaxed">
                      {statusMessage}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pt-1 border-t border-[#D98A00]/20">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#25D366] text-white font-bold text-[10px] shadow-2xs hover:bg-[#1EBE5D] transition"
                    >
                      <MessageCircle className="w-3 h-3 fill-current" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmissionStatus('idle')}
                      className="text-[10px] font-semibold text-[#10264B] hover:text-[#D98A00] underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {submissionStatus === 'error' && (
                <div className="mb-3 p-2.5 rounded-xl bg-[#FDE8E8] border border-[#E02424] text-[#9B1C1C] flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-[#E02424] shrink-0 mt-0.5" />
                  <div className="text-xs font-semibold">{statusMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-2.5 font-sans">
                
                {/* Row 1: Your Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* Field 1: Your Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-bold text-[#10264B] mb-0.5"
                    >
                      Your Name <span className="text-[#E02424]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#D98A00] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Ramesh Varma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full pl-8 pr-2.5 py-1.5 bg-[#FAF6EE] border rounded-lg text-xs text-[#10264B] placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-[#E02424] ring-1 ring-[#E02424]'
                            : 'border-[#E5D7BE] focus:border-[#D98A00]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[10px] font-semibold text-[#E02424] mt-0.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-bold text-[#10264B] mb-0.5"
                    >
                      Email Address <span className="text-[#E02424]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-[#D98A00] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full pl-8 pr-2.5 py-1.5 bg-[#FAF6EE] border rounded-lg text-xs text-[#10264B] placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-[#E02424] ring-1 ring-[#E02424]'
                            : 'border-[#E5D7BE] focus:border-[#D98A00]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] font-semibold text-[#E02424] mt-0.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Row 2: Phone Number & Inquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* Field 3: Phone Number */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-[11px] font-bold text-[#10264B] mb-0.5"
                    >
                      Phone Number <span className="text-[#E02424]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#D98A00] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full pl-8 pr-2.5 py-1.5 bg-[#FAF6EE] border rounded-lg text-xs text-[#10264B] placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-[#E02424] ring-1 ring-[#E02424]'
                            : 'border-[#E5D7BE] focus:border-[#D98A00]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] font-semibold text-[#E02424] mt-0.5">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Field 4: Inquiry Type */}
                  <div>
                    <label
                      htmlFor="contact-inquiry-type"
                      className="block text-[11px] font-bold text-[#10264B] mb-0.5"
                    >
                      Inquiry Type <span className="text-[#E02424]">*</span>
                    </label>
                    <div className="relative">
                      <HelpCircle className="w-3.5 h-3.5 text-[#D98A00] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="contact-inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full pl-8 pr-7 py-1.5 bg-[#FAF6EE] border border-[#E5D7BE] rounded-lg text-xs text-[#10264B] focus:outline-none focus:border-[#D98A00] appearance-none font-medium cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admissions">Admissions (New Student Enrollment)</option>
                        <option value="Coaching Programs">Coaching Programs</option>
                        <option value="Tournament Registration">Tournament Registration</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-[#10264B]/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Field 5: Your Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-bold text-[#10264B] mb-0.5"
                  >
                    Your Message <span className="text-[#E02424]">*</span>
                  </label>
                  <div className="relative">
                    <Edit3 className="w-3.5 h-3.5 text-[#D98A00] absolute left-2.5 top-2.5 pointer-events-none" />
                    <textarea
                      id="contact-message"
                      rows={2}
                      placeholder="Tell us about your child's age, chess experience, or goals..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full pl-8 pr-2.5 py-1.5 bg-[#FAF6EE] border rounded-lg text-xs text-[#10264B] placeholder-[#9CA3AF] focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-[#E02424] ring-1 ring-[#E02424]'
                          : 'border-[#E5D7BE] focus:border-[#D98A00]'
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[10px] font-semibold text-[#E02424] mt-0.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button with Gold Airplane & Arrow */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#10264B] hover:bg-[#07172E] text-white rounded-full font-serif font-bold text-xs sm:text-[13px] tracking-wide shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 border border-[#EBD7B2]/40 cursor-pointer disabled:opacity-60 group/btn"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E5A51B] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Your Message'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5A51B] group-hover/btn:translate-x-1 transition-transform ml-0.5" />
                  </button>
                </div>

              </form>
            </div>

          </div>

        </div>

        {/* =====================================================================
            4. ACADEMY LOCATION SECTION (WIDE 3-COLUMN PANORAMIC CARD)
               Compact, fully visible directly beneath the two contact cards.
           ===================================================================== */}
        <div className="bg-[#FFFDF9] rounded-[24px] p-3.5 sm:p-4 px-5 sm:px-6 border border-[#EBD7B2] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-center text-left">
          
          {/* Column 1 — Our Location */}
          <div className="lg:col-span-3 space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#10264B]">Our Location</h3>
              <span className="w-8 h-[1.5px] bg-[#D98A00] rounded-full" />
            </div>
            <p className="text-[11px] text-[#4A5568] leading-tight">
              Easy to reach, right in the heart of the city.
            </p>
            <div className="pt-1">
              <a
                href={ACADEMY_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#FAF6EE] hover:bg-[#F2EAD8] text-[#10264B] border border-[#EBD7B2] rounded-full text-[11px] font-semibold inline-flex items-center space-x-1.5 transition shadow-2xs group"
              >
                <Compass className="w-3.5 h-3.5 text-[#D98A00] group-hover:rotate-45 transition-transform" />
                <span>View on Google Maps</span>
                <ArrowRight className="w-3 h-3 text-[#D98A00] group-hover:translate-x-0.5 transition-transform ml-0.5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Interactive Map Container */}
          <div className="lg:col-span-4 h-24 sm:h-26 rounded-xl overflow-hidden border border-[#EBD7B2] relative shadow-inner bg-slate-100 group">
            <iframe
              title="Velocity Chess Academy Hyderabad Location"
              src={ACADEMY_MAPS_EMBED_URL}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Floating Marker Badge matching Image 2 */}
            <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-lg border border-[#EBD7B2] shadow-2xs flex items-center space-x-1.5 pointer-events-none">
              <MapPin className="w-3 h-3 text-red-600 fill-current" />
              <span className="text-[9.5px] font-sans font-bold text-[#10264B]">
                Velocity Chess Academy · Hyderabad
              </span>
            </div>
          </div>

          {/* Column 3 — Academy Highlights (Convenient Access, Meet Our Team, Experience Facilities) */}
          <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-3 gap-2 text-left border-t lg:border-t-0 lg:border-l border-[#EBD7B2]/40 pt-2 lg:pt-0 lg:pl-4">
            
            {/* Highlight 1: Convenient Access */}
            <div className="space-y-0.5">
              <div className="w-7 h-7 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shadow-2xs mb-1">
                <Car className="w-3.5 h-3.5" />
              </div>
              <h5 className="font-serif font-bold text-[11px] text-[#10264B] leading-tight">Convenient Access</h5>
              <p className="text-[9.5px] text-[#4A5568] leading-tight">
                Located with ample parking and public transport access.
              </p>
            </div>

            {/* Highlight 2: Meet Our Team */}
            <div className="space-y-0.5">
              <div className="w-7 h-7 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shadow-2xs mb-1">
                <Users className="w-3.5 h-3.5" />
              </div>
              <h5 className="font-serif font-bold text-[11px] text-[#10264B] leading-tight">Meet Our Team</h5>
              <p className="text-[9.5px] text-[#4A5568] leading-tight">
                Visit and discuss the best program for your child.
              </p>
            </div>

            {/* Highlight 3: Experience Our Facilities */}
            <div className="space-y-0.5">
              <div className="w-7 h-7 rounded-full bg-[#FAF0D9] text-[#D98A00] flex items-center justify-center border border-[#EBD7B2] shadow-2xs mb-1">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <h5 className="font-serif font-bold text-[11px] text-[#10264B] leading-tight">Experience Our Facilities</h5>
              <p className="text-[9.5px] text-[#4A5568] leading-tight">
                State-of-the-art training halls and interactive learning spaces.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
