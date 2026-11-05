import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industrialProducts, industrialNavigationCategories } from '../../data/industrialProductsData';

function IndustrialSection({ lang, onOpenQuote }) {
  const products = industrialProducts;
  const isAr = lang === 'ar';

  return (
    <section id="industrial" className="py-12 sm:py-16 md:py-20 relative bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle Micro Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#00A3E8]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-sky-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Minimal - Clean Typography) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-mono font-semibold tracking-wider text-[#00A3E8] uppercase mb-2">
            / {isAr ? 'المنظومات والعتاد الصناعي' : 'Industrial Hardware'}
          </p>

          <h2
            data-normal-case="true"
            className="normal-case text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 mb-3 tracking-tight leading-tight [text-transform:none!important]"
            style={{ textTransform: 'none' }}
          >
            {isAr ? (
              <>
                معدات ومنظومات <span className="text-[#00A3E8]">الأتمتة الصناعية</span>
              </>
            ) : (
              <>
                Precision Industrial <span className="text-[#00A3E8]">Hardware & Systems</span>
              </>
            )}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            {isAr 
              ? 'معدات وقطع غيار صناعية أصلية معتمدة مع التركيب والبرمجة الهندسية لكبرى المصانع والمنشآت في المملكة.'
              : 'Engineered for maximum reliability, zero downtime, and operational excellence across Saudi industrial plants.'}
          </p>
        </div>

        {/* 8 Product Categories Grid: Tight Gap, Zero Radius, Editorial Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {products.map((item, idx) => {
            const catInfo = industrialNavigationCategories[idx] || industrialNavigationCategories.find(c => c.slug === item.id || c.id === item.id);
            const targetPath = catInfo ? catInfo.path : `/industrial-automation/${item.id}`;
            const subItems = catInfo ? (isAr ? catInfo.subItemsAr : catInfo.subItemsEn) : [];
            const title = isAr ? (catInfo?.titleAr || item.titleAr) : (catInfo?.titleEn || item.titleEn);

            return (
              <div 
                key={item.id}
                id={catInfo?.slug || item.id}
                className="bg-white rounded-none border border-slate-200/90 hover:border-[#00A3E8] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md"
              >
                {/* Image & Content Wrapper */}
                <div className="flex flex-col flex-1">
                  {/* Photo Container - Edge to Edge, Zero Radius */}
                  <Link 
                    to={targetPath} 
                    className="block relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100 cursor-pointer rounded-none border-b border-slate-100"
                  >
                    <img 
                      src={item.image} 
                      alt={title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-none"
                      loading="lazy"
                    />
                  </Link>

                  {/* Card Title & Description */}
                  <div className="p-4 sm:p-5 text-center flex flex-col flex-1">
                    <Link to={targetPath} className="block">
                      <h3
                        className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-1.5 leading-snug cursor-pointer [text-transform:none!important]"
                        style={{ textTransform: 'none' }}
                      >
                        {title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 mb-3">
                      {isAr ? item.descAr : item.descEn}
                    </p>

                    {/* Sub-items list tag preview - Sharp Rectangular Tags */}
                    {subItems && subItems.length > 0 && (
                      <div className="mt-auto pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5 justify-center">
                        {subItems.map((sub, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="px-2 py-0.5 rounded-none bg-slate-50 border border-slate-200/70 text-slate-600 text-[10px] font-medium"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button - Sharp Rectangular Minimal Button */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 mt-auto">
                  <Link
                    to={targetPath}
                    className="w-full py-2.5 rounded-none bg-slate-900 hover:bg-[#00A3E8] text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>{isAr ? 'استكشف المزيد' : 'Explore More'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimal Industrial Engineering Callout Strip - Sharp Rectangular */}
        <div className="bg-white p-5 sm:p-7 rounded-none border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3
              className="text-base sm:text-lg font-bold text-slate-900 mb-1 [text-transform:none!important]"
              style={{ textTransform: 'none' }}
            >
              {isAr ? 'تصميم غرف التحكم الصناعي وبرمجة PLC' : 'Custom Industrial Control Room & PLC Engineering'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {isAr 
                ? 'مهندسون سعوديون معتمدون مستعدون لزيارة موقع مصنعك ودراسة متطلبات التشغيل والأتمتة.'
                : 'Certified Jeddah engineers ready to visit your factory site and deliver turnkey automation proposals.'}
            </p>
          </div>
          <Link 
            to="/contact"
            onClick={onOpenQuote}
            className="px-6 py-2.5 rounded-none bg-[#00A3E8] hover:bg-[#0086C4] text-white font-bold text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            {isAr ? 'استشارة المهندس الصناعي' : 'Consult Industrial Team'}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default IndustrialSection;
