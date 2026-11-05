import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industrialProducts, industrialNavigationCategories } from '../../data/industrialProductsData';

function IndustrialSection({ lang, onOpenQuote }) {
  const products = industrialProducts;
  const isAr = lang === 'ar';

  return (
    <section
      id="industrial"
      className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* ---------- Header ---------- */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-[11px] font-medium tracking-[0.18em] text-slate-400 uppercase mb-4">
            {isAr ? 'المنظومات الصناعية' : 'Industrial Systems'}
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 leading-[1.15] tracking-tight mb-4"
            style={{ textTransform: 'none' }}
          >
            {isAr ? (
              <>معدات ومنظومات <span className="text-[#00A3E8]">الأتمتة الصناعية</span></>
            ) : (
              <>Precision industrial <span className="text-[#00A3E8]">hardware & systems</span></>
            )}
          </h2>

          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl">
            {isAr
              ? 'معدات وقطع غيار صناعية أصلية معتمدة، مع التركيب والبرمجة الهندسية لكبرى المصانع والمنشآت في المملكة.'
              : 'Authentic industrial hardware, engineered installation, and PLC programming for plants across the Kingdom.'}
          </p>
        </div>

        {/* ---------- Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {products.map((item, idx) => {
            const catInfo =
              industrialNavigationCategories[idx] ||
              industrialNavigationCategories.find(
                (c) => c.slug === item.id || c.id === item.id
              );
            const targetPath = catInfo ? catInfo.path : `/industrial-automation/${item.id}`;
            const subItems = catInfo
              ? isAr
                ? catInfo.subItemsAr
                : catInfo.subItemsEn
              : [];
            const title = isAr
              ? catInfo?.titleAr || item.titleAr
              : catInfo?.titleEn || item.titleEn;

            return (
              <article
                key={item.id}
                id={catInfo?.slug || item.id}
                className="group relative flex flex-col bg-white border-r border-b border-slate-200 p-5 sm:p-6 overflow-hidden transition-colors duration-300"
              >
                {/* ===== RTL OVERLAY (right → left) ===== */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0
                             bg-[#00A3E8]
                             origin-right scale-x-0
                             transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]
                             group-hover:scale-x-100"
                />

                {/* ===== CONTENT (above overlay) ===== */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* index number */}
                  <span className="text-[11px] font-mono text-slate-300 mb-4 transition-colors duration-300 group-hover:text-white/60">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* title */}
                  <Link to={targetPath} className="block mb-2">
                    <h3
                      className="text-[15px] sm:text-base font-semibold text-slate-900 leading-snug
                                 transition-colors duration-300 group-hover:text-white"
                      style={{ textTransform: 'none' }}
                    >
                      {title}
                    </h3>
                  </Link>

                  {/* desc */}
                  <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 mb-6
                                transition-colors duration-300 group-hover:text-white/80">
                    {isAr ? item.descAr : item.descEn}
                  </p>

                  {/* sub items */}
                  {subItems && subItems.length > 0 && (
                    <p className="text-[12px] text-slate-400 leading-relaxed mb-6
                                  transition-colors duration-300 group-hover:text-white/60">
                      {subItems.slice(0, 3).join(' · ')}
                    </p>
                  )}

                  {/* footer link */}
                  <Link
                    to={targetPath}
                    className="mt-auto inline-flex items-center gap-1 text-[12.5px] font-medium
                               text-slate-700 transition-colors duration-300 group-hover:text-white"
                  >
                    <span>{isAr ? 'تفاصيل' : 'View details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* ---------- Callout ---------- */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-xl">
            <h3
              className="text-[16px] sm:text-[17px] font-semibold text-slate-900 mb-1.5"
              style={{ textTransform: 'none' }}
            >
              {isAr
                ? 'تصميم غرف التحكم الصناعي وبرمجة PLC'
                : 'Custom control rooms & PLC engineering'}
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-relaxed">
              {isAr
                ? 'مهندسون معتمدون مستعدون لزيارة موقع مصنعك ودراسة متطلبات التشغيل والأتمتة.'
                : 'Certified engineers ready to visit your site and deliver turnkey automation proposals.'}
            </p>
          </div>
          <Link
            to="/contact"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 hover:text-[#00A3E8] transition-colors whitespace-nowrap"
          >
            <span>{isAr ? 'تحدث مع المهندس' : 'Talk to an engineer'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default IndustrialSection;