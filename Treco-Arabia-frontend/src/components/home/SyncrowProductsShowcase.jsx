import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Thermometer, Lock, Cpu, Wind } from 'lucide-react';

import screen01 from '../../assets/syncrow_products/app_screen_01.webp';
import screen02 from '../../assets/syncrow_products/app_screen_02.webp';
import screen03 from '../../assets/syncrow_products/app_screen_03.webp';
import screen04 from '../../assets/syncrow_products/app_screen_04.webp';

import catThermal from '../../assets/syncrow_products/cat_thermal.webp';
import catSecurity from '../../assets/syncrow_products/cat_security.webp';
import catHub from '../../assets/syncrow_products/cat_hub.webp';
import catWellness from '../../assets/syncrow_products/cat_wellness.webp';
import catAccess from '../../assets/syncrow_products/cat_access.webp';
import catEnergy from '../../assets/syncrow_products/cat_energy.webp';

function SyncrowProductsShowcase({ lang = 'en', onOpenQuote }) {
  const isArabic = lang === 'ar';
  const showcaseRef = useRef(null);

  // Scroll Progress for Smooth Parallax Wave
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start'],
  });

  // Alternating scroll parallax translations (Syncrow exact animation)
  const yParallaxDown1 = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const yParallaxUp1 = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const yParallaxDown2 = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  const yParallaxUp2 = useTransform(scrollYProgress, [0, 1], [35, -35]);

  const screens = [
    {
      id: 'screen-1',
      title: isArabic ? 'إدارة الغرف والأجهزة' : 'Room & Device Control',
      badge: isArabic ? 'واجهة المستخدم' : 'Space Control',
      img: screen01,
      yMotion: yParallaxDown1,
      desc: isArabic ? 'تحكم كامل بكل غرفة وجهاز بنقرة واحدة' : 'Unified control across every room in your building',
    },
    {
      id: 'screen-2',
      title: isArabic ? 'مستشعرات جودة الهواء' : 'Air Quality & Telemetry',
      badge: isArabic ? 'صحة ورفاهية' : 'Health Telemetry',
      img: screen02,
      yMotion: yParallaxUp1,
      desc: isArabic ? 'قراءات مباشرة للرطوبة، الحرارة وCO2' : 'Real-time indoor air index, humidity and CO2 metrics',
    },
    {
      id: 'screen-3',
      title: isArabic ? 'التكييف والمناخ الذكي' : 'Climate & HVAC Slider',
      badge: isArabic ? 'كفاءة الطاقة' : 'Thermal Management',
      img: screen03,
      yMotion: yParallaxDown2,
      desc: isArabic ? 'جدولة وضبط درجات الحرارة بدقة عالية' : 'Precision multi-zone HVAC temperature automation',
    },
    {
      id: 'screen-4',
      title: isArabic ? 'تحليلات وترشيد الاستهلاك' : 'Energy Savings Analytics',
      badge: isArabic ? 'تقارير فورية' : 'Power Insights',
      img: screen04,
      yMotion: yParallaxUp2,
      desc: isArabic ? 'رسوم بيانية توضح توفير الطاقة والكلفة' : 'Actionable telemetry reducing monthly power bills',
    },
  ];

  const categories = [
    {
      id: 'thermal',
      titleEn: 'Thermal Control',
      titleAr: 'التحكم الحراري والمناخ',
      descEn: 'Smart thermostats and motorized shades regulating indoor ambiance seamlessly.',
      descAr: 'منظمات حرارة ذكية وستائر كهربائية لتنظيم المناخ الداخلي بتناغم كامل.',
      badgeEn: 'CLIMATE & COMFORT',
      badgeAr: 'المناخ والراحة',
      icon: Thermometer,
      img: catThermal,
    },
    {
      id: 'security',
      titleEn: 'Safety & Security',
      titleAr: 'حلول الأمن والسلامة',
      descEn: 'Indoor AI cameras, motion sensors, and water leak detectors guarding your assets.',
      descAr: 'كاميرات مراقبة ذكية، مستشعرات حركة وكواشف تسرب المياه لحماية ممتلكاتك.',
      badgeEn: '24/7 PROTECTION',
      badgeAr: 'أمان استباقي',
      icon: ShieldCheck,
      img: catSecurity,
    },
    {
      id: 'hub',
      titleEn: 'Central Hub & Touch Controls',
      titleAr: 'التحكم المركزي وشاشات اللمس',
      descEn: 'Architectural wall touch panels, smart remotes, and intelligent interactive mirrors.',
      descAr: 'شاشات لمس جدارية معمارية، ريموت محمول ذكي، ومرايا ذكية تفاعلية.',
      badgeEn: 'UNIFIED GATEWAY',
      badgeAr: 'بوابة موحدة',
      icon: Cpu,
      img: catHub,
    },
    {
      id: 'wellness',
      titleEn: 'Wellness Solutions',
      titleAr: 'حلول جودة الحياة والبيئة',
      descEn: 'Integrated smart air purifiers, humidifiers, and real-time environmental sensors.',
      descAr: 'أجهزة تنقية الهواء الذكية، مرطبات الأجواء، وحساسات مراقبة البيئة الداخلية.',
      badgeEn: 'HEALTHIER SPACES',
      badgeAr: 'بيئة نقية',
      icon: Wind,
      img: catWellness,
    },
    {
      id: 'access',
      titleEn: 'Smart Access Control',
      titleAr: 'منظومات الدخول الذكي',
      descEn: 'Facial recognition smart locks, biometric entry, and video intercom stations.',
      descAr: 'أقفال ذكية بتقنية التعرف على الوجه، بصمة الإصبع، وأجهزة فيديو إنتركم متطورة.',
      badgeEn: 'BIOMETRIC ACCESS',
      badgeAr: 'دخول بيومتري',
      icon: Lock,
      img: catAccess,
    },
    {
      id: 'energy',
      titleEn: 'Energy Saving Optimization',
      titleAr: 'ترشيد وتحسين الطاقة',
      descEn: 'Smart water meters, power monitoring clamps, and predictive heater switches.',
      descAr: 'عدادات مياه ذكية، مشابك قياس استهلاك الطاقة، ومفاتيح سخانات موفرة للكهرباء.',
      badgeEn: 'SUSTAINABILITY',
      badgeAr: 'استدامة وترشيد',
      icon: Zap,
      img: catEnergy,
    },
  ];

  return (
    <section 
      ref={showcaseRef}
      className="pt-18 sm:pt-18 pb-16 sm:pb-24 bg-gradient-to-b from-[#EAF4FB] via-white to-[#EAF4FB] text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Ambient Lighting Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00A3E8]/10 via-sky-400/5 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 right-10 w-[500px] h-[400px] bg-blue-500/8 blur-[140px] pointer-events-none rounded-full" />

      {/* Decorative Tech Dot Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============================================================ */}
        {/* 1. THE 6-CATEGORY SMART IOT DEVICES GRID (ABOVE NOW)         */}
        {/* ============================================================ */}
        <div className="mb-18 sm:mb-20">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
            >
              {isArabic ? (
                <>
                  أجهزة إنترنت الأشياء الذكية <span className="text-[#00A3E8]">لتلبية كافة احتياجاتك</span>
                </>
              ) : (
                <>
                  Smart IoT Devices <span className="text-[#00A3E8]">to Power Your Automation Needs</span>
                </>
              )}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed"
            >
              {isArabic
                ? 'صُممت لتوفير أعلى درجات الاعتمادية. تتصل أجهزتنا بسلاسة عبر منظومة موحدة لضمان أداء مستمر في كافة مساحاتك.'
                : 'Built for reliability. Designed for you. Our IoT devices connect seamlessly through unified protocols to ensure consistent performance across all your spaces.'}
            </motion.p>
          </div>

          {/* Staggered 6-Card Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  // Yahan se 'hover:-translate-y-2' remove kar diya gaya hai
                  className="rounded-3xl bg-gradient-to-br from-[#EAF3FA] via-[#F4F9FD] to-[#DCEEFB] p-6 sm:p-7 border border-slate-200/90 shadow-[0_15px_35px_-5px_rgba(0,163,232,0.1)] hover:shadow-[0_25px_50px_-10px_rgba(0,163,232,0.22)] hover:border-[#00A3E8] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-950 to-[#0F1B33] p-2 flex items-center justify-center border border-slate-800 shadow-md group-hover:scale-105 group-hover:border-[#00A3E8] group-hover:shadow-[0_0_15px_rgba(0,163,232,0.3)] transition-all">
                        <IconComp className="w-6 h-6 text-[#00A3E8]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700 group-hover:border-[#00A3E8] group-hover:text-[#00A3E8] transition-colors shadow-2xs">
                        {isArabic ? cat.badgeAr : cat.badgeEn}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-[#00A3E8] transition-colors tracking-tight">
                      {isArabic ? cat.titleAr : cat.titleEn}
                    </h4>

                    {/* Description REMOVED */}
                    
                  </div>

                  {/* High-Resolution Device Preview Image */}
                  <div className="relative flex items-center justify-center h-44 overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xs p-2">
                    <img 
                      src={cat.img} 
                      alt={cat.titleEn} 
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                    />
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="mt-4 pt-3 flex items-center text-[11px] font-mono text-slate-400 group-hover:text-[#00A3E8] transition-colors">
                    <span>0{idx + 1} // PROTOCOL CERTIFIED</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Consultation CTA Button */}
          <div className="mt-14 text-center">
            {onOpenQuote ? (
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A3E8] hover:bg-blue-600 text-white font-extrabold text-sm shadow-[0_6px_25px_rgba(0,163,232,0.4)] hover:shadow-[0_8px_30px_rgba(0,163,232,0.6)] transition-all cursor-pointer hover:scale-105"
              >
                <span>{isArabic ? 'تحدث مع خبير هندسي' : 'Talk to an Automation Expert'}</span>
                <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A3E8] hover:bg-blue-600 text-white font-extrabold text-sm shadow-[0_6px_25px_rgba(0,163,232,0.4)] hover:shadow-[0_8px_30px_rgba(0,163,232,0.6)] transition-all cursor-pointer hover:scale-105"
              >
                <span>{isArabic ? 'تحدث مع خبير هندسي' : 'Talk to an Automation Expert'}</span>
                <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
              </a>
            )}
          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. HEADER & THE 4-DEVICE ALTERNATING SCROLL PARALLAX WAVE    */}
        {/* ============================================================ */}
        <div className="pt-12 border-t border-slate-200">
          
          {/* Header (Syncrow Section 1 Style) */}
          {/* Changed mb-14 sm:mb-20 to mb-6 sm:mb-8 to reduce gap */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تطبيق سينكرو الذكي' : 'SMART AUTOMATION APP'}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
            >
              {isArabic ? (
                <>
                  تطبيق ذكي للأتمتة <span className="text-[#00A3E8]">صُمم خصيصاً للمستخدمين</span>
                </>
              ) : (
                <>
                  Smart Automation App <span className="text-[#00A3E8]">Built for Users</span>
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              {isArabic
                ? 'امنح عملاءك وسكانك تحكماً سلساً بكافة مساحات المبنى عبر تطبيق فائق الأداء يتصل مباشرة بالبنية التحتية الذكية.'
                : 'Offer your customers seamless space control through a powerful app that integrates directly with your property’s smart infrastructure.'}
            </motion.p>
          </div>

          {/* Reduced top padding on this wrapper to tighten gap further */}
          <div className="relative py-2 sm:py-6">
            
            {/* Subtle Ambient Curved Wave Aura behind Devices */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-r from-[#00A3E8]/10 via-sky-300/15 to-[#00A3E8]/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
              {screens.map((item, idx) => (
                <motion.div
                  key={item.id}
                  style={{ y: item.yMotion }}
                  initial={{ opacity: 0, y: idx % 2 === 0 ? 50 : -50, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-center"
                >
                  {/* Device Card Container - Hover lift removed here too */}
                  <div className="relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#EBF4FA] via-white to-[#DCEEFB] border border-slate-200/90 shadow-[0_15px_35px_-5px_rgba(0,163,232,0.12),0_4px_15px_-2px_rgba(0,0,0,0.04)] group-hover:border-[#00A3E8] group-hover:shadow-[0_25px_50px_-10px_rgba(0,163,232,0.25)] transition-all duration-500 overflow-hidden">
                    
                    {/* Top Glowing Cyan Pill Indicator */}
                    <div className="flex items-center justify-between mb-1.5 text-[10px] sm:text-xs font-mono font-bold text-slate-500">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] shadow-2xs">
                        {item.badge}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#00A3E8] animate-pulse" />
                    </div>

                    {/* Phone Screen Mockup */}
                    <div className="relative aspect-[9/18] max-h-[360px] sm:max-h-[420px] mx-auto flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950 p-1 sm:p-1.5 shadow-inner">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                      />
                    </div>

                    {/* Title and Short Description below Screen */}
                    <div className="mt-4 text-center">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#00A3E8] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug hidden sm:block">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SyncrowProductsShowcase;