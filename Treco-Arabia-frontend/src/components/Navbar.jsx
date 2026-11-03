import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Phone,
  Globe,
  Menu,
  X,
  Cpu,
  ChevronRight,
  Home,
  Lightbulb,
  Layers,
  Wrench,
  Image as ImageIcon,
} from "lucide-react";

function Navbar({ lang, setLang, t }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const isContactPage = location.pathname === "/contact";

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ar" : "en";
    setLang(nextLang);
    document.documentElement.setAttribute(
      "dir",
      nextLang === "ar" ? "rtl" : "ltr",
    );
    document.documentElement.setAttribute("lang", nextLang);
  };

  const navLinks = [
    { path: "/", label: t.nav.home, icon: Home },
    { path: "/smart-home", label: t.nav.smartHome, icon: Lightbulb },
    {
      path: "/offerings",
      label: t.nav.offerings || (lang === "ar" ? "خدماتنا" : "What We Offer"),
      icon: Layers,
    },
    { path: "/industrial", label: t.nav.industrial, icon: Wrench },
    {
      path: "/gallery",
      label: t.nav.gallery || (lang === "ar" ? "معرض الصور" : "Gallery"),
      icon: ImageIcon,
    },
  ];

  const handleNavigation = (path) => {
    setMobileMenu(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const prevPathnameRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname;
      setMobileMenu(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenu) return;

    const handleOutsideInteraction = (event) => {
      if (
        (drawerRef.current && drawerRef.current.contains(event.target)) ||
        (menuButtonRef.current && menuButtonRef.current.contains(event.target))
      ) {
        return;
      }
      setMobileMenu(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItemClass = (path) => {
    const isActive = location.pathname === path;
    return `transition-all py-1 font-bold text-sm border-b-2 cursor-pointer ${
      isActive
        ? "text-[#00A3E8] border-[#00A3E8]"
        : "text-slate-700 border-transparent hover:text-[#00A3E8]"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            setMobileMenu(false);
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <img
            src="/treco-logo.png"
            alt="Treco Arabia"
            className="h-14 sm:h-16 w-40 sm:w-52 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => window.scrollTo(0, 0)}
              className={navItemClass(path)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-300 bg-slate-50 hover:border-[#00A3E8] hover:bg-white text-xs font-bold text-slate-700 transition-all cursor-pointer shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5 text-[#00A3E8]" />
            <span>{t.nav.langName}</span>
          </button>

          {/* NEW PROFESSIONAL CONTACT BUTTON */}
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={`group relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-md ${
              isContactPage
                ? "bg-[#00A3E8] text-white border border-[#00A3E8]"
                : "bg-slate-900 text-white border border-slate-900 hover:border-[#00A3E8]"
            }`}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A3E8]/0 via-[#00A3E8]/10 to-[#00A3E8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <Phone className="w-4 h-4 text-[#00A3E8] group-hover:animate-pulse" />
            <span className="relative z-10">{t.nav.contact}</span>
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold text-[#00A3E8] flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t.nav.langName}</span>
          </button>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Menu"
            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 hover:text-[#00A3E8] transition-colors cursor-pointer"
          >
            {mobileMenu ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Submenu Drawer Portal */}
      {mobileMenu &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 top-20 z-50 md:hidden bg-slate-950/60 backdrop-blur-sm flex flex-col justify-start animate-fade-in"
            onClick={() => setMobileMenu(false)}
          >
            <div
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-b-3xl shadow-2xl border-b border-slate-200 px-5 pt-4 pb-6 space-y-2"
            >
              <div className="space-y-1.5">
                {navLinks.map(({ path, label, icon: Icon }) => {
                  const isActive = location.pathname === path;
                  return (
                    <button
                      key={path}
                      onClick={() => handleNavigation(path)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8]"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-[#00A3E8] text-white shadow-sm"
                              : "bg-white text-slate-600 shadow-2xs"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-sm ${isActive ? "font-black" : "font-bold"}`}
                        >
                          {label}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? "text-[#00A3E8]" : "text-slate-400"} ${lang === "ar" ? "rotate-180" : ""}`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Mobile Drawer Actions */}
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <a
                  href="tel:+966500761791"
                  onClick={() => setMobileMenu(false)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 hover:border-[#00A3E8] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      {lang === "ar" ? "اتصل بالمملكة" : "Saudi Arabia Call"}
                    </span>
                  </div>
                  <span className="text-xs font-black text-slate-900 dir-ltr">
                    +966 500761791
                  </span>
                </a>

                {/* Mobile Contact Button Redesigned */}
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full py-3 px-5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer group hover:bg-slate-800 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00A3E8]" />
                  <span>{t.nav.contact}</span>
                </button>
              </div>
            </div>

            <div
              onClick={() => setMobileMenu(false)}
              className="flex-1 w-full cursor-pointer"
              aria-label="Close menu backdrop"
            />
          </div>,
          document.body,
        )}
    </header>
  );
}

export default Navbar;