import React from 'react';
import Logo from './Logo';
import GoogleMaps from './GoogleMaps';
import { Phone, Mail, MapPin, Clock, Navigation, Train } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(11) 97313-9542',
      link: 'https://wa.me/5511973139542'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'milvacinas@gmail.com',
      link: 'mailto:milvacinas@gmail.com'
    },
    {
      icon: Clock,
      label: 'Horário de Funcionamento',
      value: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h',
      link: null
    }
  ];

  return (
    <footer className="bg-secondary border-t-4 border-primary">
      <div className="container-max">
        <div className="py-12">
          {/* Título do Footer */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4 font-display">
              Entre em Contato
            </h2>
            <p className="text-textSecondary max-w-2xl mx-auto text-lg">
              Estamos prontos para cuidar da saúde da sua família com segurança e profissionalismo.
            </p>
          </div>

          {/* Seção de Contato e Localização */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Coluna 1: Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text mb-4 font-display text-center lg:text-left">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 bg-white/60 p-4 rounded-lg">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text text-sm mb-1">
                          {info.label}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textSecondary hover:text-primary transition-colors text-base font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-textSecondary text-base">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coluna 2: Endereço e Como Chegar */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text mb-4 font-display text-center lg:text-left">
                Localização
              </h3>
              
              {/* Endereço */}
              <div className="flex items-start gap-4 bg-white/60 p-4 rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text text-sm mb-1">
                    Endereço
                  </h4>
                  <a
                    href="https://maps.google.com/?q=Rua+Afonso+de+Freitas,+59,+Paraíso,+São+Paulo,+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-primary transition-colors text-base"
                  >
                    Rua Afonso de Freitas, nº 59, sala 94<br />
                    Paraíso, São Paulo - SP<br />
                    CEP 04.006-050
                  </a>
                </div>
              </div>

              {/* Metrô */}
              <div className="flex items-start gap-4 bg-white/60 p-4 rounded-lg">
                <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                  <Train size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text text-sm mb-1">
                    Como Chegar
                  </h4>
                  <p className="text-textSecondary text-base">
                    <strong>Metrô Paraíso</strong> - 220m da estação<br />
                    Linhas 1-Azul e 2-Verde<br />
                    <span className="text-accent font-medium">Apenas 3 minutos caminhando</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção: Foto do Prédio e Mapa */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-text text-center mb-8 font-display">
              Nossa Localização
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Foto da fachada do prédio */}
              <div className="rounded-xl shadow-lg bg-white overflow-hidden h-full flex flex-col">
                <div className="p-5 border-b border-gray-100">
                  <h4 className="font-bold text-text text-center text-lg">
                    Fachada da Clínica
                  </h4>
                </div>
                
                <div className="flex-1 bg-gray-50 p-4 flex items-center justify-center">
                  <img 
                    src="/assets/images/fotopredio.png" 
                    alt="Fachada da Clínica Mil Vacinas - Edifício Upside Paraíso"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                
                <div className="p-4 space-y-3">
                  <p className="text-textSecondary text-sm text-center font-medium">
                    Edifício Upside Paraíso
                  </p>
                  
                  {/* Informação sobre estacionamento */}
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-text text-sm mb-1">Estacionamento</h5>
                        <p className="text-textSecondary text-xs leading-relaxed">
                          O prédio não possui estacionamento próprio, mas há diversas opções em frente e ao redor da clínica.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa do Google Maps */}
              <div className="rounded-xl shadow-lg bg-white overflow-hidden h-full flex flex-col">
                <div className="p-5 border-b border-gray-100">
                  <h4 className="font-bold text-text text-center text-lg">
                    Mapa de Localização
                  </h4>
                </div>
                
                <div className="flex-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890!2d-46.654321!3d-23.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Afonso%20de%20Freitas%2C%2059%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica Mil Vacinas"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Contato */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5511973139542"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="mailto:milvacinas@gmail.com"
              className="btn-secondary text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </a>
          </div>

          {/* Divisor */}
          <div className="border-t border-primary/20 pt-8">
            <div className="text-center space-y-2">
              <p className="text-text font-bold text-base">
                Mil Vacinas e Pediatria
              </p>
              <p className="text-textSecondary text-sm">
                Responsável Técnica: Dra. Fernanda Favali Kruger - Pediatra
              </p>
              <p className="text-textSecondary text-sm">
                CNPJ: 12.459.849/0001-07
              </p>
              <p className="text-textSecondary text-sm">
                CRM-SP: 140.995
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
