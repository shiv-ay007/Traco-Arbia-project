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
  // NEW icons for submenu categories
  Cpu,
  Settings,
  Shield,
  Thermometer,
  Camera,
  Blinds,
  Zap,
  Lock,
  Factory,
  Gauge,
  CircuitBoard,
  Cog,
  Radio,
  Power,
  Droplets,
  Wind,
  Speaker,
  Monitor,
} from "lucide-react";
import newLogo from "../assets/newlogo.png";
import logoWhite from "../assets/logo-white.png";
import { industrialNavigationCategories } from "../data/industrialProductsData";
import { homeNavigationCategories } from "../data/homeAutomationData";

/* ---- Icon mapping helpers (fallback if data has no icon) ---- */
const INDUSTRIAL_ICONS = [
  Factory, Gauge, CircuitBoard, Cog, Radio, Power, Droplets, Settings,
];
const HOME_ICONS = [
  Lightbulb, Blinds, Lock, Thermometer, Camera, Speaker, Wind, Monitor,
];

function getCategoryIcon(cat, type, idx) {
  // If your data object provides an `icon` (lucide component) use it
  if (cat.icon) return cat.icon;
  const pool = type === "industrial" ? INDUSTRIAL_ICONS : HOME_ICONS;
  return pool[idx % pool.length];
}

