import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Hotel, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Award, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';

import imgVilla from '../../assets/gallery/gallery_villa_exterior.jpg';
import imgCompound from '../../assets/gallery/gallery_kitchen.jpg';
import imgCommercial from '../../assets/gallery/gallery_scada.jpg';
import imgHospitality from '../../assets/gallery/gallery_cinema.jpg';

function SmartHomeSecondary({ t, lang = 'en', onOpenQuote }) {
  const isArabic = lang === 'ar';
  const [activeTab, setActiveTab] = useState(0);

  // Sector Solutions inspired by Saudi Smart Home benchmark (smarta.com.sa)
  const sectors = [
    {
      id: 'villas',
      icon: Home,
      tabTitle: isArabic ? 'الفلل والقصور' : 'Villas & Mansions',
      badge: isArabic ? 'القطاع السكني الفاخر' : 'Luxury Residential',
      title: isArabic 
        ? 'أتمتة ذكية متكاملة للفلل والقصور الفاخرة' 
        : 'Smart Living Systems for Villas & Private Mansions',
      desc: isArabic
        ? 'تحكم متناغم بلمسة واحدة في الإضاءة المحيطية، التكييف، الستائر الكهربائية، والأنظمة الصوتية المخفية مع حماية بيومترية متطورة.'
        : 'Unified one-touch control of circadian ambient lighting, multi-zone HVAC, motorized drapery, and concealed architectural sound with biometric access.',
      image: imgVilla,
      highlights: [
        isArabic ? 'إضاءة DALI & KNX ديناميكية' : 'DALI & KNX Dynamic Lighting',
        isArabic ? 'تحكم تكييف ذكي يوفر حتى ٣٥٪' : 'Smart Climate saving up to 35%',
        isArabic ? 'ستائر كهربائية متزامنة' : 'Motorized Circadian Shading',
        isArabic ? 'أقفال رقمية ببصمة اليد والوجه' : 'Biometric Face & Fingerprint Locks'
      ],
      statNum: '100%',
      statLabel: isArabic ? 'تحكم لاسلكي وعبر الباص' : 'Bus & Wireless Automation'
    },
    {
      id: 'compounds',
      icon: Layers,
      tabTitle: isArabic ? 'المشاريع والمجمعات' : 'Residential Compounds',
      badge: isArabic ? 'التطوير العقاري' : 'Real Estate Projects',
      title: isArabic 
        ? 'حلول المنازل الذكية للمجمعات والمشاريع السكنية' 
        : 'Integrated Smart Systems for Real Estate & Compounds',
      desc: isArabic
        ? 'بنية تحتية موحدة للأنتركم الذكي، كاميرات الذكاء الاصطناعي، محطات شحن السيارات الكهربائية، وإدارة مركزية للمرافق.'
        : 'Standardized infrastructure for smart video intercoms, AI surveillance cameras, EV charging stations, and centralized compound facility management.',
      image: imgCompound,
      highlights: [
        isArabic ? 'أنتركم مرئي سحابي ذكي' : 'Cloud Smart Video Intercom',
        isArabic ? 'محطات شحن سيارات كهربائية (EV)' : 'Integrated EV Charging Stations',
        isArabic ? 'كاميرات مراقبة ذكية بالذكاء الاصطناعي' : 'Intelligent AI Security Cameras',
        isArabic ? 'تطبيق موحد للسكان والملاك' : 'Unified Resident & Tenant App'
      ],
      statNum: '500+',
      statLabel: isArabic ? 'وحدة سكنية مجهزة' : 'Integrated Residential Units'
    },
    {
      id: 'commercial',
      icon: Building2,
      tabTitle: isArabic ? 'المكاتب والأبراج' : 'Commercial & Offices',
      badge: isArabic ? 'قطاع الأعمال' : 'Commercial Enterprise',
      title: isArabic 
        ? 'أتمتة المنشآت والمكاتب الإدارية لترشيد الطاقة' 
        : 'Intelligent Automation for Corporate Offices & Towers',
      desc: isArabic
        ? 'أنظمة إدارة مباني (BMS) ذكية، أتمتة قاعات الاجتماعات بلمسة واحدة، وضبط الحساسات التلقائية لتقليل الهدر الكهربائي.'
        : 'Intelligent Building Management Systems (BMS), single-touch boardroom automation, and presence-based energy reduction optimizing operational costs.',
      image: imgCommercial,
      highlights: [
        isArabic ? 'أتمتة قاعات الاجتماعات والعرض' : '1-Touch Boardroom Automation',
        isArabic ? 'حساسات حركة للإضاءة والتكييف' : 'Occupancy Climate & Lighting Sensors',
        isArabic ? 'ربط مركزي SCADA / BMS' : 'Centralized SCADA / BMS Integration',
        isArabic ? 'تقارير فورية لاستهلاك الطاقة' : 'Real-time Energy Telemetry'
      ],
      statNum: '-35%',
      statLabel: isArabic ? 'انخفاض في استهلاك الطاقة' : 'Verified Energy Optimization'
    },
    {
      id: 'hotels',
      icon: Hotel,
      tabTitle: isArabic ? 'الفنادق والضيافة' : 'Hotels & Hospitality',
      badge: isArabic ? 'قطاع الضيافة' : 'Boutique Hospitality',
      title: isArabic 
        ? 'أنظمة إدارة غرف النزلاء (GRMS) للفنادق الفاخرة' 
        : 'Guest Room Management Systems (GRMS) for Luxury Hotels',
      desc: isArabic
        ? 'تجربة إقامة استثنائية مع سيناريوهات الترحيب التلقائية، الدخول الرقمي بدون مفتاح، ومراقبة مركزية للاستهلاك لتعزيز الربحية.'
        : 'Unparalleled guest experience featuring automated welcome scenes, mobile keyless access, and central energy telemetry maximizing hospitality ROI.',
      image: imgHospitality,
      highlights: [
        isArabic ? 'سيناريوهات ترحيب ذكية عند الدخول' : 'Automated Welcome Ambience',
        isArabic ? 'دخول رقمي عبر الهاتف المحمول' : 'Mobile Keyless Room Access',
        isArabic ? 'إدارة مركزية لراحة النزلاء وتوفير الطاقة' : 'Central Energy & Comfort Management',
        isArabic ? 'ربط مباشر بأنظمة الفنادق PMS' : 'Direct PMS Software Integration'
      ],
      statNum: '24/7',
      statLabel: isArabic ? 'إشراف ومراقبة مركزية' : 'Centralized Telemetry'
    }
  ];

  const currentSector = sectors[activeTab];

  return (
    <section className="pt-20 sm:pt-24 pb-16 sm:pb-24 text-slate-900 border-b border-slate-200 relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-[#EFF6FF]">
      
      {/* Background Ambience Layers */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px'
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00A3E8]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-500/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER: Smarta Saudi Vision 2030 Benchmark Style    */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-black uppercase tracking-wider shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{isArabic ? 'حلول المنازل والمنشآت الذكية بالسعودية' : 'Smart Home & Building Automation in Saudi Arabia'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-1">
            {isArabic ? (
              <>
                أنظمة أتمتة متكاملة تواكب <span className="text-[#00A3E8]">رؤية السعودية ٢٠٣٠</span>
              </>
            ) : (
              <>
                Integrated Smart Systems Driving <span className="text-[#00A3E8]">Saudi Vision 2030</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
            {isArabic
              ? 'نحول الفلل والقصور والمنشآت التجارية إلى بيئات ذكية بالكامل توفر أقصى درجات الراحة والأمان وترشيد الطاقة بأعلى معايير الجودة العالمية.'
              : 'Transforming luxury residences, residential compounds, and commercial buildings into intelligent spaces maximizing comfort, security, and energy efficiency.'}
          </p>

              

        </div>

        {/* ============================================================ */}
        {/* SECTOR SWITCHER TABS (4 Pillars)                             */}
        {/* ============================================================ */}
        <div className="flex items-center justify-start sm:justify-center gap-5 overflow-x-auto pb-1 mb-8 no-scrollbar">
          {sectors.map((sec, idx) => {
            const IconComponent = sec.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#00A3E8] text-white border-[#00A3E8] shadow-[0_4px_20px_rgba(0,163,232,0.35)] scale-[1.02]'
                    : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#00A3E8]'}`} />
                <span>{sec.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE SHOWCASE CARD: SLIDE-IN FROM RIGHT EFFECT        */}
        {/* ============================================================ */}
        <div className="rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(15,23,42,0.08),0_0_40px_rgba(0,163,232,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
            
            {/* Left Content Area (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                
                {/* Sector Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[#00A3E8] text-[11px] font-black uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8] animate-pulse" />
                  <span>{currentSector.badge}</span>
                </div>

                {/* Heading */}
                <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                  {currentSector.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 max-w-xl">
                  {currentSector.desc}
                </p>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
                  {currentSector.highlights.map((h, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#00A3E8]/40 hover:bg-sky-50/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E8] flex-shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 leading-tight">{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Actions & Trust Metric */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00A3E8]/15 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] font-black text-sm">
                    {currentSector.statNum}
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">{currentSector.statLabel}</div>
                    <div className="text-[10px] font-semibold text-slate-500">
                      {isArabic ? 'ضمان شامل ودعم محلي' : 'Comprehensive local warranty'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {onOpenQuote && (
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-500 text-white font-black text-xs shadow-md transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
                    </button>
                  )}

                  <Link
                    to="/smart-home"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                  >
                    <span>{isArabic ? 'التفاصيل' : 'Explore'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                  </Link>
                </div>

              </div>
            </div>

            {/* Right Visual Image Area with Framer Motion Slide-in (5 Cols) */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-slate-900 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSector.id}
                  initial={{ opacity: 0, x: isArabic ? -70 : 70, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: isArabic ? 40 : -40, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={currentSector.image} 
                    alt={currentSector.title}
                    className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02]"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Live Indicator Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E8] animate-ping" />
                      <span>{isArabic ? 'عرض حي' : 'Interactive Preview'}</span>
                    </span>
                  </div>

                  

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SmartHomeSecondary;