import React from 'react';
import { ButtonProps } from '@/interfaces'; 

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  icon, // 1. Accept the new icon prop
}) => {
  // 2. Add 'gap-2' to create space between the icon and the label
  const baseStyles = 'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-sm font-semibold leading-normal tracking-[0.015em] gap-2';
  
  const variantStyles = {
    // Let's use the colors from your new design for better accuracy
    primary: 'bg-[#3B82F6] text-white hover:bg-[#2563EB]',
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
      {/* 3. Render the icon here, but only if it exists */}
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;