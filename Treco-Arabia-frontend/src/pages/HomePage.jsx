import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import IoTPoweredOperations from '../components/home/IoTPoweredOperations';
import IndustrialSolutionsGrid from '../components/home/IndustrialSolutionsGrid';
import OurNumbersStory from '../components/home/OurNumbersStory';
import SyncrowProductsShowcase from '../components/home/SyncrowProductsShowcase';
import IndustrialShowcase from '../components/home/IndustrialShowcase';
import EngineeringStandards from '../components/home/EngineeringStandards';
import SmartHomeSecondary from '../components/home/SmartHomeSecondary';
import FaqAndCertificate from '../components/home/FaqAndCertificate';
import IndustrialCtaBanner from '../components/home/IndustrialCtaBanner';

function HomePage({ t, lang, onOpenQuote }) {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* 1. Cinematic Industrial & Smart Living Hero Section */}
      <Hero t={t} lang={lang} />

      {/* 2. Visual & Minimalistic About Section */}
      <AboutSection lang={lang} onOpenQuote={onOpenQuote} />

      {/* 6. Syncrow IoT Products & App Showcase (4-Screen Parallax Wave & 6 Categories) */}
      <SyncrowProductsShowcase lang={lang} onOpenQuote={onOpenQuote} />


      {/* 3. IoT-Powered Automation for Smarter Operations (Syncrow Photo 3) */}
      <IoTPoweredOperations lang={lang} />

      {/* 4. Visual Industrial Solutions Section (Asymmetric Editorial Grid) */}
      <IndustrialSolutionsGrid t={t} lang={lang} />

      {/* 5. Our Numbers Tell the Story with 3D Globe Mesh (Syncrow Photo 2) */}
      <OurNumbersStory lang={lang} />

      
      {/* 7. Industrial Showcase & Equipment Gallery */}
      <IndustrialShowcase t={t} lang={lang} />

      {/* 8. Engineering Standards, SASO/IEC Compliance & Trust Section */}
      <EngineeringStandards t={t} lang={lang} />

      {/* 9. Smart Home Division (Saudi benchmark by sector & 4-step process) */}
      <SmartHomeSecondary t={t} lang={lang} onOpenQuote={onOpenQuote} />

      {/* 10. Frequently Asked Questions & ISO 9001:2015 Certification */}
      <FaqAndCertificate t={t} lang={lang} />

      {/* 11. High-Impact Industrial Call-To-Action Banner */}
      <IndustrialCtaBanner t={t} lang={lang} onOpenQuote={onOpenQuote} />
    </div>
  );
}

export default HomePage;
