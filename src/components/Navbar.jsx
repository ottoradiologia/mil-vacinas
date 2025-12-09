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
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-semibold text-text normal-case transition-colors duration-300 hover:text-primary hover:underline underline-offset-4"
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-4 border-l border-gray-300 pl-4">
              <Globe size={18} className="text-textSecondary" />
              <button
                onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
                className="font-semibold text-text hover:text-primary transition-colors duration-300 px-2 py-1 rounded"
                aria-label="Change language"
              >
                {language === 'pt' ? 'PT' : 'EN'}
              </button>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
              className="btn-primary text-sm px-4 py-2"
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
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-text font-semibold normal-case hover:text-primary hover:bg-primary/5 transition-all py-3 px-2 rounded-lg"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Language Selector Mobile */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between px-2 py-2">
                  <div className="flex items-center gap-2">
                    <Globe size={18} className="text-textSecondary" />
                    <span className="text-text font-medium">{t('nav.language') || 'Idioma'}</span>
                  </div>
                  <button
                    onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
                    className="font-semibold text-primary hover:underline"
                  >
                    {language === 'pt' ? 'EN' : 'PT'}
                  </button>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
                  className="w-full btn-primary text-center"
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
