import React, { useState, useRef, useEffect } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ZoomIn, 
  X, 
  FileCheck,
  ExternalLink 
} from 'lucide-react';
import certificateImg from '../../assets/Certificate.png';

function FaqAndCertificate({ t, lang }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);
  const contentRefs = useRef([]);

  const content = t?.industrialHome?.faqAndCertificate || {
    faqEyebrow: lang === 'ar' ? 'الأسئلة الأكثر تكراراً' : 'COMMON QUESTIONS',
    faqTitle: lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    faqSubtitle: lang === 'ar' 
      ? 'إجابات واضحة وشاملة حول حلول الأتمتة الصناعية والمباني الذكية وخدماتنا الهندسية في المملكة.' 
      : 'Clear answers about Treco Arabia\'s industrial automation, smart control systems, and engineering services.',
    faqs: [
      {
        q: lang === 'ar' 
          ? 'ما هي حلول الأتمتة والمنازل الذكية التي تقدمها شركة تريكو؟' 
          : 'What smart home and industrial automation solutions does TRECO provide?',
        a: lang === 'ar' 
          ? 'تقدم تريكو حلول أتمتة شاملة ومتكاملة تشمل أنظمة التحكم الإشرافي SCADA، لوحات تحكم المحركات MCC، أنظمة إدارة المباني BMS، بالإضافة إلى حلول المنازل والقصور الذكية المصممة خصيصاً للمملكة.' 
          : 'TRECO provides comprehensive end-to-end automation, including industrial SCADA and distributed control systems, motor control centers (MCC), building management systems (BMS), and luxury architectural smart living solutions engineered specifically for the Saudi market.'
      },
      {
        q: lang === 'ar' 
          ? 'هل يمكن لتريكو أتمتة المنازل والمنشآت القائمة دون إعادة تمديد الأسلاك؟' 
          : 'Can TRECO automate existing homes and facilities without major rewiring?',
        a: lang === 'ar' 
          ? 'نعم، تعمل حلول تريكو مع المباني الجديدة والقائمة على حد سواء. يمكن دمج الوحدات الذكية والمفاتيح اللمسية والأنظمة اللاسلكية بأقل تعديل ممكن وفقاً لحالة التوصيل والأحمال المطلوبة.' 
          : 'Yes, TRECO solutions can work with both new and existing facilities. Products like smart modules, retrofittable controllers, and wireless touch switches can be integrated with minimal structural changes, depending on wiring condition and load requirements.'
      },
      {
        q: lang === 'ar' 
          ? 'هل تتوافق أجهزة تريكو الذكية مع أنظمة Alexa و Google Assistant؟' 
          : 'Are TRECO smart devices compatible with Alexa and Google Assistant?',
        a: lang === 'ar' 
          ? 'نعم، تدعم أجهزة تريكو ومحاور التحكم التكامل السلس مع أبرز المساعدات الصوتية بما فيها Amazon Alexa و Google Assistant و Apple HomeKit وشاشات اللمس المركزية.' 
          : 'Yes, TRECO smart devices and control hubs offer seamless integration with leading voice ecosystems including Amazon Alexa, Google Assistant, Apple HomeKit, and centralized touch panels.'
      },
      {
        q: lang === 'ar' 
          ? 'كيف تساهم تريكو في تعزيز الأمان وكفاءة استهلاك الطاقة؟' 
          : 'How does TRECO improve facility safety and energy efficiency?',
        a: lang === 'ar' 
          ? 'من خلال الجدولة الذكية للأحمال، والضبط المستمر للتكييف والإضاءة عبر المستشعرات، والأقفال البيومترية، وحماية الدوائر الكهربائية، مما يوفر حتى ٣٥٪ من استهلاك الطاقة.' 
          : 'Through intelligent load scheduling, sensor-driven climate and lighting zoning, surge-protected circuits, biometric access security, and real-time power telemetry that can reduce energy consumption by up to 35%.'
      },
      {
        q: lang === 'ar' 
          ? 'هل تقدم تريكو حلول الأتمتة للمكاتب والفنادق والمنشآت الصناعية الكبرى؟' 
          : 'Does TRECO provide automation for offices, hotels, and industrial facilities?',
        a: lang === 'ar' 
          ? 'نعم، توفر تريكو أنظمة أتمتة متطورة للمجمعات التجارية، الفنادق، المستشفيات، والمصانع والمنشآت الصناعية في مختلف مدن المملكة مع دعم فني متواصل.' 
          : 'Yes, TRECO delivers enterprise-grade automation for commercial complexes, hospitality venues, healthcare facilities, and demanding industrial manufacturing plants across Saudi Arabia.'
      }
    ],
    certEyebrow: lang === 'ar' ? 'ضمان الجودة والمعايير المعتمدة' : 'QUALITY ASSURANCE & STANDARDS',
    certTitle: lang === 'ar' ? 'شهادة الآيزو ISO 9001:2015' : 'ISO 9001:2015 Certification',
    certSubtitle: lang === 'ar' 
      ? 'معتمدة بموجب المعيار الدولي ISO 9001:2015 لضمان أعلى معايير إدارة الجودة في التصنيع والأتمتة.' 
      : 'Certified under ISO 9001:2015 ensuring world-class quality management standards in manufacturing and automation.',
    certDesc: lang === 'ar' 
      ? 'التزام مستمر بالتحسين ومراقبة الجودة الفائقة لضمان أعلى مستويات رضا العملاء وسلامة التشغيل في المملكة العربية السعودية.' 
      : 'Continuous improvement and high-quality processes for superior customer satisfaction, product longevity, and operational safety.',
    certBadges: lang === 'ar' 
      ? [
          'معتمدة من IAF و EGAC دولياً',
          'رقم الشهادة: E20260244809',
          'تقييم معتمد من Royal Assessments',
          'مطابقة لمواصفات SASO و IEC'
        ]
      : [
          'IAF & EGAC Accredited',
          'Certificate No: E20260244809',
          'Audited by Royal Assessments',
          'Saudi SASO & IEC Compatible'
        ],
    certScopeTitle: lang === 'ar' ? 'مجال الأنشطة المعتمد:' : 'Certified Scope of Activities:',
    certScopeText: lang === 'ar' 
      ? 'تصنيع وتصميم وتطوير منتجات إنترنت الأشياء والأتمتة، مفاتيح اللمس الذكية، ولوحات التحكم المعيارية.' 
      : 'Manufacturing, design & development of audio-video, IoT automation products, touch switches, and intelligent modular controls.',
    certBtnEnlarge: lang === 'ar' ? 'معاينة الشهادة الرسمية' : 'View Full Certificate',
    certBtnClose: lang === 'ar' ? 'إغلاق المعاينة' : 'Close Preview'
  };

  const faqs = content.faqs || [];
  const certBadges = content.certBadges || [];

  // Smooth auto-height calculation for accordion
  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (openFaq === idx) {
        el.style.maxHeight = el.scrollHeight + 'px';
      } else {
        el.style.maxHeight = '0px';
      }
    });
  }, [openFaq, faqs.length]);

  return (
    <section 
      id="faq-certification" 
      className="pt-20 sm:pt-24 pb-16 sm:pb-24 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      {/* ====== LAYER 1: Rich Multi-Stop Premium Light Gradient ====== */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(0, 163, 232, 0.16), transparent 55%),
            radial-gradient(ellipse 70% 70% at 85% 110%, rgba(99, 102, 241, 0.12), transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(224, 242, 254, 0.7), transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(6, 182, 212, 0.10), transparent 60%),
            linear-gradient(155deg, 
              #FFFFFF 0%, 
              #FAFCFF 15%, 
              #F0F7FF 30%, 
              #E8F4FE 50%, 
              #E0F2FE 65%, 
              #EBF8FF 80%, 
              #F8FCFF 92%, 
              #FFFFFF 100%
            )
          `
        }}
      />

      {/* ====== LAYER 2: Center Vignette ====== */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 163, 232, 0.07) 0%, transparent 60%)'
        }}
      />

      {/* ====== LAYER 3: Ambient Cyan Blob — Top Right ====== */}
      <div className="absolute -top-40 -right-40 w-[750px] h-[750px] bg-gradient-to-bl from-[#00A3E8]/15 to-transparent blur-[180px] pointer-events-none rounded-full" />

      {/* ====== LAYER 4: Ambient Indigo Blob — Bottom Left ====== */}
      <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400/12 to-transparent blur-[200px] pointer-events-none rounded-full" />

      {/* ====== LAYER 5: Cyan Blob — Mid Left ====== */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-cyan-300/10 blur-[150px] pointer-events-none rounded-full" />

      {/* ====== LAYER 6: Dot Grid ====== */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />

      {/* ====== LAYER 7: Diagonal Streaks ====== */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 120px,
            #00A3E8 120px,
            #00A3E8 121px
          )`
        }}
      />

      {/* ====== LAYER 8: Top Glow Border ====== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />

      {/* ====== LAYER 9: Bottom Glow Border ====== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION 1: FAQ Accordion                                  */}
        {/* ========================================================= */}
        <div className="w-full mb-20 sm:mb-24">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#00A3E8]/15 via-[#00A3E8]/8 to-transparent border border-[#00A3E8]/35 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_4px_20px_rgba(0,163,232,0.15)] backdrop-blur-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{content.faqEyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                {content.faqTitle}
              </span>
            </h2>

            <p className="mt-3 text-xs sm:text-base text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
              {content.faqSubtitle}
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl transition-all duration-500 border overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#00A3E8]/50 shadow-[0_10px_40px_rgba(0,163,232,0.15)]' 
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white border-slate-200 hover:border-[#00A3E8]/40 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_25px_rgba(0,163,232,0.08)]'
                  }`}
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-start cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className={`text-xs sm:text-sm font-black transition-colors ${
                        isOpen ? 'text-[#00A3E8]' : 'text-slate-400 group-hover:text-[#00A3E8]'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className={`text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                        isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {item.q}
                      </span>
                    </div>

                    {/* Toggle Icon */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen 
                        ? 'bg-gradient-to-br from-[#00A3E8] to-[#0086C4] text-white shadow-[0_6px_20px_rgba(0,163,232,0.4)] rotate-180' 
                        : 'bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/25 group-hover:border-[#00A3E8]/60 group-hover:bg-[#00A3E8]/15'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expandable Body — SMOOTH AUTO-HEIGHT */}
                  <div 
                    ref={(el) => (contentRefs.current[idx] = el)}
                    style={{
                      maxHeight: '0px',
                      transition: 'max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease'
                    }}
                    className={`overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pl-11 sm:pl-14">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================= */}
        {/* SECTION 2: ISO 9001:2015 Certification Card              */}
        {/* ========================================================= */}
        <div className="rounded-3xl border border-slate-200 hover:border-[#00A3E8]/50 bg-white/80 backdrop-blur-sm p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08),0_0_50px_rgba(0,163,232,0.06)] relative overflow-hidden transition-all duration-500">
          
          {/* Top Cyan Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-80" />
          
          {/* Decorative Watermark */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-[#00A3E8]/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left: Certificate Thumbnail */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                onClick={() => setShowCertModal(true)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden p-2 bg-white border-2 border-[#00A3E8]/40 hover:border-[#00A3E8] shadow-[0_15px_40px_rgba(15,23,42,0.15),0_0_30px_rgba(0,163,232,0.1)] transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-xl bg-white">
                  <img 
                    src={certificateImg} 
                    alt="TRECO ISO 9001:2015 Management System Certificate" 
                    className="w-full h-full object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white font-black text-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      <span>{content.certBtnEnlarge}</span>
                    </span>
                  </div>
                </div>

                {/* Verification Label */}
                <div className="mt-2 text-center py-1">
                  <span className="text-[11px] font-bold text-[#00A3E8] flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>IAF & EGAC ACCREDITED QMS</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3E8]/15 via-[#00A3E8]/8 to-transparent border border-[#00A3E8]/35 text-[#00A3E8] text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow-[0_4px_20px_rgba(0,163,232,0.15)]">
                  <Award className="w-3.5 h-3.5" />
                  <span>{content.certEyebrow}</span>
                </div>

                {/* Title — gradient */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug mb-3">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    {content.certTitle}
                  </span>
                </h3>

                <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed mb-3">
                  {content.certSubtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {content.certDesc}
                </p>

                {/* Scope Box */}
                <div className="p-4 rounded-xl bg-[#00A3E8]/5 border border-[#00A3E8]/20 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E8] uppercase tracking-wider mb-1.5">
                    <FileCheck className="w-4 h-4" />
                    <span>{content.certScopeTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {content.certScopeText}
                  </p>
                </div>

                {/* Trust Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
                  {certBadges.map((badge, idx) => (
                    <div 
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#00A3E8]/40 flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_15px_rgba(0,163,232,0.1)] transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E8] flex-shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setShowCertModal(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] hover:from-cyan-400 hover:to-[#00A3E8] text-white font-black text-xs sm:text-sm tracking-wide shadow-[0_8px_25px_rgba(0,163,232,0.4)] hover:shadow-[0_12px_35px_rgba(0,163,232,0.55)] transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>{content.certBtnEnlarge}</span>
                </button>

                <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 px-3 py-2">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E8]" />
                  <span>{lang === 'ar' ? 'فحص وتدقيق دوري لضمان الامتثال' : 'Audited & Verified for Industrial Safety'}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* FULLSCREEN MODAL for Certificate Preview                  */}
      {/* ========================================================= */}
      {showCertModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all"
          onClick={() => setShowCertModal(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white border-2 border-[#00A3E8]/60 rounded-3xl p-4 sm:p-6 shadow-[0_25px_80px_rgba(15,23,42,0.35)] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#00A3E8]" />
                <span className="text-sm sm:text-base font-black text-slate-900">
                  {content.certTitle} — Treco Technologies
                </span>
              </div>

              <button
                onClick={() => setShowCertModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-gradient-to-br hover:from-[#00A3E8] hover:to-[#0086C4] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-[0_4px_15px_rgba(0,163,232,0.4)]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative max-h-[75vh] overflow-y-auto flex items-center justify-center bg-slate-50 rounded-xl p-2 border border-slate-200">
              <img 
                src={certificateImg} 
                alt="Treco Technologies ISO 9001:2015 Official Certificate" 
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 mt-3 text-xs text-slate-500">
              <span>Registration No: E20260244809</span>
              <button
                onClick={() => setShowCertModal(false)}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00A3E8] to-[#0086C4] hover:from-cyan-400 hover:to-[#00A3E8] text-white font-bold text-xs transition-all cursor-pointer shadow-[0_4px_15px_rgba(0,163,232,0.3)] hover:shadow-[0_6px_20px_rgba(0,163,232,0.5)]"
              >
                {content.certBtnClose}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default FaqAndCertificate;