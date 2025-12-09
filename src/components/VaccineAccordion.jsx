import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Baby, User, Users, Heart, Stethoscope } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const iconMap = {
  Baby,
  User,
  Users,
  Heart,
  Stethoscope
};

const VaccineAccordion = ({ category, isOpen, onToggle, onSchedule }) => {
  const { t } = useTranslation();
  const IconComponent = iconMap[category.icon];
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
      {/* Header do Acordeão */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left bg-primary text-white hover:bg-primary/90 transition-colors duration-300 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-full">
            <IconComponent size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display">
              {category.title}
            </h3>
            <p className="text-sm opacity-90">
              {category.subtitle}
            </p>
          </div>
        </div>
        
        <div className="text-white">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {/* Conteúdo do Acordeão */}
      {isOpen && (
        <div className="p-6 bg-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {category.vaccines.map((vaccine, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-text font-medium">{t(`vaccines.items.${vaccine}`)}</span>
              </div>
            ))}
          </div>
          
          {/* Botão de Agendamento */}
          <div className="text-center">
            <button
              onClick={onSchedule}
              className="btn-primary text-lg px-8 py-3"
            >
              {t('vaccines.scheduleButton')} {category.title}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaccineAccordion;
