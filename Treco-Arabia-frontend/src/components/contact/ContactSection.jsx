import React, { useState } from 'react';
import { Home, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const validate = (fields, lang) => {
  const errors = {};
  const isAr = lang === 'ar';

  if (!fields.name.trim()) {
    errors.name = isAr ? 'الاسم مطلوب.' : 'Your name is required.';
  } else if (fields.name.trim().length < 2) {
    errors.name = isAr ? 'يجب أن يكون الاسم حرفين على الأقل.' : 'Name must be at least 2 characters.';
  }

  if (!fields.email.trim()) {
    errors.email = isAr ? 'البريد الإلكتروني مطلوب.' : 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = isAr ? 'أدخل بريد إلكتروني صحيح.' : 'Enter a valid email address.';
  }

  if (!fields.message.trim()) {
    errors.message = isAr ? 'الرسالة مطلوبة.' : 'Message is required.';
  } else if (fields.message.trim().length < 6) {
    errors.message = isAr ? 'يرجى كتابة 6 أحرف على الأقل.' : 'Please write at least 6 characters.';
  }

  return errors;
};

function ContactSection({ t, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const isAr = lang === 'ar';

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name]) {
      const errs = validate(updated, lang);
      setErrors(prev => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errs = validate(fields, lang);
    setErrors(prev => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields, lang);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    setFields({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
      errors[field] && touched[field]
        ? 'border-red-400 focus:border-red-500 bg-red-50/30'
        : touched[field] && !errors[field]
        ? 'border-emerald-500/80 focus:border-emerald-500'
        : 'border-slate-200 hover:border-slate-300 focus:border-[#00A3E8] focus:ring-2 focus:ring-[#00A3E8]/15'
    }`;

  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#F0F7FF] to-white text-slate-900 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ============================================================ */}
          {/* LEFT SIDE: Get In Touch & Info Items                        */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Main Headline */}
              <h2
                data-normal-case="true"
                className="normal-case text-3xl sm:text-4xl md:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4 [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr ? (
                  <>
                    تواصل <span className="text-[#00A3E8]">معنا</span>
                  </>
                ) : (
                  <>
                    Get <span className="text-[#00A3E8]">In</span> Touch
                  </>
                )}
              </h2>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-lg">
                {isAr
                  ? 'تواصل معنا اليوم لاستكشاف حلول المنازل الذكية والأتمتة الصناعية المصممة خصيصاً لاحتياجاتك. فريقنا جاهز لتحويل منشأتك إلى بيئة أكثر ذكاءً وأماناً.'
                  : 'Get in touch with us today to explore smart home solutions tailored to your needs. Our team is ready to help you transform your home into a smarter, safer place.'}
              </p>

              {/* Info Items List with Website Cyan Circular Icons */}
              <div className="space-y-6">
                
                {/* 1. Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/25 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Home className="w-4 h-4 text-[#00A3E8]" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-slate-900 text-base leading-snug [text-transform:none!important]"
                      style={{ textTransform: 'none' }}
                    >
                      {isAr ? 'الموقع' : 'Location'}
                    </h3>
                    <p className="text-sm text-slate-600 font-normal mt-1 leading-relaxed max-w-sm">
                      {isAr
                        ? 'مجد نور بالقرب من مخيم البلدية، وادي مريّخ، جدة، المملكة العربية السعودية 23254'
                        : 'Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, Saudi Arabia 23254'}
                    </p>
                  </div>
                </div>

                {/* 2. Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/25 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4 text-[#00A3E8]" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-slate-900 text-base leading-snug [text-transform:none!important]"
                      style={{ textTransform: 'none' }}
                    >
                      {isAr ? 'اتصل بنا' : 'Call Us'}
                    </h3>
                    <a
                      href="tel:+966500761791"
                      className="text-sm font-semibold text-slate-700 hover:text-[#00A3E8] mt-1 block dir-ltr transition-colors"
                    >
                      +966 500761791
                    </a>
                  </div>
                </div>

                {/* 3. Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/25 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4 text-[#00A3E8]" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-slate-900 text-base leading-snug [text-transform:none!important]"
                      style={{ textTransform: 'none' }}
                    >
                      {isAr ? 'راسلنا' : 'Email Us'}
                    </h3>
                    <a
                      href="mailto:info@treco.in"
                      className="text-sm font-semibold text-slate-700 hover:text-[#00A3E8] mt-1 block transition-colors"
                    >
                      info@treco.in
                    </a>
                  </div>
                </div>

                {/* 4. Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/25 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4 text-[#00A3E8]" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-slate-900 text-base leading-snug [text-transform:none!important]"
                      style={{ textTransform: 'none' }}
                    >
                      {isAr ? 'ساعات العمل' : 'Opening Hours'}
                    </h3>
                    <p className="text-sm text-slate-600 font-normal mt-1">
                      {isAr ? 'يومياً 08:00 صباحاً - 19:00 مساءً' : 'Everyday 08:00 AM - 19:00 PM'}
                    </p>
                  </div>
                </div>

              </div>

              {/* Divider Line */}
              <div className="border-t border-slate-200 mt-8 mb-6" />

              {/* Social Media Section */}
              <div>
                <h3
                  className="font-bold text-slate-900 text-base mb-3.5 [text-transform:none!important]"
                  style={{ textTransform: 'none' }}
                >
                  {isAr ? 'وسائل التواصل الاجتماعي' : 'Social Media'}
                </h3>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/TRECO-Technologies/100063639657266/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00A3E8] text-slate-700 hover:text-white border border-slate-200 hover:border-[#00A3E8] flex items-center justify-center transition-all shadow-xs cursor-pointer group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/TrecoTechnolog1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00A3E8] text-slate-700 hover:text-white border border-slate-200 hover:border-[#00A3E8] flex items-center justify-center transition-all shadow-xs cursor-pointer group"
                  >
                    <svg className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00A3E8] text-slate-700 hover:text-white border border-slate-200 hover:border-[#00A3E8] flex items-center justify-center transition-all shadow-xs cursor-pointer group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00A3E8] text-slate-700 hover:text-white border border-slate-200 hover:border-[#00A3E8] flex items-center justify-center transition-all shadow-xs cursor-pointer group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/966500761791"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#25D366] text-slate-700 hover:text-white border border-slate-200 hover:border-[#25D366] flex items-center justify-center transition-all shadow-xs cursor-pointer group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDE: Leave A Message (Clean Website Styled Form Card) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 md:p-11 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_15px_45px_rgba(0,163,232,0.08)] relative overflow-hidden">
            
            {/* Top Brand Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00A3E8] via-cyan-400 to-[#00A3E8]" />

            <div className="mb-6 sm:mb-8">
              <h3
                className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2.5 [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr ? (
                  <>
                    اترك <span className="text-[#00A3E8]">رسالة</span>
                  </>
                ) : (
                  <>
                    Leave A <span className="text-[#00A3E8]">Message</span>
                  </>
                )}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                {isAr
                  ? 'نقدم حلولاً متطورة للأتمتة الصناعية والمنازل الذكية لتحسين كفاءة عملياتك وتعزيز الابتكار.'
                  : 'We provide advanced industrial automation solutions to optimize your operations, enhance efficiency, and drive innovation.'}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#00A3E8] mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900">
                  {isAr ? 'تم استلام رسالتك بنجاح!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {isAr
                    ? 'شكراً لتواصلك معنا. سيقوم مهندسونا بالرد عليك في أقرب وقت.'
                    : 'Thank you for reaching out. Our engineering team will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                {/* 1. Your Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={isAr ? 'الاسم الكامل' : 'Your Name'}
                    className={inputClass('name')}
                  />
                  {errors.name && touched.name && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Your Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={isAr ? 'بريدك الإلكتروني' : 'Your Email'}
                    className={`${inputClass('email')} dir-ltr`}
                  />
                  {errors.email && touched.email && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* 3. Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={isAr ? 'الموضوع' : 'Subject'}
                    className={inputClass('subject')}
                  />
                </div>

                {/* 4. Your Message */}
                <div>
                  <textarea
                    rows="5"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={isAr ? 'رسالتك...' : 'Your Message'}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && touched.message && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button in Brand Cyan */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00A3E8] hover:bg-[#0086C4] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 mt-3"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
