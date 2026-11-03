import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Zap } from 'lucide-react';

export default function IndustrialVisualShowcase({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  // NOTE: Yahan aap apni generated images ke paths daal dena
  // import img1 from '../assets/industrial/panel.jpg'; etc.
  const visuals = [
    {
      id: 1,
      title: isArabic ? 'لوحات التحكم MCC' : 'Custom MCC Panels',
      desc: isArabic ? 'تصميم وتجميع لوحات جهد منخفض مطابقة لمعايير SASO.' : 'Desert-rated low-voltage switchgear built to SASO specs.',
      image: 'YOUR_IMAGE_1_PATH',
      icon: Cpu,
      colSpan: 'lg:col-span-7',
      height: 'h-[400px] sm:h-[500px]'
    },
    {
      id: 2,
      title: isArabic ? 'غرف التحكم SCADA' : 'Live SCADA Rooms',
      desc: isArabic ? 'مراقبة لحظية لخطوط الإنتاج بالكامل.' : 'Real-time plant telemetry and centralized supervision.',
      image: 'YOUR_IMAGE_2_PATH',
      icon: Zap,
      colSpan: 'lg:col-span-5',
      height: 'h-[400px] sm:h-[500px]'
    },
    {
      id: 3,
      title: isArabic ? 'برمجة أتمتة PLC' : 'PLC & Robotics Engineering',
      desc: isArabic ? 'برمجة منطقية دقيقة لخطوط الإنتاج الروبوتية.' : 'Deterministic automation for robotic assembly lines.',
      image: 'YOUR_IMAGE_3_PATH',
      icon: ShieldCheck,
      colSpan: 'lg:col-span-12',
      height: 'h-[300px] sm:h-[400px]'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3E8]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-[#00A3E8]/30 text-[#00A3E8] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8] animate-pulse" />
              <span>{isArabic ? 'القدرات الهندسية' : 'VISUAL ENGINEERING CAPABILITIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {isArabic ? (
                <>هندسة صناعية <span className="text-[#00A3E8]">موثوقة</span> بالصور</>
              ) : (
                <>Precision Engineering <span className="text-[#00A3E8]">Visualized</span></>
              )}
            </h2>
          </div>
          <Link to="/industrial" className="inline-flex items-center gap-2 text-sm font-bold text-[#00A3E8] hover:text-blue-600 transition-colors group">
            {isArabic ? 'استكشف كل الأنظمة' : 'Explore All Systems'}
            <ArrowRight className={`w-4 h-4 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>

        {/* Bento Grid Layout for Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {visuals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${item.colSpan} ${item.height} border border-slate-200 shadow-sm`}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: 'brightness(0.65)' }}
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#00A3E8] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl sm:text-3xl font-black text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 font-medium max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {item.desc}
                  </p>
                </div>

                {/* Top Right Arrow Indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}