import React from 'react';

const GoogleMaps = ({ className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890!2d-46.654321!3d-23.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Afonso%20de%20Freitas%2C%2059%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Clínica Mil Vacinas"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
