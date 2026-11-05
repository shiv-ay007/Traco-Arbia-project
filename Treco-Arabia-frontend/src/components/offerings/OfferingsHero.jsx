import React from 'react';
import PageHero from '../common/PageHero';
import offeringsBg from '../../assets/header_background_img/offerings.png';

export function OfferingsHero({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <PageHero
      bgImage={offeringsBg}
      breadcrumbText={isAr ? 'خدماتنا' : 'What We Offer'}
      titleStart={isAr ? 'حلول وخدمات' : 'What We Offer:'}
      titleHighlight={isAr ? 'الأتمتة الشاملة' : 'Full-Spectrum'}
      titleEnd={isAr ? '' : 'Automation'}
      lang={lang}
      t={t}
    />
  );
}

export default OfferingsHero;
