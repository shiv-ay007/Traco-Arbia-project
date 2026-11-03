import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowUpRight } from 'lucide-react';
import { industrialProducts } from '../data/industrialProductsData';

function IndustrialSection({ lang, onOpenQuote }) {
  const products = industrialProducts;

  return (
    <section id="industrial" className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-[#EBF5FC]/70 text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Radiant Cyan & Sky Ambient Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Wrench className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'القطاع الصناعي السعودي' : 'HEAVY INDUSTRY & AUTOMATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {lang === 'ar' ? 'معدات ومنظومات الأتمتة الصناعية' : 'Precision Industrial Hardware & Systems'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {lang === 'ar' 
              ? 'معدات وقطع غيار صناعية أصلية معتمدة مع التركيب والبرمجة الهندسية لكبرى المصانع والمنشآت في المملكة.'
              : 'Engineered for maximum reliability, zero downtime, and operational excellence across Saudi industrial plants.'}
          </p>
        </div>

        {/* 8 Professional Industrial Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {products.map((item) => (
            <div 
              key={item.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.06)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.18)] hover:border-[#00A3E8] transition-all group duration-300 flex flex-col justify-start overflow-hidden relative"
            >
              {/* Top Subtle Border Accent Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

              {/* Inner wrapper to allow button to sit at bottom gracefully */}
              <div className="flex flex-col flex-1">
                {/* Real High-Resolution Industrial Photo */}
                <Link 
                  to={`/industrial/${item.id}`} 
                  className="block relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={lang === 'ar' ? item.titleAr : item.titleEn}
                    /* Zoom effect reduced from scale-108 to scale-105 */
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Card Title & Description */}
                <div className="p-5 sm:p-6 text-center">
                  <Link to={`/industrial/${item.id}`} className="block">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-2 leading-snug cursor-pointer">
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>

              {/* Cyan Action Button - Opens Professional Product Page */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 mt-auto">
                <Link
                  to={`/industrial/${item.id}`}
                  className="w-full py-3 rounded-lg bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>{lang === 'ar' ? 'استكشف المزيد' : 'Explore More'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* High-End Industrial Callout Banner with Radiant Tech Gradient */}
        <div className="bg-gradient-to-br from-[#061C3D] via-[#0A2E5C] to-[#030E1F] text-white p-6 sm:p-8 rounded-xl border border-sky-400/35 shadow-[0_20px_50px_-10px_rgba(0,163,232,0.3)] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-90" />
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#00A3E8]/20 blur-[90px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-600/20 blur-[90px] pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              {lang === 'ar' ? 'تصميم غرف التحكم الصناعي وبرمجة PLC' : 'Custom Industrial Control Room & PLC Engineering'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {lang === 'ar' 
                ? 'مهندسون سعوديون معتمدون مستعدون لزيارة موقع مصنعك ودراسة متطلبات التشغيل والأتمتة.'
                : 'Precision automation engineered for factories and plants across Saudi Arabia.'}
            </p>
          </div>
          <Link 
            to="/contact"
            className="relative z-10 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#00A3E8] via-cyan-400 to-[#00A3E8] hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(0,163,232,0.5)] hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            {lang === 'ar' ? 'استشارة المهندس الصناعي' : 'Consult Industrial Team'}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default IndustrialSection;