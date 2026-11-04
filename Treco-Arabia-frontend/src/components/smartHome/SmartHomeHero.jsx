import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import smartHomeBg from '../../assets/header_background_img/smart-home.png';

export function SmartHomeHero({ t, lang }) {
  const isArabic = lang === 'ar';

  return (
    <section className="relative py-12 sm:py-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      <img 
        src={smartHomeBg} 
        alt="Smart Home Automation Background" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 drop-shadow-md">
          <Link to="/" className="hover:text-[#00A3E8] transition-colors">
            {t.nav.home}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
          <span className="text-[#00A3E8]">{t.nav.smartHome}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="text-white">{isArabic ? 'حلول المنازل الذكية الفاخرة' : 'Next-Gen Smart Living'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 sm:mb-3 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {isArabic 
            ? 'حوّل منزلك إلى مساحة ذكية متكاملة ومترفة' 
            : 'Next-Generation Smart Home Automation'}
        </h1>

        <p className="text-slate-200 text-[11px] sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-5 sm:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2">
          {isArabic
            ? 'أتمتة متكاملة للإضاءة، التكييف، الستائر، والأقفال الذكية المصممة خصيصاً للفلل والقصور بالمملكة.'
            : 'Unified ambient lighting, intelligent climate regulation, motorized curtains, and biometric security tailored for modern Saudi residences.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
          >
            {t.nav.contact}
          </Link>
          <a
            href="#visualizer"
            className="w-full sm:w-auto px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
          >
            {isArabic ? 'معاينة تجربة الغرف' : 'Explore Room Demo'}
          </a>
        </div>

      </div>
    </section>
  );
}

export default SmartHomeHero;
