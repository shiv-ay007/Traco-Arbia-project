import React from 'react';
import PageHero from '../common/PageHero';
import imgVillaExterior from '../../assets/gallery/gallery_villa_exterior.jpg';

export function GalleryHero({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <PageHero
      bgImage={imgVillaExterior}
      breadcrumbText={isAr ? 'معرض الصور' : (t?.nav?.gallery || 'Gallery')}
      titleStart={isAr ? 'معرض المشاريع' : 'Engineering &'}
      titleHighlight={isAr ? 'والأعمال الهندسية' : 'Smart Living'}
      titleEnd={isAr ? '' : 'Gallery'}
      lang={lang}
      t={t}
    />
  );
}

export default GalleryHero;
