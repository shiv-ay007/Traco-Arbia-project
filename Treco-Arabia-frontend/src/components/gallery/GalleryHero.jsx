import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import imgVillaExterior from '../../assets/gallery/gallery_villa_exterior.jpg';

export function GalleryHero({ t, lang }) {
  const isArabic = lang === 'ar';

  return (
    <section className="relative py-12 sm:py-18 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      <img 
        src={imgVillaExterior} 
        alt="Treco Arabia Gallery Showcase" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb - Hidden on Mobile */}
        <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 drop-shadow-md">
          <Link to="/" className="hover:text-[#00A3E8] transition-colors">
            {t.nav.home}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
          <span className="text-[#00A3E8]">{t.nav.gallery || (isArabic ? 'معرض الصور' : 'Gallery')}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-3.5 shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="text-white">
            {isArabic ? 'معرض المشاريع والمنظومات' : 'Visual Showcase'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 sm:mb-3 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {isArabic 
            ? 'معرض الصور والأعمال الهندسية' 
            : 'Engineering & Smart Living Gallery'}
        </h1>

        <p className="hidden sm:block text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {isArabic
            ? 'استعرض توثيقاً بصرياً فائق الدقة لحلول الأتمتة الصناعية، غرف التحكم، وأنظمة المنازل والقصور الذكية في المملكة.'
            : 'A curated visual showcase of Treco Arabia’s industrial automation systems, robotics, control rooms, and luxury smart residences.'}
        </p>
      </div>
    </section>
  );
}

export default GalleryHero;
