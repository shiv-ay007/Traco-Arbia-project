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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((item, idx) => {
            const catInfo =
              industrialNavigationCategories[idx] ||
              industrialNavigationCategories.find(
                (c) => c.slug === item.id || c.id === item.id
              );
            const targetPath = catInfo ? catInfo.path : `/industrial-automation/${item.id}`;
            const title = isAr
              ? catInfo?.titleAr || item.titleAr
              : (item.id === 'pumps' ? 'Pumps' : (item.id === 'valve' ? 'Valve' : (catInfo?.titleEn || item.titleEn)));

            return (
              <article
                key={item.id}
                id={catInfo?.slug || item.id}
                className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-[#00A3E8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image */}
                <Link
                  to={targetPath}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-4 block"
                >
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {idx === 0 && (
                    <span className="absolute top-2.5 right-2.5 bg-[#00A3E8] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                      NEW
                    </span>
                  )}
                </Link>

                {/* Title & Explore Action */}
                <div className="flex flex-col flex-1 justify-between gap-3.5 text-center">
                  <Link to={targetPath} className="block">
                    <h3
                      className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00A3E8] transition-colors leading-snug line-clamp-1"
                      style={{ textTransform: 'none' }}
                    >
                      {title}
                    </h3>
                  </Link>

                  <Link
                    to={targetPath}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#00A3E8] hover:bg-[#0086C4] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm text-center transition-all shadow-sm hover:shadow-md cursor-pointer block"
                  >
                    {isAr ? 'استكشف المزيد' : 'Explore More'}
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