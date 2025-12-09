import React from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';
import { Shield, CalendarCheck } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const PlanSection = () => {
  const { t } = useTranslation();
  
  const planBenefits = [
    {
      icon: Shield,
      title: t('plan.benefits.benefit1.title'),
      description: t('plan.benefits.benefit1.description')
    },
    {
      icon: CalendarCheck,
      title: t('plan.benefits.benefit2.title'),
      description: t('plan.benefits.benefit2.description')
    }
  ];

  const handleConsultConditions = () => {
    const message = t('whatsapp.messages.plan');
    const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section backgroundColor="primary" className="text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          {t('plan.title')}
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          {t('plan.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {planBenefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <Card
              key={index}
              className="p-8 text-center bg-white/95 backdrop-blur-sm border border-white/30 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col items-center">
                {/* Ícone */}
                <div className="mb-6 p-4 bg-primary/20 rounded-full">
                  <IconComponent size={32} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 font-display text-text">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-textSecondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button
          size="lg"
          variant="secondary"
          onClick={handleConsultConditions}
          className="text-lg bg-secondary text-primary hover:bg-secondary/90"
        >
          {t('plan.ctaButton')}
        </Button>
        
        <p className="text-sm opacity-80 mt-4">
          {t('plan.ctaText')}
        </p>
      </div>
    </Section>
  );
};

export default PlanSection;
