import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, ArrowLeft, ArrowRight, Smartphone } from 'lucide-react';

import imgLighting from '../assets/offerings_products/smart_lighting.jpg';
import imgThermostat from '../assets/offerings_products/smart_ac.jpg';
import imgHvac from '../assets/offerings_products/central_hvac.jpg';
import imgCurtains from '../assets/offerings_products/motorized_curtains.jpg';
import imgLock from '../assets/offerings_products/biometric_lock.jpg';
import imgCctv from '../assets/offerings_products/cctv_camera.jpg';
import imgDoorbell from '../assets/offerings_products/smart_doorbell.jpg';
import imgSpeakers from '../assets/offerings_products/smart_speakers.jpg';

function OfferingsSection({ lang = 'en', onOpenQuote }) {
  const isArabic = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelEn: 'All Systems', labelAr: 'كافة المنظومات' },
    { id: 'lighting_climate', labelEn: 'Lighting & Climate', labelAr: 'الإضاءة والمناخ' },
    { id: 'security', labelEn: 'Security & Access', labelAr: 'الأمان والمداخل' },
    { id: 'entertainment', labelEn: 'Audio & Media', labelAr: 'الصوتيات والترفيه' },
  ];

  const devices = [
    {
      id: 'lighting',
      cat: 'lighting_climate',
      image: imgLighting,
      titleEn: 'Smart Architectural Lighting',
      titleAr: 'الإضاءة المعمارية الذكية',
      link: '/smart-home'
    },
    {
      id: 'thermostat',
      cat: 'lighting_climate',
      image: imgThermostat,
      titleEn: 'Smart Digital Thermostats',
      titleAr: 'ترموستات التكييف الذكي',
      link: '/smart-home'
    },
    {
      id: 'hvac',
      cat: 'lighting_climate',
      image: imgHvac,
      titleEn: 'Central HVAC Control',
      titleAr: 'أنظمة التكييف المركزي',
      link: '/smart-home'
    },
    {
      id: 'curtains',
      cat: 'lighting_climate',
      image: imgCurtains,
      titleEn: 'Motorized Smart Curtains',
      titleAr: 'الستائر الكهربائية الصامتة',
      link: '/smart-home'
    },
    {
      id: 'lock',
      cat: 'security',
      image: imgLock,
      titleEn: 'Biometric Smart Locks',
      titleAr: 'الأقفال البيومترية الذكية',
      link: '/smart-home'
    },
    {
      id: 'cctv',
      cat: 'security',
      image: imgCctv,
      titleEn: '4K AI Security Cameras',
      titleAr: 'كاميرات المراقبة الذكية AI',
      link: '/smart-home'
    },
    {
      id: 'doorbell',
      cat: 'security',
      image: imgDoorbell,
      titleEn: 'Smart Video Intercom',
      titleAr: 'الجرس والإنتركوم المرئي',
      link: '/smart-home'
    },
    {
      id: 'speakers',
      cat: 'entertainment',
      image: imgSpeakers,
      titleEn: 'Multi-Room Audio Systems',
      titleAr: 'النظام الصوتي الموزع',
      link: '/smart-home'
    },
  ];

  const filteredDevices = activeCategory === 'all'
    ? devices
    : devices.filter(d => d.cat === activeCategory);

  return (
    <section 
      id="offerings" 
      dir={isArabic ? 'rtl' : 'ltr'}
      className="pt-20 sm:pt-24 pb-10 sm:pb-16 relative bg-gradient-to-b from-white via-[#F4F9FD] to-[#EBF5FC]/60 text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      {/* Decorative Ambient Cyan Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Micro-Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimal & Compact */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-[#00A3E8]/30 text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? 'المنظومات الذكية المعتمدة' : 'SMART LIVING HARDWARE'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {isArabic 
                ? 'حلول أتمتة معمارية متكاملة' 
                : 'Architectural Smart Systems & Hardware'}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mt-1.5">
              {isArabic 
                ? 'أجهزة ومنظومات متطورة تم اختيارها وتجهيزها هندسياً لتناسب الفلل والقصور والمشاريع الحديثة بالمملكة.' 
                : 'Engineered hardware lineup tailored for luxury villas, residences, and modern smart projects in Saudi Arabia.'}
            </p>
          </div>

          {/* Minimal Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:justify-end">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? devices.length 
                : devices.filter(d => d.cat === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white/90 text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200'
                  }`}
                >
                  <span>{isArabic ? cat.labelAr : cat.labelEn}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-[#00A3E8] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Compact Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredDevices.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-white/95 rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#00A3E8]/60 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(0,163,232,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Photo Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={isArabic ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Top Overlay Action Arrow (Badge Removed) */}
                <div className="absolute top-2.5 right-2.5 flex items-center justify-end pointer-events-none">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-md text-slate-800 flex items-center justify-center shadow-xs group-hover:bg-[#00A3E8] group-hover:text-white transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>

              {/* Minimal Caption Area (Compact & Clean) */}
              <div className="p-3 sm:p-3.5 flex items-center justify-between flex-grow">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#00A3E8] transition-colors leading-snug line-clamp-1">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
              </div>

              {/* Bottom Subtle Shimmer Line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* Compact Bottom Package Callout Card */}
        <div className="mt-8 sm:mt-10 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-[#00A3E8]/10 border border-[#00A3E8]/25 flex items-center justify-center text-[#00A3E8] shrink-0 mx-auto sm:mx-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {isArabic 
                  ? 'هل تريد باقة مخصصة تجمع هذه المنظومات لمشروعك؟' 
                  : 'Looking for a Complete Tailored Smart Package?'}
              </h4>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                {isArabic
                  ? 'مهندسونا في جدة يصممون لك منظومة موحدة تدمج كافة هذه الأجهزة في شاشات لمس وتطبيق هاتف واحد.'
                  : 'Our Jeddah engineers design turnkey packages integrating all devices into unified touchscreens and smartphone control.'}
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E8] hover:bg-[#0086C4] text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>{isArabic ? 'طلب استشارة' : 'Request Consultation'}</span>
            {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OfferingsSection;