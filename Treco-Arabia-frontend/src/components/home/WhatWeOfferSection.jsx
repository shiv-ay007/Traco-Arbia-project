import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot,
  Cpu,
  Gauge,
  Layers,
  Zap,
  Cog,
  Sliders,
  Lightbulb,
  Wind,
  Fan,
  CloudRain,
  Thermometer,
  Tv,
  Blinds,
  Video,
  Volume2,
  Activity,
  Warehouse,
  DoorOpen,
  Lock,
  BellRing
} from 'lucide-react';

export function WhatWeOfferSection({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  // Exactly 21 items = 3 complete rows of 7 on desktop
  // Row 1: Industrial Automation (7 core systems)
  // Row 2 & 3: Smart Living & Building Automation (14 systems)
  const items = [
    // --- ROW 1: INDUSTRIAL AUTOMATION ---
    { id: 'robotics', nameEn: 'Robotic Arms', nameAr: 'الروبوتات', icon: Bot, link: '/industrial-automation' },
    { id: 'plc', nameEn: 'PLC Systems', nameAr: 'أنظمة PLC', icon: Cpu, link: '/industrial-automation' },
    { id: 'scada', nameEn: 'SCADA & HMI', nameAr: 'سكادا وشاشات', icon: Gauge, link: '/industrial-automation' },
    { id: 'mcc', nameEn: 'MCC Panels', nameAr: 'لوحات MCC', icon: Layers, link: '/industrial-automation' },
    { id: 'vfd', nameEn: 'VFD Drives', nameAr: 'مغيرات VFD', icon: Zap, link: '/industrial-automation' },
    { id: 'pumps', nameEn: 'Pumps', nameAr: 'المضخات', icon: Cog, link: '/industrial-automation' },
    { id: 'valves', nameEn: 'Control Valves', nameAr: 'صمامات التحكم', icon: Sliders, link: '/industrial-automation' },

    // --- ROW 2: SMART LIVING (PART 1) ---
    { id: 'lights', nameEn: 'Lights', nameAr: 'الإضاءة', icon: Lightbulb, link: '/smart-home' },
    { id: 'ac', nameEn: 'A/c', nameAr: 'التكييف', icon: Wind, link: '/smart-home' },
    { id: 'fan', nameEn: 'Fan', nameAr: 'المراوح', icon: Fan, link: '/smart-home' },
    { id: 'sprinkler', nameEn: 'Sprinkler', nameAr: 'الرشاشات', icon: CloudRain, link: '/smart-home' },
    { id: 'hvac', nameEn: 'HVAC', nameAr: 'المناخ والتهوية', icon: Thermometer, link: '/smart-home' },
    { id: 'tv', nameEn: 'Tv', nameAr: 'الشاشات', icon: Tv, link: '/smart-home' },
    { id: 'curtain', nameEn: 'Curtain', nameAr: 'الستائر', icon: Blinds, link: '/smart-home' },

    // --- ROW 3: SMART LIVING (PART 2) ---
    { id: 'cctv', nameEn: 'CCTV', nameAr: 'كاميرات المراقبة', icon: Video, link: '/smart-home' },
    { id: 'speakers', nameEn: 'Speakers', nameAr: 'الصوتيات', icon: Volume2, link: '/smart-home' },
    { id: 'sensors', nameEn: 'Sensors', nameAr: 'الحساسات', icon: Activity, link: '/smart-home' },
    { id: 'garage', nameEn: 'Garage doors', nameAr: 'أبواب الكراج', icon: Warehouse, link: '/smart-home' },
    { id: 'gates', nameEn: 'Gates', nameAr: 'البوابات', icon: DoorOpen, link: '/smart-home' },
    { id: 'locks', nameEn: 'Locks', nameAr: 'الأقفال الذكية', icon: Lock, link: '/smart-home' },
    { id: 'doorbell', nameEn: 'Video door bell', nameAr: 'الجرس المرئي', icon: BellRing, link: '/smart-home' },
  ];

  return (
    <section
      id="what-we-offer"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="dark-section relative bg-[#18191D] text-white py-16 sm:py-20 md:py-24 border-t border-b border-white/[0.04]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        
        {/* ONLY THE HEADING: Clean, Minimal, 100% Crisp White */}
        <div className="mb-8 sm:mb-10 text-left rtl:text-right">
          <h2
            className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase"
            style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}
          >
            {isArabic ? 'ما نقدمه' : 'WHAT WE OFFER'}
          </h2>
        </div>

        {/* MINIMAL CARDS GRID: 7 COLUMNS ON DESKTOP (3 ROWS OF 7) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5 md:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
              >
                <Link
                  to={item.link}
                  className="group relative flex flex-col items-center justify-center p-4 sm:p-5 min-h-[115px] sm:min-h-[125px] rounded-xl sm:rounded-2xl bg-[#212328] hover:bg-[#282B32] border border-white/[0.05] hover:border-[#00A3E8]/50 transition-all duration-300 shadow-sm hover:shadow-[0_6px_24px_rgba(0,163,232,0.12)] hover:-translate-y-1 text-center"
                >
                  {/* Clean Centered Icon */}
                  <div className="w-8 h-8 flex items-center justify-center text-gray-300 group-hover:text-[#00A3E8] transition-colors duration-300 mb-2.5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Clean Centered Label (No ellipsis, full visibility) */}
                  <span
                    className="text-xs sm:text-[13px] font-medium text-gray-200 group-hover:text-white transition-colors text-center leading-snug"
                    style={{ color: '#E2E8F0' }}
                  >
                    {isArabic ? item.nameAr : item.nameEn}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhatWeOfferSection;
