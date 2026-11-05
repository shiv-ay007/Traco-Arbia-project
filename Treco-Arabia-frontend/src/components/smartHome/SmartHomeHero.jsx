import React from 'react';
import PageHero from '../common/PageHero';
import smartHomeBg from '../../assets/header_background_img/smart-home.png';

export function SmartHomeHero({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <PageHero
      bgImage={smartHomeBg}
      breadcrumbText={isAr ? 'المنازل الذكية' : (t?.nav?.smartHome || 'Home Automation')}
      titleStart={isAr ? 'حلول وأنظمة' : 'Next-Generation'}
      titleHighlight={isAr ? 'المنازل الذكية' : 'Smart Living'}
      titleEnd={isAr ? 'الفاخرة' : 'Automation'}
      lang={lang}
      t={t}
    />
  );
}

export default SmartHomeHero;
