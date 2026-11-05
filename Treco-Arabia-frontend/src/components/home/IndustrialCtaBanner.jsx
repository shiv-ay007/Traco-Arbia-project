import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export function IndustrialCtaBanner({ t, lang = 'en', onOpenQuote }) {
  const isArabic = lang === 'ar';

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="dark-section py-14 sm:py-20 bg-[#07090E] relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Ambient Radial Glows in Treco Brand Cyan */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00A3E8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0086C4]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* FLOATING DARK LUXURY CTA CARD (TRECO ARABIA BRAND CYAN)      */}
        {/* ============================================================ */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#12141C] via-[#0E1017] to-[#0A0B10] border border-white/10 p-7 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
          
          {/* Brand Cyan Corner Light Flare */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#00A3E8]/25 via-cyan-600/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* LEFT SIDE: Eyebrow + Bold Title + Description */}
            <div className="max-w-2xl text-left rtl:text-right">
              
              {/* Eyebrow with Icon in Treco Cyan */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00A3E8] tracking-wider uppercase mb-3">
                <Sparkles className="w-4 h-4 text-[#00A3E8] fill-[#00A3E8]/20" />
                <span>{isArabic ? 'فلنعمل معاً نحو التميز' : "LET'S WORK TOGETHER"}</span>
              </div>

              {/* Main Headline with Treco Cyan Highlight */}
              <h2
                className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.18] mb-3 [text-transform:none!important]"
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', textTransform: 'none' }}
              >
                {isArabic ? (
                  <>
                    هل أنت جاهز لتطوير{' '}
                    <span
                      data-cyan="true"
                      className="text-cyan"
                      style={{ color: '#00A3E8', WebkitTextFillColor: '#00A3E8' }}
                    >
                      عملياتك الصناعية؟
                    </span>
                  </>
                ) : (
                  <>
                    Ready to Upgrade Your{' '}
                    <span
                      data-cyan="true"
                      className="text-cyan"
                      style={{ color: '#00A3E8', WebkitTextFillColor: '#00A3E8' }}
                    >
                      Industrial Operations?
                    </span>
                  </>
                )}
              </h2>

              {/* Subtitle */}
              <p
                className="text-sm sm:text-base font-normal leading-relaxed"
                style={{ color: '#CBD5E1', WebkitTextFillColor: '#CBD5E1' }}
              >
                {isArabic
                  ? 'من مرحلة المفهوم والدراسة إلى التشغيل المتكامل، نحن هنا لتحويل رؤيتك إلى واقع بأعلى معايير الجودة والدقة الهندسية.'
                  : "From concept to completion, we're here to bring your vision to life with precision engineering, certified safety, and unmatched reliability."}
              </p>
            </div>

            {/* RIGHT SIDE: Action Buttons in Treco Brand Color */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 flex-shrink-0">
              
              {/* Primary Button (Treco Signature Cyan) */}
              <Link
                to="/contact"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-xl bg-[#00A3E8] hover:bg-[#0086C4] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#00A3E8]/30 hover:shadow-[#00A3E8]/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer whitespace-nowrap"
              >
                <span>{isArabic ? 'تواصل معنا' : 'Get in Touch'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </Link>

              {/* Secondary Button (Dark Card with Treco Cyan Border & Text) */}
              <a
                href="tel:+966500761791"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl border border-[#00A3E8]/60 hover:border-[#00A3E8] bg-[#0A0B10]/80 hover:bg-[#00A3E8]/10 text-[#00A3E8] hover:text-cyan-300 font-bold text-sm sm:text-base backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#00A3E8]" />
                <span dir="ltr">+966 50 076 1791</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default IndustrialCtaBanner;
