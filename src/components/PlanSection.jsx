import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Faixa curta logo abaixo das vacinas.
const PlanSection = () => {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(t('whatsapp.messages.plan'))}`;

  return (
    <section id="plan-section" className="bg-white px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="container-max flex flex-col items-start justify-between gap-3 rounded-2xl bg-mv-mist px-6 py-5 md:flex-row md:items-center md:gap-6">
        <div>
          <h2 className="font-display text-[19px] font-bold text-mv-petrol" style={{ fontVariationSettings: '"wdth" 90' }}>
            {t('planBand.title')}
          </h2>
          <p className="mt-0.5 text-sm text-mv-muted">{t('planBand.text')}</p>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap font-bold text-mv-teal hover:underline">
          {t('planBand.cta')} →
        </a>
      </div>
    </section>
  );
};

export default PlanSection;
