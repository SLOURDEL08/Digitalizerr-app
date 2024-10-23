import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'filter' | 'filter-active';
  size?: 'small' | 'medium' | 'large';
  className?: string,
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',

}) => {
  const baseClasses = 'font-black shadow-lg transition-all duration-300 ease-in-out';
  const variantClasses = {
    primary: 'bg-white text-[#2e0f84] uppercase rounded-full hover:shadow-2xl hover:text-[#F6D663]',
    secondary: 'bg-gray-200 text-gray-700 rounded-full hover:shadow-2xl',
    'filter': 'bg-transparent text-white border-2 border-white rounded-xl hover:bg-white hover:text-[#2e0f84]',
    'filter-active': 'bg-white text-[#2e0f84] border-2 border-white rounded-xl'
  };
  const sizeClasses = {
    small: 'px-5 py-2 text-md',
    medium: 'px-6 py-2 text-lg',
    large: 'px-10 py-3 text-2xl'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;