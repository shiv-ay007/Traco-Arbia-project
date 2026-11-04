import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import contactBg from '../../assets/header_background_img/contact.jpg';

export function ContactHero({ t, lang }) {
  return (
    <section className="relative py-14 sm:py-16 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      {/* Background Image Layer */}
      <img 
        src={contactBg} 
        alt="Contact & Engineering Consultation Center Background" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75" 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
          <Link 
            to="/"
            className="hover:text-[#00A3E8] transition-colors cursor-pointer"
          >
            {t.nav.home}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          <span className="text-[#00A3E8]">{t.nav.contact}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-4 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-white">{lang === 'ar' ? 'تواصل مع فريق تريكو' : 'Get in Touch with Treco Engineers'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {lang === 'ar' ? 'اتصل بنا واحصل على استشارة تقنية' : 'Contact Us & Request Technical Consultation'}
        </h1>

        <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {lang === 'ar' 
            ? 'فريقنا الهندسي في جدة جاهز للإجابة على جميع استفساراتك وتصميم الحل المناسب لمشروعك.' 
            : 'Our engineering team in Jeddah is ready to assist you with tailored smart home and industrial automation engineering.'}
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
