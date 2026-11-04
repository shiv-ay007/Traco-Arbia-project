import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Thermometer, Lock, Cpu, Wind, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  // Alternating scroll parallax translations
  const yParallaxDown1 = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  const yParallaxUp1 = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const yParallaxDown2 = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const yParallaxUp2 = useTransform(scrollYProgress, [0, 1], [25, -25]);

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
      badgeEn: 'CLIMATE & COMFORT',
      badgeAr: 'المناخ والراحة',
      icon: Thermometer,
      img: catThermal,
      link: '/smart-home',
    },
    {
      id: 'security',
      titleEn: 'Safety & Security',
      titleAr: 'حلول الأمن والسلامة',
      badgeEn: '24/7 PROTECTION',
      badgeAr: 'أمان استباقي',
      icon: ShieldCheck,
      img: catSecurity,
      link: '/smart-home',
    },
    {
      id: 'hub',
      titleEn: 'Central Hub & Touch Controls',
      titleAr: 'التحكم المركزي وشاشات اللمس',
      badgeEn: 'UNIFIED GATEWAY',
      badgeAr: 'بوابة موحدة',
      icon: Cpu,
      img: catHub,
      link: '/smart-home',
    },
    {
      id: 'wellness',
      titleEn: 'Wellness Solutions',
      titleAr: 'حلول جودة الحياة والبيئة',
      badgeEn: 'HEALTHIER SPACES',
      badgeAr: 'بيئة نقية',
      icon: Wind,
      img: catWellness,
      link: '/smart-home',
    },
    {
      id: 'access',
      titleEn: 'Smart Access Control',
      titleAr: 'منظومات الدخول الذكي',
      badgeEn: 'BIOMETRIC ACCESS',
      badgeAr: 'دخول بيومتري',
      icon: Lock,
      img: catAccess,
      link: '/smart-home',
    },
    {
      id: 'energy',
      titleEn: 'Energy Saving Optimization',
      titleAr: 'ترشيد وتحسين الطاقة',
      badgeEn: 'SUSTAINABILITY',
      badgeAr: 'استدامة وترشيد',
      icon: Zap,
      img: catEnergy,
      link: '/smart-home',
    },
  ];

  return (
    <section 
      ref={showcaseRef}
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-100 relative overflow-hidden"
    >
      {/* Subtle Ambient Soft Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-100/50 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">

        {/* ============================================================ */}
        {/* 1. MINIMAL 6-CATEGORY IOT HARDWARE GRID                      */}
        {/* ============================================================ */}
        <div className="mb-20 sm:mb-28">
          
          {/* Minimal Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E8]" />
              <span>{isArabic ? 'منظومة الأجهزة الذكية' : 'IOT AUTOMATION ECOSYSTEM'}</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-[44px] font-black text-[#1F1F1F] tracking-tight uppercase leading-[1.2] mb-4"
            >
              {isArabic ? (
                <>أجهزة إنترنت الأشياء الذكية للأتمتة</>
              ) : (
                <>SMART IOT DEVICES BUILT FOR AUTOMATION</>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              {isArabic
                ? 'صُممت لتوفير أعلى درجات الاعتمادية. تتصل أجهزتنا بسلاسة عبر بروتوكولات موحدة لضمان أداء مستمر وموثوق في كافة مساحاتك.'
                : 'Built for reliability. Designed for you. Our IoT devices connect seamlessly through unified protocols to ensure consistent performance across all your spaces.'}
            </motion.p>
          </div>

          {/* Minimal 6-Card Category Grid: Clean White Cards with Refined Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <Link
                    to={cat.link}
                    className="group relative flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-[#00A3E8]/50 shadow-xs hover:shadow-[0_20px_40px_-12px_rgba(0,163,232,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div>
                      {/* Header: Clean Icon + Subtle Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 group-hover:border-[#00A3E8]/40 group-hover:bg-[#00A3E8]/10 text-slate-700 group-hover:text-[#00A3E8] flex items-center justify-center transition-all duration-300 shadow-2xs">
                          <IconComp className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-500 group-hover:border-[#00A3E8]/30 group-hover:text-[#00A3E8] transition-colors shadow-2xs">
                          {isArabic ? cat.badgeAr : cat.badgeEn}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1F] group-hover:text-[#00A3E8] transition-colors tracking-tight">
                        {isArabic ? cat.titleAr : cat.titleEn}
                      </h3>
                    </div>

                    {/* Floating Product Image (Clean, No Nested Box) */}
                    <div className="relative flex items-center justify-center h-44 sm:h-48 my-4 overflow-hidden">
                      <img 
                        src={cat.img} 
                        alt={cat.titleEn} 
                        className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-106 transition-transform duration-500 select-none pointer-events-none"
                      />
                    </div>

                    {/* Minimal Footer Link */}
                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#00A3E8] transition-colors">
                      <span>{isArabic ? 'استكشف المنظومة' : 'Explore System'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Minimal Consultation CTA */}
          <div className="mt-12 text-center">
            {onOpenQuote ? (
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1F1F1F] hover:bg-[#00A3E8] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-102"
              >
                <span>{isArabic ? 'تحدث مع خبير هندسي' : 'Consult an Automation Specialist'}</span>
                <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1F1F1F] hover:bg-[#00A3E8] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-102"
              >
                <span>{isArabic ? 'تحدث مع خبير هندسي' : 'Consult an Automation Specialist'}</span>
                <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
              </a>
            )}
          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. THE 4-DEVICE ALTERNATING SCROLL PARALLAX WAVE             */}
        {/* ============================================================ */}
        <div className="pt-16 border-t border-slate-100">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] text-xs font-semibold tracking-wider uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تطبيق سينكرو الذكي' : 'SYNCROW SMART APP'}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl font-black text-[#1F1F1F] tracking-tight uppercase leading-tight mb-4"
            >
              {isArabic ? (
                <>تطبيق ذكي للأتمتة صُمم للمستخدمين</>
              ) : (
                <>SMART AUTOMATION APP BUILT FOR USERS</>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              {isArabic
                ? 'امنح عملاءك وسكانك تحكماً سلساً بكافة مساحات المبنى عبر تطبيق فائق الأداء يتصل مباشرة بالبنية التحتية الذكية.'
                : 'Offer your customers seamless space control through a powerful app that integrates directly with your property’s smart infrastructure.'}
            </motion.p>
          </div>

          <div className="relative py-4 sm:py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
              {screens.map((item, idx) => (
                <motion.div
                  key={item.id}
                  style={{ y: item.yMotion }}
                  initial={{ opacity: 0, y: idx % 2 === 0 ? 30 : -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#00A3E8]/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                    
                    {/* Top Pill Indicator */}
                    <div className="flex items-center justify-between mb-2 text-[10px] sm:text-xs font-semibold text-slate-500">
                      <span className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                        {item.badge}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8]" />
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
                      <h4 className="text-xs sm:text-sm font-bold text-[#1F1F1F] group-hover:text-[#00A3E8] transition-colors leading-snug">
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
