import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { id: 'home', label: 'Início' },
    { id: 'age-cards', label: 'Faixas Etárias' },
    { id: 'how-it-works', label: 'Como Funciona' },
    { id: 'vaccines-section', label: 'Vacinas' },
    { id: 'plan-section', label: 'Plano Vacina' },
    { id: 'space-section', label: 'Nosso Espaço' },
    { id: 'contact', label: 'Contato' }
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
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-semibold text-text transition-colors duration-300 hover:text-primary hover:underline underline-offset-4"
              >
                {item.label}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
              className="btn-primary text-sm px-4 py-2"
            >
              Agendar
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
                  className="block w-full text-left text-text font-semibold hover:text-primary hover:bg-primary/5 transition-all py-3 px-2 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
                  className="w-full btn-primary text-center"
                >
                  Agendar pelo WhatsApp
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
