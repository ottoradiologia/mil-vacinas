import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// Bairros ao redor do Paraíso, em km a partir da clínica (x = leste, y = norte).
// Posições aproximadas; confirmar a lista com a clínica.
const NEIGHBORHOODS = [
  { name: 'Bela Vista', x: -0.6, y: 2.0, anchor: 'end' },
  { name: 'Liberdade', x: 1.3, y: 2.3, anchor: 'start' },
  { name: 'Aclimação', x: 2.1, y: 0.8, anchor: 'start' },
  { name: 'Cambuci', x: 3.5, y: 1.2, anchor: 'start' },
  { name: 'Vila Mariana', x: 0.7, y: -1.6, anchor: 'start' },
  { name: 'Vila Clementino', x: 0.6, y: -3.2, anchor: 'start' },
  { name: 'Moema', x: -0.9, y: -3.4, anchor: 'end' },
  { name: 'Ibirapuera', x: -1.9, y: -2.2, anchor: 'end' },
  { name: 'Jardim Paulista', x: -1.8, y: 0.5, anchor: 'end' }
];
const KM = 33.6; // px por km: raio de 5 km = 168 px
const C = 200;

const RadiusMap = ({ label, center, free }) => (
  <svg viewBox="0 0 400 400" role="img" aria-label={label} className="block h-auto w-full">
    <circle cx={C} cy={C} r={5 * KM} fill="rgba(255,255,255,0.7)" stroke="#83B2AC" strokeWidth="1.5" strokeDasharray="5 6" />
    <circle cx={C} cy={C} r={3 * KM} fill="none" stroke="rgba(131,178,172,0.45)" strokeWidth="1" />
    <circle cx={C} cy={C} r={KM} fill="rgba(240,140,155,0.22)" stroke="#F08C9B" strokeWidth="1.5" />
    <text x={C} y={C - 5 * KM - 6} textAnchor="middle" fill="#2E7570" fontFamily="Figtree, sans-serif" fontSize="12" fontWeight="700">5 km</text>
    <text x={C} y={C - 3 * KM - 6} textAnchor="middle" fill="#557270" fontFamily="Figtree, sans-serif" fontSize="11">3 km</text>
    <g fontFamily="Figtree, sans-serif" fontSize="12.5" fill="#2B5D5A">
      {NEIGHBORHOODS.map((n) => {
        const x = C + n.x * KM;
        const y = C - n.y * KM;
        return (
          <g key={n.name}>
            <circle cx={x} cy={y} r="3.5" fill="#83B2AC" />
            <text x={n.anchor === 'end' ? x - 7 : x + 7} y={y + 4} textAnchor={n.anchor}>{n.name}</text>
          </g>
        );
      })}
    </g>
    <path d="M200 186 l9 9 a12.7 12.7 0 1 1 -18 0 z" fill="#F08C9B" />
    <text x={C} y={C + 28} textAnchor="middle" fill="#2B5D5A" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="800" letterSpacing="1">{center}</text>
    <text x={C} y={C + 42} textAnchor="middle" fill="#A85A6C" fontFamily="Figtree, sans-serif" fontSize="10.5" fontWeight="600">{free}</text>
  </svg>
);

const HomeVaccinationSection = () => {
  const { t } = useTranslation();
  const steps = t('home.steps');
  const details = t('howItWorks.steps.step3.details');
  const whatsappUrl = `https://wa.me/5511973139542?text=${encodeURIComponent(t('hero.whatsappHome'))}`;

  return (
    <section id="home-vaccination" className="section-padding bg-mv-wash">
      <div className="container-max grid items-center gap-8 md:gap-14 lg:grid-cols-2">
        <div>
          <span className="kicker">{t('home.kicker')}</span>
          <h2 className="font-disp mb-4 mt-3 text-[40px] md:text-[56px]">{t('home.title')}</h2>
          <p className="max-w-[31em] text-mv-muted">{t('howItWorks.steps.step3.description')}</p>

          {Array.isArray(details) && (
            <ul className="mt-4 grid gap-1.5 text-[14.5px] text-mv-ink sm:grid-cols-2">
              {details.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-mv-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <ol className="my-7 grid gap-3">
            {Array.isArray(steps) && steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[40px_1fr] items-start gap-3.5">
                <span
                  className="grid h-10 w-10 -rotate-45 place-items-center bg-white font-display font-bold text-mv-petrol"
                  style={{ borderRadius: '50% 0 50% 50%' }}
                  aria-hidden="true"
                >
                  <span className="rotate-45">{index + 1}</span>
                </span>
                <div>
                  <b className="block text-mv-petrol">{step.title}</b>
                  <span className="text-[14.5px] text-mv-muted">{step.text}</span>
                </div>
              </li>
            ))}
          </ol>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-heart">
            {t('home.cta')}
          </a>
        </div>

        <figure className="m-0 w-full max-w-[440px] justify-self-center">
          <RadiusMap label={t('home.mapLabel')} center={t('home.mapCenter')} free={t('home.mapFree')} />
          <figcaption className="mt-1.5 text-center text-[12.5px] text-mv-muted">{t('home.mapCaption')}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HomeVaccinationSection;
