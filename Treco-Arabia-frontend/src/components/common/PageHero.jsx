import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function PageHero({
  bgImage,
  breadcrumbText,
  parentText,
  parentLink,
  titleStart,
  titleHighlight,
  titleEnd,
  titleNode,
  subtitle,
  lang = 'en',
  t,
}) {
  const isAr = lang === 'ar';

  return (
    <section className="relative py-10 sm:py-12 md:py-14 bg-slate-950 text-white border-b border-slate-800/80 overflow-hidden flex items-center justify-center">
      {/* Background Image Layer */}
      {bgImage && (
        <img
          src={bgImage}
          alt={breadcrumbText || 'Treco Arabia Banner'}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.6] pointer-events-none scale-100 sm:scale-105 transition-transform duration-700"
        />
      )}

      {/* Dark translucent overlay for maximum readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/85 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Minimal Breadcrumb Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 shadow-lg">
          <Home className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
          <Link
            to="/"
            className="hover:text-[#00A3E8] transition-colors font-medium"
          >
            {t?.nav?.home || (isAr ? 'الرئيسية' : 'Home')}
          </Link>

          {parentText && (
            <>
              <span className="text-slate-500 font-light">/</span>
              <Link
                to={parentLink || '/'}
                className="hover:text-[#00A3E8] transition-colors font-medium text-slate-300"
              >
                {parentText}
              </Link>
            </>
          )}

          <span className="text-slate-500 font-light">/</span>
          <span className="text-[#00A3E8] font-semibold">
            {breadcrumbText}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          {titleNode ? (
            titleNode
          ) : (
            <>
              {titleStart && <span>{titleStart} </span>}
              {titleHighlight && (
                <span className="text-[#00A3E8]">{titleHighlight} </span>
              )}
              {titleEnd && <span>{titleEnd}</span>}
            </>
          )}
        </h1>

        {/* Subtitle / Description (rendered only if explicitly provided) */}
        {subtitle && (
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-200/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
