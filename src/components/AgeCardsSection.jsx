import React from 'react';
import Section from './Section';
import Card from './Card';
import { Baby, User, Users, Heart, Stethoscope } from 'lucide-react';

const AgeCardsSection = () => {
  const ageCategories = [
    {
      id: 'crianca',
      title: 'Criança',
      subtitle: '0-12 anos',
      icon: Baby,
      image: '/assets/images/crianca.png',
      description: 'Vacinas essenciais para o desenvolvimento saudável das crianças'
    },
    {
      id: 'adolescente',
      title: 'Adolescente',
      subtitle: '12-19 anos',
      icon: User,
      image: '/assets/images/adolescente.png',
      description: 'Proteção durante a fase de crescimento e desenvolvimento'
    },
    {
      id: 'adulto',
      title: 'Adulto',
      subtitle: '20-50 anos',
      icon: Users,
      image: '/assets/images/adulto.png',
      description: 'Manutenção da imunidade e prevenção de doenças'
    },
    {
      id: 'gestante',
      title: 'Gestante',
      subtitle: 'Todas as idades',
      icon: Heart,
      image: '/assets/images/gravida.png',
      description: 'Cuidados especiais para mãe e bebê durante a gravidez'
    },
    {
      id: 'idoso',
      title: 'Idoso',
      subtitle: '+60 anos',
      icon: Stethoscope,
      image: '/assets/images/idoso.png',
      description: 'Fortalecimento da imunidade na terceira idade'
    }
  ];

  const scrollToVaccines = (categoryId) => {
    const vaccinesSection = document.getElementById('vaccines-section');
    if (vaccinesSection) {
      vaccinesSection.scrollIntoView({ behavior: 'smooth' });
      // Focar na categoria específica após um pequeno delay
      setTimeout(() => {
        const categoryElement = document.getElementById(`vaccine-category-${categoryId}`);
        if (categoryElement) {
          categoryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Aqui você pode adicionar lógica para expandir o acordeão da categoria
        }
      }, 500);
    }
  };

  return (
    <Section backgroundColor="primary" className="text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Para quem você busca proteção?
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Selecione a faixa etária para ver as vacinas específicas disponíveis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {ageCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card
              key={category.id}
              onClick={() => scrollToVaccines(category.id)}
              className="p-6 text-center cursor-pointer bg-white/95 backdrop-blur-sm border border-white/30 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-center">
                {/* Imagem ou Ícone */}
                {category.image ? (
                  <div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-4 p-4 bg-primary/20 rounded-full">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2 font-display text-text">
                  {category.title}
                </h3>
                
                <p className="text-sm text-textSecondary mb-3">
                  {category.subtitle}
                </p>
                
                <p className="text-xs text-textSecondary leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default AgeCardsSection;
