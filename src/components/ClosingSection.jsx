import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const WHATSAPP_NUMBER = '5511973139542';

// Fechamento para as famílias: último convite a agendar, antes do rodapé.
const ClosingSection = () => {
  const { t } = useTranslation();
  const whatsappFor = (key) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t(key))}`;

  return (
    <section className="bg-mv-wash px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="container-max text-center">
        <h2 className="font-disp text-[38px] md:text-[56px]">{t('closing.title')}</h2>
        <p className="mx-auto mt-4 max-w-[30em] text-base text-mv-muted md:text-lg">{t('closing.text')}</p>

        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href={whatsappFor('hero.whatsappClinic')} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={18} aria-hidden="true" />
            {t('clinicInfo.cta')}
          </a>
          <a href={whatsappFor('hero.whatsappHome')} target="_blank" rel="noopener noreferrer" className="btn-heart">
            <MessageCircle size={18} aria-hidden="true" />
            {t('nav.homeVaccination')}
          </a>
        </div>
        <p className="mt-3 text-[13.5px] text-mv-muted">
          {t('cta.whatsappHint')} · {t('cta.hours')}
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
