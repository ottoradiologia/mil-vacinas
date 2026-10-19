import React from 'react';
import { CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// Cartão de destaque do Plano Vacinal, logo abaixo das vacinas.
const PlanSection = () => {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(t('whatsapp.messages.plan'))}`;

  const benefits = [
    { icon: ShieldCheck, ...t('plan.benefits.benefit1') },
    { icon: CalendarCheck, ...t('plan.benefits.benefit2') },
  ];

  return (
    <section id="plan-section" className="bg-white px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="container-max relative overflow-hidden rounded-[28px] bg-gradient-to-br from-mv-wash via-white to-mv-mist p-7 shadow-[0_24px_60px_-40px_rgba(31,77,74,.5)] ring-1 ring-mv-line md:p-12">
        <span aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mv-heart/30" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <span className="inline-block rounded-xl bg-mv-heart px-3 py-1 text-[11px] sm:rounded-full font-bold uppercase tracking-[0.12em] text-mv-heartInk">
              {t('plan.subtitle')}
            </span>
            <h2 className="font-disp mt-4 text-[34px] text-mv-petrol md:text-[46px]">{t('plan.title')}</h2>
            <p className="mt-3 max-w-[30em] text-mv-muted">{t('plan.ctaText')}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2 px-7 py-3"
            >
              {t('planBand.cta')} <ArrowRight size={18} />
            </a>
          </div>
          <ul className="grid gap-4">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-mv-line">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-mv-mist text-mv-teal">
                  <b.icon size={22} />
                </span>
                <span>
                  <span className="block font-bold text-mv-petrol">{b.title}</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-mv-muted">{b.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
