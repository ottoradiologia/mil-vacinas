import React, { useState } from 'react';
import Section from './Section';
import VaccineAccordion from './VaccineAccordion';
import { vaccinesData } from '../data/vaccinesData';
import { useTranslation } from '../hooks/useTranslation';

const VaccinesSection = () => {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleSchedule = (categoryTitle) => {
    const message = t('whatsapp.messages.schedule').replace('{category}', categoryTitle);
    const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Traduzir dados das vacinas
  const translatedVaccinesData = Object.keys(vaccinesData).reduce((acc, categoryId) => {
    acc[categoryId] = {
      ...vaccinesData[categoryId],
      title: t(`vaccines.categories.${categoryId}.title`),
      subtitle: t(`vaccines.categories.${categoryId}.subtitle`),
      vaccines: vaccinesData[categoryId].vaccines // Manter nomes técnicos das vacinas
    };
    return acc;
  }, {});

  return (
    <Section backgroundColor="secondary" id="vaccines-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-display">
          {t('vaccines.title')}
        </h2>
        <p className="text-xl text-textSecondary max-w-2xl mx-auto">
          {t('vaccines.subtitle')}
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(translatedVaccinesData).map(([categoryId, category]) => (
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
          {t('vaccines.notFound')}
        </p>
        <button
          onClick={() => handleSchedule(t('whatsapp.messages.allCategories'))}
          className="btn-primary text-lg px-8 py-3"
        >
          {t('vaccines.consultAll')}
        </button>
      </div>
    </Section>
  );
};

export default VaccinesSection;
