import React from 'react';
import Section from './Section';
import Carousel from './Carousel';
import { Heart, Award, Users } from 'lucide-react';

const SpaceSection = () => {
  const images = [
    {
      src: '/assets/images/consultorio/fernanda.jpg',
      alt: 'Dra. Fernanda Favali Kruger',
      title: 'Dra. Fernanda Favali Kruger',
      description: 'Pediatra especializada - CRM-SP 140.995'
    },
    {
      src: '/assets/images/consultorio/fernanda-entrada.jpg',
      alt: 'Dra. Fernanda na entrada da clínica',
      title: 'Nossa Clínica',
      description: 'Ambiente acolhedor e profissional'
    },
    {
      src: '/assets/images/consultorio/fernandavacina.jpg',
      alt: 'Dra. Fernanda aplicando vacina',
      title: 'Atendimento Humanizado',
      description: 'Cuidado e atenção em cada aplicação'
    },
    {
      src: '/assets/images/consultorio/entrada.jpg',
      alt: 'Entrada da clínica',
      title: 'Entrada da Clínica',
      description: 'Fácil acesso e localização privilegiada'
    },
    {
      src: '/assets/images/consultorio/salaespera.jpg',
      alt: 'Sala de espera',
      title: 'Sala de Espera',
      description: 'Conforto enquanto você aguarda'
    },
    {
      src: '/assets/images/consultorio/salaespera2.jpg',
      alt: 'Sala de espera 2',
      title: 'Ambiente Aconchegante',
      description: 'Espaço pensado para seu bem-estar'
    },
    {
      src: '/assets/images/consultorio/salavacina.jpg',
      alt: 'Sala de vacinação',
      title: 'Sala de Vacinação',
      description: 'Equipamentos modernos e higienizados'
    },
    {
      src: '/assets/images/consultorio/salavacina2.jpg',
      alt: 'Sala de vacinação 2',
      title: 'Ambiente Seguro',
      description: 'Estrutura completa para sua segurança'
    },
    {
      src: '/assets/images/consultorio/salavacina3.jpg',
      alt: 'Sala de vacinação 3',
      title: 'Tecnologia e Cuidado',
      description: 'Infraestrutura de ponta para melhor atendimento'
    },
    {
      src: '/assets/images/consultorio/geladeira.jpg',
      alt: 'Geladeira para armazenamento de vacinas',
      title: 'Armazenamento Seguro',
      description: 'Refrigeração adequada para conservação das vacinas'
    },
    {
      src: '/assets/images/consultorio/video-vacina.mp4',
      alt: 'Processo de vacinação',
      title: 'Nosso Processo de Vacinação',
      description: 'Técnica precisa e cuidadosa em cada aplicação',
      type: 'video'
    }
  ];

  const highlights = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado para cada paciente'
    },
    {
      icon: Award,
      title: 'Equipe Qualificada',
      description: 'Profissionais especializados e experientes'
    },
    {
      icon: Users,
      title: 'Ambiente Familiar',
      description: 'Espaço acolhedor para toda a família'
    }
  ];

  return (
    <Section 
      id="conheca-nosso-espaco" 
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          Conheça Nossa Estrutura
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Conheça Nosso <span className="text-primary">Espaço</span>
        </h2>
        
        <p className="text-lg text-textSecondary max-w-2xl mx-auto">
          Um ambiente pensado para oferecer conforto, segurança e acolhimento 
          para você e sua família
        </p>
      </div>

      {/* Carrossel de fotos */}
      <div className="mb-16">
        <Carousel images={images} autoPlay={true} interval={5000} />
      </div>

      {/* Destaques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <IconComponent size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">
                {highlight.title}
              </h3>
              <p className="text-textSecondary">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-2xl">
          <p className="text-lg text-text mb-4">
            <span className="font-bold text-primary">Venha nos visitar!</span> Estamos prontos para 
            receber você e sua família com todo carinho e profissionalismo.
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511973139542', '_blank')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Agendar Visita
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SpaceSection;

