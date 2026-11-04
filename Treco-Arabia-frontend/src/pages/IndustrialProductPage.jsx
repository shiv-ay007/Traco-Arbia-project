import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/industrialProductsData';
import ProductDetail from '../components/industrialProduct/ProductDetail';

function IndustrialProductPage({ t, lang, onOpenQuote }) {
  const { id } = useParams();
  const product = getProductById(id);

  const isAr = lang === 'ar';

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          {isAr ? 'المعدة المطلوبة غير موجودة' : 'Product Not Found'}
        </h2>
      </div>
    );
  }

  return (
    <div className={`pt-20 min-h-screen bg-[#F8FAFC] text-slate-900 ${isAr ? 'font-sans' : 'font-sans'}`}>
      <ProductDetail 
        product={product} 
        t={t} 
        lang={lang} 
        onOpenQuote={onOpenQuote} 
      />
    </div>
  );
}

export default IndustrialProductPage;
