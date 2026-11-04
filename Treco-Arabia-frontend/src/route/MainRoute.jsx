import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import FloatingWhatsApp from '../layout/FloatingWhatsApp';
import HomePage from '../pages/HomePage';
import SmartHomePage from '../pages/SmartHomePage';
import OfferingsPage from '../pages/OfferingsPage';
import IndustrialPage from '../pages/IndustrialPage';
import IndustrialProductPage from '../pages/IndustrialProductPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';

// Auto scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Inner routes content that has access to router hooks
function MainRoutesContent({ lang, setLang, t }) {
  const navigate = useNavigate();

  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E8] selection:text-black flex flex-col justify-between">
      {/* Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        t={t} 
      />

      {/* Multi-Page Route Views */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/smart-home" 
            element={<SmartHomePage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/offerings" 
            element={<OfferingsPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/industrial" 
            element={<IndustrialPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/industrial-automation" 
            element={<IndustrialPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/industrial_automation" 
            element={<IndustrialPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/industrial/:id" 
            element={<IndustrialProductPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/industrial-automation/:id" 
            element={<IndustrialProductPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/industrial_automation/:id" 
            element={<IndustrialProductPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage t={t} lang={lang} />} 
          />
          <Route 
            path="/gallery" 
            element={<GalleryPage t={t} lang={lang} onOpenQuote={handleGoToContact} />} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer 
        t={t} 
        lang={lang} 
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

export function MainRoute() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainRoutesContent lang={lang} setLang={setLang} t={t} />
    </BrowserRouter>
  );
}

export default MainRoute;
