import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Zap, Building2 } from 'lucide-react';

import imgIndustrialAutomation from '../../assets/header_background_img/industrial.png';
import imgControlRoom from '../../assets/industrial_products/elctrical_controll_room.jpeg';
import imgPumpsDrives from '../../assets/industrial_products/pump.jpeg';
import imgInfrastructure from '../../assets/header_background_img/offerings.png';

function IndustrialSolutionsGrid({ t, lang }) {
  const isArabic = lang === 'ar';
  const content = t?.industrialHome?.solutions || {
    eyebrow: lang === 'ar' ? 'التخصصات الرئيسية' : 'CORE SPECIALIZATIONS',
    title: lang === 'ar' ? 'المنظومات الصناعية الذكية' : 'Intelligent Industrial Systems',
    subtitle: lang === 'ar' 
      ? 'معدات فائقة الدقة، أنظمة تحكم موزع، وبنية تحتية مؤتمتة صُممت خصيصاً للصناعة السعودية.' 
      : 'Precision hardware, distributed control systems, and automated infrastructure engineered for Saudi manufacturing.',
    viewAll: lang === 'ar' ? 'عرض كافة الحلول الصناعية' : 'Explore All Industrial Solutions',
    items: [
      {
        id: 'turnkey-automation',
        badge: lang === 'ar' ? 'القدرة الرئيسية' : 'FLAGSHIP CAPABILITY',
        title: lang === 'ar' ? 'الأتمتة الصناعية وأنظمة SCADA' : 'Industrial Automation & SCADA',
        desc: lang === 'ar' 
          ? 'تحكم متكامل بالعمليات الإنتاجية، مزامنة الخطوط الروبوتية، ومراقبة فورية للمصانع.' 
          : 'End-to-end process control, robotic line synchronization, and real-time plant telemetry.',
        link: '/industrial',
        linkText: lang === 'ar' ? 'استكشف المنظومات' : 'Explore Systems',
      },
      {
        id: 'control-rooms',
        badge: lang === 'ar' ? 'التحكم والطاقة' : 'CONTROL & POWER',
        title: lang === 'ar' ? 'غرف التحكم ولوحات MCC الكهربائية' : 'Electrical Control Rooms & MCC Panels',
        desc: lang === 'ar' 
          ? 'لوحات تحكم MCC، تكامل وحدات PLC، وإدارة مركزية متقدمة للمنشآت.' 
          : 'Custom motor control centers, PLC integration, and centralized plant management.',
        link: '/industrial/control-room',
        linkText: lang === 'ar' ? 'أنظمة التحكم' : 'View Control Systems',
      },
      {
        id: 'drives-machinery',
        badge: lang === 'ar' ? 'المعدات الثقيلة' : 'HEAVY EQUIPMENT',
        title: lang === 'ar' ? 'المحركات والمضخات ومسارات السوائل' : 'Industrial Drives, Pumps & Fluidics',
        desc: lang === 'ar' 
          ? 'محركات كهربائية عالية العزم ومضخات هيدروليكية وصمامات آلية دقيقة.' 
          : 'High-torque continuous motors, precision hydraulic valves, and fluid transfer systems.',
        link: '/industrial',
        linkText: lang === 'ar' ? 'المعدات الميكانيكية' : 'View Equipment',
      },
      {
        id: 'infrastructure',
        badge: lang === 'ar' ? 'إدارة المرافق' : 'FACILITY CONTROL',
        title: lang === 'ar' ? 'المنشآت الذكية وإدارة استهلاك الطاقة' : 'Intelligent Facilities & Energy Management',
        desc: lang === 'ar' 
          ? 'أتمتة إدارة المباني، ضبط التكييف، وتحسين ذكي لاستهلاك الطاقة.' 
          : 'Automated building management, environmental zoning, and predictive energy optimization.',
        link: '/offerings',
        linkText: lang === 'ar' ? 'أنظمة المرافق' : 'View Facility Systems',
      },
    ]
  };

  const items = content.items || [];
  const flagship = items[0];
  const controlRooms = items[1];
  const machinery = items[2];
  const infrastructure = items[3];

  return (
    <section 
      id="industrial-solutions" 
      className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#EAF4FB] via-white to-[#EAF4FB] text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Ambient Glow Tints */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#00A3E8]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-blue-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===================== TOP ROW : LEFT TEXT + RIGHT FEATURE CARD ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* ---------- LEFT SIDE : HEADLINE + SUBTITLE + CTA ---------- */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8]" />
              <span>{content.eyebrow}</span>
            </div>

            {/* Main Headline with Cyan Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              {lang === 'ar' ? (
                content.title
              ) : (
                <>
                  Enter a world of{' '}
                  <span className="text-[#00A3E8]">Industrial</span>
                  <br />
                  <span className="text-[#00A3E8]">Automation Excellence</span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
              {content.subtitle}
            </p>

            {/* Ecosystem / Trust Badges Row (Photo 2 ke "Works with" jaise) */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Cpu className="w-5 h-5 text-[#00A3E8]" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">SCADA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Zap className="w-5 h-5 text-[#00A3E8]" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">PLC / MCC</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#00A3E8]" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">ISO Certified</span>
              </div>
            </div>

            {/* Helper line (Photo 2 ke "Automation that works on your preferred ecosystem") */}
            <p className="text-xs sm:text-sm text-slate-500 italic mb-6">
              {lang === 'ar' 
                ? 'أنظمة متكاملة تعمل على البنية التحتية الصناعية المفضلة لديك'
                : 'Automation that works on your preferred industrial ecosystem'}
            </p>

            {/* Primary CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/industrial"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00A3E8] hover:bg-blue-600 text-white font-extrabold text-sm shadow-[0_6px_24px_rgba(0,163,232,0.4)] transition-all"
              >
                <span>{content.viewAll}</span>
                <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </motion.div>

          {/* ---------- RIGHT SIDE : FEATURE PANEL (SLIDE-IN FROM RIGHT) ---------- */}
          {flagship && (
            <motion.div 
              initial={{ opacity: 0, x: isArabic ? -70 : 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-[#E8F4FD] to-[#D6EAF8] p-6 sm:p-8 border border-[#00A3E8]/20 shadow-xl">
                {/* Vertical Cyan Bar (Photo 2 jaisa) */}
                <div className="absolute top-8 left-0 w-1 h-12 bg-[#00A3E8] rounded-r" />

                <div className="pl-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3 uppercase">
                    {flagship.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-md">
                    {flagship.desc}
                  </p>

                  {/* Explore Button (Outline Style like Photo 2) */}
                  <Link
                    to={flagship.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-800 hover:border-[#00A3E8] hover:bg-[#00A3E8] text-slate-900 hover:text-white font-bold text-xs sm:text-sm transition-all group"
                  >
                    <span>{flagship.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Feature Image Card (Photo 2 ke tablet jaise) */}
                <div className="mt-6 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={imgIndustrialAutomation} 
                    alt={flagship.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* ===================== BOTTOM ROW : 3 CARDS (Control / Machinery / Infrastructure) ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {[controlRooms, machinery, infrastructure].filter(Boolean).map((item, idx) => {
            const imgs = [imgControlRoom, imgPumpsDrives, imgInfrastructure];
            return (
              <motion.div 
                key={item.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden border border-slate-200 hover:border-[#00A3E8]/60 bg-white transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={imgs[idx]} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                    {item.desc}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00A3E8] hover:text-blue-600 transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default IndustrialSolutionsGrid;