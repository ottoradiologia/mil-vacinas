import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Mosaico de fotos em WebP (antes: carrossel com fotos de 10–19 MB montadas de uma vez).
const PHOTOS = [
  { src: '/assets/images/consultorio/salavacina.webp', w: 960, h: 1280, key: 'sala', alt: 'Sala de vacinação da Mil Vacinas', pos: '50% 50%' },
  { src: '/assets/images/fotopredio.webp', w: 832, h: 1248, key: 'fachada', alt: 'Fachada do Edifício Upside Paraíso', pos: '50% 40%' },
  { src: '/assets/images/consultorio/entrada.webp', w: 1200, h: 1800, key: 'entrada', alt: 'Entrada da clínica', pos: '50% 45%' },
  { src: '/assets/images/consultorio/salaespera.webp', w: 1200, h: 1800, key: 'espera', alt: 'Recepção', pos: '50% 55%' },
  { src: '/assets/images/consultorio/geladeira.webp', w: 900, h: 1600, key: 'geladeira', alt: 'Refrigerador exclusivo para vacinas', pos: '50% 40%' }
];

const SpaceSection = () => {
  const { t } = useTranslation();

  const caption = (key) => (key === 'fachada' ? t('footer.ourLocation.buildingName') : t(`spaceDesign.captions.${key}`));

  return (
    <section id="space-section" className="section-padding bg-mv-mist">
      <div className="container-max">
        <div className="mb-7 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="kicker">{t('spaceDesign.kicker')}</span>
            <h2 className="font-disp mt-2.5 text-[34px] md:text-[44px]">{t('spaceDesign.title')}</h2>
          </div>
          <p className="max-w-[28em] text-mv-muted">{t('spaceDesign.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-[1.2fr_.8fr_.8fr] md:grid-rows-[260px_260px] md:gap-4">
          {PHOTOS.map((photo, index) => (
            <figure
              key={photo.key}
              className={`relative m-0 overflow-hidden rounded-[20px] ${
                index === 0 ? 'col-span-2 h-[260px] md:col-span-1 md:row-span-2 md:h-auto' : 'h-[170px] md:h-auto'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                style={{ objectPosition: photo.pos }}
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12.5px] font-semibold text-mv-petrol">
                {caption(photo.key)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
