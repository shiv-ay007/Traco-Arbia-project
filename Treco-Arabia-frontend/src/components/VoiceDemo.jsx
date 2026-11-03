import React, { useState } from 'react';
import { Mic, Sparkles, CheckCircle2, Wifi, Volume2 } from 'lucide-react';
import smartSpeakersImg from '../assets/jsd.png';
import voiceEcosystemBadges from '../assets/image.png';

function VoiceDemo({ t, lang = 'en' }) {
  const isArabic = lang === 'ar';
  const [activePreset, setActivePreset] = useState(0);

  const presets = [
    {
      id: 'night',
      label: isArabic ? 'أليكسا، وضع النوم 🌙' : 'Alexa, Good Night 🌙',
      command: isArabic ? '“أليكسا، تصبح على خير”' : '“Alexa, Good Night 🌙”',
      assistant: 'Amazon Alexa',
      chips: isArabic
        ? [
            { label: 'الإضاءة: إطفاء', icon: '💡' },
            { label: 'التكييف: ٢٢°م', icon: '❄️' },
            { label: 'الأبواب: مقفلة', icon: '🔒' }
          ]
        : [
            { label: 'Lights: Off', icon: '💡' },
            { label: 'AC: 22°C Eco', icon: '❄️' },
            { label: 'Doors: Locked', icon: '🔒' }
          ]
    },
    {
      id: 'movie',
      label: isArabic ? 'جوجل، وقت السينما 🎬' : 'Hey Google, Movie Time 🎬',
      command: isArabic ? '“هي جوجل، وقت السينما”' : '“Hey Google, Movie Time 🎬”',
      assistant: 'Google Assistant',
      chips: isArabic
        ? [
            { label: 'الإضاءة: خافتة ١٠٪', icon: '💡' },
            { label: 'الستائر: مغلقة', icon: '🪟' },
            { label: 'الصوت: محيطي', icon: '🔊' }
          ]
        : [
            { label: 'Lights: 10% Dim', icon: '💡' },
            { label: 'Curtains: Closed', icon: '🪟' },
            { label: 'Audio: Cinema', icon: '🔊' }
          ]
    },
    {
      id: 'leave',
      label: isArabic ? 'سيري، أنا خارج 🚗' : "Siri, I'm Leaving 🚗",
      command: isArabic ? '“سيري، أنا مغادر المنزل”' : "“Siri, I'm Leaving 🚗”",
      assistant: 'Apple Siri',
      chips: isArabic
        ? [
            { label: 'الأمان: مفعل', icon: '🛡️' },
            { label: 'الأجهزة: توفير', icon: '⚡' },
            { label: 'الكاميرات: نشطة', icon: '📹' }
          ]
        : [
            { label: 'Security: Armed', icon: '🛡️' },
            { label: 'Power: Eco Mode', icon: '⚡' },
            { label: 'Cameras: Active', icon: '📹' }
          ]
    }
  ];

  const current = presets[activePreset];

  return (
    <section 
      dir={isArabic ? 'rtl' : 'ltr'}
      className="pt-20 sm:pt-24 pb-16 sm:pb-24 relative bg-gradient-to-b from-[#EBF5FC]/60 via-[#F4F9FD] to-white text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      {/* Decorative Ambient Cyan Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-sky-400/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Solution Card with Frosted Glass & Cyan Glow */}
        <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_-10px_rgba(0,163,232,0.12),0_8px_20px_-5px_rgba(15,23,42,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative overflow-hidden">
          
          {/* Subtle Top Cyan Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent pointer-events-none" />

          {/* Left Column: Minimal Theory + Interactive Voice Commands */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-[#00A3E8]/30 text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? 'التحكم الصوتي الذكي' : 'VOICE AUTOMATION'}</span>
            </div>
            
            {/* Minimal Punchy Heading */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {isArabic ? 'تحدث.. ومنزلك يستجيب فوراً' : 'Speak. Your Smart Home Responds.'}
            </h2>

            {/* 1-Line Minimal Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
              {isArabic 
                ? 'أوامر صوتية فورية باللغتين العربية والإنجليزية مع تنفيذ ذكي لكافة الأجهزة.' 
                : 'Instant voice triggers in Arabic & English with automated scene execution.'}
            </p>

            {/* Voice Command Presets */}
            <div className="space-y-2 sm:space-y-2.5 pt-1">
              {presets.map((preset, idx) => {
                const isSelected = activePreset === idx;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setActivePreset(idx)}
                    className={`w-full p-3 sm:p-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white border-transparent shadow-[0_6px_20px_rgba(0,163,232,0.3)] scale-[1.01]'
                        : 'bg-slate-50/90 hover:bg-white border-slate-200 hover:border-[#00A3E8]/40 text-slate-800 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#00A3E8]/10 text-[#00A3E8]'
                      }`}>
                        <Mic className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'animate-pulse' : ''}`} />
                      </span>
                      <span className="tracking-tight text-xs sm:text-sm">{preset.label}</span>
                    </div>

                    {isSelected ? (
                      <div className="flex items-center gap-1 shrink-0 px-2">
                        <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                        <span className="w-1 h-4 bg-white rounded-full animate-pulse [animation-delay:150ms]" />
                        <span className="w-1 h-2 bg-white rounded-full animate-pulse [animation-delay:300ms]" />
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-400 group-hover:text-slate-600 font-semibold px-2">
                        {isArabic ? 'تشغيل ←' : 'Play →'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Official Ecosystem Badges Image */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {isArabic ? 'متوافق رسمياً مع:' : 'Certified Compatibility:'}
              </span>
              <img 
                src={voiceEcosystemBadges} 
                alt="Works with Apple Home, Alexa, Google Home" 
                className="h-6 sm:h-7 w-auto object-contain filter drop-shadow-2xs opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Column: High-End Visual Hub Card with Speaker Hardware */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-[#0B1528] to-slate-900 text-white p-5 sm:p-7 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            
            {/* Top Status Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider uppercase">
                  Treco Hub Live
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono text-cyan-300">
                <Wifi className="w-3 h-3 text-cyan-400" />
                <span>{current.assistant}</span>
              </div>
            </div>

            {/* Middle: Live Spoken Command */}
            <div className="my-4 p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  {isArabic ? 'الأمر الصوتي المسموع' : 'Detected Voice Input'}
                </span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  99.4% Accuracy
                </span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                {current.command}
              </p>
            </div>

            {/* Visual Action Chips (Minimal, no text walls) */}
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
                {isArabic ? 'الإجراءات المنفذة تلقائياً:' : 'Automated Scene Execution:'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {current.chips.map((chip, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] sm:text-xs font-semibold shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Hardware Visual with Ambient Cyan Backlight */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 relative flex items-center justify-between overflow-hidden">
              <div className="z-10">
                <p className="text-[10px] text-slate-400 font-medium">
                  {isArabic ? 'دعم كامل للمساعدات الذكية' : 'Certified Audio Smart Hub'}
                </p>
                <p className="text-xs font-bold text-white">
                  Apple HomePod • Google Nest • Amazon Echo
                </p>
              </div>

              {/* Speaker Visual Graphic */}
              <div className="relative shrink-0 w-24 h-16 sm:w-28 sm:h-18 flex items-center justify-end">
                <div className="absolute inset-0 bg-[#00A3E8]/20 blur-xl rounded-full" />
                <img 
                  src={smartSpeakersImg} 
                  alt="Treco Voice Smart Speakers" 
                  className="relative z-10 max-h-16 w-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VoiceDemo;
