import React, { useEffect, useRef, useState } from 'react'; 
import { Link } from 'react-router-dom';
import {
  ChevronRight, Wrench, Cpu, Gauge,
  Cog, Factory, CheckCircle2, ArrowRight
} from 'lucide-react';
import IndustrialSection from '../components/IndustrialSection';
import industrialBg from '../assets/header_background_img/industrial.png';
import EngineeringStandards from '../components/home/EngineeringStandards';
import IndustrialLiveMonitor from '../components/IndustrialLiveMonitor';

// Count-up hook
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    if (!/^\d+(\.\d+)?/.test(String(target))) {
      setCount(target);
      return;
    }

    const match = String(target).match(/^([\d.]+)(.*)$/);
    const end = parseFloat(match[1]);
    const suffix = match[2] || '';
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end) + suffix);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, lang, shouldStart }) {
  const displayValue = useCountUp(stat.value, 2000, shouldStart);
  return (
    <div className="text-center group">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#00A3E8] mb-1 group-hover:scale-110 transition-transform inline-block tabular-nums">
        {displayValue}
      </div>
      <div className="text-[10px] sm:text-sm text-slate-300 font-semibold leading-snug">
        {lang === 'ar' ? stat.labelAr : stat.labelEn}
      </div>
    </div>
  );
}

