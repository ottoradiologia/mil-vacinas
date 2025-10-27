import React from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MapPin,
      title: 'Escolha o serviço',
      description: 'Navegue pelo site e escolha as vacinas que você ou sua família precisam'
    },
    {
      icon: Calendar,
      title: 'Agende seu horário',
      description: 'Entre em contato para agendar no melhor dia e horário para você'
    },
    {
      icon: Building2,
      title: 'Venha até nossa clínica',
      description: 'Compareça no dia e hora agendados para realizar sua vacinação com conforto e segurança'
    }
  ];

  const handleScheduleClick = () => {
    window.open('https://wa.me/5511973139542', '_blank');
  };

  return (
    <Section backgroundColor="accent" className="text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Como funciona?
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-3">
          Processo simples e seguro para agendar sua vacinação presencial
        </p>
        <p className="text-lg opacity-95 max-w-xl mx-auto font-semibold">
          💳 Aceitamos Pix, Dinheiro, Cartão de Crédito e Débito
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
          <p className="text-xl font-bold text-text mb-3">
            <span className="text-accent">IMPORTANTE:</span> Agendamento para atendimento <span className="text-accent">PRESENCIAL</span> na clínica
          </p>
          <p className="text-lg font-semibold text-text">
            Não realizamos visitas domiciliares
          </p>
        </div>
        
        <Button
          size="lg"
          variant="secondary"
          onClick={handleScheduleClick}
          className="text-lg bg-white text-accent hover:bg-white/90"
        >
          AGENDAR SUA VACINAÇÃO
        </Button>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
