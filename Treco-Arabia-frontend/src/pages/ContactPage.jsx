import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import contactBg from '../assets/header_background_img/contact.jpg';

function ContactPage({ t, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Contact Page Hero Banner with Generated Background Image */}
      <section className="relative py-14 sm:py-16 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        
        {/* Background Image Layer - Balanced Darkness */}
        <img 
          src={contactBg} 
          alt="Contact & Engineering Consultation Center Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75" 
        />

        {/* Overlay - Balanced Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
            <Link 
              to="/"
              className="hover:text-[#00A3E8] transition-colors cursor-pointer"
            >
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{t.nav.contact}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-white">{lang === 'ar' ? 'تواصل مع فريق تريكو' : 'Get in Touch with Treco Engineers'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'ar' ? 'اتصل بنا واحصل على استشارة تقنية' : 'Contact Us & Request Technical Consultation'}
          </h1>

          <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {lang === 'ar' 
              ? 'فريقنا الهندسي في جدة جاهز للإجابة على جميع استفساراتك وتصميم الحل المناسب لمشروعك.' 
              : 'Our engineering team in Jeddah is ready to assist you with tailored smart home and industrial automation engineering.'}
          </p>

        </div>
      </section>

      {/* Main Contact Form & Location Details */}
      <ContactSection t={t} lang={lang} />

      {/* Interactive Google Maps Section */}
      <section className="py-10 sm:py-12 bg-gradient-to-b from-[#F0F7FF] via-[#EBF5FC]/60 to-white border-t border-slate-200 relative overflow-hidden">
        {/* Decorative Ambient Cyan Glows */}
        <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Card above Map */}
          <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-t-3xl border border-b-0 border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.06)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            {/* Top Subtle Border Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-slate-950 transition-all duration-300">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] font-black text-[10px] uppercase tracking-wider mb-1">
                  <span>{lang === 'ar' ? 'المقر الرئيسي بجدة' : 'JEDDAH HEADQUARTERS'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors">
                  {lang === 'ar' ? 'موقعنا على الخريطة المباشرة' : 'Find Us on Google Maps'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, Saudi Arabia 23254 • (21°32'32.1"N 39°18'00.9"E)
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=21.54225,39.30025"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-[#00A3E8] text-white hover:text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer flex items-center gap-2 group/btn"
            >
              <span>{lang === 'ar' ? 'عرض على خرائط جوجل' : 'Open in Google Maps'}</span>
              <ExternalLink className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </a>
          </div>

          {/* Interactive Embedded Google Map */}
          <div className="w-full h-[380px] sm:h-[460px] rounded-b-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_45px_rgba(0,163,232,0.12)] relative bg-slate-100">
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
            {/* Clickable Quick Navigation Floating Badge on Map */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=21.54225,39.30025"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2.5 rounded-xl bg-slate-950/90 hover:bg-[#00A3E8] text-white hover:text-slate-950 font-black text-xs backdrop-blur-md border border-white/20 transition-all shadow-xl flex items-center gap-2 cursor-pointer z-10"
            >
              <MapPin className="w-4 h-4 text-[#00A3E8] group-hover:text-slate-950" />
              <span>{lang === 'ar' ? 'التوجيه الملاحي المباشر' : 'Get Live Directions'}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ContactPage;