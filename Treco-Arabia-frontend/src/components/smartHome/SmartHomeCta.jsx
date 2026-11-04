import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function SmartHomeCta({ t, lang }) {
  const isArabic = lang === 'ar';

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-[#EBF5FC] to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00A3E8]/12 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-sky-400/12 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#061C3D] via-[#0A2E5C] to-[#030E1F] text-white rounded-2xl sm:rounded-[2.5rem] py-8 px-5 sm:py-12 sm:px-14 border border-sky-400/35 shadow-[0_25px_65px_-12px_rgba(0,163,232,0.32)] relative overflow-hidden text-center group">
          
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-90" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black mb-3 text-white">
              {isArabic ? 'جاهز لتحويل منزلك إلى منزل ذكي؟' : 'Ready to Build Your Dream Smart Home?'}
            </h2>
            <p className="text-slate-200 text-[11px] sm:text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed font-normal">
              {isArabic 
                ? 'تواصل مع مهندسينا في جدة واحصل على مخطط تفصيلي ودراسة فنية لمشروعك.' 
                : 'Connect with our Jeddah engineering team for an on-site villa assessment and turnkey smart home plan.'}
            </p>
            <div className="flex items-center justify-center">
              <Link
                to="/contact"
                className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] hover:from-cyan-400 hover:to-[#00A3E8] text-white font-black text-xs sm:text-sm shadow-[0_0_24px_rgba(0,163,232,0.5)] transition-all cursor-pointer flex items-center gap-2 group/btn"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${isArabic ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SmartHomeCta;
