import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Cpu, Zap, Layers, Package, Users, MapPin } from 'lucide-react';
import imgVision2030 from '../../assets/standards/standards_vision2030.jpg';

// Smooth 60fps Counting Component
function AnimatedNumber({ value, isInView }) {
  const [display, setDisplay] = useState('0');
  const numericString = value.replace(/[^0-9]/g, '');
  const suffix = value.replace(/[0-9,]/g, '');
  const target = parseInt(numericString, 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplay(Math.floor(latest).toLocaleString('en-US'));
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function OurNumbersStory({ lang = 'en' }) {
  const isArabic = lang === 'ar';
  const metricsRef = useRef(null);
  const isInView = useInView(metricsRef, { once: true, margin: '-40px' });

  const metrics = [
    {
      id: 'devices',
      num: '7,000+',
      label: isArabic ? 'أجهزة ذكية متصلة' : 'Active Smart Devices',
      icon: Cpu,
    },
    {
      id: 'units',
      num: '300+',
      label: isArabic ? 'وحدات ومباني مؤتمتة' : 'Units Powered by Treco Arabia',
      icon: Zap,
    },
    {
      id: 'projects',
      num: '200+',
      label: isArabic ? 'مشاريع قيد التنفيذ' : 'Ongoing Projects',
      icon: Layers,
    },
    {
      id: 'types',
      num: '60+',
      label: isArabic ? 'نوع من أجهزة الأتمتة' : 'Types of IoT & Industrial Devices',
      icon: Package,
    },
    {
      id: 'team',
      num: '50+',
      label: isArabic ? 'مهندسون وفنيون معتمدون' : 'Certified Team Members',
      icon: Users,
    },
    {
      id: 'offices',
      num: '3',
      label: isArabic ? 'فروع (جدة، الرياض، الدمام)' : 'Offices (Jeddah, Riyadh, Dammam)',
      icon: MapPin,
    },
  ];

  return (
    <section
      ref={metricsRef}
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-12 sm:py-16 bg-white text-slate-900 border-t border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* CLEAN MINIMAL STRIP (NO BOXED DIV BACKGROUND / BORDER)       */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
          
          {/* 1. LEFT MEDIA: Arch / Curved Saudi Landmark Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full sm:w-52 lg:w-60 h-36 sm:h-44 rounded-2xl lg:rounded-l-2xl lg:rounded-r-[70px] rtl:lg:rounded-r-2xl rtl:lg:rounded-l-[70px] overflow-hidden flex-shrink-0 shadow-sm border border-slate-200"
          >
            <img
              src={imgVision2030}
              alt="Saudi Industrial Vision"
              className="w-full h-full object-cover"
            />
            {/* Soft Cyan Arc Highlight Ring */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-l-2xl lg:rounded-r-[70px] rtl:lg:rounded-r-2xl rtl:lg:rounded-l-[70px] ring-2 ring-[#00A3E8]/35 pointer-events-none" />
          </motion.div>

          {/* 2. RIGHT CONTENT: Eyebrow + Title Divider + 6 Animated Metrics */}
          <div className="flex-grow w-full flex flex-col justify-center">
            
            {/* Minimal Blue Eyebrow */}
            <span className="text-[10px] sm:text-xs font-bold text-[#00A3E8] tracking-widest uppercase mb-1">
              {isArabic ? 'سجل إنجازات معتمد' : 'PROVEN TRACK RECORD'}
            </span>

            {/* Title & Horizontal Accent Divider Line */}
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight whitespace-nowrap">
                {isArabic ? (
                  <>
                    أرقامنا <span className="text-[#00A3E8]">تروي قصة إنجازاتنا</span>
                  </>
                ) : (
                  <>
                    Our Numbers <span className="text-[#00A3E8]">Tell the Story</span>
                  </>
                )}
              </h3>
              <div className="h-[1.5px] bg-gradient-to-r from-[#00A3E8]/80 via-sky-300 to-transparent flex-grow rounded-full hidden md:block" />
            </div>

            {/* The 6 Single-Row Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 items-start">
              {metrics.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.07 }}
                    className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group"
                  >
                    {/* Circle Icon Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-50 group-hover:bg-[#00A3E8]/10 text-[#00A3E8] border border-sky-100 flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                    {/* Number & Label */}
                    <div>
                      <div className="text-lg sm:text-xl lg:text-[22px] font-black text-slate-900 tracking-tight leading-none">
                        <AnimatedNumber value={item.num} isInView={isInView} />
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1.5 max-w-[110px]">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default OurNumbersStory;
