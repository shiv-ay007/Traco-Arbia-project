import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import imgIndustrialAutomation from '../../assets/header_background_img/industrial.png';
import imgControlRoom from '../../assets/industrial_products/elctrical_controll_room.jpeg';
import imgPumpsDrives from '../../assets/industrial_products/pump.jpeg';
import imgInfrastructure from '../../assets/header_background_img/offerings.png';

export function IndustrialSolutionsGrid({ t, lang = 'en' }) {
  const isArabic = lang === 'ar';

  const items = [
    {
      id: 'turnkey-automation',
      img: imgIndustrialAutomation,
      titleEn: 'Industrial Automation & SCADA',
      titleAr: 'الأتمتة الصناعية وأنظمة SCADA',
      descEn:
        'End-to-end process control, robotic line synchronization, and real-time plant telemetry engineered for high reliability.',
      descAr:
        'تحكم متكامل بالعمليات الإنتاجية، مزامنة الخطوط الروبوتية، ومراقبة فورية للمصانع بأعلى معايير الموثوقية.',
      link: '/industrial-automation',
    },
    {
      id: 'control-rooms',
      img: imgControlRoom,
      titleEn: 'Electrical Control Rooms & MCC Panels',
      titleAr: 'غرف التحكم ولوحات MCC الكهربائية',
      descEn:
        'Custom motor control centers, deterministic PLC architecture, and centralized mission-critical power management.',
      descAr:
        'لوحات تحكم MCC، تكامل منظومات PLC، وإدارة مركزية متقدمة لتوزيع الطاقة والتحكم بالمعدات الصناعية.',
      link: '/industrial/control-room',
    },
    {
      id: 'drives-machinery',
      img: imgPumpsDrives,
      titleEn: 'Industrial Drives, Pumps & Fluidics',
      titleAr: 'المحركات والمضخات ومسارات السوائل',
      descEn:
        'High-torque continuous motors, precision hydraulic actuators, and automated variable frequency fluid drives.',
      descAr:
        'محركات كهربائية عالية العزم ومضخات هيدروليكية وصمامات آلية دقيقة تعمل في أقسى الظروف التشغيلية.',
      link: '/industrial/motors',
    },
    {
      id: 'infrastructure',
      img: imgInfrastructure,
      titleEn: 'Intelligent Facilities & Energy Systems',
      titleAr: 'المنشآت الذكية وإدارة استهلاك الطاقة',
      descEn:
        'Centralized facility telemetry, environmental zoning, and predictive energy optimization across commercial and industrial spaces.',
      descAr:
        'إدارة مركزية للمباني والمصانع، ترشيد ذكي لاستهلاك الطاقة، ومراقبة لحظية للبنية التحتية والمرافق.',
      link: '/offerings',
    },
  ];

  return (
    <section
      id="industrial-solutions"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-16 sm:py-24 bg-[#F2F6FA] text-slate-900 border-t border-b border-slate-300 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============================================================ */}
        {/* ONLY NORMAL MINIMAL HEADING (ZERO BADGES, NO FLUFF)          */}
        {/* ============================================================ */}
        <div className="mb-8 sm:mb-10 text-left rtl:text-right">
          <h2
            className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight uppercase"
            style={{ color: '#1F1F1F' }}
          >
            {isArabic ? 'المنظومات والحلول الصناعية' : 'INDUSTRIAL AUTOMATION SYSTEMS'}
          </h2>
        </div>

        {/* ============================================================ */}
        {/* 4-COLUMN CLEAN EDITORIAL GRID (HONEYWELL MINIMAL STYLE)      */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="h-full"
            >
              <Link
                to={item.link}
                className="group flex flex-col h-full bg-white border border-slate-200/90 hover:border-[#00A3E8] shadow-xs hover:shadow-xl transition-all duration-300 rounded-none overflow-hidden cursor-pointer"
              >
                {/* 1. Sharp Photography: Aspect 4/3, Zero Radius */}
                <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden bg-slate-200">
                  <img
                    src={item.img}
                    alt={isArabic ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                  <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* 2. Text Content: Clean, High-Contrast, Zero Badges */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-lg sm:text-[20px] font-bold text-[#1F1F1F] group-hover:text-[#00A3E8] transition-colors tracking-tight leading-snug mb-2.5">
                      {isArabic ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {isArabic ? item.descAr : item.descEn}
                    </p>
                  </div>

                  {/* 3. Action Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A3E8] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      <span>{isArabic ? 'استكشف المنظومة' : 'Explore system'}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustrialSolutionsGrid;
