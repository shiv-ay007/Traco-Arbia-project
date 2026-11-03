import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Thermometer, Blinds, Lock, ShieldCheck, Zap } from 'lucide-react';

// Image import
import roomBg from '../assets/header_background_img/smart-home.png'; 

export default function VisualHomeControl({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  const [activeTab, setActiveTab] = useState('lighting');
  const [isLightOn, setIsLightOn] = useState(true);
  const [temp, setTemp] = useState(22);
  const [isCurtainOpen, setIsCurtainOpen] = useState(true);
  const [isLocked, setIsLocked] = useState(true);

  const controls = [
    { id: 'lighting', icon: Lightbulb, label: isArabic ? 'الإضاءة' : 'Lighting' },
    { id: 'climate', icon: Thermometer, label: isArabic ? 'المناخ' : 'Climate' },
    { id: 'curtains', icon: Blinds, label: isArabic ? 'الستائر' : 'Curtains' },
    { id: 'security', icon: Lock, label: isArabic ? 'الأمان' : 'Security' },
  ];

  return (
    // Background me Premium Light Gradient aur Ambient Glows
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F0F7FF] to-[#EBF5FC]/60 text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A3E8]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تجربة تحكم تفاعلية' : 'INTERACTIVE VISUAL CONTROL'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {isArabic ? (
              <>شاهد <span className="text-[#00A3E8]">التحكم الذكي</span> بأم عينك</>
            ) : (
              <>Experience <span className="text-[#00A3E8]">Smart Control</span> in Real-Time</>
            )}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isArabic 
              ? 'تفاعل مع الأزرار أدناه لمشاهدة كيف تتغير بيئة منزلك الذكي بنقرة واحدة.'
              : 'Interact with the controls below to see how your smart home environment changes instantly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE: Interactive Visual Image */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,163,232,0.1)] group bg-slate-100">
            {/* Background Room Image */}
            <motion.img 
              src={roomBg} 
              alt="Smart Living Room" 
              className="w-full h-[400px] sm:h-[500px] object-cover object-center transition-all duration-1000 ease-in-out"
              style={{
                filter: isLightOn 
                  ? 'brightness(1) contrast(1.05) saturate(1.1)' 
                  : 'brightness(0.5) contrast(1.1) saturate(0.6)',
              }}
            />

            {/* Overlays for visual feedback */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Curtain Shadow Effect */}
            <div 
              className="absolute inset-0 bg-slate-900 pointer-events-none transition-opacity duration-1000"
              style={{ opacity: isCurtainOpen ? 0 : 0.5 }}
            />

            {/* Floating Visual Widgets over the image */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
              <AnimatePresence>
                {isLightOn && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 text-xs font-bold text-yellow-400 shadow-lg">
                    <Lightbulb className="w-3.5 h-3.5" /> {isArabic ? 'الإضاءة تعمل' : 'Lights ON'}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 text-xs font-bold text-[#00A3E8] shadow-lg ml-auto">
                <Thermometer className="w-3.5 h-3.5" /> {temp}°C
              </div>
            </div>

            <div className="absolute bottom-6 left-6 pointer-events-none">
              <div className={`px-4 py-2 rounded-xl backdrop-blur-md border flex items-center gap-2 text-xs font-black uppercase tracking-wider shadow-lg transition-colors ${isLocked ? 'bg-emerald-500/90 text-white border-emerald-400' : 'bg-red-500/90 text-white border-red-400'}`}>
                <ShieldCheck className="w-4 h-4" />
                {isLocked ? (isArabic ? 'النظام مؤمن' : 'System Locked') : (isArabic ? 'النظام مفتوح' : 'System Unlocked')}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Control Panel (Light Theme) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.05)] rounded-3xl p-6 sm:p-8">
            
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {isArabic ? 'لوحة التحكم' : 'Control Panel'}
            </h3>

            {/* Tab Selectors */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {controls.map((ctrl) => (
                <button
                  key={ctrl.id}
                  onClick={() => setActiveTab(ctrl.id)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 ${
                    activeTab === ctrl.id
                      ? 'bg-[#00A3E8] text-white border-[#00A3E8] shadow-[0_8px_20px_rgba(0,163,232,0.3)]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <ctrl.icon className="w-6 h-6" />
                  <span className="text-xs font-bold">{ctrl.label}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Controls based on Active Tab */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* 1. Lighting Control */}
                {activeTab === 'lighting' && (
                  <motion.div key="light" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{isArabic ? 'إضاءة الصالة' : 'Living Room Lights'}</span>
                      <button 
                        onClick={() => setIsLightOn(!isLightOn)}
                        className={`w-14 h-8 rounded-full transition-colors relative ${isLightOn ? 'bg-[#00A3E8]' : 'bg-slate-300'}`}
                      >
                        <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-all ${isLightOn ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">{isLightOn ? 'Lights are currently ON' : 'Lights are OFF'}</p>
                  </motion.div>
                )}

                {/* 2. Climate Control */}
                {activeTab === 'climate' && (
                  <motion.div key="climate" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{isArabic ? 'درجة الحرارة' : 'Temperature'}</span>
                      <span className="text-2xl font-black text-[#00A3E8]">{temp}°C</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setTemp(t => t - 1)} className="flex-1 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 transition shadow-sm">-</button>
                      <button onClick={() => setTemp(t => t + 1)} className="flex-1 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 transition shadow-sm">+</button>
                    </div>
                  </motion.div>
                )}

                {/* 3. Curtains Control */}
                {activeTab === 'curtains' && (
                  <motion.div key="curtains" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{isArabic ? 'الستائر' : 'Curtains'}</span>
                      <button 
                        onClick={() => setIsCurtainOpen(!isCurtainOpen)}
                        className={`w-14 h-8 rounded-full transition-colors relative ${isCurtainOpen ? 'bg-[#00A3E8]' : 'bg-slate-300'}`}
                      >
                        <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-all ${isCurtainOpen ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">{isCurtainOpen ? 'Curtains are OPEN' : 'Curtains are CLOSED'}</p>
                  </motion.div>
                )}

                {/* 4. Security Control */}
                {activeTab === 'security' && (
                  <motion.div key="security" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{isArabic ? 'قفل الأبواب' : 'Door Locks'}</span>
                      <button 
                        onClick={() => setIsLocked(!isLocked)}
                        className={`w-14 h-8 rounded-full transition-colors relative ${isLocked ? 'bg-emerald-500' : 'bg-red-500'}`}
                      >
                        <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-all ${isLocked ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">{isLocked ? 'All doors are SECURE' : 'WARNING: Doors Unlocked'}</p>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}