import React from 'react';
import { Phone, ChevronUp } from 'lucide-react';

export function FloatingWhatsApp({ lang }) {
  const whatsappUrl = "https://wa.me/966567117621?text=" + encodeURIComponent("Hello Treco Arabia! I would like to inquire about Smart Home & Industrial Automation solutions.");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ==================================================== */}
      {/* 1. LEFT SIDE: Real WhatsApp Official Floating Button */}
      {/* ==================================================== */}
      <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-50 flex items-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Inquiry"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_25px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        >
          {/* Real WhatsApp Official SVG Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.1 13.67 14.88 13.59C14.65 13.5 14.49 13.46 14.32 13.71C14.16 13.96 13.69 14.51 13.55 14.68C13.41 14.84 13.27 14.86 13.02 14.74C12.78 14.61 11.99 14.35 11.06 13.52C10.33 12.87 9.84 12.07 9.7 11.82C9.55 11.57 9.68 11.44 9.81 11.31C9.92 11.2 10.05 11.02 10.18 10.88C10.3 10.73 10.34 10.63 10.42 10.46C10.5 10.3 10.46 10.15 10.4 10.03C10.34 9.91 9.84 8.7 9.64 8.2C9.44 7.72 9.24 7.78 9.09 7.77C8.95 7.76 8.78 7.76 8.62 7.76C8.45 7.76 8.19 7.82 7.96 8.07C7.73 8.32 7.09 8.92 7.09 10.14C7.09 11.36 7.98 12.54 8.1 12.7C8.23 12.87 9.85 15.36 12.33 16.43C12.92 16.69 13.38 16.84 13.73 16.95C14.32 17.14 14.86 17.11 15.28 17.05C15.76 16.98 16.74 16.45 16.95 15.88C17.15 15.3 17.15 14.81 17.09 14.7C17.03 14.6 16.82 14.52 16.57 14.39Z" />
          </svg>
        </a>
      </div>

      {/* ==================================================== */}
      {/* 2. RIGHT SIDE: Phone Call & Scroll-To-Top Button     */}
      {/* ==================================================== */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#00A3E8] text-white shadow-lg flex items-center justify-center hover:bg-cyan-400 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Phone Call Action Button */}
        <a
          href="tel:+966567117621"
          aria-label="Call Direct"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 shadow-[0_6px_25px_rgba(0,163,232,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-slate-950" />
        </a>
      </div>
    </>
  );
}

export default FloatingWhatsApp;
