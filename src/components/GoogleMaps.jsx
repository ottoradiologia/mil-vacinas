import React from 'react';

// Mapa do endereço real da clínica (busca pelo endereço, sem coordenadas fixas)
const EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}&z=17&output=embed`;

const GoogleMaps = ({ className = "", height = 300 }) => {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={EMBED_URL}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Clínica Mil Vacinas"
        className="block h-full w-full"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
