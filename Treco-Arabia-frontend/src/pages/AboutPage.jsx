import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  ArrowRight,
  ArrowLeft,
  Award,
  Factory,
  Home as HomeIcon,
  Compass,
  Target,
  Zap,
  Layers,
  ThermometerSnowflake,
  Phone
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import IndustrialCtaBanner from '../components/home/IndustrialCtaBanner';

// Images
import heroBg from '../assets/header_background_img/hero_bg_combined.jpg';
import imgVilla from '../assets/gallery/gallery_villa_exterior.jpg';
import imgScada from '../assets/gallery/gallery_scada.jpg';
import imgMcc from '../assets/industrial_custom_webp/slide2_mcc_electrical_panel.webp';
import sasoLogo from '../assets/standards/standards_saso.jpg';
import iecLogo from '../assets/standards/standards_iec.jpg';
import isoLogo from '../assets/standards/standards_iso.jpg';
import visionLogo from '../assets/standards/standards_vision2030.jpg';

export function AboutPage({ t, lang, onOpenQuote }) {
  const isAr = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      value: '10+',
      labelEn: 'Years in Saudi Arabia',
      labelAr: 'سنوات بالمملكة',
      descEn: 'Established engineering track record',
      descAr: 'خبرة عريقة في السوق السعودي'
    },
    {
      value: '500+',
      labelEn: 'Delivered Projects',
      labelAr: 'مشروع منجز',
      descEn: 'Plants & luxury residences',
      descAr: 'مصانع ومساكن فاخرة'
    },
    {
      value: '100%',
      labelEn: 'SASO & IEC Certified',
      labelAr: 'مطابقة تامة',
      descEn: 'Tested up to 55°C desert heat',
      descAr: 'معتمد لتحمل حرارة حتى 55°م'
    },
    {
      value: '24/7',
      labelEn: 'Local Jeddah Support',
      labelAr: 'دعم محلي 24/7',
      descEn: 'Certified on-site engineers',
      descAr: 'فريق هندسي مقيم بجدة'
    }
  ];

  const coreValues = [
    {
      icon: Cpu,
      titleEn: 'Engineering Precision',
      titleAr: 'الدقة الهندسية',
      descEn: 'Micro-sensor telemetry and strict SASO & IEC compliance.',
      descAr: 'دقة تصنيعية وبرمجية مطابقة لأعلى المواصفات القياسية.'
    },
    {
      icon: ThermometerSnowflake,
      titleEn: 'Desert Reliability',
      titleAr: 'التحمل الصحراوي',
      descEn: 'Engineered to withstand extreme ambient temperatures exceeding 55°C.',
      descAr: 'مصممة للعمل المتواصل تحت حرارة البيئة السعودية القاسية.'
    },
    {
      icon: Layers,
      titleEn: 'Turnkey Delivery',
      titleAr: 'تسليم متكامل',
      descEn: 'End-to-end execution from blueprints to commissioning and maintenance.',
      descAr: 'تنفيذ كامل من التصميم المبدئي إلى التشغيل والصيانة المستمرة.'
    },
    {
      icon: Award,
      titleEn: 'Local Jeddah Hub',
      titleAr: 'فريق محلي بجدة',
      descEn: 'Full-time certified automation engineers stationed in Jeddah.',
      descAr: 'مهندسون وفنيون معتمدون مقيمون بجدة للاستجابة المباشرة.'
    }
  ];

  const standardsList = [
    {
      logo: sasoLogo,
      nameEn: 'SASO Certified',
      nameAr: 'مطابقة SASO',
      detailEn: 'Saudi Standards Organization compliant',
      detailAr: 'معتمد من هيئة المواصفات والمقاييس'
    },
    {
      logo: iecLogo,
      nameEn: 'IEC Safety',
      nameAr: 'معايير IEC',
      detailEn: 'International Electrotechnical Commission',
      detailAr: 'السلامة الكهربائية الدولية'
    },
    {
      logo: isoLogo,
      nameEn: 'ISO 9001:2015',
      nameAr: 'شهادة ISO 9001',
      detailEn: 'Certified quality management system',
      detailAr: 'إدارة جودة معتمدة عالمياً'
    },
    {
      logo: visionLogo,
      nameEn: 'Vision 2030',
      nameAr: 'رؤية 2030',
      detailEn: 'Fostering industrial autonomy in KSA',
      detailAr: 'دعم التحول الصناعي والمدن الذكية'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. Ultra-Minimal Hero Banner */}
      <PageHero
        bgImage={heroBg}
        breadcrumbText={isAr ? 'من نحن' : 'About Us'}
        titleStart={isAr ? 'عن' : 'About'}
        titleHighlight={isAr ? 'تريكو العربية' : 'Treco Arabia'}
        titleEnd=""
        lang={lang}
        t={t}
      />

      {/* 2. Main Identity & Story Section (with Animated Tech Research & Consultancy Background using framer-motion) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Animated Tech Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle Technical Blueprint Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
                <circle cx="48" cy="48" r="1.2" fill="#00A3E8" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-blueprint-grid)" />
          </svg>

          {/* Animated Glowing Radial Gradients using Framer Motion */}
          <motion.div
            animate={{
              x: [0, 45, -35, 0],
              y: [0, -35, 30, 0],
              scale: [1, 1.18, 0.92, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-[#00A3E8]/15 via-sky-400/10 to-transparent rounded-full blur-[100px]"
          />

          <motion.div
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 40, -35, 0],
              scale: [1, 1.25, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/12 via-blue-500/8 to-transparent rounded-full blur-[110px]"
          />

          <motion.div
            animate={{
              x: [0, 35, -45, 0],
              y: [0, -25, 35, 0],
              scale: [0.95, 1.15, 1, 0.95],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-28 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-sky-300/15 via-[#00A3E8]/10 to-transparent rounded-full blur-[95px]"
          />

          {/* Animated Tech Circuit Pulses using Framer Motion */}
          <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M-50,80 L280,80 L340,140 L780,140 L840,70 L1450,70"
              fill="none"
              stroke="#00A3E8"
              strokeWidth="1.5"
              strokeDasharray="8 10"
              animate={{
                strokeDashoffset: [0, -100],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.path
              d="M100,420 L480,420 L540,360 L980,360 L1040,430 L1500,430"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeDasharray="6 8"
              animate={{
                strokeDashoffset: [0, 100],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Clean Minimal Typography with Requested Heading */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Minimal Line Subtitle */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A3E8]">
                <span className="w-6 h-0.5 bg-[#00A3E8]"></span>
                <span>{isAr ? 'أبحاث واستشارات تقنية' : 'RESEARCH & CONSULTANCY'}</span>
              </div>

              {/* Exact Requested Heading */}
              <h2
                className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-[1.28] [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr ? (
                  <>
                    مرحباً بكم في عالمنا من{' '}
                    <span className="text-[#00A3E8]">الأبحاث والخدمات الاستشارية</span>{' '}
                    التقنية المتطورة والشاملة.
                  </>
                ) : (
                  <>
                    Welcome to our world of{' '}
                    <span className="text-[#00A3E8]">cutting edge</span>{' '}
                    comprehensive technical research & consultancy services.
                  </>
                )}
              </h2>

              {/* Minimal 1-paragraph text */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                {isAr
                  ? 'انطلاقاً من مقرنا في جدة، نجمع بين أحدث الأبحاث الهندسية وخدمات الاستشارة المتخصصة لتصميم وتطوير منظومات الأتمتة الذكية والأنظمة الصناعية المعتمدة في المملكة وفق رؤية 2030.'
                  : 'Based in Jeddah, Treco Arabia bridges scientific research with hands-on technical consultancy — delivering precision industrial automation schematics, certified SASO & IEC compliance advisory, and future-ready smart infrastructure across Saudi Arabia.'}
              </p>

              {/* Clean minimal action link */}
              <div className="pt-2 flex items-center gap-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00A3E8] hover:text-cyan-600 transition-colors cursor-pointer group"
                >
                  <span>{isAr ? 'طلب استشارة فنية متخصصة' : 'Request Technical Consultation'}</span>
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Visual Showcase with Motion Hover */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Main Image: Industrial SCADA Control Room */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-8 rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-slate-950 h-56 sm:h-64 relative group backdrop-blur-sm"
                >
                  <img
                    src={imgScada}
                    alt="Treco Arabia SCADA & Control"
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#00A3E8] font-bold">
                      {isAr ? 'استشارات سكادا والتحكم' : 'RESEARCH & SCADA'}
                    </span>
                  </div>
                </motion.div>

                {/* Secondary Image: Luxury Villa Smart Living */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-4 rounded-2xl overflow-hidden shadow-lg border border-white/80 bg-slate-900 h-44 sm:h-52 relative group"
                >
                  <img
                    src={imgVilla}
                    alt="Treco Arabia Smart Living"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00A3E8] font-bold">
                      {isAr ? 'أنظمة ذكية' : 'IOT LIVING'}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stats Strip (Expanded Width, Fixed Parallax Background & Motion Animation) */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 bg-fixed bg-center bg-cover overflow-hidden border-y border-slate-800/80 text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Translucent Gradient & Frosted Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/95 backdrop-blur-[2px] pointer-events-none" />

        {/* Animated Ambient Light Beam with Framer Motion */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#00A3E8]/12 to-transparent pointer-events-none blur-2xl"
        />

        {/* Expanded Width Container (max-w-[1600px]) */}
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative text-center p-6 sm:p-8 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] backdrop-blur-md border border-white/10 hover:border-[#00A3E8]/60 transition-all duration-300 shadow-xl group overflow-hidden"
              >
                {/* Glowing Top Accent on Hover */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00A3E8] rounded-full opacity-50 group-hover:w-28 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_12px_#00A3E8]" />

                {/* Animated Stat Value */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00A3E8] tracking-tight mb-2 drop-shadow-[0_0_25px_rgba(0,163,232,0.45)]"
                >
                  {st.value}
                </motion.div>

                {/* Stat Label */}
                <div className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-[#00A3E8] transition-colors">
                  {isAr ? st.labelAr : st.labelEn}
                </div>

                {/* Stat Description */}
                <div className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed">
                  {isAr ? st.descAr : st.descEn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Foundation: Vision & Mission (Minimal Editorial Cards - ABB Inspired with Subtle Background) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F4F6F8] border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 sm:mb-14 text-left rtl:text-right">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A3E8] mb-2.5">
              <span className="w-6 h-0.5 bg-[#00A3E8]"></span>
              <span>{isAr ? 'الرؤية والرسالة' : 'OUR STRATEGIC FOUNDATION'}</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-transform:none!important]"
              style={{ textTransform: 'none' }}
            >
              {isAr ? 'الرؤية والرسالة والالتزام الهندسي' : 'Our Vision, Mission & Strategic Mandate'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Vision (Editorial Image Card) */}
            <div className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={visionLogo}
                  alt="Treco Arabia Strategic Vision 2030"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-4 mb-1.5 block">
                {isAr ? 'الرؤية الإستراتيجية' : 'STRATEGIC VISION'}
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr
                  ? 'بناء منظومة أتمتة وطنية متقدمة تتماشى مع مستهدفات رؤية المملكة 2030'
                  : 'Pioneering autonomous industrial intelligence aligned with Saudi Vision 2030'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {isAr
                  ? 'أن نكون الشريك الهندسي الأكثر موثوقية في المملكة لتوفير بنية تحتية ذكية ومستدامة.'
                  : 'To be Saudi Arabia’s benchmark engineering partner for autonomous industrial operations and intelligent living spaces.'}
              </p>
              <span className="mt-auto text-[11px] font-mono text-slate-400">
                {isAr ? 'رؤية 2030 • البنية التحتية الذكية' : 'VISION 2030 • KSA INFRASTRUCTURE'}
              </span>
            </div>

            {/* Card 2: Mission (Branded Graphic Banner - Matching ABB's Center Card) */}
            <div className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#00A3E8] via-sky-600 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-white group-hover:brightness-105 transition-all">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
                <span className="text-[11px] font-mono tracking-widest text-sky-200 uppercase mb-2 font-bold">
                  {isAr ? 'المستهدف التشغيلي' : 'OPERATIONAL MANDATE'}
                </span>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight uppercase leading-tight drop-shadow-md">
                  {isAr ? <>صفر توقف<br />تشغيلي</> : <>ZERO DOWNTIME<br />ENGINEERING</>}
                </h4>
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-4 mb-1.5 block">
                {isAr ? 'الرسالة الهندسية' : 'OPERATIONAL MISSION'}
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr
                  ? 'حلول أتمتة تضمن استمرارية تشغيل المصانع بدون توقف غير مخطط له'
                  : 'Engineered for zero unplanned downtime across Saudi manufacturing plants'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {isAr
                  ? 'تقديم منظومات هندسية متكاملة تضمن أعلى كفاءة للمصانع ورفاهية ذكية متقدمة للمساكن.'
                  : 'Delivering turnkey, fail-safe automation from plant control rooms to luxury residences with relentless reliability.'}
              </p>
              <span className="mt-auto text-[11px] font-mono text-slate-400">
                {isAr ? 'كفاءة تشغيلية • 24/7' : 'CONTINUOUS OPERATION • 24/7'}
              </span>
            </div>

            {/* Card 3: Quality Commitment (Editorial Photo Card) */}
            <div className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={imgScada}
                  alt="Treco Arabia Quality Assurance"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-4 mb-1.5 block">
                {isAr ? 'الالتزام بالجودة' : 'QUALITY COMMITMENT'}
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr
                  ? 'مطابقة تامة 100% لمواصفات SASO و IEC بدعم مهندسين محليين بجدة'
                  : '100% SASO & IEC certified hardware backed by certified Jeddah engineers'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {isAr
                  ? 'فحص مخبري وميداني صارم لجميع المعدات مع سرعة استجابة فورية بالمملكة.'
                  : 'Exhaustive pre-commissioning testing, factory acceptance audits, and immediate on-site technical support.'}
              </p>
              <span className="mt-auto text-[11px] font-mono text-slate-400">
                {isAr ? 'معتمد SASO • IEC • ISO' : 'SASO • IEC • ISO COMPLIANT'}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Dual Core Specializations (Minimal 2-Column Cards) */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A3E8] mb-2">
              <span className="w-6 h-0.5 bg-[#00A3E8]"></span>
              <span>{isAr ? 'مجالات التخصص' : 'SPECIALIZATIONS'}</span>
              <span className="w-6 h-0.5 bg-[#00A3E8]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? 'مجالات خبرتنا المتكاملة' : 'Our Core Disciplines'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Smart Home */}
            <div className="rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
              <div>
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={imgVilla}
                    alt="Treco Arabia Smart Living"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {isAr ? 'المنازل والفلل الذكية' : 'Luxury Smart Living'}
                    </h3>
                    <HomeIcon className="w-6 h-6 text-[#00A3E8]" />
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {isAr
                      ? 'أتمتة متكاملة للإضاءة المعمارية، التكييف الذكي، الستائر الكهربائية، الأقفال البيومترية، والسينما المنزلية.'
                      : 'Intelligent lighting, precision climate control, motorized curtains, biometric security, and full Syncrow IoT integration.'}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  to="/smart-home"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A3E8] hover:text-cyan-600 transition-colors"
                >
                  <span>{isAr ? 'استكشف أنظمة المنازل الذكية' : 'Explore Smart Home'}</span>
                  {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </div>

            {/* Industrial Automation */}
            <div className="rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
              <div>
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={imgMcc}
                    alt="Treco Arabia Industrial Power & MCC"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {isAr ? 'الأتمتة الصناعية وتحكم MCC' : 'Industrial Automation & SCADA'}
                    </h3>
                    <Factory className="w-6 h-6 text-[#00A3E8]" />
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {isAr
                      ? 'تصنيع لوحات MCC، برمجة PLC، مراقبة SCADA المركزية، والمحركات الكهربائية لخطوط الإنتاج والمصانع.'
                      : 'Certified Low & Medium Voltage MCC panels, PLC programming, SCADA telemetry, and heavy-duty motor drives.'}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  to="/industrial"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A3E8] hover:text-cyan-600 transition-colors"
                >
                  <span>{isAr ? 'استكشف الأنظمة الصناعية' : 'Explore Industrial Systems'}</span>
                  {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Call To Action Footer Banner (Home Page Component) */}
      <IndustrialCtaBanner t={t} lang={lang} onOpenQuote={onOpenQuote} />
    </div>
  );
}

export default AboutPage;
