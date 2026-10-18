import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Logo = ({ className = "", showText = true, size = "medium", imageSrc = null }) => {
  const { t } = useTranslation();
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

  const imagePath = imageSrc || "/assets/images/simbolo.webp";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={imagePath}
        alt="Mil Vacinas"
        className={sizeClasses[size]}
      />

      {/* Texto opcional (span, não h1: a página tem um único H1 no topo) */}
      {showText && (
        <div className="text-left">
          <span className={`block ${textSizeClasses[size]} font-display font-bold text-mv-teal`}>
            Mil Vacinas
          </span>
          <span className="block text-sm font-medium text-mv-muted">
            {t('logo.tagline')}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
