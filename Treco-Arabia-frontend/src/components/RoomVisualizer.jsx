import React, { useState } from 'react';
import { Lightbulb, Blinds, Lock, Thermometer, Volume2, Power, CheckCircle, Zap } from 'lucide-react';
import smartHomeBg from '../assets/header_background_img/smart-home.png';

function RoomVisualizer({ t }) {
  const [activeTab, setActiveTab] = useState('lighting');
  const [isOn, setIsOn] = useState(true);

  const modules = [
    { key: 'lighting', icon: Lightbulb },
    { key: 'curtains', icon: Blinds },
    { key: 'locks', icon: Lock },
    { key: 'climate', icon: Thermometer },
    { key: 'audio', icon: Volume2 },
  ];

  const currentModule = t.visualizer.modules[activeTab];

  return (
    <section 
      id="smart-home" 
      className="pt-20 sm:pt-24 pb-16 sm:pb-24 relative bg-gradient-to-b from-[#F0F7FF] via-[#EBF5FC] to-white text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      {/* Decorative Radiant Cyan & Sky Ambient Glows (Non-black, soft luxury feel) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00A3E8]/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-sky-400/12 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-cyan-300/15 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Geometric Background Watermark Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.visualizer.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {t.visualizer.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.visualizer.subtitle}
          </p>
        </div>

        {/* Floating Modern Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:mb-10">
          {modules.map(({ key, icon: Icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00A3E8] text-white font-black shadow-[0_8px_25px_rgba(0,163,232,0.4)] scale-105 border-2 border-[#00A3E8]'
                    : 'bg-white/95 text-slate-700 hover:text-[#00A3E8] hover:bg-white border border-slate-200/90 hover:border-[#00A3E8]/40 shadow-sm backdrop-blur-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#00A3E8]'}`} />
                <span>{t.visualizer.modules[key].title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Luxury Pearl-White Solution Card with Cyan Glow */}
        <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(0,163,232,0.15),0_10px_30px_-5px_rgba(15,23,42,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          
          {/* Subtle Top Cyan Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent pointer-events-none" />

          {/* Left Description Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-[#00A3E8] rounded-full shadow-[0_0_12px_rgba(0,163,232,0.6)]"></div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                {currentModule.title}
              </h3>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              {currentModule.desc}
            </p>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 via-sky-50/50 to-slate-50 border border-slate-200/90 mb-8 flex items-center gap-3 shadow-xs">
              <CheckCircle className="w-5 h-5 text-[#00A3E8] flex-shrink-0" />
              <span className="text-sm font-bold text-slate-800">{currentModule.stat}</span>
            </div>

            {/* Simulated Live Action Button */}
            <button
              onClick={() => setIsOn(!isOn)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer shadow-md ${
                isOn 
                  ? 'bg-[#00A3E8] text-white hover:bg-cyan-500 font-extrabold shadow-[0_8px_25px_rgba(0,163,232,0.4)]'
                  : 'bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200'
              }`}
            >
              <Power className="w-4 h-4" />
              <span>{isOn ? 'Interactive Demo: ONLINE' : 'Interactive Demo: PAUSED'}</span>
            </button>
          </div>

          {/* Right Visualizer Room Simulator Box (Framed Smart Screen Display) */}
          <div className="relative h-84 rounded-2xl bg-slate-950 p-6 flex flex-col justify-between overflow-hidden shadow-xl text-white border border-slate-700 ring-4 ring-slate-100/90">
            
            {/* Real Villa Room Background Image */}
            <img 
              src={smartHomeBg} 
              alt="Villa Suite Jeddah"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isOn ? 'opacity-70 scale-100' : 'opacity-20 scale-95 grayscale'
              }`}
            />

            {/* Ambient Dynamic Lighting Tint */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                isOn ? 'opacity-90' : 'opacity-10'
              }`}
              style={{
                background: activeTab === 'lighting'
                  ? 'radial-gradient(circle at 50% 30%, rgba(251, 191, 36, 0.35) 0%, rgba(8,13,26,0.6) 80%)'
                  : activeTab === 'climate'
                  ? 'radial-gradient(circle at 50% 30%, rgba(0, 163, 232, 0.40) 0%, rgba(8,13,26,0.6) 80%)'
                  : 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.35) 0%, rgba(8,13,26,0.6) 80%)'
              }}
            />

            {/* Header info */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E8] animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Villa Suite - Jeddah
                </span>
              </div>
              <span className="text-xs font-bold text-[#00A3E8] bg-[#00A3E8]/15 px-3 py-1 rounded-full border border-[#00A3E8]/35 shadow-xs">
                Treco IoT Live
              </span>
            </div>

            {/* Central Icon */}
            <div className="my-auto text-center relative z-10">
              <div className="inline-flex p-6 rounded-2xl bg-white/10 border border-white/20 mb-3 text-[#00A3E8] shadow-lg backdrop-blur-md">
                {activeTab === 'lighting' && <Lightbulb className="w-12 h-12 animate-pulse text-[#00A3E8]" />}
                {activeTab === 'curtains' && <Blinds className="w-12 h-12 text-[#00A3E8]" />}
                {activeTab === 'locks' && <Lock className="w-12 h-12 text-emerald-400" />}
                {activeTab === 'climate' && <Thermometer className="w-12 h-12 text-sky-400" />}
                {activeTab === 'audio' && <Volume2 className="w-12 h-12 animate-bounce text-[#00A3E8]" />}
              </div>
              <h4 className="text-2xl font-bold text-white drop-shadow-md">
                {isOn ? `${currentModule.title}` : 'System Standby'}
              </h4>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3 relative z-10 font-mono">
              <span>Saudi Arabia Wireless Mesh</span>
              <span>Latency &lt; 10ms</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default RoomVisualizer;