function IndustrialPage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      icon: Cpu,
      title: lang === 'ar' ? 'تصميم وتصنيع لوحات التحكم MCC' : 'Control Panels & MCC Engineering',
      desc: lang === 'ar'
        ? 'تصميم وتجميع لوحات التحكم الكهربائي ذات الجهد المنخفض والمتوسط وفق أعلى المعايير والمواصفات السعودية.'
        : 'Custom design and assembly of Low & Medium Voltage Motor Control Centers (MCC) and distribution panels.'
    },
    {
      icon: Cog,
      title: lang === 'ar' ? 'برمجة أنظمة PLC و SCADA' : 'PLC & SCADA Automation',
      desc: lang === 'ar'
        ? 'برمجة متقدمة لأنظمة التحكم المنطقي (Siemens, Schneider, ABB, Delta) وربط شاشات المراقبة الصناعية HMI.'
        : 'Comprehensive PLC programming, HMI screen development, and SCADA telemetry systems for complete plant visibility.'
    },
    {
      icon: Gauge,
      title: lang === 'ar' ? 'مغيرات السرعة VFD والمحركات' : 'VFDs & High-Efficiency Drives',
      desc: lang === 'ar'
        ? 'توريد وبرمجة مغيرات السرعة ومحركات التشغيل الشاقة لتقليل استهلاك الطاقة وحماية المعدات الميكانيكية.'
        : 'Variable Frequency Drives and heavy-duty motor integration for energy optimization and mechanical protection.'
    },
    {
      icon: Factory,
      title: lang === 'ar' ? 'صيانة المصانع وتحديث خطوط الإنتاج' : 'Retrofitting & Plant Maintenance',
      desc: lang === 'ar'
        ? 'تحديث خطوط الإنتاج القديمة واستبدال المكونات التالفة بقطع غيار أصلية مع دعم فني ميداني على مدار الساعة.'
        : 'Retrofitting legacy production lines with modern sensors and controllers, backed by 24/7 on-site field engineers.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* Industrial Hero Banner */}
      <section className="relative py-12 sm:py-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <img
          src={industrialBg}
          alt="Industrial Automation Background"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75"
        />
        {/* Increased Dark Overlay for Mobile Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Breadcrumb Navigation - Hidden on Mobile */}
          <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
            <Link to="/" className="hover:text-[#00A3E8] transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{t.nav.industrial}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg">
            <Wrench className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-white">{lang === 'ar' ? 'هندسة الأتمتة الصناعية الدقيقة' : 'Industrial Automation & Factory Engineering'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'ar'
              ? 'حلول أتمتة قوية وموثوقة للمصانع والمنشآت السعودية'
              : 'Precision Industrial Automation Solutions'}
          </h1>

          {/* Description Hidden on Mobile */}
          <p className="hidden sm:block text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {lang === 'ar'
              ? 'تريكو العربية تقدم حلولاً هندسية متقدمة في تصنيع لوحات التحكم وبرمجة خطوط الإنتاج والمحركات الكهربائية لتوفير أعلى كفاءة وتقليل التوقف غير المخطط له.'
              : 'Empowering Saudi industrial facilities with rugged control rooms, high-torque motors, fluidic pumps, and PLC control engineered for zero downtime.'}
          </p>

          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
            >
              {t.nav.contact}
            </Link>
          </div>

        </div>
      </section>

      

      {/* Main Industrial Section Component */}
      <IndustrialSection t={t} lang={lang} onOpenQuote={onOpenQuote} />

       {/* 8. Engineering Standards, SASO/IEC Compliance & Trust Section */}
      <EngineeringStandards t={t} lang={lang} />

      {/* < IndustrialLiveMonitor t={t} lang={lang} /> */}

      {/* Industrial Engineering Capabilities */}
      <section className="py-8 sm:py-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-sm backdrop-blur-sm">
              <span>{lang === 'ar' ? 'القدرات الهندسية' : 'CORE CAPABILITIES'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-4">
              {lang === 'ar' ? 'خدماتنا للمصانع والقطاع الصناعي' : 'Turnkey Industrial Plant Services'}
            </h2>
            <p className="hidden sm:block text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'ar'
                ? 'فريق من المهندسين المعتمدين والمعدات المتطورة لخدمة المصانع في جدة والمنطقة الغربية وكافة أنحاء المملكة.'
                : 'Backed by experienced Saudi engineering personnel and certified parts complying with international and local SASO standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-[#00A3E8] shadow-[0_10px_30px_rgba(0,163,232,0.06)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.18)] hover:-translate-y-1.5 transition-all group flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[#00A3E8] flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-[#00A3E8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Bottom tick hidden on mobile to save space */}
                  <div className="hidden sm:flex pt-4 mt-6 border-t border-slate-100 items-center gap-2 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{lang === 'ar' ? 'متوافق مع المواصفات القياسية' : 'Standard Compliant'}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      

      {/* KPI STATS STRIP */}
      <section
        ref={statsRef}
        className="py-8 sm:py-12 bg-gradient-to-r from-[#061C3D] via-[#0A2E5C] to-[#061C3D] relative overflow-hidden border-y border-sky-400/20"
      >
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: '500+', labelEn: 'Industrial Systems Delivered', labelAr: 'منظومة صناعية منجزة' },
              { value: '10+',  labelEn: 'Years in Saudi Arabia',        labelAr: 'سنوات في المملكة' },
              { value: '35%',  labelEn: 'Average Energy Savings',       labelAr: 'متوسط توفير الطاقة' },
              { value: '24/7', labelEn: 'On-Site Support',              labelAr: 'دعم ميداني مستمر' },
            ].map((stat, i) => (
              <StatItem key={i} stat={stat} lang={lang} shouldStart={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-8 sm:py-16 bg-gradient-to-b from-white via-[#F0F7FF] to-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-10 right-10 w-[500px] h-[300px] bg-[#00A3E8]/8 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              <Factory className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{lang === 'ar' ? 'القطاعات التي نخدمها' : 'INDUSTRIES WE SERVE'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
              {lang === 'ar' ? 'خبرة في جميع القطاعات الصناعية' : 'Automation Across Every Sector'}
            </h2>
            <p className="hidden sm:block text-slate-500 text-sm font-medium leading-relaxed">
              {lang === 'ar'
                ? 'نخدم كافة القطاعات الصناعية في المملكة بمعايير هندسية عالية ودعم فني متواصل.'
                : 'From food processing to oil & gas, our engineers deliver automation solutions built for every Saudi sector.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {[
              { icon: '🏭', titleEn: 'Food & Beverage Processing',  titleAr: 'الصناعات الغذائية والمشروبات',    descEn: 'HACCP-compliant automation, conveyor control, and batch processing.', descAr: 'أتمتة خطوط التعبئة والتغليف ومعالجة الدُفعات وفق معايير HACCP.' },
              { icon: '💧', titleEn: 'Water & Wastewater Treatment', titleAr: 'محطات معالجة المياه والصرف الصحي', descEn: 'SCADA-controlled pump stations, chemical dosing, and filtration automation.', descAr: 'محطات ضخ مؤتمتة بنظام SCADA وتحكم ذكي في الترشيح والكيماويات.' },
              { icon: '⛽', titleEn: 'Oil, Gas & Petrochemical',     titleAr: 'النفط والغاز والبتروكيماويات',    descEn: 'EX-rated PLC panels, pipeline telemetry, and emergency shutdown systems.', descAr: 'لوحات تحكم PLC مقاومة للانفجار وأنظمة الإيقاف الطارئ ESD.' },
              { icon: '🔩', titleEn: 'Metal & Steel Manufacturing',  titleAr: 'تصنيع المعادن والصلب',             descEn: 'Rolling mill automation, press-line control, and real-time quality telemetry.', descAr: 'أتمتة خطوط الدرفلة والكبس ومراقبة الجودة الفورية.' },
              { icon: '🏗️', titleEn: 'Construction & Infrastructure', titleAr: 'البناء والبنية التحتية',          descEn: 'Building Management Systems (BMS), lift control, and power distribution panels.', descAr: 'أنظمة إدارة المباني BMS والتحكم في المصاعد ولوحات توزيع الطاقة.' },
              { icon: '🧪', titleEn: 'Pharmaceuticals & Chemicals',  titleAr: 'الأدوية والكيماويات',              descEn: 'Clean-room environment control, batch reactor automation, and process validation.', descAr: 'تحكم في الغرف النظيفة وأتمتة المفاعلات والتحقق من صحة العمليات.' },
            ].map((sector, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 hover:border-[#00A3E8] shadow-[0_8px_25px_rgba(0,163,232,0.06)] hover:shadow-[0_18px_40px_rgba(0,163,232,0.15)] hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{sector.icon}</span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-1 sm:mb-2 leading-tight">
                  {lang === 'ar' ? sector.titleAr : sector.titleEn}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                  {lang === 'ar' ? sector.descAr : sector.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-8 sm:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#00A3E8]/5 blur-[150px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              <Cog className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{lang === 'ar' ? 'كيف نعمل' : 'HOW IT WORKS'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
              {lang === 'ar' ? 'من الاستشارة إلى التشغيل في 3 خطوات' : 'From Consultation to Commissioning'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.66%)] right-[calc(16.66%)] h-[2px] bg-gradient-to-r from-[#00A3E8]/30 via-[#00A3E8] to-[#00A3E8]/30 pointer-events-none" />
            {[
              {
                step: '01', icon: Wrench,
                titleEn: 'Site Visit & Assessment',     titleAr: 'الزيارة الميدانية والتقييم',
                descEn: 'Our engineers visit your facility to assess existing systems, identify automation needs, and measure electrical infrastructure.',
                descAr: 'يزور مهندسونا منشأتك لتقييم الأنظمة الحالية وتحديد متطلبات الأتمتة وقياس البنية الكهربائية.'
              },
              {
                step: '02', icon: Cpu,
                titleEn: 'Engineering Design & Proposal', titleAr: 'التصميم الهندسي وعرض الحل',
                descEn: 'We prepare detailed electrical schematics, PLC logic diagrams, and a full bill of materials with project timeline.',
                descAr: 'نعد مخططات كهربائية تفصيلية ومنطق PLC وقائمة مواد كاملة مع جدول زمني للمشروع.'
              },
              {
                step: '03', icon: CheckCircle2,
                titleEn: 'Installation & Commissioning', titleAr: 'التركيب والتشغيل التجريبي',
                descEn: 'Certified technicians install, wire, and commission all equipment on-site with full testing and handover documentation.',
                descAr: 'يقوم فنيونا المعتمدون بالتركيب والتوصيل والتشغيل التجريبي الكامل مع وثائق التسليم.'
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#EAF4FB] to-white border-2 border-[#00A3E8]/30 group-hover:border-[#00A3E8] flex flex-col items-center justify-center shadow-[0_8px_25px_rgba(0,163,232,0.12)] group-hover:shadow-[0_15px_40px_rgba(0,163,232,0.28)] transition-all duration-300">
                      <span className="text-[9px] sm:text-[10px] font-black text-[#00A3E8] tracking-widest mb-0.5 sm:mb-1">{step.step}</span>
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-slate-700 group-hover:text-[#00A3E8] transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-1 sm:mb-2">
                    {lang === 'ar' ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-xs">
                    {lang === 'ar' ? step.descAr : step.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUSTED AUTOMATION BRANDS */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-6 sm:mb-8">
            {lang === 'ar' ? 'نعمل مع أبرز العلامات الصناعية العالمية' : 'Authorized Partner — Leading Industrial Brands'}
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-6">
            {[
              { name: 'Siemens',    color: '#009999' },
              { name: 'ABB',        color: '#FF000F' },
              { name: 'Schneider',  color: '#3DCD58' },
              { name: 'Delta',      color: '#0072BC' },
              { name: 'Mitsubishi', color: '#CC0000' },
              { name: 'Danfoss',    color: '#E2001A' },
            ].map((brand, i) => (
              <div key={i} className="flex items-center justify-center p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-[#00A3E8] shadow-sm hover:shadow-[0_8px_20px_rgba(0,163,232,0.12)] hover:-translate-y-0.5 transition-all group cursor-default">
                <span className="text-xs sm:text-base font-black tracking-tight transition-colors" style={{ color: brand.color }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & COMPLIANCE */}
      <section className="py-8 sm:py-16 bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#00A3E8]/8 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{lang === 'ar' ? 'الاعتمادات والمطابقة' : 'CERTIFICATIONS & COMPLIANCE'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
              {lang === 'ar' ? 'معتمدون بأعلى المعايير الدولية والسعودية' : 'Certified to Global & Saudi Standards'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {[
              { code: 'SASO',       titleEn: 'SASO Certified',          titleAr: 'مطابق لمواصفات SASO',   descEn: 'IP55/IP65 desert-rated electrical enclosures compliant with Saudi standards.', descAr: 'لوحات كهربائية بدرجة حماية IP65 مطابقة للمواصفات السعودية.' },
              { code: 'IEC',        titleEn: 'IEC 61131-3 PLC',         titleAr: 'معيار PLC الدولي IEC',   descEn: 'Deterministic PLC programming and fieldbus communication standards.',          descAr: 'برمجة PLC حتمية ومعايير اتصالات Fieldbus الدولية.' },
              { code: 'ISO 9001',   titleEn: 'ISO 9001:2015',           titleAr: 'ايزو 9001:2015',         descEn: 'Certified quality management system ensuring consistent engineering excellence.', descAr: 'نظام إدارة جودة معتمد لضمان التميز الهندسي المستمر.' },
              { code: 'Vision 2030',titleEn: 'Vision 2030 Aligned',     titleAr: 'رؤية السعودية 2030',     descEn: 'Supporting NIDLP with Industry 4.0 smart manufacturing technology.',           descAr: 'دعم برنامج تطوير الصناعة الوطني بتقنيات الثورة الصناعية 4.0.' },
            ].map((cert, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 hover:border-[#00A3E8] shadow-[0_8px_25px_rgba(0,163,232,0.06)] hover:shadow-[0_18px_40px_rgba(0,163,232,0.15)] hover:-translate-y-1 transition-all group text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-950 to-[#0F1B33] flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform shadow-md">
                  <span className="text-[8px] sm:text-[9px] font-black text-[#00A3E8] text-center leading-tight px-1">{cert.code}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-1 sm:mb-2">
                  {lang === 'ar' ? cert.titleAr : cert.titleEn}
                </h3>
                <p className="hidden sm:block text-xs text-slate-500 leading-relaxed font-medium">
                  {lang === 'ar' ? cert.descAr : cert.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B      {/* Bottom CTA Section */}
      <section className="py-8 sm:py-14 bg-gradient-to-b from-white via-[#EBF5FC] to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00A3E8]/12 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-sky-400/12 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-gradient-to-br from-[#061C3D] via-[#0A2E5C] to-[#030E1F] text-white rounded-2xl sm:rounded-[2.5rem] py-8 px-5 sm:px-10 md:py-12 md:px-14 border border-sky-400/35 shadow-[0_25px_65px_-12px_rgba(0,163,232,0.32),0_12px_35px_rgba(3,14,31,0.5)] relative overflow-hidden text-center group">

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-[#00A3E8]/30 via-cyan-400/12 to-transparent blur-[85px] pointer-events-none rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/25 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00A3E8]/20 blur-[100px] pointer-events-none rounded-full" />
            
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-4 tracking-tight leading-tight sm:whitespace-nowrap text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                {lang === 'ar' ? 'هل تخطط لمشروع أتمتة صناعية جديد؟' : 'Planning an Industrial Automation Project?'}
              </h2>
              
              {/* Subtitle Hidden on Mobile */}
              <p className="hidden sm:block text-slate-200 text-[11px] sm:text-base max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed font-normal">
                {lang === 'ar'
                  ? 'مهندسونا مستعدون لزيارة موقع مصنعك ودراسة متطلبات التشغيل وتقديم دراسة جدوى فنية.'
                  : 'Our engineering specialists are ready to visit your factory site, assess system requirements, and deliver technical proposals.'}
              </p>
              
              <div className="flex items-center justify-center mt-3 sm:mt-0">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 sm:px-8 sm:py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E8] via-cyan-400 to-[#00A3E8] hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-[11px] sm:text-sm shadow-[0_0_28px_rgba(0,163,232,0.55)] hover:shadow-[0_0_38px_rgba(0,163,232,0.8)] hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 group/btn"
                >
                  <span>{t.nav.contact}</span>
                  <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default IndustrialPage;