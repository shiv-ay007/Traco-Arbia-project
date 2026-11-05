import React from 'react';
import PageHero from '../common/PageHero';
import industrialBg from '../../assets/header_background_img/industrial.png';

export function IndustrialHero({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <PageHero
      bgImage={industrialBg}
      breadcrumbText={isAr ? 'الأتمتة الصناعية' : (t?.nav?.industrial || 'Industrial Automation')}
      titleStart={isAr ? 'حلول وهندسة' : 'Precision'}
      titleHighlight={isAr ? 'الأتمتة الصناعية' : 'Industrial Automation'}
      titleEnd={isAr ? 'المتقدمة' : 'Solutions'}
      lang={lang}
      t={t}
    />
  );
}

export default IndustrialHero;
