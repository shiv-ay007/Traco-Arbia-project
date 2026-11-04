import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench } from 'lucide-react';
import industrialBg from '../../assets/header_background_img/industrial.png';

export function IndustrialHero({ t, lang }) {
  return (
    <section className="relative py-12 sm:py-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      <img
        src={industrialBg}
        alt="Industrial Automation Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb Navigation - Hidden on Mobile */}
        <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
          <Link to="/" className="hover:text-[#00A3E8] transition-colors">
            {t.nav.home}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          <span className="text-[#00A3E8]">{t.nav.industrial}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg">
          <Wrench className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="text-white">
            {lang === 'ar' ? 'هندسة الأتمتة الصناعية الدقيقة' : 'Industrial Automation & Factory Engineering'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {lang === 'ar'
            ? 'حلول أتمتة قوية وموثوقة للمصانع والمنشآت السعودية'
            : 'Precision Industrial Automation Solutions'}
        </h1>

        <p className="hidden sm:block text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {lang === 'ar'
            ? 'تريكو العربية تقدم حلولاً هندسية متقدمة في تصنيع لوحات التحكم وبرمجة خطوط الإنتاج والمحركات الكهربائية لتوفير أعلى كفاءة وتقليل التوقف غير المخطط له.'
            : 'Empowering Saudi industrial facilities with rugged control rooms, high-torque motors, fluidic pumps, and PLC control engineered for zero downtime.'}
        </p>

        <div className="flex items-center justify-center">
          <Link
            to="/contact"
            className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustrialHero;
