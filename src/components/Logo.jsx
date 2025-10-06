import React from 'react';

const Logo = ({ className = "", showText = true, size = "medium", imageSrc = null }) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto", 
    large: "h-16 w-auto"
  };

  const textSizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-3xl"
  };

  const imagePath = imageSrc || "/assets/images/Simbolo.png";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo - usando imagem real */}
      <div className="relative">
        <img 
          src={imagePath} 
          alt="Mil Vacinas" 
          className={`${sizeClasses[size]} drop-shadow-sm`}
        />
      </div>
      
      {/* Texto - opcional */}
      {showText && (
        <div className="text-left">
          <h1 className={`${textSizeClasses[size]} font-bold text-primary font-display`}>
            Mil Vacinas
          </h1>
          <p className="text-sm text-textSecondary font-medium">
            Proteção completa para toda a família
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;