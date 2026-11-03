import React from 'react';
import { motion } from 'framer-motion';

import iconWellbeing from '../../assets/syncrow/icon_wellbeing.svg';
import iconEnergy from '../../assets/syncrow/icon_energy.svg';
import iconCost from '../../assets/syncrow/icon_cost.svg';
import iconBuilding from '../../assets/syncrow/icon_building.svg';
import iconInsights from '../../assets/syncrow/icon_insights.svg';
import iconExperience from '../../assets/syncrow/icon_experience.svg';

function IoTPoweredOperations({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  const features = [
    {
      id: 'wellbeing',
      icon: iconWellbeing,
      title: isArabic ? 'تعزيز الصحة وجودة الحياة' : 'Enhance Wellbeing',
      desc: isArabic
        ? 'خلق بيئات معيشية صحية ونقية تعزز الراحة النفسية والإنتاجية.'
        : 'Create healthier spaces to promote wellness and productivity.',
    },
    {
      id: 'energy',
      icon: iconEnergy,
      title: isArabic ? 'ترشيد استهلاك الطاقة' : 'Save Energy',
      desc: isArabic
        ? 'تقليل استهلاك الكهرباء بنسبة تصل إلى ٣٥٪ وتحقيق أهداف الاستدامة.'
        : 'Reduce energy consumption and achieve sustainability goals.',
    },
    {
      id: 'costs',
      icon: iconCost,
      title: isArabic ? 'خفض التكاليف التشغيلية' : 'Cut Operation Costs',
      desc: isArabic
        ? 'استخدام أمثل للموارد لتقليل نفقات الصيانة ورفع الكفاءة التشغيلية.'
        : 'Optimize resources for cost savings and boosting efficiency.',
    },
    {
      id: 'full-building',
      icon: iconBuilding,
      title: isArabic ? 'أتمتة المباني والمنشآت بالكامل' : 'Full-Building Automation',
      desc: isArabic
        ? 'إدارة مركزية متقدمة لكافة أنظمة المبنى عبر منصة إنترنت أشياء موحدة.'
        : 'Advanced building management system with a single IoT platform.',
    },
    {
      id: 'insights',
      icon: iconInsights,
      title: isArabic ? 'تحليلات ورؤى معتمدة على البيانات' : 'Data-Driven Insights',
      desc: isArabic
        ? 'استغلال البيانات اللحظية لاتخاذ قرارات تشغيلية واستباقية دقيقة.'
        : 'Utilize real-time data to make informed operational decisions.',
    },
    {
      id: 'experience',
      icon: iconExperience,
      title: isArabic ? 'ارتقاء بتجربة المستخدم' : 'Improve User Experience',
      desc: isArabic
        ? 'تحكم ذكي سلس للسكان، نزلاء الفنادق، موظفي الشركات، والمرافق الطبية.'
        : 'Smart controls for tenants, hotel guests, employees, and patients.',
    },
  ];

  return (
    <section className="pt-16 sm:pt-24 pb-12 sm:pb-24 bg-gradient-to-b from-[#EAF4FB] via-white to-[#EAF4FB] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#00A3E8]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-blue-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Decorative Dot Matrix Sidebar (Left & Right) */}
      <div 
        className="absolute top-24 bottom-24 left-4 sm:left-10 w-16 sm:w-36 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to right, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
        }}
      />
      <div 
        className="absolute top-24 bottom-24 right-4 sm:right-10 w-16 sm:w-36 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8] animate-pulse" />
            <span>{isArabic ? 'كفاءة تشغيلية ذكية' : 'INTELLIGENT OPERATIONS'}</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            {isArabic ? (
              <>
                أتمتة مدعومة بـ <span className="text-[#00A3E8]">إنترنت الأشياء</span> لعمليات تشغيلية ذكية
              </>
            ) : (
              <>
                <span className="text-[#00A3E8]">IoT-Powered Automation</span> for Smarter Operations
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 sm:mt-4 text-[11px] sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {isArabic
              ? 'حلول أتمتة شاملة تدير استهلاك الطاقة، ترفع مستويات الأمان، وتوفر رؤية فورية لكافة العمليات التشغيلية في مبانيك ومصانعك.'
              : 'End-to-end automation to control connected devices, optimize resources, lower operational expenses, and elevate facility intelligence.'}
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/* 6-GRID CONTAINER CARD                                         */}
        {/* ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-[32px] bg-slate-200/90 border border-slate-300/80 shadow-[0_20px_50px_-10px_rgba(0,163,232,0.12),0_4px_25px_-5px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y-0 divide-slate-200">
            {features.map((item, idx) => {
              const isFirstRow = idx < 3;
              const isNotLastCol = (idx + 1) % 3 !== 0;

              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-10 flex flex-col justify-between group bg-gradient-to-br from-[#EAF3FA] via-[#F4F9FD] to-[#DCEEFB] hover:from-white hover:via-[#F0F7FD] hover:to-[#E1EFF9] transition-all duration-300 relative ${
                    isNotLastCol ? 'lg:border-r lg:border-slate-200' : ''
                  } ${
                    isFirstRow ? 'lg:border-b lg:border-slate-200' : ''
                  } ${
                    idx % 2 === 0 ? 'md:border-r md:border-slate-200 lg:border-r-0' : ''
                  } ${
                    idx < 4 ? 'md:border-b md:border-slate-200 lg:border-b-0' : ''
                  }`}
                >
                  {/* Top animated cyan accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E8]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    {/* Icon Container - Made smaller on mobile */}
                    <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-950 to-[#0F1B33] p-2 sm:p-2.5 flex items-center justify-center border border-slate-800 shadow-md group-hover:scale-105 group-hover:border-[#00A3E8] group-hover:shadow-[0_0_20px_rgba(0,163,232,0.25)] transition-all duration-300 flex-shrink-0">
                      <img 
                        src={item.icon} 
                        alt={item.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(113,134,255,0.4)]"
                      />
                    </div>

                    <div>
                      {/* Title */}
                      <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 tracking-tight group-hover:text-[#00A3E8] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-sm text-slate-600 font-normal leading-relaxed group-hover:text-slate-800 transition-colors line-clamp-3 sm:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro indicator line - Tightened on mobile */}
                  <div className="mt-4 pt-3 sm:mt-6 sm:pt-4 border-t border-slate-300/70 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 group-hover:text-[#00A3E8] transition-colors relative z-10">
                    <span className="font-bold">0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 group-hover:bg-[#00A3E8] group-hover:shadow-[0_0_10px_#00A3E8] transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default IoTPoweredOperations;