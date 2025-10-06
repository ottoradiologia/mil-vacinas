import React from 'react';

const Card = ({ 
  children, 
  className = "",
  hover = true,
  onClick,
  ...props 
}) => {
  const baseClasses = "card bg-white rounded-xl shadow-lg transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
