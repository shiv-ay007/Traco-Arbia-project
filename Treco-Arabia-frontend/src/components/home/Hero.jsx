import React from 'react';
import { Link } from 'react-router-dom';
import defaultHeroVideo from '../../assets/vdo/heroBackgroundvdo.mp4';
import heroPoster from '../../assets/header_background_img/hero_clean_poster.jpg';

function Hero({ t, lang, videoUrl }) {
  const activeVideo = videoUrl || defaultHeroVideo;

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* ====== Background Video ====== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <source src={activeVideo} type="video/mp4" />
      </video>

      {/* ====== Minimal Dark Overlay (left side darker for readability) ====== */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right,
              rgba(0, 0, 0, 0.75) 0%,
              rgba(0, 0, 0, 0.45) 40%,
              rgba(0, 0, 0, 0.15) 70%,
              rgba(0, 0, 0, 0.35) 100%
            ),
            linear-gradient(to bottom,
              rgba(0, 0, 0, 0.3) 0%,
              transparent 30%,
              transparent 70%,
              rgba(0, 0, 0, 0.5) 100%
            )
          `,
        }}
      />

      {/* ====== Content ====== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Main Headline — bold uppercase, clean & impactful */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black uppercase tracking-tight leading-[1.05] text-white mb-5 sm:mb-7 drop-shadow-[0_4px_25px_rgba(0,0,0,0.85)]"
            style={{ color: '#FFFFFF', fontWeight: 900 }}
          >
            {t.hero.titleLine1 || t.hero.titleStart || 'Engineering the Future'}
            <br />
            {t.hero.titleHighlight || 'with Treco Arabia'}
          </h1>

          {/* Subtitle — bold and bright white */}
          <p 
            className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
            style={{ color: '#FFFFFF' }}
          >
            {t.hero.subtitle}
          </p>

          {/* Brand CTA button (Treco Cyan matching logo) */}
          <Link
            to="/industrial"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00A3E8] hover:bg-[#008bc5] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_8px_25px_rgba(0,163,232,0.4)] hover:shadow-[0_12px_30px_rgba(0,163,232,0.6)] hover:-translate-y-0.5"
          >
            <span>{t.nav?.industrial || (lang === 'ar' ? 'الأتمتة الصناعية' : 'Industrial Automation')}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;