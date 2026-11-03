import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, CheckCircle2, Home, Wrench } from 'lucide-react';
import defaultHeroVideo from '../assets/vdo/heroBackgroundvdo.mp4';
import heroPoster from '../assets/header_background_img/hero_clean_poster.jpg';

function Hero({ t, lang, videoUrl }) {
  const activeVideo = videoUrl || defaultHeroVideo;

  return (
    <section 
      id="home" 
      className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center pt-20 pb-8 sm:pt-24 sm:pb-12 overflow-hidden bg-[#080D1A] text-white"
    >
      
      {/* ====== LAYER 1: Background Video ====== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <source src={activeVideo} type="video/mp4" />
      </video>

      {/* ====== LAYER 2: Premium Gradient Overlay ====== */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,163,232,0.2), transparent 60%),
            linear-gradient(to bottom, 
              rgba(8, 13, 26, 0.75) 0%,
              rgba(8, 13, 26, 0.55) 30%,
              rgba(10, 22, 45, 0.65) 60%,
              rgba(8, 13, 26, 0.95) 100%
            )
          `
        }}
      />

      {/* ====== LAYER 3: Dot Grid ====== */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)'
        }}
      />

      {/* ====== CONTENT ====== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* KSA Badge with subtle gradient border */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-black/80 to-slate-900/80 border border-[#00A3E8]/30 backdrop-blur-md text-[10px] sm:text-sm font-semibold text-white mb-4 sm:mb-7 shadow-[0_0_15px_rgba(0,163,232,0.2)] tracking-wide">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3E8] flex-shrink-0" />
            <span>{t.hero.badge.replace(/^🇸🇦\s*/, '')}</span>
          </div>

          {/* Main Headline with Gradient Text */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.14] mb-3 sm:mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <span className="block text-white">
              {t.hero.titleLine1 || t.hero.titleStart || "Engineering the Future with"}
            </span>
            {/* Gradient Text */}
            <span className="block my-1 sm:my-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E8] via-cyan-300 to-blue-500 drop-shadow-[0_0_35px_rgba(0,163,232,0.4)] pb-1">
              {t.hero.titleHighlight || "Treco Arabia"}
            </span>
            <span className="block text-slate-300 text-lg sm:text-3xl lg:text-4xl font-extrabold">
              {t.hero.titleLine2 || t.hero.titleEnd || "in Saudi Arabia"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] px-2">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons with Gradients */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-xs sm:max-w-md mx-auto w-full px-4 sm:px-0">
            
            {/* Primary Gradient Button */}
            <Link
              to="/smart-home"
              className="w-full sm:w-auto px-4 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E8] to-blue-600 hover:from-cyan-400 hover:to-[#00A3E8] text-white font-extrabold text-sm shadow-[0_4px_20px_rgba(0,163,232,0.4)] hover:shadow-[0_6px_25px_rgba(0,163,232,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap border border-white/10"
            >
              <Home className="w-4 h-4 flex-shrink-0" />
              <span>{t.hero.btnPrimary}</span>
            </Link>

            {/* Secondary Glass Button */}
            <Link
              to="/industrial"
              className="w-full sm:w-auto px-4 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#00A3E8]/50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Wrench className="w-4 h-4 text-[#00A3E8] flex-shrink-0" />
              <span>{t.hero.btnSecondary}</span>
            </Link>
          </div>

                    {/* Quick Metrics Bar with Glass Gradients */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20 text-left">
            
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 flex flex-row items-center gap-3 sm:gap-4 shadow-lg transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00A3E8]/20 border border-[#00A3E8]/40 flex items-center justify-center text-[#00A3E8] flex-shrink-0 transition-all duration-300 group-hover:bg-[#00A3E8]/40 group-hover:shadow-[0_0_20px_rgba(0,163,232,0.8)] group-hover:border-[#00A3E8]">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-black text-white">500+</h4>
                <p className="text-xs sm:text-xs font-semibold text-slate-300 leading-tight">{t.hero.statProjects}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 flex flex-row items-center gap-3 sm:gap-4 shadow-lg transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 flex-shrink-0 transition-all duration-300 group-hover:bg-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:border-cyan-400">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-black text-white">460+</h4>
                <p className="text-xs sm:text-xs font-semibold text-slate-300 leading-tight">{t.hero.statClients}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 flex flex-row items-center gap-3 sm:gap-4 shadow-lg transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:border-blue-400">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-black text-white">24/7</h4>
                <p className="text-xs sm:text-xs font-semibold text-slate-300 leading-tight">{t.hero.statSupport}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;