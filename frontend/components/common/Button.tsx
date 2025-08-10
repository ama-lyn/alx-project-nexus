import React from 'react';
import { ButtonProps } from '@/interfaces'; 

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  icon,
}) => {
  const baseStyles = 'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-sm font-semibold leading-normal tracking-[0.015em] gap-2';
  
  const variantStyles = {
    primary: 'bg-[#6b35e8] text-white hover:bg-[#5a2fc4]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
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
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;