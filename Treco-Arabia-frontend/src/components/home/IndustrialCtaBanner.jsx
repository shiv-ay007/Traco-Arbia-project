import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';

function IndustrialCtaBanner({ t, lang, onOpenQuote }) {
  const isArabic = lang === 'ar';

  const defaultContent = {
    eyebrow: isArabic
      ? 'تواصل مع تريكو العربية'
      : 'GET IN TOUCH WITH TRECO ARABIA',
    title: isArabic
      ? 'هل أنت جاهز لتطوير وتحديث عملياتك الصناعية؟'
      : 'Ready to Upgrade Your Industrial Operations?',
    desc: isArabic
      ? 'تواصل مع مهندسينا المعتمدين في جدة للمعاينات الميدانية، وتصميم لوحات التحكم، وبرمجة PLC، وخطط التحديث المتكاملة.'
      : 'Contact our certified automation specialists in Jeddah for site inspection, control panel design, PLC programming, and modernization plans.',
    primaryBtn: isArabic
      ? 'طلب استشارة مجانية'
      : 'Request Free Quote',
    secondaryBtn: isArabic
      ? 'اتصل بنا: 791 076 50 966+'
      : 'Call +966 50 076 1791',
  };

  const content = {
    ...defaultContent,
    ...(t?.industrialHome?.ctaBanner || {}),
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative isolate overflow-hidden bg-[#F8FAFC] py-6 sm:py-9 md:py-10 border-t border-slate-200"
    >
      {/* Background Dot Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Contained Card */}
        <div className="w-full relative overflow-hidden rounded-xl sm:rounded-3xl border border-sky-400/25 bg-[#0074B7] bg-gradient-to-r from-[#006097] via-[#0077B6] to-[#008CC5] px-4 py-5 sm:px-8 sm:py-8 md:px-12 md:py-9 text-center shadow-xl shadow-sky-950/20">
          
          {/* Soft Radial Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.32) 0%, transparent 70%)',
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 mx-auto max-w-5xl">
            {/* Eyebrow Pill Badge - Reduced padding on mobile */}
            <div className="mb-2 sm:mb-2.5 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[9px] sm:text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-xs">
              {content.eyebrow}
            </div>

            {/* Heading - Reduced text size on mobile */}
            <h2 className="mx-auto text-base sm:text-2xl md:text-[1.75rem] lg:text-[2.1rem] font-bold tracking-tight text-white leading-tight md:whitespace-nowrap">
              {content.title}
            </h2>

            {/* Subtitle / Description - Hidden on mobile to save space */}
            <p className="hidden sm:block mx-auto mt-2 max-w-3xl text-xs md:text-sm font-normal leading-relaxed text-white/90">
              {content.desc}
            </p>

            {/* Centered CTA Buttons - Reduced gaps on mobile */}
            <div className="mt-3 sm:mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3.5">
              {/* Primary Button */}
              <Link
                to="/contact"
                onClick={onOpenQuote}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-bold text-slate-900 shadow-md hover:bg-slate-100 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <span>{content.primaryBtn}</span>
                {isArabic ? (
                  <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
                )}
              </Link>

              {/* Secondary Button */}
              <a
                href="tel:+966500761791"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-[#024a75]/60 hover:bg-[#024a75]/85 border border-white/20 hover:border-white/40 px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-white backdrop-blur-xs transition-all duration-200 shadow-sm"
              >
                <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-white" />
                <span dir="ltr">{content.secondaryBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrialCtaBanner;