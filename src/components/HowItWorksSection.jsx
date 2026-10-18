import React from 'react';
import { Calendar, Building2, CreditCard } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// "Na clínica": agendamento, visita e pagamento.
// A vacinação domiciliar (step3) tem seção própria: HomeVaccinationSection.
const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Calendar, key: 'step1' },
    { icon: Building2, key: 'step2' },
    { icon: CreditCard, key: 'step4' }
  ].map(({ icon, key }) => ({
    icon,
    title: t(`howItWorks.steps.${key}.title`),
    description: t(`howItWorks.steps.${key}.description`)
  }));

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <span className="kicker">{t('clinicInfo.kicker')}</span>
        <h2 className="font-disp mb-8 mt-2.5 text-[34px] md:text-[44px]">{t('clinicInfo.title')}</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-mv-mist p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white text-mv-teal">
                <Icon size={22} />
              </span>
              <h3 className="font-display text-xl font-bold text-mv-petrol" style={{ fontVariationSettings: '"wdth" 90' }}>
                {title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-mv-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
