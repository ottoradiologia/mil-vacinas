import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const WHATSAPP_URL = 'https://wa.me/5511973139542';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'vaccines-section', key: 'nav.vaccines' },
    { id: 'home-vaccination', key: 'nav.homeVaccination' },
    { id: 'plan-section', key: 'nav.plan' },
    { id: 'companies-section', key: 'nav.companies' },
    { id: 'team-section', key: 'nav.team' },
    { id: 'contact', key: 'nav.contact' }
  ];

  const LanguageSwitch = ({ className = '' }) => (
    <div className={`flex items-center gap-1 text-xs font-bold ${className}`} role="group" aria-label={t('nav.language')}>
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        aria-pressed={language === 'pt'}
        className={`rounded px-1.5 py-1 ${language === 'pt' ? 'text-mv-petrol' : 'text-mv-muted hover:text-mv-petrol'}`}
      >
        PT
      </button>
      <span className="text-mv-line" aria-hidden="true">·</span>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        aria-pressed={language === 'en'}
        className={`rounded px-1.5 py-1 ${language === 'en' ? 'text-mv-petrol' : 'text-mv-muted hover:text-mv-petrol'}`}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-mv-line bg-white/95 backdrop-blur">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between gap-4 px-4 md:h-[72px]">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 font-display text-[22px] font-extrabold text-mv-teal"
              style={{ fontVariationSettings: '"wdth" 90' }}
            >
              <img src="/assets/images/simbolo.webp" alt="" width="34" height="34" className="h-[34px] w-[34px]" />
              <span>Mil Vacinas</span>
            </button>

            <div className="hidden items-center gap-6 lg:flex">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="whitespace-nowrap text-[14.5px] font-semibold text-mv-ink transition-colors hover:text-mv-teal"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <LanguageSwitch />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-[18px] py-2.5 text-sm">
                {t('nav.schedule')}
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitch />
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="grid h-10 w-10 place-items-center rounded-[10px] border border-mv-line text-mv-ink"
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="border-t border-mv-line bg-white px-4 py-4 lg:hidden">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-lg px-3 py-3 text-left text-base font-semibold text-mv-ink hover:bg-mv-mist"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Barra fixa de ações no celular */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-mv-line bg-white/95 px-3 pt-2.5 backdrop-blur lg:hidden"
        style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))' }}
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 px-3 text-sm">
          {t('nav.scheduleVaccine')}
        </a>
        <button type="button" onClick={() => scrollToSection('home-vaccination')} className="btn-secondary flex-1 px-3 text-sm">
          {t('nav.homeVaccination')}
        </button>
      </div>
    </>
  );
};

export default Navbar;
