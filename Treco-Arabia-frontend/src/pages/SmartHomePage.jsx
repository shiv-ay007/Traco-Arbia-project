import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SmartHomeHero from '../components/smartHome/SmartHomeHero';
import VisualHomeControl from '../components/smartHome/VisualHomeControl';
import SmartHomePillars from '../components/smartHome/SmartHomePillars';
import SyncrowProductsShowcase from '../components/home/SyncrowProductsShowcase';
import RoomVisualizer from '../components/smartHome/RoomVisualizer';
import VoiceDemo from '../components/smartHome/VoiceDemo';
import IndustrialCtaBanner from '../components/home/IndustrialCtaBanner';

function SmartHomePage({ t, lang, onOpenQuote }) {
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash || location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, [location.pathname, location.hash]);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* 1. Hero Banner */}
      <SmartHomeHero t={t} lang={lang} />

      {/* 2. Interactive Visual Home Control (Lighting & Ambience) */}
      <div id="lighting">
        <VisualHomeControl lang={lang} />
      </div>

      {/* 3. Photo & Visual-Driven Capabilities Pillars (Climate & Security) */}
      <div id="climate">
        <SmartHomePillars lang={lang} />
      </div>

      {/* 4. Syncrow IoT Products & App Showcase (Hub, Wellness & Access) */}
      <div id="hub">
        <SyncrowProductsShowcase lang={lang} onOpenQuote={onOpenQuote} />
      </div>

      {/* 5. Interactive Room Visualizer (Curtains, Locks, Audio, Climate) */}
      <div id="visualizer">
        <div id="curtains">
          <div id="security">
            <div id="audio">
              <RoomVisualizer t={t} />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Voice Control Interactive Demo */}
      <div id="voice">
        <VoiceDemo t={t} lang={lang} />
      </div>

      {/* 7. Bottom Call-To-Action Banner (Home Page Component) */}
      <div id="energy">
        <IndustrialCtaBanner t={t} lang={lang} onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
}

export default SmartHomePage;
