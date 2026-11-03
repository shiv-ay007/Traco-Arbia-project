import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import OfferingsSection from '../components/OfferingsSection';
import offeringsBg from '../assets/header_background_img/offerings.png';

function OfferingsPage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-12 sm:py-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        {/* Background Image Layer with Increased Darkness */}
        <img 
          src={offeringsBg} 
          alt="Offerings & IoT Automation Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-100 filter brightness-75"
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumbs - Hidden on Mobile */}
          <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
            <Link to="/" className="hover:text-[#00A3E8] transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{lang === 'ar' ? 'خدماتنا' : 'What We Offer'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg">
            <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-white">{lang === 'ar' ? 'باقة خدمات وحلول تريكو' : 'Comprehensive IoT Catalog'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'ar' 
              ? 'حلول تقنية متكاملة لكل زاوية في مساحتك' 
              : 'What We Offer: Full-Spectrum Automation'}
          </h1>

          {/* Description - Hidden on Mobile to save space */}
          <p className="hidden sm:block text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {lang === 'ar'
              ? 'من التحكم في الإضاءة والتكييف إلى أحدث الأقفال الرقمية والستائر الكهربائية وكاميرات المراقبة، نقدم لك أفضل الأجهزة والحلول البرمجية.'
              : 'From lighting and HVAC climate control to biometric locks, motorized curtains, and smart gate systems — engineered with precision for Saudi Arabia.'}
          </p>

          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
            >
              {t.nav.contact}
            </Link>
          </div>

        </div>
      </section>

      {/* Offerings Hardware Showcase Component */}
      <OfferingsSection lang={lang} onOpenQuote={onOpenQuote} />

      {/* Categorized Detailed Solutions */}
      <section className="py-10 sm:py-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-sm backdrop-blur-sm">
              <span>{lang === 'ar' ? 'حلول تفصيلية' : 'SPECIALIZED PACKAGES'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-4">
              {lang === 'ar' ? 'مجالات خبرتنا التقنية' : 'End-to-End Smart Integration'}
            </h2>
            
            {/* Description - Hidden on Mobile to save space */}
            <p className="hidden sm:block text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'ar' 
                ? 'نقدم خدمات التوريد، البرمجة، والتركيب بأيدي فنيين ومهندسين متخصصين في جدة.' 
                : 'Turnkey procurement, cabling, programming, and warranty services handled by certified engineers in Jeddah.'}
            </p>
          </div>

          {/* Grid for Solutions Cards with Unique Themes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {solutions.map((item, idx) => {
              // Har card ke liye alag premium color theme
              const themes = [
                { 
                  badgeColor: 'text-[#00A3E8] bg-[#00A3E8]/10 border-[#00A3E8]/30', 
                  hoverColor: 'group-hover:text-[#00A3E8]', 
                  iconColor: 'text-[#00A3E8]', 
                  btn: 'bg-gradient-to-r from-[#00A3E8] to-cyan-500 hover:shadow-[0_8px_25px_rgba(0,163,232,0.4)]' 
                }, // 1. Smart Lighting (Cyan)
                { 
                  badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200', 
                  hoverColor: 'group-hover:text-emerald-600', 
                  iconColor: 'text-emerald-500', 
                  btn: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)]' 
                }, // 2. Security (Green/Teal)
                { 
                  badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200', 
                  hoverColor: 'group-hover:text-indigo-600', 
                  iconColor: 'text-indigo-500', 
                  btn: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)]' 
                }, // 3. Curtains (Indigo)
                { 
                  badgeColor: 'text-amber-600 bg-amber-50 border-amber-200', 
                  hoverColor: 'group-hover:text-amber-600', 
                  iconColor: 'text-amber-500', 
                  btn: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-[0_8px_25px_rgba(245,158,11,0.4)]' 
                } // 4. Audio (Amber/Orange)
              ];
              
              const theme = themes[idx % themes.length];

              return (
                <div 
                  key={idx}
                  className="bg-white/95 backdrop-blur-sm p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Top Colored Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity ${theme.btn.split(' ')[0].replace('bg-gradient-to-r', 'bg-gradient-to-r')}`} />

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

      {/* Bottom CTA Section */}
      <section className="py-8 sm:py-14 bg-gradient-to-b from-white via-[#EBF5FC] to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00A3E8]/12 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-sky-400/12 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-br from-[#061C3D] via-[#0A2E5C] to-[#030E1F] text-white rounded-2xl sm:rounded-[2.5rem] py-8 px-5 sm:px-10 md:py-12 md:px-14 border border-sky-400/35 shadow-[0_25px_65px_-12px_rgba(0,163,232,0.32),0_12px_35px_rgba(3,14,31,0.5)] relative overflow-hidden text-center group">
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-[#00A3E8]/30 via-cyan-400/12 to-transparent blur-[85px] pointer-events-none rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/25 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00A3E8]/20 blur-[100px] pointer-events-none rounded-full" />

            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-4 tracking-tight leading-tight sm:whitespace-nowrap text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                {lang === 'ar' ? 'هل تحتاج إلى استشارة لحلول مشروعك؟' : 'Need a Custom Solution for Your Space?'}
              </h2>
              <p className="text-slate-200 text-[11px] sm:text-base max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed font-normal">
                {lang === 'ar' 
                  ? 'فريقنا الهندسي جاهز لمعاينة موقعك وتقديم عرض أسعار ومخطط فني متكامل.' 
                  : 'Our engineers will review your architectural floor plan and advise on the most cost-effective hardware setup.'}
              </p>
              <div className="flex items-center justify-center">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 sm:px-8 sm:py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E8] via-cyan-400 to-[#00A3E8] hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-[11px] sm:text-sm shadow-[0_0_28px_rgba(0,163,232,0.55)] hover:shadow-[0_0_38px_rgba(0,163,232,0.8)] hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 group/btn"
                >
                  <span>{t.nav.contact}</span>
                  <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default OfferingsPage;