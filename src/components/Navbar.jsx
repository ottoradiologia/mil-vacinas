import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const FlagBR = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" className={className}>
    <rect width="22" height="16" fill="#009c3b"/>
    <path d="M11 2.5L19.5 8L11 13.5L2.5 8L11 2.5Z" fill="#ffdf00"/>
    <circle cx="11" cy="8" r="3.5" fill="#002776"/>
    <path d="M8.5 8.5C8.5 8.5 9.5 9.5 11 9.5C12.5 9.5 13.5 8.5 13.5 8.5" stroke="white" strokeWidth="0.5" fill="none"/>
  </svg>
);

const FlagUS = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" className={className}>
    <rect width="22" height="16" fill="#bf0a30"/>
    <path d="M0 2.6H22M0 5.3H22M0 8H22M0 10.6H22M0 13.3H22" stroke="white" strokeWidth="1.3"/>
    <rect width="10" height="9" fill="#002868"/>
    <circle cx="2.5" cy="2.5" r="0.8" fill="white"/>
    <circle cx="5" cy="2.5" r="0.8" fill="white"/>
    <circle cx="7.5" cy="2.5" r="0.8" fill="white"/>
    <circle cx="2.5" cy="5" r="0.8" fill="white"/>
    <circle cx="5" cy="5" r="0.8" fill="white"/>
    <circle cx="7.5" cy="5" r="0.8" fill="white"/>
    <circle cx="2.5" cy="7.5" r="0.8" fill="white"/>
    <circle cx="5" cy="7.5" r="0.8" fill="white"/>
    <circle cx="7.5" cy="7.5" r="0.8" fill="white"/>
  </svg>
);

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
                onClick={() => changeLanguage('pt')}
                className={`p-1.5 rounded-lg transition-all duration-200 ${language === 'pt' ? 'bg-primary/10 ring-2 ring-primary/20 scale-110' : 'opacity-60 hover:opacity-100 hover:bg-gray-100'}`}
                aria-label="Mudar para Português"
                title="Português"
              >
                <FlagBR className="w-6 h-auto shadow-sm rounded-sm" />
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`p-1.5 rounded-lg transition-all duration-200 ${language === 'en' ? 'bg-primary/10 ring-2 ring-primary/20 scale-110' : 'opacity-60 hover:opacity-100 hover:bg-gray-100'}`}
                aria-label="Switch to English"
                title="English"
              >
                <FlagUS className="w-6 h-auto shadow-sm rounded-sm" />
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

          {/* Mobile Actions & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Selector Mobile Header */}
            <div className="flex items-center gap-1.5 mr-1">
              <button
                onClick={() => changeLanguage('pt')}
                className={`p-1 rounded-md transition-all ${language === 'pt' ? 'bg-primary/10 ring-1 ring-primary/20' : 'opacity-60'}`}
                aria-label="Português"
              >
                <FlagBR className="w-5 h-auto rounded-sm" />
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`p-1 rounded-md transition-all ${language === 'en' ? 'bg-primary/10 ring-1 ring-primary/20' : 'opacity-60'}`}
                aria-label="English"
              >
                <FlagUS className="w-5 h-auto rounded-sm" />
              </button>
            </div>

            {/* CTA Button Mobile Header */}
            <button
              onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
              className="btn-primary text-xs px-3 py-2 whitespace-nowrap"
            >
              {t('nav.schedule')}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-lg transition-colors text-text hover:bg-primary/10 ml-1"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              
              {/* Language Selector Mobile - Removido pois já está no header */}
              
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
