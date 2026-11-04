import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgScada from '../../assets/gallery/gallery_scada.jpg';
import imgEnergy from '../../assets/standards/standards_vision2030.jpg';
import imgRobotics from '../../assets/gallery/gallery_robotics.jpg';

import screen01 from '../../assets/syncrow_products/app_screen_01.webp';
import screen02 from '../../assets/syncrow_products/app_screen_02.webp';
import screen03 from '../../assets/syncrow_products/app_screen_03.webp';
import screen04 from '../../assets/syncrow_products/app_screen_04.webp';

export function SyncrowProductsShowcase({ lang = 'en', onOpenQuote }) {
  const isArabic = lang === 'ar';
  const showcaseRef = useRef(null);

  // Scroll Progress for Smooth Parallax Wave
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start'],
  });

  const yParallaxDown1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yParallaxUp1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yParallaxDown2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yParallaxUp2 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Outcomes Cards (Honeywell Minimal Editorial Style, Zero Badges)
  const outcomes = [
    {
      id: 'asset-management',
      img: imgScada,
      titleEn: 'Asset Management',
      titleAr: 'إدارة وتشغيل الأصول',
      descEn:
        'Improve operational performance, safety, and long-term lifecycle value for critical plant assets and SCADA systems.',
      descAr:
        'رفع الكفاءة التشغيلية وتعزيز موثوقية الأصول الصناعية ومنظومات SCADA الحيوية عبر دورة حياتها بالكامل.',
      link: '/industrial-automation',
    },
    {
      id: 'energy-innovation',
      img: imgEnergy,
      titleEn: 'Energy Innovation',
      titleAr: 'ابتكار الطاقة والاستدامة',
      descEn:
        'Smart energy monitoring, peak-load shedding, and intelligent HVAC optimization engineered for Saudi Vision 2030.',
      descAr:
        'أنظمة مراقبة ذكية وترشيد استهلاك الطاقة وحلول كفاءة مستدامة متوافقة مع رؤية السعودية 2030.',
      link: '/offerings',
    },
    {
      id: 'operational-autonomy',
      img: imgRobotics,
      titleEn: 'Operational Autonomy',
      titleAr: 'استقلالية التشغيل والإنتاج',
      descEn:
        'Turn telemetry data into synchronized robotic actions, deterministic automation, and continuous plant workflows.',
      descAr:
        'تحويل البيانات اللحظية إلى إجراءات روبوتية مؤتمتة دقيقة ومسارات إنتاج متزامنة بدون أي توقف.',
      link: '/industrial-automation',
    },
  ];

  const screens = [
    {
      id: 'screen-1',
      title: isArabic ? 'إدارة الغرف والأجهزة' : 'Room & Device Control',
      img: screen01,
      yMotion: yParallaxDown1,
      desc: isArabic ? 'تحكم كامل بكل غرفة وجهاز بنقرة واحدة' : 'Unified control across every room in your building',
    },
    {
      id: 'screen-2',
      title: isArabic ? 'مستشعرات جودة الهواء' : 'Air Quality & Telemetry',
      img: screen02,
      yMotion: yParallaxUp1,
      desc: isArabic ? 'قراءات مباشرة للرطوبة، الحرارة وCO2' : 'Real-time indoor air index, humidity and CO2 metrics',
    },
    {
      id: 'screen-3',
      title: isArabic ? 'التكييف والمناخ الذكي' : 'Climate & HVAC Slider',
      img: screen03,
      yMotion: yParallaxDown2,
      desc: isArabic ? 'جدولة وضبط درجات الحرارة بدقة عالية' : 'Precision multi-zone HVAC temperature automation',
    },
    {
      id: 'screen-4',
      title: isArabic ? 'تحليلات وترشيد الاستهلاك' : 'Energy Savings Analytics',
      img: screen04,
      yMotion: yParallaxUp2,
      desc: isArabic ? 'رسوم بيانية توضح توفير الطاقة والكلفة' : 'Actionable telemetry reducing monthly power bills',
    },
  ];

  return (
    <section 
      ref={showcaseRef}
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-16 sm:py-24 bg-gradient-to-b from-[#EBF2F8] via-[#F2F6FA] to-[#EBF2F8] text-slate-900 border-t border-b border-slate-200 relative overflow-hidden"
    >
      {/* Soft Ambient Depth Accents */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[450px] bg-[#00A3E8]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[550px] h-[450px] bg-blue-300/15 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============================================================ */}
        {/* 1. OUTCOMES EDITORIAL GRID (HONEYWELL MINIMAL STYLE, NO RADIUS) */}
        {/* ============================================================ */}
        <div className="mb-20 sm:mb-28">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            
            {/* 1. Feature Anchor Card: Red/Purple Vibrant Gradient (Sharp, Zero Radius) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-none p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm bg-gradient-to-br from-[#E30613] via-[#C90410] to-[#70067B] text-white min-h-[360px] lg:min-h-[440px]"
            >
              {/* Subtle Ambient Color Glow */}
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />

              {/* Eyebrow: Pure minimal text, NO badge! */}
              <span className="text-sm font-semibold tracking-wider text-white/90 uppercase">
                {isArabic ? 'النتائج والمخرجات' : 'Outcomes'}
              </span>

              {/* Main Headline: Sentence case, bold & impactful */}
              <div className="my-auto py-6">
                <h3 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-white leading-[1.18] tracking-tight">
                  {isArabic
                    ? 'مخرجات صُممت لقيادة الاستقلالية والتحول الذكي.'
                    : 'Outcomes Designed to Drive Autonomy.'}
                </h3>
              </div>

              {/* Minimal Link */}
              <Link
                to="/industrial-automation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/95 hover:text-white transition-colors group cursor-pointer"
              >
                <span>{isArabic ? 'استكشف كافة الحلول' : 'Explore all solutions'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </Link>
            </motion.div>

            {/* 2, 3, 4. Story Outcome Cards (Sharp Real Photography, Zero Radius) */}
            {outcomes.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="group flex flex-col h-full cursor-pointer"
                >
                  {/* Clean Photography: Aspect 4/3, Full-Bleed with Sharp Zero Radius */}
                  <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden bg-slate-200 shadow-xs">
                    <img
                      src={item.img}
                      alt={item.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                    />
                  </div>

                  {/* Title & Description: Crisp, Clean, NO Badges */}
                  <div className="pt-5 flex flex-col flex-grow">
                    <h4 className="text-xl sm:text-[22px] font-bold text-[#1F1F1F] group-hover:text-[#00A3E8] transition-colors tracking-tight leading-snug mb-2">
                      {isArabic ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                      {isArabic ? item.descAr : item.descEn}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. THE 4-DEVICE ALTERNATING SCROLL PARALLAX WAVE             */}
        {/* ============================================================ */}
        <div className="pt-16 border-t border-slate-100">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#1F1F1F] tracking-tight uppercase leading-tight mb-4">
              {isArabic ? (
                <>تطبيق ذكي للأتمتة صُمم للمستخدمين</>
              ) : (
                <>SMART AUTOMATION APP BUILT FOR USERS</>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {isArabic
                ? 'امنح عملاءك وسكانك تحكماً سلساً بكافة مساحات المبنى عبر تطبيق فائق الأداء يتصل مباشرة بالبنية التحتية الذكية.'
                : 'Offer your customers seamless space control through a powerful app that integrates directly with your property’s smart infrastructure.'}
            </p>
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
                  <div className="relative w-full rounded-none p-3 sm:p-5 bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#00A3E8]/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                    
                    {/* Phone Screen Mockup */}
                    <div className="relative aspect-[9/18] max-h-[360px] sm:max-h-[420px] mx-auto flex items-center justify-center overflow-hidden rounded-none bg-slate-950 p-1 sm:p-1.5 shadow-inner">
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
