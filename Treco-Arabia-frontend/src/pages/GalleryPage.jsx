import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

// Industrial Gallery Images
import imgRobotics from '../assets/gallery/gallery_robotics.jpg';
import imgScada from '../assets/gallery/gallery_scada.jpg';
import imgControlRoom from '../assets/industrial_products/elctrical_controll_room.jpeg';
import imgPump from '../assets/industrial_products/pump.jpeg';
import imgValve from '../assets/industrial_products/valve.jpeg';
import imgMotor from '../assets/industrial_products/moter.jpeg';

// Smart Home & Living Gallery Images
import imgVillaExterior from '../assets/gallery/gallery_villa_exterior.jpg';
import imgHomeCinema from '../assets/gallery/gallery_cinema.jpg';
import imgSmartKitchen from '../assets/gallery/gallery_kitchen.jpg';
import imgSmartLighting from '../assets/offerings_products/smart_lighting.jpg';
import imgSmartThermostat from '../assets/offerings_products/smart_ac.jpg';
import imgCentralHvac from '../assets/offerings_products/central_hvac.jpg';
import imgMotorizedCurtains from '../assets/offerings_products/motorized_curtains.jpg';
import imgBiometricLock from '../assets/offerings_products/biometric_lock.jpg';

// Security & Surveillance Gallery Images
import imgCctvCamera from '../assets/offerings_products/cctv_camera.jpg';
import imgSmartDoorbell from '../assets/offerings_products/smart_doorbell.jpg';

function GalleryPage({ t, lang, onOpenQuote }) {
  const isArabic = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', labelEn: 'All Systems', labelAr: 'كافة المنظومات' },
    { id: 'smart-home', labelEn: 'Smart Home & Living', labelAr: 'المنزل الذكي والفلل' },
    { id: 'industrial', labelEn: 'Industrial Automation', labelAr: 'الأتمتة الصناعية' },
    { id: 'security', labelEn: 'Security & Access', labelAr: 'الأمان والتحكم' },
  ];

  const galleryItems = [
    { id: 1, cat: 'smart-home', image: imgVillaExterior },
    { id: 2, cat: 'industrial', image: imgRobotics },
    { id: 3, cat: 'smart-home', image: imgSmartLighting },
    { id: 4, cat: 'industrial', image: imgScada },
    { id: 5, cat: 'smart-home', image: imgHomeCinema },
    { id: 6, cat: 'industrial', image: imgControlRoom },
    { id: 7, cat: 'smart-home', image: imgSmartKitchen },
    { id: 8, cat: 'smart-home', image: imgSmartThermostat },
    { id: 9, cat: 'security', image: imgBiometricLock },
    { id: 10, cat: 'industrial', image: imgPump },
    { id: 11, cat: 'smart-home', image: imgMotorizedCurtains },
    { id: 12, cat: 'security', image: imgCctvCamera },
    { id: 13, cat: 'smart-home', image: imgCentralHvac },
    { id: 14, cat: 'industrial', image: imgValve },
    { id: 15, cat: 'security', image: imgSmartDoorbell },
    { id: 16, cat: 'industrial', image: imgMotor },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.cat === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="pt-20 bg-white min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      
      {/* ========================================================= */}
      {/* 1. HERO BANNER                                            */}
      {/* ========================================================= */}
      <section className="relative py-12 sm:py-18 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src={imgVillaExterior} 
          alt="Treco Arabia Gallery Showcase" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75"
        />
        {/* Increased Darkness Overlay for Mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
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

          {/* Description - Hidden on Mobile */}
          <p className="hidden sm:block text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {isArabic
              ? 'استعرض توثيقاً بصرياً فائق الدقة لحلول الأتمتة الصناعية، غرف التحكم، وأنظمة المنازل والقصور الذكية في المملكة.'
              : 'A curated visual showcase of Treco Arabia’s industrial automation systems, robotics, control rooms, and luxury smart residences.'}
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. GALLERY GRID SECTION                                   */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-16 relative bg-gradient-to-b from-white via-[#F4F9FD] to-[#EBF5FC]/60 border-b border-slate-200 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Filter Tabs - Horizontally Scrollable on Mobile */}
          <div className="w-full overflow-x-auto pb-2 mb-6 sm:mb-12 hide-scrollbar">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2.5 min-w-max">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = cat.id === 'all' 
                  ? galleryItems.length 
                  : galleryItems.filter(i => i.cat === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shadow-2xs whitespace-nowrap ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                        : 'bg-white/95 text-slate-600 hover:text-slate-950 hover:bg-white border border-slate-200'
                    }`}
                  >
                    <span>{isArabic ? cat.labelAr : cat.labelEn}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold ${
                      isActive ? 'bg-[#00A3E8] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 16 Image Cards - Tighter gap on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/90 hover:border-[#00A3E8] shadow-sm hover:shadow-[0_12px_30px_rgba(0,163,232,0.20)] hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none"
              >
                <img
                  src={item.image}
                  alt={`Treco Arabia Gallery photo ${idx + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#00A3E8] shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* BOTTOM CTA CARD */}
          <div className="mt-8 sm:mt-16 bg-white/95 backdrop-blur-sm p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
            <div className="text-center sm:text-start">
              <h3 className="text-sm sm:text-xl font-bold text-slate-900">
                {isArabic 
                  ? 'هل ترغب في تنفيذ مشروع مماثل لمنشأتك أو فيلتك؟' 
                  : 'Interested in a Similar Installation?'}
              </h3>
              <p className="hidden sm:block text-xs sm:text-sm text-slate-500 font-normal mt-1">
                {isArabic
                  ? 'تواصل مع فريقنا الهندسي في جدة للحصول على دراسة موقعية واستشارة فنية مخصصة.'
                  : 'Speak with our engineering specialists in Jeddah for technical site surveys and custom automation blueprints.'}
              </p>
            </div>

            <Link
              to="/contact"
              onClick={onOpenQuote}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-[#00A3E8] hover:bg-[#0086C4] text-white font-bold text-[11px] sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>{isArabic ? 'تواصل معنا الآن' : 'Contact Our Team'}</span>
              {isArabic ? <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FULLSCREEN LIGHTBOX MODAL WITH BLUR                    */}
      {/* ========================================================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Background Blur Overlay */}
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-2xl backdrop-saturate-150" />

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg backdrop-blur-md group"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-[#00A3E8] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 backdrop-blur-md shadow-xl group"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-[#00A3E8] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 backdrop-blur-md shadow-xl group"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Image Container */}
          <div 
            className="relative z-10 max-w-6xl max-h-[85vh] w-full flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={filteredItems[lightboxIndex]?.image}
              alt="Treco Fullscreen Showcase"
              className="max-w-full max-h-[85vh] object-contain rounded-lg sm:rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/10"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default GalleryPage;