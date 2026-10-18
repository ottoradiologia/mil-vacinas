import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Site atual da Dra. Fernanda (trocar pelo domínio próprio quando estiver no ar).
const PEDIATRICS_URL = 'https://site-fernanda-oficial.vercel.app/';

const TeamSection = () => {
  const { t } = useTranslation();
  const members = t('team.members');
  const coldItems = t('teamDesign.coldItems');

  return (
    <section id="team-section" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-7 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="kicker">{t('teamDesign.kicker')}</span>
            <h2 className="font-disp mt-2.5 text-[38px] md:text-[52px]">{t('team.title')}</h2>
          </div>
          <p className="max-w-[27em] text-mv-muted">{t('team.subtitle')}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(members) && members.map((member, index) => (
            <article key={member.name} className="flex flex-col overflow-hidden rounded-[20px] bg-mv-mist">
              <picture className="block">
                <source srcSet={`${member.photo}.webp`} type="image/webp" />
                <img
                  src={`${member.photo}.jpg`}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                  style={{ objectPosition: member.focus }}
                />
              </picture>
              <div className="flex flex-1 flex-col gap-1 px-5 pb-5 pt-4">
                <h3 className="font-display text-xl font-bold text-mv-petrol" style={{ fontVariationSettings: '"wdth" 88' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-mv-ink">{member.role}</p>
                <p className="text-[12.5px] font-bold tracking-[0.03em] text-mv-teal">{member.registry}</p>
                <p className="mt-2 text-sm leading-relaxed text-mv-muted">{member.bio}</p>
                {Array.isArray(member.formation) && (
                  <details className="mt-2 text-sm text-mv-muted">
                    <summary className="cursor-pointer font-semibold text-mv-petrol">{t('team.formationTitle')}</summary>
                    <ul className="mt-2 grid gap-1.5">
                      {member.formation.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mv-btn"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
                {index === 0 && (
                  <a href={PEDIATRICS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 text-[13.5px] font-bold text-mv-teal hover:underline">
                    {t('teamDesign.pediatricsLink')} ↗
                  </a>
                )}
              </div>
            </article>
          ))}

          <div className="flex flex-col gap-3.5 rounded-[20px] border-[1.5px] border-mv-line p-[22px] md:col-span-2 lg:col-span-1">
            <span className="kicker">{t('teamDesign.coldKicker')}</span>
            <p className="font-display text-[58px] font-bold leading-[0.9] text-mv-petrol" style={{ fontVariationSettings: '"wdth" 75', fontVariantNumeric: 'tabular-nums' }}>
              2–8<small className="text-xl text-mv-teal"> °C</small>
            </p>
            <ul className="grid gap-2.5 text-[14.5px]">
              {Array.isArray(coldItems) && coldItems.map((item) => (
                <li key={item} className="grid grid-cols-[18px_1fr] gap-2">
                  <span className="font-extrabold text-mv-teal" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <img
              src="/assets/images/consultorio/geladeira.webp"
              alt={t('teamDesign.coldAlt')}
              loading="lazy"
              decoding="async"
              width="900"
              height="1600"
              className="mt-auto h-40 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
