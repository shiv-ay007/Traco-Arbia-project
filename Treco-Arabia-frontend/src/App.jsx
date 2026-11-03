import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import SmartHomePage from './pages/SmartHomePage';
import OfferingsPage from './pages/OfferingsPage';
import IndustrialPage from './pages/IndustrialPage';
import IndustrialProductPage from './pages/IndustrialProductPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

// Auto scroll to top on page navigation (Instant, without smooth scroll animation)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent({ lang, setLang, t }) {
  const navigate = useNavigate();
  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E8] selection:text-black flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar 
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
            path="/industrial/:id" 
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

      {/* Floating KSA WhatsApp & Action Buttons */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainContent lang={lang} setLang={setLang} t={t} />
    </BrowserRouter>
  );
}

export default App;
