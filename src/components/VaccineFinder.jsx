import React, { useState } from 'react';
import { vaccinesData } from '../data/vaccinesData';
import { useTranslation } from '../hooks/useTranslation';

const WHATSAPP_NUMBER = '5511973139542';
const GROUPS = ['crianca', 'adolescente', 'adulto', 'gestante', 'idoso'];

// Abas por idade + cartões no espírito da carteirinha de vacinação.
// Substitui AgeCardsSection + VaccinesSection (a mesma escolha aparecia duas vezes).
const VaccineFinder = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const groupId = GROUPS[active];
  const groupTitle = t(`finder.groups.${groupId}.title`);
  const vaccines = vaccinesData[groupId].vaccines;
  const highlights = vaccinesData[groupId].highlights ?? [];

  const select = (index) => setActive(index);

  const onTabKeyDown = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const next = (active + (event.key === 'ArrowRight' ? 1 : GROUPS.length - 1)) % GROUPS.length;
    select(next);
    document.getElementById(`finder-tab-${GROUPS[next]}`)?.focus();
  };

  const whatsappFor = (vaccineName) => {
    const message = t('finder.whatsappVaccine').replace('{vaccine}', vaccineName);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="vaccines-section" className="bg-white px-4 pb-8 pt-16 sm:px-6 md:pb-10 md:pt-24 lg:px-8">
      <div className="container-max">
        <div className="mb-7 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="kicker">{t('finder.kicker')}</span>
            <h2 className="font-disp mt-2.5 text-[38px] md:text-[52px]">{t('finder.title')}</h2>
          </div>
          <p className="max-w-[27em] text-mv-muted">{t('finder.subtitle')}</p>
        </div>

        <div
          role="tablist"
          aria-label={t('nav.ageCards')}
          onKeyDown={onTabKeyDown}
          className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0"
        >
          {GROUPS.map((id, index) => {
            const selected = index === active;
            return (
              <button
                key={id}
                id={`finder-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="finder-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 text-sm font-bold transition-colors ${
                  selected
                    ? 'border-mv-btn bg-mv-wash text-mv-petrol'
                    : 'border-mv-line bg-white text-mv-ink hover:border-mv-btn'
                }`}
              >
                {t(`finder.groups.${id}.title`)}
                <small className={`text-xs font-semibold ${selected ? 'text-mv-teal' : 'text-mv-muted'}`}>
                  {t(`finder.groups.${id}.age`)}
                </small>
              </button>
            );
          })}
        </div>

        <div id="finder-panel" role="tabpanel" aria-labelledby={`finder-tab-${groupId}`} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vaccines.map((vaccineId) => {
            const name = t(`vaccines.items.${vaccineId}`);
            const highlighted = highlights.includes(vaccineId);
            return (
              <a
                key={vaccineId}
                href={whatsappFor(name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`card relative flex flex-col overflow-hidden ${highlighted ? 'ring-2 ring-mv-heart' : ''}`}
              >
                <div className="grid gap-1.5 px-5 pb-4 pt-[18px]">
                  {highlighted && (
                    <span className="mb-1 w-fit rounded-full bg-mv-heart px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-mv-heartInk">
                      ★ {t('finder.highlight')}
                    </span>
                  )}
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-mv-muted">{t('finder.protects')}</span>
                  <h3 className="font-display text-[21px] font-bold leading-tight text-mv-petrol" style={{ fontVariationSettings: '"wdth" 88' }}>
                    {name}
                  </h3>
                  <p className="text-[14.5px] text-mv-ink">{t(`vaccines.protects.${vaccineId}`)}</p>
                </div>
                <div className="relative mt-auto flex items-center justify-between border-t-[1.5px] border-dashed border-mv-line bg-mv-mist px-5 py-3 text-[13.5px] font-bold text-mv-teal">
                  <span aria-hidden="true" className="absolute -left-2 -top-[8px] h-3.5 w-3.5 rounded-full border-[1.5px] border-mv-line bg-white"></span>
                  <span aria-hidden="true" className="absolute -right-2 -top-[8px] h-3.5 w-3.5 rounded-full border-[1.5px] border-mv-line bg-white"></span>
                  <span className="font-semibold text-mv-muted">{groupTitle}</span>
                  {t('finder.schedule')} →
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VaccineFinder;
