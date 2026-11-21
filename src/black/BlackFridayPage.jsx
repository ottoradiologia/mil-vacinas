import React from 'react';
import { MessageCircle, MapPin, Clock, CreditCard, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { OFFERS, GENERAL_MESSAGE, whatsappLink } from './offers';

// Página só dos anúncios da Black Friday: fora do menu, sem indexação.
const narrow = { fontVariationSettings: '"wdth" 85' };
const semi = { fontVariationSettings: '"wdth" 90' };

const toneClasses = {
  heart: { bar: 'bg-mv-heart', badge: 'bg-mv-heart text-mv-heartInk', glow: 'from-[#FDE7EA]' },
  teal: { bar: 'bg-mv-btn', badge: 'bg-mv-btn text-mv-btnInk', glow: 'from-mv-wash' },
};

const MARQUEE = ['Gripe 2×1', '15% OFF dengue', '15% OFF pacotes do bebê', 'Só em novembro', 'Parcele em até 10x'];

const PHOTOS = [
  { src: '/assets/images/consultorio/salavacina.webp', w: 960, h: 1280, alt: 'Sala de vacinação da Mil Vacinas', pos: '50% 50%' },
  { src: '/assets/images/consultorio/salaespera.webp', w: 1200, h: 1800, alt: 'Recepção da clínica', pos: '50% 55%' },
  { src: '/assets/images/consultorio/geladeira.webp', w: 900, h: 1600, alt: 'Refrigerador exclusivo para vacinas', pos: '50% 40%' },
];

const WhatsAppButton = ({ text, children, variant = 'btn-primary', className = '' }) => (
  <a href={whatsappLink(text)} target="_blank" rel="noopener noreferrer" className={`${variant} ${className}`}>
    <MessageCircle size={18} aria-hidden="true" />
    {children}
  </a>
);

const Blob = ({ className, color }) => (
  <span aria-hidden="true" className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} style={{ background: color }} />
);

const OfferCard = ({ offer }) => {
  const tone = toneClasses[offer.tone];
  return (
    <article className="group relative overflow-hidden rounded-[22px] bg-white shadow-[0_1px_2px_rgba(20,48,47,.06),0_12px_32px_-12px_rgba(20,48,47,.18)] ring-1 ring-mv-line transition duration-200 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(20,48,47,.06),0_24px_48px_-16px_rgba(20,48,47,.28)]">
      <span className={`absolute inset-y-0 left-0 w-1.5 ${tone.bar}`} aria-hidden="true" />
      <span className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.glow} via-transparent to-transparent opacity-60`} aria-hidden="true" />

      <div className="relative flex flex-col gap-5 p-5 pl-6 sm:flex-row sm:items-center sm:gap-8 md:p-7 md:pl-9">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-block rounded-full px-3.5 py-1 font-display text-base font-bold leading-none ${tone.badge}`} style={narrow}>
              {offer.badge}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-mv-petrol px-2.5 py-1 text-[12px] font-bold leading-none text-white">
              <Sparkles size={12} aria-hidden="true" /> Economize {offer.save}
            </span>
          </div>
          <h2 className="mt-3 font-display text-[22px] font-extrabold leading-tight text-mv-petrol md:text-[26px]" style={semi}>
            {offer.title}
          </h2>
          <p className="mt-1 text-[14.5px] text-mv-muted">{offer.detail}</p>
        </div>

        <div className="flex items-end justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
          <p className="leading-none sm:text-right">
            <s className="block text-[15px] font-semibold text-[#B5707A] decoration-2">
              <span className="sr-only">De </span>{offer.from}
            </s>
            <span className="mt-1 block font-display text-[38px] font-bold text-mv-petrol md:text-[46px]" style={{ ...narrow, fontVariantNumeric: 'tabular-nums' }}>
              <span className="sr-only">Por </span>{offer.to}
            </span>
          </p>
          <WhatsAppButton text={offer.message} className="px-4 py-2.5 text-sm shadow-sm">
            Quero esta
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
};

