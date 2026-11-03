import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

const validate = (fields, lang) => {
  const errors = {};
  const isAr = lang === 'ar';

  if (!fields.name.trim()) {
    errors.name = isAr ? 'الاسم الكامل مطلوب.' : 'Full name is required.';
  } else if (fields.name.trim().length < 3) {
    errors.name = isAr ? 'يجب أن يكون الاسم 3 أحرف على الأقل.' : 'Name must be at least 3 characters.';
  }

  const rawPhone = fields.phone.replace(/[\s\-()]/g, '');
  if (!rawPhone) {
    errors.phone = isAr ? 'رقم الهاتف مطلوب.' : 'Phone number is required.';
  } else if (!/^\+?\d{7,15}$/.test(rawPhone)) {
    errors.phone = isAr ? 'أدخل رقم هاتف صحيح.' : 'Enter a valid phone number.';
  }

  if (!fields.message.trim()) {
    errors.message = isAr ? 'تفاصيل المشروع مطلوبة.' : 'Project requirements are required.';
  } else if (fields.message.trim().length < 10) {
    errors.message = isAr ? 'يرجى كتابة 10 أحرف على الأقل لوصف متطلباتك.' : 'Please describe your requirements in at least 10 characters.';
  }

  return errors;
};

function ContactSection({ t, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = name === 'name' ? value.replace(/[0-9]/g, '') : value;
    const updated = { ...fields, [name]: sanitized };
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
    const allTouched = { name: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields, lang);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    setFields({ name: '', phone: '', service: '', message: '' });
    setTouched({});
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all shadow-xs ${
      errors[field] && touched[field]
        ? 'border-red-400 focus:border-red-500 bg-red-50/40'
        : touched[field] && !errors[field]
        ? 'border-emerald-400 focus:border-emerald-500'
        : 'border-slate-300 focus:border-[#00A3E8]'
    }`;

  return (
    <section id="contact" className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white text-slate-900 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* items-stretch lagaya hai taaki dono columns ki height barabar ho jaye */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: Contact Info & Map Details */}
          {/* flex flex-col justify-between lagaya hai taaki content top aur bottom se stretch ho */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONTACT US</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {t.contact.title}
              </h2>

              <p className="text-slate-600 text-base mb-8 font-normal leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Contact Cards - Making them flex-1 to fill space */}
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              
              {/* Phone */}
              <a 
                href="tel:+966500761791" 
                className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-3xl border border-slate-200/90 flex items-center gap-4 hover:border-emerald-500 shadow-[0_8px_25px_rgba(16,185,129,0.06)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.18)] hover:-translate-y-1 transition-all group h-full sm:h-auto"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xs flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-black tracking-wider block">Call Direct (KSA)</span>
                  <span className="text-lg sm:text-xl font-black text-slate-900 dir-ltr block mt-0.5">{t.contact.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@treco.in" 
                className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-3xl border border-slate-200/90 flex items-center gap-4 hover:border-[#00A3E8] shadow-[0_8px_25px_rgba(0,163,232,0.06)] hover:shadow-[0_15px_30px_rgba(0,163,232,0.18)] hover:-translate-y-1 transition-all group h-full sm:h-auto"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-white transition-all shadow-xs flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-black tracking-wider block">Official Email</span>
                  <span className="text-lg sm:text-xl font-black text-slate-900 block mt-0.5">{t.contact.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-3xl border border-slate-200/90 flex items-center gap-4 shadow-[0_8px_25px_rgba(147,51,234,0.06)] h-full sm:h-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-black tracking-wider block">{t.contact.addressTitle}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed block mt-0.5">{t.contact.addressText}</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Quote Request Form */}
          <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200/90 border-l-4 border-l-[#00A3E8] shadow-[0_20px_50px_-10px_rgba(0,163,232,0.15),0_10px_30px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden h-full flex flex-col justify-between">
            
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3E8] via-[#00A3E8]/50 to-transparent pointer-events-none" />

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mb-6 sm:mb-8">
                Fill in your requirements and our Saudi engineering team will call you back within 2 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 flex-1 flex flex-col justify-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-black text-slate-900">Thank You!</h4>
                <p className="text-sm text-slate-700 font-medium">{t.contact.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-center" noValidate>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={lang === 'ar' ? 'مثال: المهندس عبدالله الغامدي' : 'e.g. Eng. Abdullah Al-Ghamdi'}
                    className={inputClass('name')}
                  />
                  {errors.name && touched.name && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.phoneLabel}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+966 5X XXX XXXX"
                    className={`${inputClass('phone')} dir-ltr`}
                  />
                  {errors.phone && touched.phone && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.service}</label>
                  <select
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#00A3E8] focus:bg-white transition-all shadow-xs"
                  >
                    {t.contact.servicesList.map((svc, idx) => (
                      <option key={idx} value={svc} className="text-slate-900">{svc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.message}</label>
                  <textarea
                    rows="3"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={lang === 'ar' ? 'صف متطلبات مشروعك...' : 'Describe your villa, apartment, or factory automation requirements...'}
                    className={inputClass('message')}
                  />
                  {errors.message && touched.message && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-[#00A3E8] hover:bg-cyan-500 text-white font-black text-sm shadow-[0_8px_25px_rgba(0,163,232,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
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