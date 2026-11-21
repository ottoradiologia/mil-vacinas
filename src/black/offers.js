// Ofertas da Black Friday — mesmos valores da arte dos anúncios (novembro/2026).
// Para mudar preço ou texto, mude só aqui.
export const WHATSAPP_NUMBER = '5511973139542';

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const OFFERS = [
  {
    id: 'gripe',
    badge: '2×1',
    tone: 'heart',
    title: 'Gripe: leve 2, pague 1',
    detail: 'Estoque limitado! Válido para toda a família.',
    from: 'R$ 300',
    to: 'R$ 150',
    save: 'R$ 150',
    message: 'Olá! Vi a Black Friday da Mil Vacinas e quero a oferta da GRIPE (leve 2, pague 1 – R$ 150).',
  },
  {
    id: 'dengue',
    badge: '15% OFF',
    tone: 'teal',
    title: 'Dengue: esquema completo',
    detail: 'Parcela em até 2x no cartão',
    from: 'R$ 1.140',
    to: 'R$ 969',
    save: 'R$ 171',
    message: 'Olá! Vi a Black Friday da Mil Vacinas e quero a oferta da DENGUE – esquema completo (R$ 969).',
  },
  {
    id: 'pacote-2-6',
    badge: '15% OFF',
    tone: 'teal',
    title: 'Pacote 2–6 meses',
    detail: 'Hexa + Pneumo20 + Rota + MeningoB + ACWY · até 10x',
    from: 'R$ 6.330',
    to: 'R$ 5.380',
    save: 'R$ 950',
    message: 'Olá! Vi a Black Friday da Mil Vacinas e quero a oferta do PACOTE 2–6 MESES (R$ 5.380).',
  },
  {
    id: 'pacote-2-18',
    badge: '15% OFF',
    tone: 'heart',
    title: 'Pacote completo 2–18 meses',
    detail: 'Todas as vacinas + reforços inclusos · até 10x',
    from: 'R$ 10.250',
    to: 'R$ 8.710',
    save: 'R$ 1.540',
    message: 'Olá! Vi a Black Friday da Mil Vacinas e quero a oferta do PACOTE COMPLETO 2–18 MESES (R$ 8.710).',
  },
];

export const GENERAL_MESSAGE = 'Olá! Vi a Black Friday da Mil Vacinas e quero agendar.';
