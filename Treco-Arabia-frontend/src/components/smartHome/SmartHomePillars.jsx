import React, { useState } from 'react';
import { Sparkles, Lock, Zap } from 'lucide-react';
import smartHomeBg from '../../assets/header_background_img/smart-home.png';
import smartTouchImg from '../../assets/header_background_img/hero_clean_poster.jpg';
import smartFiberSecurityImg from '../../assets/offerings_products/biometric_lock.jpg';
import smartThermostatImg from '../../assets/offerings_products/smart_ac.jpg';

export function SmartHomePillars({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  const [activeScene, setActiveScene] = useState(0);
  const scenes = [
    { name: isArabic ? 'سينما' : 'Cinema', glow: 'from-purple-500/30' },
    { name: isArabic ? 'عشاء' : 'Dinner', glow: 'from-amber-500/30' },
    { name: isArabic ? 'استرخاء' : 'Relax', glow: 'from-cyan-500/30' },
  ];

  const [isLocked, setIsLocked] = useState(true);
  const [temp, setTemp] = useState(18);

  return (
    <section className="py-8 sm:py-16 relative bg-gradient-to-b from-white via-[#F7FAFD] to-white border-b border-slate-200 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#00A3E8]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
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

        {/* 4 Photo-Driven Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* CARD 1 */}
          <div className="rounded-xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-[0_15px_35px_rgba(0,163,232,0.15)] hover:border-[#00A3E8] transition-all group overflow-hidden flex flex-col justify-between">
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
  );
}

export default SmartHomePillars;
