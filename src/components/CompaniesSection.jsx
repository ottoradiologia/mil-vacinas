import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Section from './Section';
import { Building, CheckCircle } from 'lucide-react';

const CompaniesSection = () => {
  const { t } = useTranslation();

  const handleContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a vacinação para empresas.");
    window.open(`https://wa.me/5511973139542?text=${message}`, '_blank');
  };

  return (
    <Section id="companies-section" className="bg-gray-50">
      <div className="container-max">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-8 border-primary relative overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Ícone / Ilustração */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center">
                <Building size={48} className="text-primary md:w-16 md:h-16" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {t('companies.badge')}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-text font-display">
                {t('companies.title')}
              </h2>
              
              <h3 className="text-xl text-primary font-semibold">
                {t('companies.subtitle')}
              </h3>
              
              <p className="text-textSecondary text-lg leading-relaxed max-w-3xl">
                {t('companies.description')}
              </p>

              <div className="pt-4">
                <button 
                  onClick={handleContact}
                  className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  <CheckCircle size={20} />
                  {t('companies.ctaButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CompaniesSection;

