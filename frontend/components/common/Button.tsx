import React from 'react';
import { ButtonProps } from '@/interfaces'; 

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseStyles = 'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-sm font-semibold leading-normal tracking-[0.015em]';
  
  const variantStyles = {
    primary: 'bg-[#6b35e8] text-white hover:bg-[#572bc1]',
    secondary: 'bg-[#f1f0f4] text-[#131118] hover:bg-[#e4e2eb]',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