const BlackFridayPage = () => (
  <div className="min-h-screen overflow-x-hidden bg-mv-mist pb-24 lg:pb-0">
    {/* Topo enxuto: logo volta para o site, WhatsApp */}
    <header className="relative z-20 bg-mv-ink">
      <div className="container-max flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5 font-display text-[22px] font-extrabold text-white" style={semi}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
            <img src="/assets/images/simbolo.webp" alt="" width="34" height="34" className="h-7 w-7" />
          </span>
          <span>Mil Vacinas</span>
        </a>
        <WhatsAppButton text={GENERAL_MESSAGE} className="hidden px-[18px] py-2.5 text-sm sm:inline-flex">
          (11) 97313-9542
        </WhatsAppButton>
      </div>
    </header>

    <main>
      {/* Hero escuro: clima de Black Friday com as cores da marca */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-mv-ink via-[#1C4341] to-mv-petrol px-4 pb-28 pt-10 text-center sm:px-6 md:pb-36 md:pt-16 lg:px-8">
        <Blob className="-left-24 -top-24 h-72 w-72 md:h-[28rem] md:w-[28rem]" color="rgba(131,178,172,.35)" />
        <Blob className="-right-20 top-10 h-64 w-64 md:h-96 md:w-96" color="rgba(240,140,155,.28)" />
        <Blob className="bottom-0 left-1/2 h-48 w-[36rem] -translate-x-1/2" color="rgba(131,178,172,.22)" />

        <p className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-mv-heart" aria-hidden="true" />
          Só em novembro · Paraíso, SP
        </p>

        <h1 className="relative mt-5">
          <span className="block font-display text-[64px] font-bold leading-[0.9] tracking-[-0.02em] text-white md:text-[112px]" style={narrow}>
            BLACK FRIDAY
          </span>
          <span className="mt-1 block font-display text-[40px] font-bold leading-none text-mv-btn md:text-[64px]" style={narrow}>
            MIL VACINAS
          </span>
        </h1>
        <span className="relative mx-auto mt-6 block h-1 w-24 rounded-full bg-mv-heart" aria-hidden="true" />

        <ul className="relative mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2 text-sm font-bold">
          <li className="rounded-full bg-mv-heart px-4 py-1.5 text-mv-heartInk">Gripe 2×1</li>
          <li className="rounded-full bg-white px-4 py-1.5 text-mv-petrol">Até 15% OFF</li>
          <li className="rounded-full border border-white/25 px-4 py-1.5 text-white">Até 10x</li>
        </ul>
      </section>

      {/* Faixa rolando */}
      <div className="relative z-10 -mt-[4.5rem] -rotate-1 overflow-hidden bg-mv-heart py-2.5 shadow-lg md:-mt-24" aria-hidden="true">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex">
              {[...MARQUEE, ...MARQUEE].map((item, i) => (
                <span key={`${copy}-${i}`} className="mx-5 inline-flex items-center gap-5 font-display text-[17px] font-bold uppercase tracking-wide text-mv-heartInk" style={narrow}>
                  {item} <span className="text-white">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Ofertas */}
      <section aria-label="Ofertas" className="relative z-10 px-4 pt-8 sm:px-6 md:pt-12 lg:px-8">
        <div className="container-max grid max-w-4xl gap-4 md:gap-5">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* A clínica */}
      <section className="px-4 pt-14 sm:px-6 md:pt-20 lg:px-8">
        <div className="container-max max-w-4xl">
          <p className="kicker text-center">Onde você vai vacinar</p>
          <h2 className="mt-2 text-center font-display text-[28px] font-extrabold text-mv-petrol md:text-4xl" style={semi}>
            Clínica no Paraíso
          </h2>

          <div className="mt-6 grid grid-cols-3 gap-2.5 md:gap-4">
            {PHOTOS.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm md:aspect-square"
                style={{ objectPosition: photo.pos }}
              />
            ))}
          </div>

          <ul className="mt-4 grid gap-3 text-[14.5px] text-mv-ink sm:grid-cols-3">
            <li className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-mv-line">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-mv-teal" aria-hidden="true" />
              <span><b className="block text-mv-petrol">Rua Afonso de Freitas, 59</b>220 m do Metrô Paraíso</span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-mv-line">
              <Clock size={20} className="mt-0.5 flex-shrink-0 text-mv-teal" aria-hidden="true" />
              <span><b className="block text-mv-petrol">Seg a sex</b>9h às 18h</span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-mv-line">
              <CreditCard size={20} className="mt-0.5 flex-shrink-0 text-mv-teal" aria-hidden="true" />
              <span><b className="block text-mv-petrol">Pix, cartão ou dinheiro</b>Parcelamento conforme a oferta</span>
            </li>
          </ul>

          <div className="mt-3 flex items-center gap-4 rounded-2xl bg-mv-wash p-4 ring-1 ring-mv-line">
            <img
              src="/assets/images/equipe/fernanda.webp"
              alt="Dra. Fernanda Favali Kruger"
              width="80"
              height="80"
              loading="lazy"
              className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-4 ring-white"
            />
            <p className="text-[14.5px] text-mv-ink">
              <span className="kicker flex items-center gap-1.5"><ShieldCheck size={14} aria-hidden="true" /> Responsável técnica</span>
              <b className="block text-mv-petrol">Dra. Fernanda Favali Kruger</b>
              Pediatra · CRM-SP 140.995
            </p>
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8">
        <div className="container-max relative isolate max-w-4xl overflow-hidden rounded-[28px] bg-gradient-to-br from-mv-ink to-mv-petrol px-6 py-10 text-center md:py-14">
          <Blob className="-right-16 -top-16 h-56 w-56" color="rgba(240,140,155,.3)" />
          <Blob className="-bottom-20 -left-10 h-56 w-56" color="rgba(131,178,172,.35)" />
          <h2 className="relative font-display text-[30px] font-extrabold text-white md:text-[40px]" style={semi}>
            Agende pelo WhatsApp
          </h2>
          <p className="relative mt-1 text-white/75">Ofertas válidas em novembro</p>
          <WhatsAppButton text={GENERAL_MESSAGE} variant="btn-heart" className="relative mt-6 px-8 py-4 text-lg shadow-lg">
            (11) 97313-9542
          </WhatsAppButton>
          <div>
            <a href="/" className="relative mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-mv-btn hover:text-white">
              Conheça a clínica <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-mv-line px-4 py-6 text-center text-xs text-mv-muted sm:px-6 lg:px-8">
      <p>Ofertas válidas em novembro de 2026. Gripe: estoque limitado.</p>
      <p className="mt-2">
        Mil Vacinas e Pediatria · CNPJ 12.459.849/0001-07 · Responsável técnica: Dra. Fernanda Favali Kruger · CRM-SP 140.995
      </p>
    </footer>

    {/* Barra fixa no celular */}
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-mv-line bg-white/95 px-3 pt-2.5 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))' }}
    >
      <WhatsAppButton text={GENERAL_MESSAGE} className="w-full px-3 text-[15px]">
        Agendar pelo WhatsApp
      </WhatsAppButton>
    </div>

    <Analytics />
  </div>
);

export default BlackFridayPage;
