import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactSection from '../components/contact/ContactSection';
import ContactMapSection from '../components/contact/ContactMapSection';

function ContactPage({ t, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* 1. Contact Hero Banner */}
      <ContactHero t={t} lang={lang} />

      {/* 2. Main Contact Form & Location Details */}
      <ContactSection t={t} lang={lang} />

      {/* 3. Interactive Google Maps Section */}
      <ContactMapSection lang={lang} />
    </div>
  );
}

export default ContactPage;
