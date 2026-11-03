import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Factory, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

import imgSaso from '../../assets/standards/standards_saso.jpg';
import imgIec from '../../assets/standards/standards_iec.jpg';
import imgIso from '../../assets/standards/standards_iso.jpg';
import imgVision2030 from '../../assets/standards/standards_vision2030.jpg';
import imgScada from '../../assets/standards/standards_scada.jpg';
import emblemWhite from '../../assets/emblem-white.png';

function EngineeringStandards({ t, lang }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(5);
  const [withTransition, setWithTransition] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const content = t?.industrialHome?.standards || {
    eyebrow: lang === 'ar' ? 'التميز الهندسي' : 'ENGINEERING EXCELLENCE',
    title: lang === 'ar' ? 'معتمدة للمواصفات والمقاييس السعودية' : 'Certified for Saudi Industrial Standards',
    subtitle: lang === 'ar' 
      ? 'تُصمم جميع المنظومات لتحمل درجات الحرارة المرتفعة ومطابقة اللوائح الفنية المعتمدة بالمملكة.' 
      : 'Every system is engineered to withstand extreme ambient temperatures and fully complies with KSA regulations.',
    items: [
      { 
        code: 'SASO', 
        title: lang === 'ar' ? 'المواصفات القياسية السعودية (SASO)' : 'SASO Certified Enclosures', 
        desc: lang === 'ar' ? 'لوحات كهربائية ومراكز تحكم MCC مطابقة لمواصفات SASO ومقاومة للمناخ الصحراوي.' : '100% SASO compliant desert-rated electrical enclosures and MCC switchgear.',
        spec: lang === 'ar' ? 'عزل IP55 / IP65 • معتمد مناخياً' : 'IP55 / IP65 • Climate Rated'
      },
      { 
        code: 'IEC', 
        title: lang === 'ar' ? 'معايير التحكم الصناعي IEC 61131-3' : 'IEC 61131-3 PLC Controllers', 
        desc: lang === 'ar' ? 'وحدات تحكم منطقية قابلة للبرمجة (PLC) وبرمجيات أتمتة صناعية بمعايير دولية.' : 'International standard programmable automation controllers and deterministic robotics.',
        spec: lang === 'ar' ? 'إشارات رقمية دقيقة • بروتوكول Fieldbus' : 'Deterministic I/O • Fieldbus'
      },
      { 
        code: 'ISO', 
        title: lang === 'ar' ? 'إدارة الجودة الشاملة ISO 9001:2015' : 'ISO 9001:2015 Quality Precision', 
        desc: lang === 'ar' ? 'فحص قياسي متقدم، قياس دقيق ثلاثي الأبعاد، وضمان الجودة في كافة مراحل التنفيذ.' : 'Certified precision metrology, automated CMM inspection, and robotic quality control.',
        spec: lang === 'ar' ? 'تدقيق معتمد • قياس ثلاثي الأبعاد CMM' : 'Zero-Defect Audit • Calibrated'
      },
      { 
        code: 'KSA 2030', 
        title: lang === 'ar' ? 'مصانع المستقبل - رؤية المملكة 2030' : 'Vision 2030 Smart Plants', 
        desc: lang === 'ar' ? 'أتمتة خطوط الإنتاج والتقنيات الروبوتية دعماً لبرنامج تطوير الصناعة الوطنية (NIDLP).' : 'Aligned with the National Industrial Development & Logistics Program (NIDLP).',
        spec: lang === 'ar' ? 'الثورة الصناعية 4.0 • هندسة وطنية' : 'Industry 4.0 • Saudi Engineered'
      },
      { 
        code: 'SCADA', 
        title: lang === 'ar' ? 'مراكز التحكم الإشرافي والمراقبة SCADA' : 'Mission-Critical SCADA Centers', 
        desc: lang === 'ar' ? 'أنظمة مراقبة وتحكم إشرافي موزعة مع شاشات مؤشرات فورية لإدارة المصانع والمنشآت.' : 'Distributed control systems with redundant real-time plant telemetry and telemetry walls.',
        spec: lang === 'ar' ? 'تشغيل متواصل 24/7 • مراقبة فورية' : '24/7 Redundant • Real-Time Telemetry'
      }
    ]
  };

  const images = [imgSaso, imgIec, imgIso, imgVision2030, imgScada];
  const originalItems = content.items || [];
  const totalOriginal = originalItems.length;

  const extendedItems = [...originalItems, ...originalItems, ...originalItems];
  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const autoInterval = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex(prev => prev + 1);
    }, 3200);

    return () => clearInterval(autoInterval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setWithTransition(false);
      setCurrentIndex(currentIndex - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setWithTransition(false);
      setCurrentIndex(currentIndex + totalOriginal);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  const nextSlide = () => {
    setWithTransition(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeDot = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;

  return (
    <section 
      id="engineering-standards"
      className="pt-16 sm:pt-24 pb-12 sm:pb-24 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background Layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(0, 163, 232, 0.16), transparent 55%),
            radial-gradient(ellipse 70% 70% at 85% 110%, rgba(99, 102, 241, 0.12), transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(224, 242, 254, 0.7), transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(6, 182, 212, 0.10), transparent 60%),
            linear-gradient(155deg, #FFFFFF 0%, #FAFCFF 15%, #F0F7FF 30%, #E8F4FE 50%, #E0F2FE 65%, #EBF8FF 80%, #F8FCFF 92%, #FFFFFF 100%)
          `
        }}
      />
      <div className="absolute inset-0 opacity-70 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 45%, rgba(0, 163, 232, 0.07) 0%, transparent 60%)' }} />
      <div className="absolute -top-40 -right-40 w-[750px] h-[750px] bg-gradient-to-bl from-[#00A3E8]/15 to-transparent blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400/12 to-transparent blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-cyan-300/10 blur-[150px] pointer-events-none rounded-full" />
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 120px, #00A3E8 120px, #00A3E8 121px)` }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-8 gap-3 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-[#00A3E8]/15 via-[#00A3E8]/8 to-transparent border border-[#00A3E8]/35 text-[#00A3E8] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-4 shadow-[0_4px_20px_rgba(0,163,232,0.15)] backdrop-blur-sm">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{content.eyebrow}</span>
            </div>
            
            <h2 className="text-xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                {content.title}
              </span>
            </h2>

            {/* Subtitle Hidden on Mobile */}
            <p className="hidden sm:block mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* NEW ARROW CONTROL BAR - Positioned Right Above Carousel   */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between w-full mb-3 sm:mb-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous standard"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-[#00A3E8] hover:bg-white text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_15px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_25px_rgba(0,163,232,0.15)] hover:scale-105"
          >
            <ChevronLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next standard"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#00A3E8] to-[#0086C4] hover:from-cyan-400 hover:to-[#00A3E8] text-white flex items-center justify-center transition-all cursor-pointer shadow-[0_6px_20px_rgba(0,163,232,0.4)] hover:shadow-[0_8px_25px_rgba(0,163,232,0.55)] hover:scale-105 font-black"
          >
            <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* CAROUSEL SLIDER TRACK */}
        <div 
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: withTransition ? 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, idx) => {
              const img = extendedImages[idx] || images[0];
              return (
                <div 
                  key={idx}
                  className="px-1 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-[#00A3E8]/60 bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(0,163,232,0.15)] flex flex-col h-full cursor-pointer hover:-translate-y-1">
                    
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={img} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-100 contrast-[1.02]"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    {/* Bottom Cyan Shimmer */}
                    <div className="h-0.5 sm:h-1 w-full bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {originalItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setWithTransition(true);
                setCurrentIndex(totalOriginal + idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === idx 
                  ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-[#00A3E8] to-[#0086C4] shadow-[0_2px_8px_rgba(0,163,232,0.4)]' 
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-300 hover:bg-[#00A3E8]/50'
              }`}
            />
          ))}
        </div>

        {/* Brand Authenticity Strip */}
        <div className="mt-8 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-start">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 sm:p-2 flex-shrink-0 shadow-[0_4px_15px_rgba(15,23,42,0.15)]">
              <img 
                src={emblemWhite} 
                alt="Treco Arabia" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-[10px] sm:text-sm font-black text-slate-900 tracking-wide">
                {lang === 'ar' ? 'تريكو العربية للمقاولات والأتمتة' : 'TRECO ARABIA INDUSTRIAL DIVISION'}
              </div>
              <div className="text-[9px] sm:text-[11px] text-slate-500">
                {lang === 'ar' ? 'جدة • المنطقة الصناعية • المملكة العربية السعودية' : 'Jeddah Industrial City • Western Province, Saudi Arabia'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-[#00A3E8]">
              <Factory className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{lang === 'ar' ? 'فريق هندسي محلي معتمد' : 'Local Certified Engineering Team'}</span>
            </div>
            <div className="h-3 sm:h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-slate-600">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3E8]" />
              <span>{lang === 'ar' ? 'ضمان شامل ودعم ميداني' : 'Comprehensive Warranty & Field Support'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EngineeringStandards;