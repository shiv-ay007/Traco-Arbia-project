import React from "react";
import { Link } from "react-router-dom";
import { Cpu, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import ccLogo from "../assets/cc-logo.png";

function Footer({ t, lang }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#051329] text-slate-200 text-base border-t-2 border-[#00A3E8] relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-7 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-3.5 sm:space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-3.5 cursor-pointer text-left group"
            >
              <div className="bg-white rounded-2xl p-3 px-5 shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all">
                <img
                  src="/treco-logo.png"
                  alt="Treco Arabia"
                  className="h-16 sm:h-16 w-48 sm:w-60 object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "تريكو العربية شركة رائدة في حلول أتمتة المنازل الذكية والأتمتة الصناعية بالمملكة."
                : "Treco Arabia is a leading Smart Home & Industrial Automation company in Saudi Arabia."}
            </p>
            <p className="text-sm font-bold text-white pt-.5">
              {lang === "ar"
                ? "مهندسون وفنيون معتمدون في الأتمتة"
                : "Certified Automation Engineers & Technicians"}
            </p>

            {/* Social Icons (Inline SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/TRECO-Technologies/100063639657266/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/TrecoTechnolog1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest mb-4 sm:mb-5">
              {lang === "ar" ? "روابط سريعة" : "QUICK LINKS"}
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-200">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-home"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{t.nav.smartHome}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>
                    {t.nav.offerings ||
                      (lang === "ar" ? "خدماتنا" : "What We Offer")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{t.nav.industrial}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{t.nav.gallery || (lang === "ar" ? "معرض الصور" : "Gallery")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services / Products */}
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest mb-4 sm:mb-5">
              {lang === "ar" ? "خدماتنا ومنتجاتنا" : "OUR SERVICES"}
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-200">
              <li>
                <Link
                  to="/smart-home"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{lang === "ar" ? "أتمتة الإضاءة" : "Lighting Automation"}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-home"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{lang === "ar" ? "الستائر الكهربائية الذكية" : "Smart Motorized Curtains"}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{lang === "ar" ? "أقفال Yale و ABEZ الرقمية" : "Yale & ABEZ Digital Locks"}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-home"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{lang === "ar" ? "وحدات التحكم في التكييف HVAC" : "HVAC & AC Controllers"}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial"
                  onClick={scrollToTop}
                  className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ChevronRight
                    className={`w-4 h-4 text-[#00A3E8] ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                  <span>{lang === "ar" ? "غرف التحكم الصناعي" : "Industrial Control Rooms"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest mb-4 sm:mb-5">
              {lang === "ar" ? "اتصل بنا" : "CONTACT US"}
            </h4>
            <div className="space-y-3.5 sm:space-y-4 text-sm font-medium">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">
                    {lang === "ar" ? "اتصال / واتساب" : "Phone Call / WhatsApp"}
                  </span>
                  <a
                    href="tel:+966500761791"
                    className="font-extrabold text-white hover:text-[#00A3E8] transition-colors dir-ltr block text-base mt-0.5"
                  >
                    +966 500761791
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">
                    {lang === "ar" ? "الدعم البريدي" : "Email Support"}
                  </span>
                  <a
                    href="mailto:info@treco.in"
                    className="font-extrabold text-white hover:text-[#00A3E8] transition-colors block text-base mt-0.5"
                  >
                    info@treco.in
                  </a>
                </div>
              </div>

              {/* Address (Clickable -> Opens Google Maps) */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=21.54225,39.30025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group/address cursor-pointer"
                title={
                  lang === "ar"
                    ? "فتح موقعنا على خرائط جوجل"
                    : "Open location in Google Maps"
                }
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-[#00A3E8] group-hover/address:bg-[#00A3E8] group-hover/address:text-slate-950 group-hover/address:scale-105 transition-all flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 group-hover/address:text-[#00A3E8] transition-colors font-semibold block">
                    {lang === "ar" ? "المقر الرئيسي" : "Corporate Office"}
                  </span>
                  <span className="font-bold text-slate-200 group-hover/address:text-white transition-colors block text-xs sm:text-sm leading-relaxed mt-0.5">
                    {lang === "ar" 
                      ? "ماجد نور بالقرب من معسكر البلدية، وادي مريخ، جدة، المملكة العربية السعودية 23254" 
                      : "Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, KSA 23254"}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar - Translated to Arabic dynamically */}
      <div className="bg-[#030C1C] border-t border-slate-800/80 py-4 sm:py-5 text-xs sm:text-sm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          
          {/* 1. Copyright */}
          <div className="font-semibold order-2 lg:order-1 text-slate-400">
            {lang === "ar" 
              ? "© 2026 تريكو العربية. جميع الحقوق محفوظة." 
              : "© 2026 Treco Arabia. All rights reserved."}
          </div>

          {/* 2. Legal Links (Translated) */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 font-bold text-slate-300 order-3 lg:order-2">
            <a href="#" className="hover:text-[#00A3E8] transition-colors">
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-[#00A3E8] transition-colors">
              {lang === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
            </a>
            <a href="#" className="hover:text-[#00A3E8] transition-colors">
              {lang === "ar" ? "سياسة الاسترداد" : "Refund Policy"}
            </a>
          </div>

          {/* 3. Designer Credit */}
          <div className="flex items-center justify-center gap-2 text-white font-semibold order-1 lg:order-3">
            <span className="text-slate-400">
              {lang === "ar" ? "تصميم بواسطة" : "Designed by"}
            </span>
            <a
              href="https://codecrafter.co.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={ccLogo}
                alt="Code Crafter"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;