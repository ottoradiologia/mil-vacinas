import React from 'react';

const Section = ({ 
  children, 
  className = "",
  backgroundColor = "white",
  padding = true,
  ...props 
}) => {
  const baseClasses = "w-full";
  const paddingClasses = padding ? "section-padding" : "";
  const backgroundClasses = `bg-${backgroundColor}`;
  
  const classes = `${baseClasses} ${paddingClasses} ${backgroundClasses} ${className}`;
  
  return (
    <section
      className={classes}
      {...props}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  );
};

export default Section;
