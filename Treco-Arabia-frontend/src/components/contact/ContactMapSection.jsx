import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export function ContactMapSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-10 sm:py-14 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Header Card above Map */}
        <div className="bg-white p-5 sm:p-7 rounded-t-2xl sm:rounded-t-3xl border border-b-0 border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                {isAr ? 'المقر الرئيسي بجدة' : 'Jeddah Headquarters'}
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-slate-900 [text-transform:none!important]"
                style={{ textTransform: 'none' }}
              >
                {isAr ? 'موقعنا على الخريطة المباشرة' : 'Find Us on Google Maps'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, Saudi Arabia 23254 • (21°32'32.1"N 39°18'00.9"E)
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=21.54225,39.30025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-slate-900 hover:bg-[#00A3E8] text-white hover:text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2 group/btn"
          >
            <span>{isAr ? 'عرض على خرائط جوجل' : 'Open in Google Maps'}</span>
            <ExternalLink className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
          </a>
        </div>

        {/* Interactive Embedded Google Map */}
        <div className="w-full h-[360px] sm:h-[440px] rounded-b-2xl sm:rounded-b-3xl overflow-hidden border border-slate-200/90 shadow-sm relative bg-slate-100">
          <iframe
            title="Treco Arabia Jeddah Office Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3711.117766436658!2d39.30025!3d21.54225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDMyJzMyLjEiTiAzOcKwMTgnMDAuOSJF!5e0!3m2!1sen!2sin!4v1791364725248!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=21.54225,39.30025"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 rounded-xl bg-slate-950/85 hover:bg-[#00A3E8] text-white hover:text-slate-950 font-bold text-xs backdrop-blur-md border border-white/20 transition-all shadow-lg flex items-center gap-2 cursor-pointer z-10"
          >
            <MapPin className="w-3.5 h-3.5 text-[#00A3E8] group-hover:text-slate-950" />
            <span>{isAr ? 'التوجيه الملاحي المباشر' : 'Get Live Directions'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ContactMapSection;
