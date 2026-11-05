import React, { useEffect } from 'react';
import IndustrialHero from '../components/industrial/IndustrialHero';
import IndustrialSection from '../components/industrial/IndustrialSection';
import EngineeringStandards from '../components/home/EngineeringStandards';
import IndustrialCapabilities from '../components/industrial/IndustrialCapabilities';
import IndustrialCtaBanner from '../components/home/IndustrialCtaBanner';

function IndustrialPage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* 1. Hero Banner with Industrial Specs */}
      <IndustrialHero t={t} lang={lang} />

      {/* 2. Main Industrial Hardware & Products Grid */}
      <IndustrialSection t={t} lang={lang} onOpenQuote={onOpenQuote} />

      {/* 3. Engineering Standards, SASO/IEC Compliance & Trust Section */}
      <EngineeringStandards t={t} lang={lang} />

      {/* 4. Capabilities, KPI Stats, Industries & 3-Step Process */}
      <IndustrialCapabilities t={t} lang={lang} />

      {/* 5. Call To Action Banner (Home Page Component) */}
      <IndustrialCtaBanner t={t} lang={lang} onOpenQuote={onOpenQuote} />
    </div>
  );
}

export default IndustrialPage;
