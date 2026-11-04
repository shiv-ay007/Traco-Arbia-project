import React, { useEffect } from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';

function GalleryPage({ t, lang, onOpenQuote }) {
  const isArabic = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* 1. Hero Banner */}
      <GalleryHero t={t} lang={lang} />

      {/* 2. Gallery Filter, Image Grid & Lightbox */}
      <GalleryGrid lang={lang} onOpenQuote={onOpenQuote} />
    </div>
  );
}

export default GalleryPage;
