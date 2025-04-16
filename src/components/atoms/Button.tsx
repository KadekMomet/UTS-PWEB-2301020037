import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // Tambahkan ini
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button = ({ 
  children, 
  href, 
  onClick, 
  type = 'button', // Default value
  variant = 'primary', 
  size = 'md',
  className = '' 
}: ButtonProps) => {
  const base = 'rounded-full font-medium transition-colors flex items-center justify-center';
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  const variants = {
    primary: 'bg-red-500 text-white hover:bg-red-600',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  if (href) {
    return (
      <Link 
        href={href} 
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type} // Tambahkan type ke button element
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;