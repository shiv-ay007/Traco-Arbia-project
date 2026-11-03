import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Sparkles, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import RoomVisualizer from '../components/RoomVisualizer';
import VoiceDemo from '../components/VoiceDemo';

import smartHomeBg from '../assets/header_background_img/smart-home.png';
import smartTouchImg from '../assets/header_background_img/hero_clean_poster.jpg';
import smartFiberSecurityImg from '../assets/offerings_products/biometric_lock.jpg';
import smartThermostatImg from '../assets/offerings_products/smart_ac.jpg';
import SyncrowProductsShowcase from '../components/home/SyncrowProductsShowcase';
import VisualHomeControl from '../components/VisualHomeControl';

function SmartHomePage({ t, lang, onOpenQuote }) {
  const isArabic = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeScene, setActiveScene] = useState(0);
  const scenes = [
    { name: isArabic ? 'سينما' : 'Cinema', glow: 'from-purple-500/30' },
    { name: isArabic ? 'عشاء' : 'Dinner', glow: 'from-amber-500/30' },
    { name: isArabic ? 'استرخاء' : 'Relax', glow: 'from-cyan-500/30' },
  ];

  const [isLocked, setIsLocked] = useState(true);
  const [temp, setTemp] = useState(18);

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. SMART HOME HERO BANNER                                 */}
      {/* ========================================================= */}
      <section className="relative py-12 sm:py-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src={smartHomeBg} 
          alt="Smart Home Automation Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 drop-shadow-md">
            <Link to="/" className="hover:text-[#00A3E8] transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{t.nav.smartHome}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 shadow-lg">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-white">{isArabic ? 'حلول المنازل الذكية الفاخرة' : 'Next-Gen Smart Living'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 sm:mb-3 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {isArabic 
              ? 'حوّل منزلك إلى مساحة ذكية متكاملة ومترفة' 
              : 'Next-Generation Smart Home Automation'}
          </h1>

          <p className="text-slate-200 text-[11px] sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-5 sm:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2">
            {isArabic
              ? 'أتمتة متكاملة للإضاءة، التكييف، الستائر، والأقفال الذكية المصممة خصيصاً للفلل والقصور بالمملكة.'
              : 'Unified ambient lighting, intelligent climate regulation, motorized curtains, and biometric security tailored for modern Saudi residences.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
            >
              {t.nav.contact}
            </Link>
            <a
              href="#visualizer"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
            >
              {isArabic ? 'معاينة تجربة الغرف' : 'Explore Room Demo'}
            </a>
          </div>

        </div>
      </section>

      < VisualHomeControl />


      {/* ========================================================= */}
      {/* 2. PHOTO & VISUAL-DRIVEN PILLARS                          */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-16 relative bg-gradient-to-b from-white via-[#F7FAFD] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#00A3E8]/8 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-white border border-[#00A3E8]/35 text-[#00A3E8] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-2 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#00A3E8]" />
              <span>{isArabic ? 'المزايا الذكية' : 'VISUAL SMART CAPABILITIES'}</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isArabic ? (
                <>منظومة حياة متكاملة <span className="text-[#00A3E8]">بلمسة واحدة</span></>
              ) : (
                <>Complete Smart Living <span className="text-[#00A3E8]">Visualized</span></>
              )}
            </h2>
          </div>

          {/* 4 Photo-Driven Visual Cards Grid - Fixed layout for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* CARD 1 */}
            <div className="rounded-xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-[0_15px_35px_rgba(0,163,232,0.15)] hover:border-[#00A3E8] transition-all group overflow-hidden flex flex-col justify-between">
              
              {/* Image Top */}
              <div className="relative w-full h-32 sm:h-44 md:h-48 overflow-hidden bg-slate-900 flex-shrink-0">
                <img 
                  src={smartTouchImg} 
                  alt="Mobile and Touch Smart Control"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 z-10">
                  <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isArabic ? 'سحابي' : 'Live'}</span>
                  </span>
                </div>
              </div>

              {/* Text Bottom */}
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-start">
                <h3 className="text-xs sm:text-base font-black text-slate-900 mb-1 group-hover:text-[#00A3E8] transition-colors leading-tight">
                  {isArabic ? 'تحكم كامل عبر الهاتف' : 'Mobile & Remote Control'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {isArabic 
                    ? 'إدارة متكاملة للإضاءة والمناخ من أي مكان بالعالم.' 
                    : 'Global cloud access to lights, shades, and climate.'}
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-[0_15px_35px_rgba(0,163,232,0.15)] hover:border-[#00A3E8] transition-all group overflow-hidden flex flex-col justify-between">
              
              <div className="relative w-full h-32 sm:h-44 md:h-48 overflow-hidden bg-slate-900 flex-shrink-0">
                <img 
                  src={smartHomeBg} 
                  alt="Luxury Villa Ambient Lighting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${scenes[activeScene].glow} via-transparent to-transparent pointer-events-none transition-all duration-500`} />
                <div className="absolute top-2 left-2 right-2 z-10 flex flex-wrap items-center justify-start gap-1">
                  {scenes.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveScene(idx)}
                      className={`px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-black transition-all cursor-pointer ${
                        activeScene === idx
                          ? 'bg-[#00A3E8] text-white shadow-xs'
                          : 'bg-black/50 text-slate-200 hover:bg-black/70'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-start">
                <h3 className="text-xs sm:text-base font-black text-slate-900 mb-1 group-hover:text-[#00A3E8] transition-colors leading-tight">
                  {isArabic ? 'سيناريوهات مخصصة' : 'Custom Ambient Scenes'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {isArabic 
                    ? 'بلمسة واحدة تفعيل وضع السينما، العشاء، أو المغادرة.' 
                    : 'One tap sets lights, AC, and shades in unison.'}
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-[0_15px_35px_rgba(0,163,232,0.15)] hover:border-[#00A3E8] transition-all group overflow-hidden flex flex-col justify-between">
              
              <div className="relative w-full h-32 sm:h-44 md:h-48 overflow-hidden bg-slate-950 flex-shrink-0">
                <img 
                  src={smartFiberSecurityImg} 
                  alt="Biometric Security and Smart Locks"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className={`p-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
                    isLocked 
                      ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'bg-amber-950/70 border-amber-500/50 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  }`}>
                    <Lock className={`w-4 h-4 sm:w-6 sm:h-6 ${isLocked ? '' : 'animate-bounce'}`} />
                  </div>
                </div>
                <div className="absolute top-2 left-2 right-2 z-10 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-full border border-white/20">
                    AES-256
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLocked(!isLocked)}
                    className="text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-full bg-[#00A3E8] text-white cursor-pointer hover:bg-cyan-400"
                  >
                    {isLocked ? (isArabic ? 'مُقفل' : 'LOCKED') : (isArabic ? 'مفتوح' : 'UNLOCKED')}
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-start">
                <h3 className="text-xs sm:text-base font-black text-slate-900 mb-1 group-hover:text-[#00A3E8] transition-colors leading-tight">
                  {isArabic ? 'حماية وأمان' : 'Advanced Security'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {isArabic 
                    ? 'أقفال رقمية ذكية بالبصمة مع تنبيهات فورية للهاتف.' 
                    : 'Keyless biometric entry with instant intrusion alerts.'}
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="rounded-xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-[0_15px_35px_rgba(0,163,232,0.15)] hover:border-[#00A3E8] transition-all group overflow-hidden flex flex-col justify-between">
              
              <div className="relative w-full h-32 sm:h-44 md:h-48 overflow-hidden bg-slate-950 flex-shrink-0">
                <img 
                  src={smartThermostatImg} 
                  alt="Smart Thermostat and Climate Control"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute top-2 left-2 z-10">
                  <button
                    type="button"
                    onClick={() => setTemp(temp === 18 ? 21 : 18)}
                    className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-black text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 cursor-pointer hover:bg-black/80"
                  >
                    <span>❄️ {temp}°C</span>
                  </button>
                </div>
                <div className="absolute top-2 right-2 z-10 hidden sm:block">
                  <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-bold text-amber-300 bg-amber-950/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-500/40">
                    <Zap className="w-2.5 h-2.5 text-amber-400" />
                    <span>-35%</span>
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-start">
                <h3 className="text-xs sm:text-base font-black text-slate-900 mb-1 group-hover:text-[#00A3E8] transition-colors leading-tight">
                  {isArabic ? 'توفير الكهرباء' : 'Energy Savings'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {isArabic 
                    ? 'جدولة ذكية للتكييف لخفض الفواتير بمناخ المملكة.' 
                    : 'Intelligent HVAC regulation tailored for Saudi summer heat.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Syncrow IoT Products & App Showcase (4-Screen Parallax Wave & 6 Categories) */}
      <SyncrowProductsShowcase lang={lang} onOpenQuote={onOpenQuote} />

      {/* ========================================================= */}
      {/* 3. INTERACTIVE ROOM VISUALIZER                           */}
      {/* ========================================================= */}
      <div id="visualizer">
        <RoomVisualizer t={t} />
      </div>

      {/* ========================================================= */}
      {/* 4. VOICE CONTROL INTERACTIVE DEMO                        */}
      {/* ========================================================= */}
      <VoiceDemo t={t} lang={lang} />

      {/* ========================================================= */}
      {/* 5. BOTTOM CTA SECTION                                    */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-[#EBF5FC] to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00A3E8]/12 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-sky-400/12 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-br from-[#061C3D] via-[#0A2E5C] to-[#030E1F] text-white rounded-2xl sm:rounded-[2.5rem] py-8 px-5 sm:py-12 sm:px-14 border border-sky-400/35 shadow-[0_25px_65px_-12px_rgba(0,163,232,0.32)] relative overflow-hidden text-center group">
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-90" />

            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black mb-3 text-white">
                {isArabic ? 'جاهز لتحويل منزلك إلى منزل ذكي؟' : 'Ready to Build Your Dream Smart Home?'}
              </h2>
              <p className="text-slate-200 text-[11px] sm:text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed font-normal">
                {isArabic 
                  ? 'تواصل مع مهندسينا في جدة واحصل على مخطط تفصيلي ودراسة فنية لمشروعك.' 
                  : 'Connect with our Jeddah engineering team for an on-site villa assessment and turnkey smart home plan.'}
              </p>
              <div className="flex items-center justify-center">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] hover:from-cyan-400 hover:to-[#00A3E8] text-white font-black text-xs sm:text-sm shadow-[0_0_24px_rgba(0,163,232,0.5)] transition-all cursor-pointer flex items-center gap-2 group/btn"
                >
                  <span>{t.nav.contact}</span>
                  <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${isArabic ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default SmartHomePage;