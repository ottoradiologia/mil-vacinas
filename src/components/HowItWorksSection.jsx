import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}`;

// "Na clínica": passos + ficha da visita (endereço, metrô, horário, pagamento) e botão de agendar.
// É o destino do cartão "Na clínica" do topo. A vacinação domiciliar tem seção própria.
const HowItWorksSection = () => {
  const { t } = useTranslation();
  const steps = t('clinicInfo.items');
  const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(t('hero.whatsappClinic'))}`;

  const facts = [
    { label: t('clinicInfo.addressLabel'), value: <>Rua Afonso de Freitas, 59, sala 94<br />{t('footer.ourLocation.buildingName')} · Paraíso</> },
    { label: t('clinicInfo.metroLabel'), value: t('footerDesign.metroLine') },
    { label: t('clinicInfo.hoursLabel'), value: t('clinicInfo.hoursValue') },
    { label: t('clinicInfo.paymentLabel'), value: t('clinicInfo.paymentValue') }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max grid items-start gap-10 md:gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="kicker">{t('clinicInfo.kicker')}</span>
          <h2 className="font-disp mb-7 mt-3 text-[34px] md:text-[48px]">{t('clinicInfo.title')}</h2>

          <ol className="grid gap-4">
            {Array.isArray(steps) && steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[40px_1fr] items-start gap-3.5">
                <span
                  className="grid h-10 w-10 -rotate-45 place-items-center bg-mv-mist font-display font-bold text-mv-petrol"
                  style={{ borderRadius: '50% 0 50% 50%' }}
                  aria-hidden="true"
                >
                  <span className="rotate-45">{index + 1}</span>
                </span>
                <div>
                  <b className="block text-mv-petrol">{step.title}</b>
                  <span className="text-[15px] text-mv-muted">{step.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl bg-mv-mist p-6 md:p-8">
          <dl className="grid gap-4">
            {facts.map(({ label, value }) => (
              <div key={label} className="grid gap-0.5 border-b border-mv-line pb-4 last:border-0 last:pb-0">
                <dt className="text-xs font-bold uppercase tracking-[0.1em] text-mv-teal">{label}</dt>
                <dd className="m-0 text-[15.5px] text-mv-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={18} aria-hidden="true" />
              {t('clinicInfo.cta')}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 font-bold text-mv-teal hover:underline">
              <MapPin size={16} aria-hidden="true" /> {t('footerDesign.map')}
            </a>
          </div>
          <p className="mt-2 text-[13.5px] text-mv-muted">{t('cta.whatsappHint')}</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
