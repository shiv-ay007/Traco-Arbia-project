import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import imgControlRoom from '../../assets/industrial_products/elctrical_controll_room.jpeg';
import imgMotor from '../../assets/industrial_products/moter.jpeg';
import imgPump from '../../assets/industrial_products/pump.jpeg';
import imgGear from '../../assets/industrial_products/heave_gears.jpeg';
import imgOil from '../../assets/industrial_products/oil.jpeg';
import imgHeatingPump from '../../assets/industrial_products/Heating_pump.jpeg';

export function IndustrialShowcase({ t, lang = 'en' }) {
  const isArabic = lang === 'ar';

  const showcaseItems = [
    {
      id: 'control-room',
      titleEn: 'Electrical Control Centers & MCC',
      titleAr: 'مراكز وغرف التحكم الكهربائي',
      descEn: 'Industrial distribution boards, motor control centers, and PLC process integration.',
      descAr: 'لوحات توزيع متطورة ومراكز تحكم في المحركات مع تكامل وحدات PLC.',
      image: imgControlRoom,
      link: '/industrial/control-room',
    },
    {
      id: 'motors',
      titleEn: 'High-Efficiency Electric Motors',
      titleAr: 'محركات كهربائية عالية الكفاءة',
      descEn: 'Continuous duty high-torque three-phase induction and servo motors.',
      descAr: 'محركات حثية ثلاثية الأطوار ومحركات سيرفو عالية العزم للتشغيل الشاق.',
      image: imgMotor,
      link: '/industrial/motors',
    },
    {
      id: 'pumps',
      titleEn: 'Industrial Fluid Pumps & Valves',
      titleAr: 'مضخات السوائل والصمامات الصناعية',
      descEn: 'Precision hydraulic fluid transfer assemblies and automated control valves.',
      descAr: 'منظومات متطورة لنقل السوائل وصمامات تحكم آلية للبيئات الصناعية.',
      image: imgPump,
      link: '/industrial/pumps',
    },
    {
      id: 'gears',
      titleEn: 'Heavy Industrial Gearboxes',
      titleAr: 'علب التروس ونواقل الحركة الثقيلة',
      descEn: 'High-reduction planetary and helical gearboxes for heavy-duty machinery.',
      descAr: 'صناديق تروس حلزونية وكوكبية متينة مصممة للعمل في بيئات التشغيل القاسية.',
      image: imgGear,
      link: '/industrial/gears',
    },
    {
      id: 'tanks',
      titleEn: 'Refinery Spherical Tanks & Piping',
      titleAr: 'خزانات ومسارات التكرير البترولية',
      descEn: 'Storage spheres, high-pressure piping manifolds, and refinery automation.',
      descAr: 'خزانات كروية وشبكات أنابيب ضغط عالي لأتمتة المصافي والمنشآت النفطية.',
      image: imgOil,
      link: '/industrial/tanks',
    },
    {
      id: 'heating-pump',
      titleEn: 'Hydraulic Heating & Cooling Pumps',
      titleAr: 'مضخات التدفئة والتبريد الهيدروليكية',
      descEn: 'Closed-loop thermal circulation and high-capacity industrial cooling pumps.',
      descAr: 'مضخات دوران حراري ذات قدرات عالية وتبريد صناعي متقدم للمصانع.',
      image: imgHeatingPump,
      link: '/industrial/heating-pump',
    },
  ];

  return (
    <section
      id="industrial-showcase"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-16 sm:py-24 bg-white text-slate-900 border-t border-b border-slate-300 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============================================================ */}
        {/* ONLY THE NORMAL MINIMAL HEADING (NO BADGES, NO PARAGRAPH)    */}
        {/* ============================================================ */}
        <div className="mb-8 sm:mb-10 text-left rtl:text-right">
          <h2
            className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight uppercase"
            style={{ color: '#1F1F1F' }}
          >
            {isArabic ? 'المعدات والمنظومات الهندسية' : 'PRECISION EQUIPMENT & PLANT SYSTEMS'}
          </h2>
        </div>

        {/* ============================================================ */}
        {/* 6-CARD CLEAN EDITORIAL GRID (3 COLUMNS ON DESKTOP)           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="h-full"
            >
              <Link
                to={item.link}
                className="group flex flex-col h-full bg-[#F8FAFC] border border-slate-200/90 hover:border-[#00A3E8] shadow-xs hover:shadow-xl transition-all duration-300 rounded-none overflow-hidden cursor-pointer"
              >
                {/* 1. Sharp Clean Photography: Aspect 4/3 */}
                <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={isArabic ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                  <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* 2. Text Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-lg sm:text-[20px] font-bold text-[#1F1F1F] group-hover:text-[#00A3E8] transition-colors tracking-tight leading-snug mb-2">
                      {isArabic ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {isArabic ? item.descAr : item.descEn}
                    </p>
                  </div>

                  {/* 3. Action Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A3E8] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      <span>{isArabic ? 'معاينة المعدات' : 'View equipment'}</span>
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

export default IndustrialShowcase;
