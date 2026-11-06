import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Wrench, ShieldCheck, Cpu, CheckCircle2, 
  ArrowLeft, ArrowRight, PhoneCall, 
  Send, FileText, Factory, Gauge, ChevronRight,
  Sparkles, Check
} from 'lucide-react';
import PageHero from '../common/PageHero';
import IndustrialCtaBanner from '../home/IndustrialCtaBanner';
import { getAllProducts } from '../../data/industrialProductsData';

export function ProductDetail({ product, t, lang, onOpenQuote }) {
  const navigate = useNavigate();
  const allProducts = getAllProducts();
  const isAr = lang === 'ar';

  const formatTitle = (text = '') => {
    const parts = text.trim().split(' ');
    if (parts.length <= 1) return { start: '', highlight: text };
    const last = parts.pop();
    return { start: parts.join(' '), highlight: last };
  };

  const titleFormatted = formatTitle(isAr ? product.titleAr : product.titleEn);

  const whatsappUrl = `https://wa.me/966567117621?text=${encodeURIComponent(
    `Hello Treco Arabia, I would like technical consultation and quotation for: ${product.titleEn}`
  )}`;

  return (
    <>
      {/* 1. Page Hero Banner with System's Authentic Image (Matching all other pages) */}
      <PageHero
        bgImage={product.image}
        parentText={isAr ? 'الأتمتة الصناعية' : 'Industrial Automation'}
        parentLink="/industrial"
        breadcrumbText={isAr ? product.titleAr : product.titleEn}
        titleStart={titleFormatted.start}
        titleHighlight={titleFormatted.highlight}
        lang={lang}
        t={t}
      />

      {/* Main Product Hero Showcase (Reverted to Original Design) */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-gradient-to-b from-white via-[#F0F7FF]/50 to-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#00A3E8]/8 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[300px] bg-sky-400/8 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span className="px-3.5 py-1 rounded-full bg-[#00A3E8]/15 border border-[#00A3E8]/30 text-[#00A3E8] font-black text-xs uppercase tracking-wider">
                {isAr ? product.badgeAr : product.badgeEn}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E8]" />
                <span>{isAr ? 'معتمد للمصانع السعودية SASO' : 'SASO & KSA Industrial Standard'}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs border border-slate-200">
                {isAr ? product.categoryAr : product.categoryEn}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              {isAr ? product.titleAr : product.titleEn}
            </h1>
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
              {isAr ? product.taglineAr : product.taglineEn}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-5 min-h-0">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_15px_35px_rgba(0,163,232,0.12)] group flex-1 flex flex-col min-h-[300px]">
                <div className="relative w-full h-full min-h-[300px] overflow-hidden bg-slate-100 flex-1">
                  <img
                    src={product.image}
                    alt={isAr ? product.titleAr : product.titleEn}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        {isAr ? 'هندسة وتوريد' : 'ENGINEERING & SUPPLY'}
                      </p>
                      <h4 className="text-lg font-black drop-shadow-md">
                        {isAr ? product.titleAr : product.titleEn}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#00A3E8] text-slate-950 flex items-center justify-center font-black shadow-lg">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                {product.quickStats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      {isAr ? stat.labelAr : stat.labelEn}
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      {isAr ? stat.valueAr : stat.valueEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between h-full bg-white p-6 sm:p-9 rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.06)] min-h-0">
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2.5">
                  <Cpu className="w-6 h-6 text-[#00A3E8]" />
                  <span>{isAr ? 'نظرة هندسية شاملة للمعدة' : 'Engineering Specifications & Architecture'}</span>
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {isAr ? product.overviewAr : product.overviewEn}
                </p>

                <h4 className="text-sm font-black uppercase tracking-wider text-slate-600 mb-3.5">
                  {isAr ? 'أهم المزايا التشغيلية والهندسية' : 'Core Operational Advantages'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {(isAr ? product.keyBenefitsAr : product.keyBenefitsEn).map((benefit, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-2xl bg-[#F0F7FF]/70 border border-[#00A3E8]/20 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#00A3E8]/20 text-[#00A3E8] flex-shrink-0 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 mb-1">{benefit.title}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-6 border-t border-slate-100 flex-shrink-0">
                <Link
                  to="/contact"
                  className="flex-1 sm:flex-initial px-7 py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'طلب عرض سعر / اتصل بنا' : 'Request Quote / Contact Us'}</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{isAr ? 'محادثة المهندس الصناعي' : 'WhatsApp Engineer'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Technical Specifications Table */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A3E8] mb-2">
                <Gauge className="w-4 h-4" />
                <span>{isAr ? 'بيانات هندسية دقيقة' : 'Technical Datasheet'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {isAr ? 'جدول المواصفات الفنية المعتمدة' : 'Official Engineering Specification Table'}
              </h2>
            </div>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:text-[#00A3E8] hover:border-[#00A3E8] font-bold text-xs transition-colors cursor-pointer self-start sm:self-auto"
            >
              <FileText className="w-4 h-4" />
              <span>{isAr ? 'طباعة / حفظ المواصفات' : 'Save / Print Specs'}</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className={`py-4 px-6 font-black uppercase tracking-wider w-1/3 ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'المعيار / الخاصية الهندسية' : 'Engineering Parameter'}
                  </th>
                  <th className={`py-4 px-6 font-black uppercase tracking-wider ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'القيمة والمواصفة الفنية' : 'Factory Specification & Rating'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.specs.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-[#F0F7FF]/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}
                  >
                    <td className={`py-3.5 px-6 font-bold text-slate-900 ${isAr ? 'text-right' : 'text-left'}`}>
                      {isAr ? item.parameterAr : item.parameterEn}
                    </td>
                    <td className={`py-3.5 px-6 font-medium text-slate-700 font-mono text-xs sm:text-sm ${isAr ? 'text-right' : 'text-left'}`}>
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industrial Applications in Saudi Arabia */}
      <section className="py-10 sm:py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-3">
              <Factory className="w-3.5 h-3.5" />
              <span>{isAr ? 'القطاعات الصناعية المستهدفة' : 'Target Industries in KSA'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isAr ? 'تطبيقات المنظومة في المصانع السعودية' : 'Strategic Industrial Deployments across KSA'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isAr ? product.applicationsAr : product.applicationsEn).map((app, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-[#00A3E8] flex-shrink-0 flex items-center justify-center font-black text-xs">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {app}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Equipment Grid */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A3E8] mb-1">
                <Wrench className="w-3.5 h-3.5" />
                <span>{isAr ? 'منظومات أخرى' : 'More Equipment'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {isAr ? 'تصفح باقي المعدات والحلول الصناعية' : 'Explore Other Industrial Systems'}
              </h2>
            </div>

            <Link
              to="/industrial"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00A3E8] hover:text-cyan-600 transition-colors"
            >
              <span>{isAr ? 'عرض الكل في صفحة الأتمتة' : 'View Full Industrial Page'}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#00A3E8] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={isAr ? item.titleAr : item.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[#00A3E8] text-[10px] font-black uppercase tracking-wider border border-slate-200">
                        {isAr ? item.badgeAr : item.badgeEn}
                      </span>
                    </div>

                    <div className="p-4 text-center">
                      <h4 className="font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors text-base mb-1">
                        {isAr ? item.titleAr : item.titleEn}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isAr ? item.descAr : item.descEn}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => navigate(`/industrial/${item.id}`)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#00A3E8] hover:text-slate-950 text-slate-800 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>{isAr ? 'عرض المواصفات' : 'View Specs'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    
      {/* Global High-Impact Industrial Call-To-Action Banner */}
      <IndustrialCtaBanner t={t} lang={lang} onOpenQuote={onOpenQuote} />
    </>
  );
}

export default ProductDetail;
