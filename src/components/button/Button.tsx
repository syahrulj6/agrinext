import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const buttonClass = clsx(
    'rounded px-4 py-2 flex items-center transition-all text-md',
    {
      'bg-primary text-white/80 hover:text-white hover:bg-primaryHover': variant === 'primary',
      'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
      'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
      'text-gray-700 hover:text-black': variant === 'ghost',
    },
    {
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      'text-lg': size === 'lg',
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
