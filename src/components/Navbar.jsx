import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, changeLanguage } = useTranslation();

  // Detectar scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', key: 'nav.home' },
    { id: 'age-cards', key: 'nav.ageCards' },
    { id: 'how-it-works', key: 'nav.howItWorks' },
    { id: 'vaccines-section', key: 'nav.vaccines' },
    { id: 'plan-section', key: 'nav.plan' },
    { id: 'space-section', key: 'nav.space' },
    { id: 'contact', key: 'nav.contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div onClick={() => scrollToSection('home')} className="cursor-pointer">
            <Logo 
              size="small" 
              showText={false}
              imageSrc="/assets/images/Simbolo.png"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-text normal-case rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5"
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-2 border-l border-gray-200 pl-4">
              <button
                onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-textSecondary hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                aria-label="Change language"
              >
                <Globe size={16} />
                <span>{language === 'pt' ? 'PT' : 'EN'}</span>
              </button>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
              className="ml-2 btn-primary text-sm px-5 py-2"
            >
              {t('nav.schedule')}
            </button>
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-text hover:bg-primary/10"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-base font-medium text-text normal-case hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Language Selector Mobile */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe size={18} className="text-textSecondary" />
                    <span className="text-sm font-medium text-text">{t('nav.language') || 'Idioma'}</span>
                  </div>
                  <button
                    onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
                    className="px-4 py-1.5 text-sm font-semibold text-primary bg-white rounded-lg border border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    {language === 'pt' ? 'EN' : 'PT'}
                  </button>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-200 mt-4">
                <button
                  onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
                  className="w-full btn-primary text-center py-3"
                >
                  {t('nav.scheduleWhatsApp')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
