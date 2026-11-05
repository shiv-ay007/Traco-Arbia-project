import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function FaqAndCertificate({ t, lang = "en" }) {
  const isArabic = lang === "ar";
  const [openFaq, setOpenFaq] = useState(0);

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
    ]
  };

  const faqs = content.faqs || [];

  return (
    <section 
      id="faq-certification" 
      className="py-16 sm:py-20 bg-[#F8FAFC] text-slate-900 border-t border-b border-slate-300 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(0, 163, 232, 0.16), transparent 55%),
            radial-gradient(ellipse 70% 70% at 85% 110%, rgba(99, 102, 241, 0.12), transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(224, 242, 254, 0.7), transparent 70%),
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

      {/* Ambient Blobs */}
      <div className="absolute -top-40 -right-40 w-[750px] h-[750px] bg-gradient-to-bl from-[#00A3E8]/15 to-transparent blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400/12 to-transparent blur-[200px] pointer-events-none rounded-full" />

      {/* Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* FAQ Header */}
        <div className="mb-8 sm:mb-10 text-left rtl:text-right">
          <h2
            className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight uppercase"
            style={{ color: '#1F1F1F' }}
          >
            {isArabic ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED QUESTIONS'}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className={`rounded-none transition-colors duration-200 border overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#00A3E8] shadow-[0_8px_30px_rgba(0,163,232,0.12)]' 
                    : 'bg-white/85 hover:bg-white border-slate-200 hover:border-[#00A3E8]/50 shadow-[0_1px_4px_rgba(0,0,0,0.03)]'
                }`}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-start cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <span className={`text-xs sm:text-sm font-black transition-colors duration-200 ${
                      isOpen ? 'text-[#00A3E8]' : 'text-slate-400 group-hover:text-[#00A3E8]'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-200 ${
                      isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                      {item.q}
                    </span>
                  </div>

                  {/* Toggle Icon with Smooth Rotation */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    className={`w-9 h-9 rounded-none flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen 
                        ? 'bg-[#00A3E8] text-white shadow-[0_4px_16px_rgba(0,163,232,0.35)]' 
                        : 'bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/25 group-hover:bg-[#00A3E8]/20'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Expandable Body with Buttery Smooth Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`faq-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.22, delay: 0.05 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-11 sm:pl-14">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FaqAndCertificate;
