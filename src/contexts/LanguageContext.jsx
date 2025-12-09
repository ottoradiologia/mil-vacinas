import React, { createContext, useContext, useState, useEffect } from 'react';
import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Tentar recuperar do localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }
    // Padrão: português
    return 'pt';
  });

  const translations = {
    pt: ptTranslations,
    en: enTranslations
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // Atualizar atributo lang no HTML
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Atualizar atributo lang quando o idioma mudar
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    translations: translations[language],
    changeLanguage,
    t: (key) => {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          console.warn(`Translation key "${key}" not found for language "${language}"`);
          return key; // Retornar a chave se não encontrar tradução
        }
      }
      return value;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

