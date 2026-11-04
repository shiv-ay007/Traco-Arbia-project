import React, { useEffect } from 'react';
import OfferingsHero from '../components/offerings/OfferingsHero';
import OfferingsSection from '../components/offerings/OfferingsSection';
import OfferingsSolutionsGrid from '../components/offerings/OfferingsSolutionsGrid';

function OfferingsPage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* 1. Hero Banner */}
      <OfferingsHero t={t} lang={lang} />

      {/* 2. Hardware Showcase Grid */}
      <OfferingsSection lang={lang} onOpenQuote={onOpenQuote} />

      {/* 3. Categorized Detailed Solutions & Project CTA */}
      <OfferingsSolutionsGrid t={t} lang={lang} />
    </div>
  );
}

export default OfferingsPage;
