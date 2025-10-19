import React, { useState } from 'react';
import Section from './Section';
import VaccineAccordion from './VaccineAccordion';
import { vaccinesData } from '../data/vaccinesData';

const VaccinesSection = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleSchedule = (categoryTitle) => {
    const message = `Olá! Gostaria de agendar uma vacinação para ${categoryTitle}. Podem me ajudar?`;
    const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section backgroundColor="secondary" id="vaccines-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-display">
          Vacinas Disponíveis
        </h2>
        <p className="text-xl text-textSecondary max-w-2xl mx-auto">
          Clique em cada categoria para ver as vacinas específicas e agendar sua vacinação
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(vaccinesData).map(([categoryId, category]) => (
          <div key={categoryId} id={`vaccine-category-${categoryId}`}>
            <VaccineAccordion
              category={category}
              isOpen={openCategory === categoryId}
              onToggle={() => handleToggleCategory(categoryId)}
              onSchedule={() => handleSchedule(category.title)}
            />
          </div>
        ))}
      </div>

      {/* CTA Geral */}
      <div className="text-center mt-12">
        <p className="text-lg text-textSecondary mb-6">
          Não encontrou a vacina que procura? Entre em contato conosco!
        </p>
        <button
          onClick={() => handleSchedule('todas as categorias')}
          className="btn-primary text-lg px-8 py-3"
        >
          Consultar Todas as Vacinas
        </button>
      </div>
    </Section>
  );
};

export default VaccinesSection;
