import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transition-colors flex items-center justify-center";

  const variantStyles = {
    primary: "bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] border border-solid border-transparent",
    secondary: "border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
