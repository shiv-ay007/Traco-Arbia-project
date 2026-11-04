import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

import imgRobotics from '../../assets/industrial_custom_webp/slide1_robotic_automation.webp';
import imgMccPanel from '../../assets/industrial_custom_webp/slide2_mcc_electrical_panel.webp';
import imgRefinery from '../../assets/industrial_custom_webp/slide3_refinery_tanks.webp';
import imgMotors from '../../assets/industrial_custom_webp/slide4_motors_vfd_pumps.webp';

export function AboutSection({ lang = 'en' }) {
  const isArabic = lang === 'ar';
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 'robotic-automation',
      number: '01',
      glowClass: 'top-1/4 -right-24 rtl:-left-24 rtl:right-auto bg-gradient-to-br from-[#00A3E8]/30 via-blue-500/20 to-transparent',
      titleEn: 'PRECISION INDUSTRIAL ROBOTICS & AUTOMATION',
      titleAr: 'الروبوتات الصناعية فائقة الدقة والأتمتة المتقدمة',
      descEn:
        'High-precision 6-axis industrial robotic arms engineered for high-speed automated assembly, deterministic pick-and-place, precision welding, and robotic conveyor synchronization. Engineered with micro-sensor feedback and multi-axis kinematic control for zero-defect manufacturing across Saudi industrial plants.',
      descAr:
        'أذرع روبوتية صناعية سداسية المحاور عالية الدقة مصممة لخطوط التجميع السريع، الفرز الذكي، واللحام الآلي. تتميز بتحكم حركي متقدم وحساسات استشعار دقيقة تضمن أعلى موثوقية تصنيعية بدون أي أخطاء في المصانع السعودية.',
      image: imgRobotics,
    },
    {
      id: 'control-room-mcc',
      number: '02',
      glowClass: 'top-8 -left-24 rtl:-right-24 rtl:left-auto bg-gradient-to-br from-pink-500/35 via-purple-600/25 to-transparent',
      titleEn: 'CERTIFIED MCC PANELS & SWITCHGEAR CONTROL',
      titleAr: 'لوحات تحكم المحركات (MCC) وقواطع التوزيع الذكية',
      descEn:
        'Certified low and medium voltage Motor Control Centers (MCC), power distribution cabinets (PCC), and modular PLC switchgear. Built with thermal engineering designed to operate continuously under desert ambient temperatures up to 55°C, ensuring continuous 24/7 power redundancy and zero unplanned downtime.',
      descAr:
        'مراكز تحكم المحركات (MCC)، لوحات توزيع القدرة وقواطع التيار الذكية المعيارية. مصممة بهندسة عزل حراري متقدمة للعمل المستمر تحت درجات حرارة الصحراء حتى 55 مئوية مع أنظمة حماية وتكرار كهربائي مزدوج يمنع أي توقف غير مخطط له.',
      image: imgMccPanel,
    },
    {
      id: 'refinery-process',
      number: '03',
      glowClass: '-bottom-24 -right-24 rtl:-left-24 rtl:right-auto bg-gradient-to-tl from-[#E30613]/35 via-purple-600/25 via-pink-500/20 to-transparent',
      titleEn: 'REFINERY STORAGE TANKS & PROCESS PIPELINES',
      titleAr: 'خزانات التخزين الكروية وشبكات خطوط الأنابيب المؤتمتة',
      descEn:
        'Heavy industrial spherical storage tanks, automated fluid transfer pipelines, and motorized control valves engineered for refineries, petrochemical plants, and energy facilities. Fully integrated with automated pressure relief, real-time level telemetry, and fail-safe safety shutdown systems.',
      descAr:
        'خزانات التخزين الكروية الصناعية، خطوط الأنابيب المؤتمتة، وصمامات الأمان والتحكم بالتدفق لمصافي التكرير والمنشآت البتروكيماوية، مع أنظمة قياس لحظية للضغط والمستوى وشبكات تحكم آمنة تضمن أعلى معايير السلامة الصناعية.',
      image: imgRefinery,
    },
    {
      id: 'electrical-motors-vfd',
      number: '04',
      glowClass: '-bottom-20 left-1/4 bg-gradient-to-t from-[#00A3E8]/35 via-emerald-500/20 to-transparent',
      titleEn: 'HEAVY-DUTY MOTORS & VARIABLE FREQUENCY DRIVES',
      titleAr: 'محركات كهربائية عالية العزم ومغيرات سرعة VFD',
      descEn:
        'Severe-duty high-torque electric motors coupled with precision Variable Frequency Drives (VFD) and stainless steel centrifugal pump skids. Engineered for 24/7 continuous duty cycles, automated dynamic speed modulation, maximum energy efficiency, and predictive IoT vibration telemetry.',
      descAr:
        'محركات كهربائية حثية عالية العزم متصلة بمغيرات سرعة VFD ومضخات طرد مركزي ستانلس ستيل مصممة للخدمة الشاقة على مدار الساعة، مع تحكم دقيق بالسرعة وتوفير استهلاك الطاقة ومراقبة تنبؤية للاهتزازات وفق معايير SASO و IEC.',
      image: imgMotors,
    },
  ];

  // Sticky Scroll Tracker across 340vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const count = slides.length;
    const index = Math.min(count - 1, Math.max(0, Math.floor(latest * count)));
    setActiveSlide(index);
  });

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-[300vh] md:min-h-[360vh] bg-white text-slate-900"
    >
      {/* STICKY FULLSCREEN VIEWPORT */}
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full flex items-center overflow-hidden bg-white">
        
        {/* Dynamic Ambient Color Glow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${activeSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className={`absolute w-[500px] h-[500px] md:w-[720px] md:h-[720px] blur-[120px] md:blur-[140px] pointer-events-none rounded-full ${currentSlide.glowClass}`}
          />
        </AnimatePresence>

        {/* Floating Left Indicator: '01' / '02' / '03' / '04' */}
        <div className="hidden xl:flex absolute left-8 rtl:left-auto rtl:right-8 top-1/2 -translate-y-1/2 flex-col items-start gap-4 z-20">
          <span className="font-mono text-2xl font-light text-gray-900 select-none transition-all">
            {currentSlide.number}
          </span>
          <div className="relative w-[1.5px] h-32 bg-gray-200">
            <motion.div
              className="absolute w-[2px] -left-[0.25px] h-10 bg-gray-900"
              animate={{
                top: `${(activeSlide / (slides.length - 1)) * 68}%`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* MAIN CONTAINER: BALANCED 50/50 SPLIT */}
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 h-full flex items-center relative z-10">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-center">
            
            {/* 1. LEFT SECTION (50% WIDTH): Industrial Automation Imagery (Feathered WebP, Zero Square Box) */}
            <div className="w-full flex items-center gap-4 lg:gap-6">
              
              {/* Responsive indicator on medium/large screens */}
              <div className="hidden lg:flex xl:hidden flex-col items-start gap-3 flex-shrink-0">
                <span className="font-mono text-2xl font-light text-gray-900 select-none">
                  {currentSlide.number}
                </span>
                <div className="relative w-[1.5px] h-28 bg-gray-200">
                  <motion.div
                    className="absolute w-[2px] -left-[0.25px] h-9 bg-gray-900"
                    animate={{
                      top: `${(activeSlide / (slides.length - 1)) * 68}%`,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* Industrial Image: Seamless WebP, Floating in from bottom right with natural motion */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[540px] xl:h-[580px] flex items-center justify-center overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${activeSlide}`}
                    initial={{ opacity: 0, x: 40, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={currentSlide.image}
                      alt={isArabic ? currentSlide.titleAr : currentSlide.titleEn}
                      className="w-full h-full object-contain object-center select-none pointer-events-none drop-shadow-sm"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 2. RIGHT SECTION (50% WIDTH): Brand Corporate Typography (ABB Voice, Bold, Matching the Left Image) */}
            <div className="w-full flex flex-col justify-center text-left rtl:text-right">
              
              {/* Mobile slide number */}
              <div className="flex lg:hidden items-center gap-2 mb-3">
                <span className="font-mono text-xl font-light text-gray-900">
                  {currentSlide.number}
                </span>
                <div className="w-[1px] h-6 bg-gray-300" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Brand Headline: Uses project font ABBVoiceDisplay with bold corporate authority */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-black text-[#1F1F1F] tracking-tight leading-[1.2] uppercase">
                    {isArabic ? currentSlide.titleAr : currentSlide.titleEn}
                  </h2>

                  {/* Standardized Project Paragraph Body: Accurately explaining the machine on the left */}
                  <p className="text-base sm:text-[17px] text-[#475569] leading-relaxed font-normal max-w-xl">
                    {isArabic ? currentSlide.descAr : currentSlide.descEn}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
