import React from 'react';
import { MapPin } from 'lucide-react';
import GoogleMaps from './GoogleMaps';
import { useTranslation } from '../hooks/useTranslation';

const PEDIATRICS_URL = 'https://drafernandapediatra.com.br/';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}`;

const Footer = () => {
  const { t } = useTranslation();
  const parkingOptions = t('footer.ourLocation.parkingOptions');

  return (
    <footer id="contact" className="border-t border-mv-line bg-mv-mist text-sm text-mv-muted">
      {/* Onde nos encontrar: foto do prédio + mapa */}
      <div className="container-max px-4 pt-12 sm:px-6 md:pt-14 lg:px-8">
        <h2 className="kicker mb-4 text-mv-petrol">{t('footerDesign.whereTitle')}</h2>
        <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <figure className="overflow-hidden rounded-[14px] bg-white shadow-sm">
            <img
              src="/assets/images/fotopredio.webp"
              alt={`Fachada do ${t('footer.ourLocation.buildingName')}`}
              width="832"
              height="1248"
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-80"
              style={{ objectPosition: '50% 40%' }}
            />
            <figcaption className="px-4 py-2.5 text-center font-medium text-mv-ink">
              {t('footer.ourLocation.buildingName')} · Rua Afonso de Freitas, 59
            </figcaption>
          </figure>
          <div className="h-72 overflow-hidden rounded-[14px] bg-white shadow-sm md:h-auto md:min-h-[20rem]">
            <GoogleMaps className="h-full" height="100%" />
          </div>
        </div>
      </div>

      <div className="container-max grid gap-8 px-4 pb-24 pt-10 sm:px-6 md:grid-cols-2 md:pb-7 md:pt-12 lg:grid-cols-[1.1fr_1fr_1.3fr_1.1fr] lg:px-8">
        <div>
          <h2 className="kicker mb-3 text-mv-petrol">{t('footerDesign.schedule')}</h2>
          <a
            href="https://wa.me/5511973139542"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl font-bold text-mv-petrol hover:text-mv-teal"
            style={{ fontVariationSettings: '"wdth" 90', fontVariantNumeric: 'tabular-nums' }}
          >
            (11) 97313-9542
          </a>
          <p>{t('footerDesign.hoursLine')}</p>
          <p className="mt-3 grid gap-0.5">
            <a href="mailto:milvacinas@gmail.com" className="hover:text-mv-teal">milvacinas@gmail.com</a>
            <a href="https://www.instagram.com/milvacinas/" target="_blank" rel="noopener noreferrer" className="hover:text-mv-teal">@milvacinas</a>
          </p>
        </div>

        <div>
          <h2 className="kicker mb-3 text-mv-petrol">{t('footerDesign.address')}</h2>
          <p>
            Rua Afonso de Freitas, 59, sala 94<br />
            Paraíso, São Paulo – SP<br />
            CEP 04006-050<br />
            {t('footer.ourLocation.buildingName')}
          </p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 font-bold text-mv-teal hover:underline">
            <MapPin size={15} /> {t('footerDesign.map')} ↗
          </a>
        </div>

        <div>
          <h2 className="kicker mb-3 text-mv-petrol">{t('footerDesign.howToGet')}</h2>
          <p>{t('footerDesign.metroLine')}</p>
          <p className="mt-3 font-semibold text-mv-ink">{t('footerDesign.parkingTitle')}</p>
          <ul className="mt-1 grid gap-1.5">
            {Array.isArray(parkingOptions) && parkingOptions.map((option) => {
              const [name, address = name] = option.split(' — ');
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Paraíso, São Paulo - SP`)}`;
              return (
                <li key={option}>
                  <span className="text-mv-ink">{name}</span>
                  {address !== name && (
                    <>
                      {' – '}
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-mv-teal underline underline-offset-2 hover:text-mv-petrol">
                        {address}
                      </a>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-1.5 text-xs italic">{t('footer.ourLocation.parkingNote')}</p>
        </div>

        <div>
          <h2 className="kicker mb-3 text-mv-petrol">{t('footerDesign.sibling')}</h2>
          <a
            href={PEDIATRICS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-[14px] bg-white p-3 transition-colors hover:bg-mv-wash"
          >
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[#FDB4BE]">
              <img src="/assets/images/fernanda-simbolo.webp" alt="" width="28" height="28" className="h-7 w-7 brightness-0 invert" />
            </span>
            <span>
              <b className="block text-mv-petrol">{t('footerDesign.siblingName')}</b>
              {t('footerDesign.siblingText')} ↗
            </span>
          </a>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-1.5 border-t border-mv-line pt-4 text-xs md:col-span-2 lg:col-span-4">
          <span>{t('footer.company.name')} · {t('footer.company.cnpj')}</span>
          <span>{t('footer.company.responsible')} · {t('footer.company.crm')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
