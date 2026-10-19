import React from 'react';
import { Building2, Home, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const trust = t('hero.trust');

  return (
    <section className="bg-mv-mist px-4 pb-2 pt-6 sm:px-6 md:pt-16 lg:px-8">
      <div className="container-max grid items-center gap-6 md:gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <h1>
            <span className="kicker mb-3 block md:mb-[18px]">{t('hero.kicker')}</span>
            <span className="font-disp block text-[44px] md:text-[68px]">
              {t('hero.headline')} <span className="text-mv-teal">{t('hero.headlineHighlight')}</span>
            </span>
          </h1>

          <p className="mb-5 mt-4 max-w-[32em] text-base text-mv-muted md:mb-7 md:mt-[22px] md:text-lg">
            {t('hero.lead')}
          </p>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => scrollTo('how-it-works')}
              className="card grid grid-cols-[auto_1fr_auto] items-start gap-x-3.5 gap-y-1 p-5 text-left"
            >
              <span className="row-span-2 grid h-11 w-11 place-items-center rounded-xl bg-mv-mist text-mv-teal">
                <Building2 size={22} />
              </span>
              <span className="font-display text-xl font-extrabold text-mv-petrol" style={{ fontVariationSettings: '"wdth" 90' }}>
                {t('hero.clinicTitle')}
              </span>
              <ArrowRight size={18} className="row-span-2 text-mv-teal" />
              <span className="col-start-2 text-[13.5px] leading-snug text-mv-muted">{t('hero.clinicDetail')}</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('home-vaccination')}
              className="card grid grid-cols-[auto_1fr_auto] items-start gap-x-3.5 gap-y-1 border-mv-btn bg-mv-wash p-5 text-left"
            >
              <span className="row-span-2 grid h-11 w-11 place-items-center rounded-xl bg-white text-mv-teal">
                <Home size={22} />
              </span>
              <span className="font-display text-xl font-extrabold text-mv-petrol" style={{ fontVariationSettings: '"wdth" 90' }}>
                {t('hero.homeTitle')}
              </span>
              <ArrowRight size={18} className="row-span-2 text-mv-teal" />
              <span className="col-start-2 text-[13.5px] leading-snug text-mv-muted">
                {t('hero.homeDetail')}{' '}
                <span className="ml-1 inline-block rounded-full bg-mv-heart px-2 py-0.5 align-[2px] text-[11px] font-bold text-mv-heartInk">
                  {t('hero.free')}
                </span>
              </span>
            </button>
          </div>
        </div>

        <figure className="order-first m-0 grid justify-items-center gap-5 lg:order-none">
          <div
            className="grid aspect-square w-[200px] place-items-center rounded-full md:w-[min(100%,420px)]"
            style={{ background: 'radial-gradient(circle at 50% 45%, #fff 0, #fff 60%, #E7F2F0 61%, #E7F2F0 100%)' }}
          >
            <img
              src="/assets/images/mil-vacinas-logo.webp"
              alt="Mil Vacinas"
              width="800"
              height="609"
              fetchpriority="high"
              className="h-auto w-[72%] drop-shadow-[0_10px_18px_rgba(31,77,74,.18)]"
            />
          </div>
          <figcaption className="hidden text-center text-[13px] leading-snug text-mv-muted lg:block">
            <span className="kicker mb-0.5 block text-[11px]">{t('hero.rtLabel')}</span>
            {t('hero.rtValue')}
          </figcaption>
        </figure>
      </div>

      <div className="container-max mt-8 flex flex-col gap-2 border-t border-mv-line py-5 text-[13.5px] text-mv-muted md:mt-10 md:flex-row md:flex-wrap md:gap-x-7">
        {Array.isArray(trust) && trust.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <i className="inline-block h-[7px] w-[7px] -rotate-45 bg-mv-teal" style={{ borderRadius: '50% 0 50% 50%' }} aria-hidden="true"></i>
            {item}
          </span>
        ))}
        <span className="inline-flex items-center gap-2 lg:hidden">
          <i className="inline-block h-[7px] w-[7px] -rotate-45 bg-mv-teal" style={{ borderRadius: '50% 0 50% 50%' }} aria-hidden="true"></i>
          {t('hero.rtLabel')}: {t('hero.rtValue')}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
