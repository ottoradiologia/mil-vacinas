import React from 'react';
import Logo from './Logo';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAgeCards = () => {
    document.getElementById('age-cards').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/fundo-hero.png" 
          alt="Família" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay mais forte à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30"></div>
      </div>

      <div className="container-max relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Coluna da esquerda: Conteúdo */}
          <div className="space-y-6 px-4 lg:px-0">
            {/* Logo maior */}
            <div className="mb-6">
              <img 
                src="/assets/images/Mil-logomarca.png" 
                alt="Mil Vacinas" 
                className="h-56 md:h-64 lg:h-72 xl:h-80 w-auto drop-shadow-2xl"
              />
            </div>
            {/* Badge de destaque */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Clínica Especializada em Vacinação
            </div>
            
            {/* Título principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight">
              <span className="block">Proteção</span>
              <span className="block">Completa para</span>
              <span className="block text-primary relative inline-block">
                Toda a Família
                {/* Linha decorativa */}
                <div className="absolute -bottom-1 left-0 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base md:text-lg text-textSecondary leading-relaxed max-w-lg">
              Agende sua vacinação presencial em nossa clínica com segurança, 
              conforto e profissionais especializados. Sua saúde é nossa prioridade.
            </p>
            
            {/* Destaque da médica - mais compacto */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/20 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-text text-sm">Dra. Fernanda Favali Kruger</p>
                  <p className="text-xs text-textSecondary">Pediatra - CRM-SP 140.995</p>
                </div>
              </div>
            </div>
            
            {/* CTAs - mais compactos */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <Button 
                size="md" 
                onClick={scrollToAgeCards}
                className="text-sm px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Vacinas Disponíveis
              </Button>
              <Button 
                variant="outline" 
                size="md"
                onClick={() => window.open('https://wa.me/5511994077447', '_blank')}
                className="text-sm px-5 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>

          {/* Coluna da direita: Espaço vazio para a família aparecer */}
          <div className="hidden lg:block">
            {/* Espaço reservado para a imagem de fundo */}
          </div>
        </div>
      </div>
        
      {/* Indicador de scroll melhorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAgeCards}
          className="group flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300"
          aria-label="Rolar para baixo"
        >
          <span className="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">Descobrir mais</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
