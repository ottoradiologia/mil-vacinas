import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = "",
  type = "button",
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:scale-105",
    secondary: "bg-secondary text-primary hover:bg-secondary/90 hover:scale-105",
    accent: "bg-accent text-white hover:bg-accent/90 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
