import React from 'react';
import PageHero from '../common/PageHero';
import contactBg from '../../assets/header_background_img/contact.jpg';

export function ContactHero({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <PageHero
      bgImage={contactBg}
      breadcrumbText={isAr ? 'اتصل بنا' : (t?.nav?.contact || 'Contact Us')}
      titleStart={isAr ? 'تواصل مع' : 'Contact'}
      titleHighlight={isAr ? 'تريكو العربية' : 'Treco Arabia'}
      titleEnd={isAr ? '' : 'Specialists'}
      lang={lang}
      t={t}
    />
  );
}

export default ContactHero;
