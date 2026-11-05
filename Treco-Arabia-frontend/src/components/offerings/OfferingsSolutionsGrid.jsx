import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function OfferingsSolutionsGrid({ t, lang }) {
  const solutions = [
    {
      title: lang === 'ar' ? 'أنظمة الإضاءة والمناخ الذكية' : 'Smart Lighting & Climate',
      desc: lang === 'ar' 
        ? 'تحكم دقيق في درجات التبريد وإضاءات LED خافتة وسيناريوهات للمجالس وغرف النوم.' 
        : 'Precision cooling automation for Saudi climate combined with dimmable RGB ambient lighting scenes.',
      badge: lang === 'ar' ? 'سكني وفندقي' : 'Residential & Hospitality',
      items: [
        lang === 'ar' ? 'تحكم بالتكييف عن بُعد' : 'Remote AC Temperature Regulation',
        lang === 'ar' ? 'إضاءة ذكية مع حساسات الحركة' : 'Motion-Activated Architectural Lights',
        lang === 'ar' ? 'توفير فواتير الكهرباء' : 'Automated Energy Consumption Reduction'
      ]
    },
    {
      title: lang === 'ar' ? 'الأقفال الرقمية والأمان' : 'Digital Locks & Access Security',
      desc: lang === 'ar' 
        ? 'أحدث أقفال الأبواب البيومترية الذكية وكاميرات المراقبة بدقة عالية للحفاظ على سلامة أسرتك.' 
        : 'Biometric fingerprint locks (Yale, ABEZ), smart video doorbells, and 24/7 crystal-clear CCTV surveillance.',
      badge: lang === 'ar' ? 'أمان عالي' : 'High Security',
      items: [
        lang === 'ar' ? 'فتح عبر البصمة والكود والتطبيق' : 'Fingerprint, PIN Code, RFID & App Unlock',
        lang === 'ar' ? 'إنتركم مرئي عالي الوضوح' : 'HD Two-Way Audio Video Doorbells',
        lang === 'ar' ? 'إشعارات فورية عند الدخول' : 'Instant Real-Time Intrusion Alerts'
      ]
    },
    {
      title: lang === 'ar' ? 'الستائر والبوابات الأوتوماتيكية' : 'Motorized Curtains & Gates',
      desc: lang === 'ar' 
        ? 'محركات صامتة للستائر الكهربائية وبوابات الجراج ومداخل الفلل تفتح وتغلق بنقرة واحدة.' 
        : 'Whisper-quiet motorized curtain tracks and robust automated gate barriers controlled via remote or voice.',
      badge: lang === 'ar' ? 'راحة ورفاهية' : 'Luxury & Convenience',
      items: [
        lang === 'ar' ? 'جدولة مع شروق وغروب الشمس' : 'Sunrise & Sunset Automated Schedules',
        lang === 'ar' ? 'بوابات الكراج والمداخل الرئيسية' : 'Automated Garage & Villa Sliding Gates',
        lang === 'ar' ? 'محركات فائقة الهدوء' : 'Ultra-Quiet Heavy-Duty Motor Units'
      ]
    },
    {
      title: lang === 'ar' ? 'الصوتيات والترفيه المنزلي' : 'Multi-Room Audio & Visuals',
      desc: lang === 'ar' 
        ? 'توزيع صوتي متكامل عبر سماعات سقفية مخفية في كافة أرجاء الفيلا أو الصالات.' 
        : 'Architectural in-ceiling speakers and multi-zone streaming for whole-home music and cinema surround sound.',
      badge: lang === 'ar' ? 'ترفيه' : 'Entertainment',
      items: [
        lang === 'ar' ? 'تزامن صوتي بين الغرف' : 'Multi-Room Synchronized Audio',
        lang === 'ar' ? 'دعم Spotify و Apple AirPlay' : 'AirPlay, Bluetooth & Wi-Fi Streaming',
        lang === 'ar' ? 'مسارح منزلية وسينما خاصة' : 'Home Cinema & Acoustic Integration'
      ]
    }
  ];

  return (
    <>
      {/* Categorized Detailed Solutions */}
      <section className="py-10 sm:py-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-sm backdrop-blur-sm">
              <span>{lang === 'ar' ? 'حلول تفصيلية' : 'SPECIALIZED PACKAGES'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-4">
              {lang === 'ar' ? 'مجالات خبرتنا التقنية' : 'End-to-End Smart Integration'}
            </h2>
            
            <p className="hidden sm:block text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'ar' 
                ? 'نقدم خدمات التوريد، البرمجة، والتركيب بأيدي فنيين ومهندسين متخصصين في جدة.' 
                : 'Turnkey procurement, cabling, programming, and warranty services handled by certified engineers in Jeddah.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {solutions.map((item, idx) => {
              const themes = [
                { 
                  badgeColor: 'text-[#00A3E8] bg-[#00A3E8]/10 border-[#00A3E8]/30', 
                  hoverColor: 'group-hover:text-[#00A3E8]', 
                  iconColor: 'text-[#00A3E8]', 
                  btn: 'bg-gradient-to-r from-[#00A3E8] to-cyan-500 hover:shadow-[0_8px_25px_rgba(0,163,232,0.4)]' 
                },
                { 
                  badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200', 
                  hoverColor: 'group-hover:text-emerald-600', 
                  iconColor: 'text-emerald-500', 
                  btn: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)]' 
                },
                { 
                  badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200', 
                  hoverColor: 'group-hover:text-indigo-600', 
                  iconColor: 'text-indigo-500', 
                  btn: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)]' 
                },
                { 
                  badgeColor: 'text-amber-600 bg-amber-50 border-amber-200', 
                  hoverColor: 'group-hover:text-amber-600', 
                  iconColor: 'text-amber-500', 
                  btn: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-[0_8px_25px_rgba(245,158,11,0.4)]' 
                }
              ];
              
              const theme = themes[idx % themes.length];

              return (
                <div 
                  key={idx}
                  className="bg-white/95 backdrop-blur-sm p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity ${theme.btn.split(' ')[0]}`} />

                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className={`text-[10px] sm:text-xs font-black px-3 py-1 rounded-full border shadow-sm ${theme.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className={`text-lg sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 transition-colors ${theme.hoverColor}`}>
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 font-normal">
                      {item.desc}
                    </p>

                    <ul className="space-y-2.5 sm:space-y-3 pt-3 border-t border-slate-100">
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-[11px] sm:text-sm font-bold text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${theme.iconColor}`} />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100">
                    <Link 
                      to="/contact"
                      className={`w-full py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-white font-black text-[11px] sm:text-sm transition-all duration-300 cursor-pointer text-center block ${theme.btn}`}
                    >
                      {lang === 'ar' ? 'طلب تفاصيل الباقة' : 'Inquire About This Package'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}

export default OfferingsSolutionsGrid;
