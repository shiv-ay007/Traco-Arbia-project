import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, Home, Factory, ArrowRight, CheckCircle2,
  Clock, Award, Users, ChevronRight, Mic, Cpu, Zap, Activity, Check, Radio, Eye
} from 'lucide-react';

import smartHomeImg from '../assets/header_background_img/smart-home.png';
import industrialImg from '../assets/header_background_img/industrial.png';
import imgControlRoom from '../assets/industrial_products/elctrical_controll_room.jpeg';
import smartSpeakersImg from '../assets/jsd.png';
import voiceEcosystemBadges from '../assets/image.png';

function AboutSection({ lang = 'en', onOpenQuote }) {
  const isArabic = lang === 'ar';
  
  const [activeDivision, setActiveDivision] = useState('smart-home');
  const [smartHomeView, setSmartHomeView] = useState('voice');
  const [industrialView, setIndustrialView] = useState('control');
  const [activeVoicePreset, setActiveVoicePreset] = useState(0);
  const [activeIndustrialTab, setActiveIndustrialTab] = useState(0);

  const voicePresets = [
    {
      id: 'ac',
      command: isArabic ? 'أليكسا، شغلي المكيف على ١٨ درجة' : 'Alexa, Turn AC to 18 degrees',
      response: isArabic ? 'تم ضبط التكييف على ١٨°م' : 'Living room AC set to 18°C.',
      icon: '❄️'
    },
    {
      id: 'night',
      command: isArabic ? 'أليكسا، تصبح على خير' : 'Alexa, Good Night',
      response: isArabic ? 'إطفاء الإضاءة، إغلاق الستائر، قفل الأبواب' : 'Lights off, curtains closed, doors locked.',
      icon: '🌙'
    },
    {
      id: 'cinema',
      command: isArabic ? 'هي جوجل، وقت الفيلم' : 'Hey Google, Movie Time',
      response: isArabic ? 'خفت إضاءة الصالة ١٠٪ وإغلاق الستائر' : 'Lights dimmed to 10%, shades closed.',
      icon: '🎬'
    },
    {
      id: 'away',
      command: isArabic ? 'سيري، أنا مغادر المنزل' : 'Siri, I am Leaving',
      response: isArabic ? 'تفعيل الأمان وتوفير الطاقة' : 'Security armed, power-saving active.',
      icon: '🚗'
    }
  ];

  const industrialSpecializations = [
    {
      id: 'mcc',
      title: isArabic ? 'مراكز تحكم المحركات (MCC)' : 'Motor Control Centers (MCC)',
      spec: 'IP55/IP65 • SASO Certified',
      desc: isArabic ? 'لوحات جهد منخفض مصممة لحرارة الصحراء.' : 'Desert-rated low-voltage switchgear & panels.',
      icon: Zap
    },
    {
      id: 'scada',
      title: isArabic ? 'أنظمة المراقبة الفورية SCADA' : 'SCADA & Real-Time Telemetry',
      spec: '99.98% Uptime • Redundant',
      desc: isArabic ? 'مراقبة موحدة للمصانع والعمليات على مدار الساعة.' : 'Centralized 24/7 plant process supervision.',
      icon: Cpu
    },
    {
      id: 'drives',
      title: isArabic ? 'المحركات والمضخات ومسارات السوائل' : 'Drives, Pumps & Fluidics',
      spec: 'IEC 60034 Standard',
      desc: isArabic ? 'محركات عالية العزم ومغيرات سرعة VFD مستمرة.' : 'Continuous high-torque VFD drives & pumps.',
      icon: Factory
    },
    {
      id: 'bms',
      title: isArabic ? 'إدارة المنشآت وتوفير الطاقة BMS' : 'Facilities & Energy BMS',
      spec: 'Up to 35% Savings',
      desc: isArabic ? 'تحسين ذكي لاستهلاك الطاقة والتكييف بالمصانع.' : 'Predictive climate and facility energy savings.',
      icon: Activity
    }
  ];

  const stats = [
    { value: '10+', label: isArabic ? 'سنوات في المملكة' : 'Years in Saudi Arabia', sub: isArabic ? 'المقر الرئيسي بجدة' : 'Headquartered in Jeddah', icon: Clock },
    { value: '500+', label: isArabic ? 'مشروع منجز' : 'Delivered KSA Projects', sub: isArabic ? 'سكني وصناعي' : 'Villas & Industrial Plants', icon: Award },
    { value: '100%', label: isArabic ? 'مطابق لـ SASO & IEC' : 'SASO & IEC Compliant', sub: isArabic ? 'مقاوم لمناخ الصحراء' : 'Desert Climate Certified', icon: ShieldCheck },
    { value: '24/7', label: isArabic ? 'دعم هندسي محلي' : 'Local Jeddah Engineering', sub: isArabic ? 'مهندسون معتمدون' : 'Certified On-Site Teams', icon: Users },
  ];

  return (
    <section 
      id="about" 
      className="pt-12 sm:pt-24 pb-10 sm:pb-16 text-slate-900 border-b border-slate-200 relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFD] to-[#EFF5FB]"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 90% 50% at 20% -5%, rgba(0, 163, 232, 0.12), transparent 50%), radial-gradient(ellipse 70% 60% at 85% 105%, rgba(14, 165, 233, 0.10), transparent 55%)` }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#00A3E8]/35 text-[#00A3E8] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8] animate-pulse" />
            <span>{isArabic ? 'من نحن • نبذة عن تريكو العربية' : 'WHO WE ARE • ABOUT TRECO ARABIA'}</span>
            <Sparkles className="w-3 h-3 text-[#00A3E8]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-2 sm:mb-3">
            {isArabic ? (
              <>رواد حلول <span className="text-[#00A3E8]">المنازل الذكية</span> و <span className="text-[#00A3E8]">الأتمتة الصناعية</span> في المملكة</>
            ) : (
              <>Engineering Next-Gen <span className="text-[#00A3E8]">Smart Living</span> & <span className="text-[#00A3E8]">Industrial Systems</span></>
            )}
          </h2>

          {/* Description Hidden on Mobile to save space */}
          <p className="hidden sm:block text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto mb-5">
            {isArabic
              ? 'انطلاقاً من مقرنا في جدة، تقدم تريكو العربية حلول أتمتة شاملة تجمع بين فخامة المنازل الذكية وصلابة الأنظمة الصناعية وفق معايير SASO.'
              : 'Headquartered in Jeddah, Treco Arabia delivers SASO-compliant architectural smart living and heavy-duty industrial automation across Saudi Arabia.'}
          </p>

          {/* DUAL DIVISION SWITCHER */}
          <div className="inline-flex p-1 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs max-w-md mx-auto w-full mt-2 sm:mt-0">
            <button
              type="button"
              onClick={() => setActiveDivision('smart-home')}
              className={`flex-1 py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl font-black text-[11px] sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeDivision === 'smart-home' ? 'bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Home className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeDivision === 'smart-home' ? 'text-white' : 'text-[#00A3E8]'}`} />
              <span>{isArabic ? 'المنازل الذكية' : 'Smart Home'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveDivision('industrial')}
              className={`flex-1 py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl font-black text-[11px] sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeDivision === 'industrial' ? 'bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Factory className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeDivision === 'industrial' ? 'text-white' : 'text-[#00A3E8]'}`} />
              <span>{isArabic ? 'الأتمتة الصناعية' : 'Industrial Automation'}</span>
            </button>
          </div>
        </div>

        {/* MAIN CARD CONTAINER */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_15px_45px_-15px_rgba(15,23,42,0.06)] p-3 sm:p-8 lg:p-10 mb-6 sm:mb-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00A3E8]/8 blur-[70px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-400/6 blur-[70px] pointer-events-none rounded-full" />

          {/* VIEW A: SMART HOME */}
          {activeDivision === 'smart-home' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <h3 className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-1 sm:mb-2">
                    {isArabic ? (
                      <>ادخل عالم <span className="text-[#00A3E8]">التحكم الصوتي</span> والأتمتة المنزلية</>
                    ) : (
                      <>Enter a world of <span className="text-[#00A3E8]">Voice-controlled</span> Home Automation</>
                    )}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4 font-normal">
                    {isArabic
                      ? 'قل فقط: "أليكسا، تصبح على خير" لتنسيق الإضاءة والتكييف والستائر والأمان بأمر واحد.'
                      : 'Say, “Alexa, Good Night,” and watch your smart home adjust lights, close curtains, and set the perfect AC temperature.'}
                  </p>

                  {/* Voice Presets - Showing only 2 on Mobile */}
                  <div className="mb-3 sm:mb-4">
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {voicePresets.slice(0, 2).map((preset, idx) => { // Slice(0, 2) limits to 2 items on all screens, adjust if needed for desktop
                        const isSelected = activeVoicePreset === idx;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            onClick={() => setActiveVoicePreset(idx)}
                            className={`p-2 rounded-lg sm:rounded-xl border text-left rtl:text-right transition-all flex items-center justify-between cursor-pointer ${
                              isSelected ? 'bg-[#00A3E8]/10 border-[#00A3E8] text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-[#00A3E8]/40'
                            }`}
                          >
                            <div className="flex items-center gap-1 min-w-0">
                              <span className="text-xs sm:text-base flex-shrink-0">{preset.icon}</span>
                              <div className="text-[9px] sm:text-xs font-bold truncate text-slate-900">
                                "{preset.command}"
                              </div>
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ml-1 ${isSelected ? 'bg-[#00A3E8]' : 'bg-slate-300'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Status Strip Hidden on Mobile */}
                  <div className="hidden sm:flex p-2 px-3 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 truncate">
                        {voicePresets[activeVoicePreset].response}
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#00A3E8] bg-sky-50 px-1.5 sm:px-2 py-0.5 rounded-md flex-shrink-0">
                      Hub Active
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center w-full">
                    <img src={voiceEcosystemBadges} alt="Works with Apple Home, Amazon Alexa, Google Home" className="w-full max-w-[200px] sm:max-w-full h-auto object-contain rounded-lg border border-slate-200 bg-white p-1" />
                  </div>
                </div>
              </div>

              {/* Right Image Area */}
              <div className="lg:col-span-6 relative order-1 lg:order-2 mb-2 lg:mb-0">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-sky-50/30 p-2 sm:p-6 min-h-[220px] sm:min-h-[420px] flex flex-col justify-between shadow-xs">
                  
                  <div className="flex items-start sm:items-center justify-between relative z-20 mb-2 sm:mb-3 gap-2 sm:gap-0">
                    <div className="inline-flex p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-white border border-slate-200 shadow-xs">
                      <button type="button" onClick={() => setSmartHomeView('voice')} className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${smartHomeView === 'voice' ? 'bg-[#00A3E8] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>
                        <Mic className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        <span>{isArabic ? 'الصوت' : 'Speakers'}</span>
                      </button>
                      <button type="button" onClick={() => setSmartHomeView('villa')} className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${smartHomeView === 'villa' ? 'bg-[#00A3E8] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>
                        <Eye className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        <span>{isArabic ? 'فيلا' : 'Villa'}</span>
                      </button>
                    </div>

                    {/* Ecosystem Ready Badge hidden on mobile */}
                    <span className="hidden sm:inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 sm:py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                      <span>{isArabic ? 'متوافق' : 'Ready'}</span>
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {smartHomeView === 'voice' ? (
                      <motion.div key="voice" initial={{ opacity: 0, x: isArabic ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isArabic ? 40 : -40 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 flex flex-col items-center justify-center flex-1 my-1">
                        <div className="relative mb-2 self-center sm:self-start sm:ml-6 z-20">
                          <div className="px-2 py-1 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-2xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white shadow-md flex items-center gap-1.5 sm:gap-2">
                            <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white animate-pulse" />
                            <span className="font-extrabold text-[9px] sm:text-sm truncate max-w-[150px] sm:max-w-none">
                              "{voicePresets[activeVoicePreset].command}"
                            </span>
                          </div>
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#00A3E8] rotate-45 absolute -bottom-1 left-4 sm:left-6" />
                        </div>
                        <div className="relative max-w-[150px] sm:max-w-[360px] w-full flex items-center justify-center">
                          <img src={smartSpeakersImg} alt="Smart Home Voice Assistants" className="w-full h-auto max-h-[120px] sm:max-h-[300px] object-contain drop-shadow-md" />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key="villa" initial={{ opacity: 0, x: isArabic ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isArabic ? 40 : -40 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 rounded-lg sm:rounded-xl overflow-hidden flex-1 min-h-[140px] sm:min-h-[260px] border border-slate-200 group bg-slate-100">
                        <img src={smartHomeImg} alt="Saudi Luxury Villa Living" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0 opacity-100" />
                        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-md sm:rounded-xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
                          <span className="text-[9px] sm:text-xs font-black text-slate-900 truncate">{isArabic ? 'إضاءة DALI وتكييف ذكي' : 'Ambient DALI Lighting'}</span>
                          <span className="text-[8px] sm:text-[10px] font-bold text-[#00A3E8] bg-sky-50 px-1.5 py-0.5 rounded">SASO Spec</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 pt-1.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between mt-1 sm:mt-0">
                    <span className="text-[9px] sm:text-xs text-slate-500 font-medium">{isArabic ? 'حلول سكنية متكاملة' : 'Architectural automation'}</span>
                    <Link to="/smart-home" className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black text-[#00A3E8] hover:text-blue-600 transition-colors group">
                      <span>{isArabic ? 'استكشف' : 'Explore'}</span>
                      <ChevronRight className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* VIEW B: INDUSTRIAL */}
          {activeDivision === 'industrial' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <h3 className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-1 sm:mb-2">
                    {isArabic ? (<>أنظمة <span className="text-[#00A3E8]">التحكم الصناعي ومراكز MCC</span></>) : (<>Industrial <span className="text-[#00A3E8]">SCADA & MCC Control</span></>)}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4 font-normal">
                    {isArabic ? 'لوحات تحكم المحركات MCC وأنظمة SCADA للمراقبة اللحظية المصممة لتحمل المناخ الصحراوي ومطابقة لمواصفات SASO.' : 'Desert-rated Motor Control Centers (MCC), PLCs, and redundant SCADA telemetry engineered strictly to Saudi SASO & IEC regulations.'}
                  </p>

                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 mb-3 sm:mb-4">
                    {industrialSpecializations.slice(0, 2).map((spec, idx) => { // Limited to 2 on mobile
                      const Icon = spec.icon;
                      const isSelected = activeIndustrialTab === idx;
                      return (
                        <div key={spec.id} onClick={() => setActiveIndustrialTab(idx)} className={`p-1.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all cursor-pointer ${isSelected ? 'bg-[#00A3E8]/10 border-[#00A3E8] shadow-xs' : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#00A3E8]/40'}`}>
                          <div className="flex items-center gap-1 sm:gap-2.5 mb-0.5 sm:mb-1.5">
                            <div className={`w-4 h-4 sm:w-7 sm:h-7 rounded flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-[#00A3E8] text-white' : 'bg-white border border-slate-200 text-slate-700'}`}>
                              <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                            </div>
                            <div className="text-[8px] sm:text-xs font-black text-slate-900 truncate">{spec.title}</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                            <span className="text-[7px] sm:text-[10px] text-slate-500 font-medium truncate">{spec.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Certifications hidden on mobile to save space */}
                  <div className="hidden sm:flex pt-2 border-t border-slate-100 flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"><ShieldCheck className="w-3.5 h-3.5 text-[#00A3E8]" />SASO</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"><Check className="w-3.5 h-3.5 text-[#00A3E8]" />IEC 61131-3</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"><Award className="w-3.5 h-3.5 text-[#00A3E8]" />ISO 9001</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative order-1 lg:order-2 mb-2 lg:mb-0">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-sky-50/30 p-2 sm:p-6 min-h-[220px] sm:min-h-[420px] flex flex-col justify-between shadow-xs">
                  
                  <div className="flex items-start sm:items-center justify-between relative z-20 mb-2 sm:mb-3 gap-2 sm:gap-0">
                    <div className="inline-flex p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-white border border-slate-200 shadow-xs">
                      <button type="button" onClick={() => setIndustrialView('control')} className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${industrialView === 'control' ? 'bg-[#00A3E8] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}><Zap className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span>{isArabic ? 'غرف' : 'Control'}</span></button>
                      <button type="button" onClick={() => setIndustrialView('plant')} className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${industrialView === 'plant' ? 'bg-[#00A3E8] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}><Factory className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span>{isArabic ? 'مصانع' : 'Plant'}</span></button>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 sm:py-1 rounded-full border border-emerald-200"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />SCADA LIVE</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={industrialView} initial={{ opacity: 0, x: isArabic ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isArabic ? 40 : -40 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 rounded-lg sm:rounded-xl overflow-hidden flex-1 min-h-[140px] sm:min-h-[270px] border border-slate-200 group bg-slate-100 my-1 sm:my-2">
                      <img src={industrialView === 'control' ? imgControlRoom : industrialImg} alt="Industrial Control Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0 opacity-100" />
                    </motion.div>
                  </AnimatePresence>

                  <div className="relative z-10 pt-1.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] sm:text-xs text-slate-500 font-medium">{isArabic ? 'هندسة متطورة' : 'Turnkey engineering'}</span>
                    <Link to="/industrial" className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black text-[#00A3E8] hover:text-blue-600 transition-colors group">
                      <span>{isArabic ? 'استكشف' : 'Explore'}</span>
                      <ChevronRight className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-2.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#00A3E8]/50 transition-all flex flex-row items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#00A3E8]/10 text-[#00A3E8] border border-[#00A3E8]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-2xl font-black text-slate-900 leading-none">{item.value}</div>
                  <div className="text-[9px] sm:text-xs font-bold text-slate-700 mt-0.5 sm:mt-1 leading-tight">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>

                {/* BOTTOM ACTION CTA BANNER */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-center sm:text-left rtl:sm:text-right">
            <h3 className="text-sm sm:text-lg font-black text-white">
              {isArabic ? 'جاهز لبدء مشروع الأتمتة الخاص بك؟' : 'Ready to Engineer Your Automation System?'}
            </h3>
            <p className="hidden sm:block text-[10px] sm:text-xs text-slate-300 font-normal mt-1">
              {isArabic 
                ? 'تواصل مع مهندسينا المعتمدين بجدة للحصول على دراسة فنية مخصصة.' 
                : 'Consult our certified engineers in Jeddah for residential smart living or industrial systems.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full sm:w-auto mt-2 sm:mt-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-[11px] sm:text-sm shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{isArabic ? 'تواصل مع فريقنا الهندسي' : 'Consult Our Engineers'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              to={activeDivision === 'smart-home' ? '/smart-home' : '/industrial'}
              className="hidden sm:inline-flex px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[11px] sm:text-sm transition-all"
            >
              <span>
                {activeDivision === 'smart-home'
                  ? (isArabic ? 'استكشف المنازل الذكية' : 'Explore Smart Home')
                  : (isArabic ? 'استكشف الأنظمة الصناعية' : 'Explore Industrial Systems')}
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;