/* ---- Submenu item component ---- */
function MegaMenuItem({ cat, idx, lang, onNavigate, type }) {
  const Icon = getCategoryIcon(cat, type, idx);
  const title = lang === "ar" ? cat.titleAr : cat.titleEn;
  const subtitle =
    lang === "ar"
      ? cat.subtitleAr || cat.descAr
      : cat.subtitleEn || cat.descEn;

  return (
    <button
      onClick={onNavigate}
      className="group/item w-full flex items-start gap-3.5 p-3 rounded-xl text-left rtl:text-right
                 hover:bg-gradient-to-r hover:from-[#00A3E8]/10 hover:to-[#7C3AED]/10
                 border border-transparent hover:border-[#00A3E8]/20
                 transition-all duration-200 cursor-pointer"
    >
      {/* Icon box */}
      <span
        className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A3E8]/10 to-[#7C3AED]/10
                   text-[#00A3E8] flex items-center justify-center flex-shrink-0
                   group-hover/item:from-[#00A3E8] group-hover/item:to-[#7C3AED]
                   group-hover/item:text-white group-hover/item:scale-105
                   transition-all duration-200 shadow-xs"
      >
        <Icon className="w-5 h-5" strokeWidth={2.2} />
      </span>

      {/* Text */}
      <span className="min-w-0 flex-1">
        <span className="block text-[14px] font-bold text-gray-800 group-hover/item:text-[#00A3E8] truncate transition-colors leading-tight">
          {title}
        </span>
        {subtitle && (
          <span className="block text-[11.5px] font-medium text-gray-500 group-hover/item:text-gray-600 truncate mt-0.5">
            {subtitle}
          </span>
        )}
      </span>

      {/* Arrow */}
      <ChevronRight
        className={`w-4 h-4 text-gray-300 opacity-0 group-hover/item:opacity-100
                    group-hover/item:text-[#00A3E8] transition-all mt-1 flex-shrink-0
                    group-hover/item:translate-x-0.5 rtl:group-hover/item:-translate-x-0.5
                    ${lang === "ar" ? "rotate-180" : ""}`}
      />
    </button>
  );
}

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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", newLang);
    }
  };

  const navLinks = [
    { path: "/", label: t.nav.home, icon: Home },
    {
      path: "/about",
      label: t.nav.about || (lang === "ar" ? "من نحن" : "About Us"),
      icon: Layers,
    },
    { path: "/industrial-automation", label: t.nav.industrial, icon: Wrench, isMega: true },
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
    if (path.includes("#")) {
      const [targetPath, hash] = path.split("#");
      if (
        location.pathname === targetPath ||
        (!targetPath && location.pathname === "/smart-home")
      ) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      navigate(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
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
      if (!clickedMenuBtn && !clickedInsideDrawer) setMobileMenu(false);
    };
    const handleEscKey = (event) => {
      if (event.key === "Escape") setMobileMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction, { passive: true });
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [mobileMenu]);

  return (
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
            <Link to="/" className="flex items-center group cursor-pointer focus:outline-none">
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
                  (link.path === "/about" &&
                    (location.pathname === "/offerings" || location.pathname === "/about")) ||
                  (isIndustrial && location.pathname.startsWith("/industrial")) ||
                  (isHome && location.pathname.startsWith("/smart-home"));

                /* ---------- INDUSTRIAL MEGA ---------- */
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
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            industrialMenuOpen
                              ? "rotate-180 text-[#00A3E8]"
                              : isTransparent
                              ? "text-white/70"
                              : "text-gray-400"
                          }`}
                        />
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A3E8] rounded-t-md" />
                        )}
                      </button>

                      {industrialMenuOpen && (
                        <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-[600px] bg-white rounded-2xl border border-gray-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left rtl:text-right">
                          {/* subtle header */}
                          <div className="px-2 pb-2 mb-1 border-b border-gray-100">
                            <p className="text-[11px] font-black uppercase tracking-widest text-[#00A3E8]">
                              {lang === "ar" ? "الفئات الصناعية" : "INDUSTRIAL CATEGORIES"}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {industrialNavigationCategories.map((cat, idx) => (
                              <MegaMenuItem
                                key={cat.id}
                                cat={cat}
                                idx={idx}
                                lang={lang}
                                type="industrial"
                                onNavigate={() => {
                                  setIndustrialMenuOpen(false);
                                  handleNavigation(cat.path);
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                /* ---------- HOME AUTOMATION MEGA ---------- */
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
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            homeMenuOpen
                              ? "rotate-180 text-[#00A3E8]"
                              : isTransparent
                              ? "text-white/70"
                              : "text-gray-400"
                          }`}
                        />
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A3E8] rounded-t-md" />
                        )}
                      </button>

                      {homeMenuOpen && (
                        <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-[600px] bg-white rounded-2xl border border-gray-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left rtl:text-right">
                          <div className="px-2 pb-2 mb-1 border-b border-gray-100">
                            <p className="text-[11px] font-black uppercase tracking-widest text-[#00A3E8]">
                              {lang === "ar" ? "حلول أتمتة المنازل" : "HOME AUTOMATION SOLUTIONS"}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {homeNavigationCategories.map((cat, idx) => (
                              <MegaMenuItem
                                key={cat.id}
                                cat={cat}
                                idx={idx}
                                lang={lang}
                                type="home"
                                onNavigate={() => {
                                  setHomeMenuOpen(false);
                                  handleNavigation(cat.path);
                                }}
                              />
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

          {/* Right Side: Language */}
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
              <ChevronDown
                className={`w-4 h-4 absolute right-3 pointer-events-none z-10 rtl:right-auto rtl:left-3 transition-colors ${
                  isTransparent ? "text-white/70" : "text-gray-500"
                }`}
              />
            </div>
          </div>

          {/* Mobile controls */}
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
              <ChevronDown
                className={`w-3.5 h-3.5 absolute right-2 pointer-events-none z-10 rtl:right-auto rtl:left-2 ${
                  isTransparent ? "text-white/70" : "text-gray-500"
                }`}
              />
            </div>

            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenu((prev) => !prev)}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              className={`p-1.5 focus:outline-none cursor-pointer transition-colors ${
                isTransparent ? "text-white hover:text-[#00A3E8]" : "text-gray-800 hover:text-[#00A3E8]"
              }`}
            >
              {mobileMenu ? <X className="w-6 h-6 text-[#00A3E8]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
                mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileMenu(false)}
            />
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
                  (link.path === "/about" &&
                    (location.pathname === "/offerings" || location.pathname === "/about")) ||
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
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileIndustrialOpen ? "rotate-180 text-[#00A3E8]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileIndustrialOpen && (
                        <div className="pl-2 rtl:pl-0 rtl:pr-2 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#00A3E8]">
                          {industrialNavigationCategories.map((cat, idx) => (
                            <MegaMenuItem
                              key={cat.id}
                              cat={cat}
                              idx={idx}
                              lang={lang}
                              type="industrial"
                              onNavigate={() => {
                                setMobileMenu(false);
                                handleNavigation(cat.path);
                              }}
                            />
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
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileHomeOpen ? "rotate-180 text-[#00A3E8]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileHomeOpen && (
                        <div className="pl-2 rtl:pl-0 rtl:pr-2 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#00A3E8]">
                          {homeNavigationCategories.map((cat, idx) => (
                            <MegaMenuItem
                              key={cat.id}
                              cat={cat}
                              idx={idx}
                              lang={lang}
                              type="home"
                              onNavigate={() => {
                                setMobileMenu(false);
                                handleNavigation(cat.path);
                              }}
                            />
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
                    <ChevronRight className={`w-4 h-4 opacity-40 ${lang === "ar" ? "rotate-180" : ""}`} />
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