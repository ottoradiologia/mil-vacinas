import React from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';
import { MapPin, Calendar, Building2, CreditCard } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const HowItWorksSection = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: MapPin,
      title: t('howItWorks.steps.step1.title'),
      description: t('howItWorks.steps.step1.description')
    },
    {
      icon: Calendar,
      title: t('howItWorks.steps.step2.title'),
      description: t('howItWorks.steps.step2.description')
    },
    {
      icon: Building2,
      title: t('howItWorks.steps.step3.title'),
      description: t('howItWorks.steps.step3.description')
    },
    {
      icon: CreditCard,
      title: t('howItWorks.steps.step4.title'),
      description: t('howItWorks.steps.step4.description')
    }
  ];

  const handleScheduleClick = () => {
    window.open('https://wa.me/5511973139542', '_blank');
  };

  return (
    <Section backgroundColor="accent" className="text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          {t('howItWorks.title')}
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          {t('howItWorks.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <Card
              key={index}
              className="p-8 text-center bg-white/95 backdrop-blur-sm border border-white/30 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col items-center">
                {/* Número do passo */}
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-xl font-bold mb-4 text-accent">
                  {index + 1}
                </div>
                
                {/* Ícone */}
                <div className="mb-6 p-4 bg-accent/20 rounded-full">
                  <IconComponent size={32} className="text-accent" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 font-display text-text">
                  {step.title}
                </h3>
                
                <p className="text-sm text-textSecondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* CTA Principal */}
      <div className="text-center">
        <div className="mb-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border-2 border-white shadow-xl">
          <p className="text-xl font-bold text-text">
            <span className="text-accent">{t('howItWorks.important')}</span> {t('howItWorks.importantText')} <span className="text-accent">{t('howItWorks.importantHighlight')}</span> {t('howItWorks.importantText2')}
          </p>
        </div>
        
        <Button
          size="lg"
          variant="secondary"
          onClick={handleScheduleClick}
          className="text-lg bg-white text-accent hover:bg-white/90"
        >
          {t('howItWorks.ctaButton')}
        </Button>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
