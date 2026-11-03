import React from 'react';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';

function FloatingWhatsApp({ lang }) {
  const whatsappUrl = "https://wa.me/966500761791?text=" + encodeURIComponent("Hello Treco Arabia! I would like to inquire about Smart Home & Industrial Automation solutions.");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2 sm:gap-3">
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#00A3E8] text-white shadow-lg flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Inquiry"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
      </a>

      {/* Phone Call Action Button */}
      <a
        href="tel:+966500761791"
        aria-label="Call Direct"
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#00A3E8] hover:bg-cyan-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

    </div>
  );
}

export default FloatingWhatsApp;
