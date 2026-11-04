import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Phone,
  Globe,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Home,
  Lightbulb,
  Layers,
  Wrench,
  Image as ImageIcon,
} from "lucide-react";
import newLogo from "../assets/newlogo.png";
import logoWhite from "../assets/logo-white.png";
import { industrialNavigationCategories } from "../data/industrialProductsData";
import { homeNavigationCategories } from "../data/homeAutomationData";

export function Header({ lang, setLang, t }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [industrialMenuOpen, setIndustrialMenuOpen] = useState(false);
  const [mobileIndustrialOpen, setMobileIndustrialOpen] = useState(false);
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const isContactPage = location.pathname === "/contact";
  const isHomeHero = location.pathname === "/";
  const isTransparent = isHomeHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIndustrialMenuOpen(false);
    setHomeMenuOpen(false);
    setMobileMenu(false);
  }, [location.pathname]);

  const handleLanguageChange = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
      document.documentElement.setAttribute(
        "dir",
        newLang === "ar" ? "rtl" : "ltr",
      );
      document.documentElement.setAttribute("lang", newLang);
    }
  };

  const navLinks = [
    { path: "/", label: t.nav.home, icon: Home },
    {
      path: "/offerings",
      label: t.nav.offerings || (lang === "ar" ? "خدماتنا" : "What We Offer"),
      icon: Layers,
    },
    { 
      path: "/industrial-automation", 
      label: t.nav.industrial, 
      icon: Wrench,
      isMega: true 
    },
    {
      path: "/smart-home",
      label: t.nav.smartHome || (lang === "ar" ? "أتمتة المنازل" : "Home Automation"),
      icon: Lightbulb,
      isHomeMega: true,
    },
    {
      path: "/gallery",
      label: t.nav.gallery || (lang === "ar" ? "معرض الصور" : "Gallery"),
      icon: ImageIcon,
    },
    {
      path: "/contact",
      label: t.nav.contact || (lang === "ar" ? "اتصل بنا" : "Contact Us"),
      icon: Phone,
    },
  ];

  const handleNavigation = (path) => {
    setMobileMenu(false);
    setIndustrialMenuOpen(false);
    setHomeMenuOpen(false);
    if (path.includes('#')) {
      const [targetPath, hash] = path.split('#');
      if (location.pathname === targetPath || (!targetPath && location.pathname === '/smart-home')) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      navigate(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
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
      const clickedMenuBtn =
        menuButtonRef.current && menuButtonRef.current.contains(event.target);
      const clickedInsideDrawer =
        drawerRef.current && drawerRef.current.contains(event.target);

      if (!clickedMenuBtn && !clickedInsideDrawer) {
        setMobileMenu(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction, {
      passive: true,
    });
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [mobileMenu]);

  return (
    // Dynamic Transparent on Home Hero, Animated Solid on Scroll
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? "bg-transparent border-none shadow-none text-white"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200 text-gray-900 shadow-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Left Side: Logo & Nav Links */}
          <div className="flex items-center gap-4 lg:gap-8 h-full">
            
            {/* Updated Logo Section */}
            <Link
              to="/"
              className="flex items-center group cursor-pointer focus:outline-none"
            >
              <img
                src={isTransparent ? logoWhite : newLogo}
                alt="Treco Arabia"
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 h-full">
              {navLinks.map((link) => {
                const isIndustrial = link.isMega;
                const isHome = link.isHomeMega;
                const isActive =
                  location.pathname === link.path ||
                  (isIndustrial && location.pathname.startsWith("/industrial")) ||
                  (isHome && location.pathname.startsWith("/smart-home"));

                if (isIndustrial) {
                  return (
                    <div
                      key={link.path}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setIndustrialMenuOpen(true)}
                      onMouseLeave={() => setIndustrialMenuOpen(false)}
                    >
                      <button
                        onClick={() => handleNavigation(link.path)}
                        className={`px-3.5 py-2 text-[15px] lg:text-base font-semibold tracking-normal transition-colors relative cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? "text-[#00A3E8] font-bold"
                            : isTransparent
                            ? "text-white/90 hover:text-[#00A3E8]"
                            : "text-gray-800 hover:text-[#00A3E8]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          industrialMenuOpen
                            ? 'rotate-180 text-[#00A3E8]'
                            : isTransparent
                            ? 'text-white/70'
                            : 'text-gray-400'
                        }`} />
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A3E8] rounded-t-md" />
                        )}
                      </button>

                      {/* Clean & User-Friendly 8 Submenu Dropdown */}
                      {industrialMenuOpen && (
                        <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-[540px] bg-white rounded-2xl border border-gray-200 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left rtl:text-right">
                          {/* 8 Clean Submenu Items (2 Columns x 4 Rows) */}
                          <div className="grid grid-cols-2 gap-1.5">
                            {industrialNavigationCategories.map((cat, idx) => (
                              <Link
                                key={cat.id}
                                to={cat.path}
                                onClick={() => setIndustrialMenuOpen(false)}
                                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F0F7FF] transition-all group/item cursor-pointer"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span className="w-7 h-7 rounded-lg bg-[#00A3E8]/10 text-[#00A3E8] text-xs font-black flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A3E8] group-hover/item:text-white transition-colors">
                                    {idx + 1}
                                  </span>
                                  <span className="text-[14.5px] font-bold text-gray-800 group-hover/item:text-[#00A3E8] truncate transition-colors">
                                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                                  </span>
                                </div>
                                <ChevronRight className={`w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#00A3E8] transition-all group-hover/item:translate-x-0.5 rtl:group-hover/item:-translate-x-0.5 flex-shrink-0 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (isHome) {
                  return (
                    <div
                      key={link.path}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setHomeMenuOpen(true)}
                      onMouseLeave={() => setHomeMenuOpen(false)}
                    >
                      <button
                        onClick={() => handleNavigation(link.path)}
                        className={`px-3.5 py-2 text-[15px] lg:text-base font-semibold tracking-normal transition-colors relative cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? "text-[#00A3E8] font-bold"
                            : isTransparent
                            ? "text-white/90 hover:text-[#00A3E8]"
                            : "text-gray-800 hover:text-[#00A3E8]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          homeMenuOpen
                            ? 'rotate-180 text-[#00A3E8]'
                            : isTransparent
                            ? 'text-white/70'
                            : 'text-gray-400'
                        }`} />
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A3E8] rounded-t-md" />
                        )}
                      </button>

                      {/* Clean & User-Friendly 8 Submenu Dropdown for Home Automation */}
                      {homeMenuOpen && (
                        <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-[540px] bg-white rounded-2xl border border-gray-200 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left rtl:text-right">
                          {/* 8 Clean Submenu Items (2 Columns x 4 Rows) */}
                          <div className="grid grid-cols-2 gap-1.5">
                            {homeNavigationCategories.map((cat, idx) => (
                              <button
                                key={cat.id}
                                onClick={() => handleNavigation(cat.path)}
                                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F0F7FF] transition-all group/item cursor-pointer text-left rtl:text-right"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span className="w-7 h-7 rounded-lg bg-[#00A3E8]/10 text-[#00A3E8] text-xs font-black flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A3E8] group-hover/item:text-white transition-colors">
                                    {idx + 1}
                                  </span>
                                  <span className="text-[14.5px] font-bold text-gray-800 group-hover/item:text-[#00A3E8] truncate transition-colors">
                                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                                  </span>
                                </div>
                                <ChevronRight className={`w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#00A3E8] transition-all group-hover/item:translate-x-0.5 rtl:group-hover/item:-translate-x-0.5 flex-shrink-0 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigation(link.path)}
                    className={`px-3.5 py-2 text-[15px] lg:text-base font-semibold tracking-normal transition-colors relative cursor-pointer ${
                      isActive
                        ? "text-[#00A3E8] font-bold"
                        : isTransparent
                        ? "text-white/90 hover:text-[#00A3E8]"
                        : "text-gray-800 hover:text-[#00A3E8]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A3E8] rounded-t-md" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Language DDL Dropdown (with comfortable width) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="relative inline-flex items-center">
              <Globe className="w-4 h-4 text-[#00A3E8] absolute left-3.5 pointer-events-none z-10 rtl:left-auto rtl:right-3.5" />
              <select
                value={lang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                aria-label="Select Language"
                className={`w-44 py-2 pl-10 pr-9 rtl:pr-10 rtl:pl-9 rounded-full border text-xs font-bold transition-all shadow-xs appearance-none cursor-pointer focus:outline-none ${
                  isTransparent
                    ? "bg-black/35 backdrop-blur-md border-white/25 text-white hover:border-[#00A3E8] focus:border-[#00A3E8]"
                    : "bg-white border-gray-300 text-gray-800 hover:border-[#00A3E8] focus:border-[#00A3E8]"
                }`}
              >
                <option value="en" className="bg-slate-900 text-white">English (EN)</option>
                <option value="ar" className="bg-slate-900 text-white">العربية (AR)</option>
              </select>
              <ChevronDown className={`w-4 h-4 absolute right-3 pointer-events-none z-10 rtl:right-auto rtl:left-3 transition-colors ${
                isTransparent ? 'text-white/70' : 'text-gray-500'
              }`} />
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <div className="relative inline-flex items-center">
              <Globe className="w-3.5 h-3.5 text-[#00A3E8] absolute left-2.5 pointer-events-none z-10 rtl:left-auto rtl:right-2.5" />
              <select
                value={lang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                aria-label="Select Language"
                className={`w-32 py-1.5 pl-7 pr-6 rtl:pr-7 rtl:pl-6 rounded-full border text-[11px] font-bold shadow-xs appearance-none cursor-pointer focus:outline-none ${
                  isTransparent
                    ? "bg-black/35 backdrop-blur-md border-white/25 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="ar" className="bg-slate-900 text-white">العربية</option>
              </select>
              <ChevronDown className={`w-3.5 h-3.5 absolute right-2 pointer-events-none z-10 rtl:right-auto rtl:left-2 ${
                isTransparent ? 'text-white/70' : 'text-gray-500'
              }`} />
            </div>

            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenu((prev) => !prev)}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              className={`p-1.5 focus:outline-none cursor-pointer transition-colors ${
                isTransparent ? "text-white hover:text-[#00A3E8]" : "text-gray-800 hover:text-[#00A3E8]"
              }`}
            >
              {mobileMenu ? (
                <X className="w-6 h-6 text-[#00A3E8]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer via Portal */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
                mobileMenu
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileMenu(false)}
            />

            {/* Drawer content */}
            <div
              ref={drawerRef}
              className={`fixed top-16 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 pt-4 pb-6 flex flex-col gap-2 md:hidden shadow-xl transition-all duration-300 ease-out ${
                mobileMenu
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isIndustrial = link.isMega;
                const isHome = link.isHomeMega;
                const isActive =
                  location.pathname === link.path ||
                  (isIndustrial && location.pathname.startsWith("/industrial")) ||
                  (isHome && location.pathname.startsWith("/smart-home"));

                if (isIndustrial) {
                  return (
                    <div key={link.path} className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleNavigation(link.path)}
                          className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-md text-[15px] font-semibold transition-all text-left rtl:text-right cursor-pointer ${
                            isActive
                              ? "bg-[#00A3E8]/10 text-[#00A3E8] font-bold border-l-4 border-[#00A3E8]"
                              : "text-gray-800 hover:bg-gray-50 hover:text-[#00A3E8]"
                          }`}
                        >
                          <IconComponent
                            className={`w-4 h-4 ${isActive ? "text-[#00A3E8]" : "text-gray-400"}`}
                          />
                          <span>{link.label}</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileIndustrialOpen((prev) => !prev);
                          }}
                          aria-label="Toggle Industrial Categories"
                          className="p-3 text-slate-500 hover:text-[#00A3E8] cursor-pointer"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileIndustrialOpen ? 'rotate-180 text-[#00A3E8]' : ''}`} />
                        </button>
                      </div>

                      {mobileIndustrialOpen && (
                        <div className="pl-4 rtl:pl-0 rtl:pr-4 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#00A3E8]">
                          {industrialNavigationCategories.map((cat, idx) => (
                            <Link
                              key={cat.id}
                              to={cat.path}
                              onClick={() => setMobileMenu(false)}
                              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white text-[13.5px] font-bold text-gray-800 hover:text-[#00A3E8] transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-md bg-[#00A3E8]/10 text-[#00A3E8] text-[11px] font-black flex items-center justify-center flex-shrink-0">
                                  {idx + 1}
                                </span>
                                <span>{lang === 'ar' ? cat.titleAr : cat.titleEn}</span>
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 text-gray-400 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (isHome) {
                  return (
                    <div key={link.path} className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleNavigation(link.path)}
                          className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-md text-[15px] font-semibold transition-all text-left rtl:text-right cursor-pointer ${
                            isActive
                              ? "bg-[#00A3E8]/10 text-[#00A3E8] font-bold border-l-4 border-[#00A3E8]"
                              : "text-gray-800 hover:bg-gray-50 hover:text-[#00A3E8]"
                          }`}
                        >
                          <IconComponent
                            className={`w-4 h-4 ${isActive ? "text-[#00A3E8]" : "text-gray-400"}`}
                          />
                          <span>{link.label}</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileHomeOpen((prev) => !prev);
                          }}
                          aria-label="Toggle Home Automation Categories"
                          className="p-3 text-slate-500 hover:text-[#00A3E8] cursor-pointer"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileHomeOpen ? 'rotate-180 text-[#00A3E8]' : ''}`} />
                        </button>
                      </div>

                      {mobileHomeOpen && (
                        <div className="pl-4 rtl:pl-0 rtl:pr-4 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#00A3E8]">
                          {homeNavigationCategories.map((cat, idx) => (
                            <button
                              key={cat.id}
                              onClick={() => handleNavigation(cat.path)}
                              className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white text-[13.5px] font-bold text-gray-800 hover:text-[#00A3E8] transition-colors text-left rtl:text-right"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-md bg-[#00A3E8]/10 text-[#00A3E8] text-[11px] font-black flex items-center justify-center flex-shrink-0">
                                  {idx + 1}
                                </span>
                                <span>{lang === 'ar' ? cat.titleAr : cat.titleEn}</span>
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 text-gray-400 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigation(link.path)}
                    className={`flex items-center justify-between px-4 py-3 rounded-md text-[15px] font-semibold transition-all text-left rtl:text-right cursor-pointer ${
                      isActive
                        ? "bg-[#00A3E8]/10 text-[#00A3E8] font-bold border-l-4 border-[#00A3E8]"
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#00A3E8]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`w-4 h-4 ${isActive ? "text-[#00A3E8]" : "text-gray-400"}`}
                      />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 opacity-40 ${lang === "ar" ? "rotate-180" : ""}`}
                    />
                  </button>
                );
              })}
            </div>
          </>,
          document.body,
        )}
    </nav>
  );
}

export default Header;