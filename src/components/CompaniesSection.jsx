import React from 'react';
import { Building } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const CompaniesSection = () => {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a vacinação para empresas.')}`;

  return (
    <section id="companies-section" className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="container-max flex flex-col items-start gap-5 rounded-2xl border-[1.5px] border-mv-line p-6 md:flex-row md:items-center md:gap-8 md:p-8">
        <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-mv-wash text-mv-teal">
          <Building size={28} />
        </span>
        <div className="flex-1">
          <span className="mb-2 inline-block rounded-full bg-mv-mist px-2.5 py-0.5 text-xs font-bold text-mv-teal">{t('companies.badge')}</span>
          <h2 className="font-disp text-[30px] md:text-[36px]">{t('companies.title')}</h2>
          <p className="mt-2 max-w-[44em] text-mv-muted">
            <b className="font-semibold text-mv-ink">{t('companies.subtitle')}.</b> {t('companies.description')}
          </p>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {t('companies.ctaButton')}
        </a>
      </div>
    </section>
  );
};

export default CompaniesSection;
