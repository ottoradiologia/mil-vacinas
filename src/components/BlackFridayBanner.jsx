import React from 'react';
import { ArrowRight } from 'lucide-react';

// Faixa da Black Friday no topo da home, levando para /black.
// Some sozinha a partir de 1º/12/2026 (para tirar de vez, apague o componente do App.jsx).
const ENDS_AT = new Date('2026-12-01T00:00:00-03:00');

const BlackFridayBanner = () => {
  if (Date.now() >= ENDS_AT.getTime()) return null;

  return (
    <a
      href="/black"
      className="group relative block overflow-hidden bg-gradient-to-r from-mv-ink via-[#1C4341] to-mv-petrol px-4 py-3 text-white sm:px-6 lg:px-8"
    >
      <span aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-mv-btn/30 blur-2xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-mv-heart/30 blur-2xl" />
      <span className="container-max relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
        <span className="font-display text-[22px] font-bold leading-none md:text-[26px]" style={{ fontVariationSettings: '"wdth" 85' }}>
          BLACK FRIDAY
        </span>
        <span className="flex flex-wrap justify-center gap-1.5 text-[13px] font-bold">
          <span className="rounded-full bg-mv-heart px-3 py-1 text-mv-heartInk">Gripe 2×1</span>
          <span className="rounded-full bg-white px-3 py-1 text-mv-petrol">Até 15% OFF</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-mv-btn transition group-hover:text-white">
          Ver ofertas <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
};

export default BlackFridayBanner;
