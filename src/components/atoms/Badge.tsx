import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}: BadgeProps) => {
  const variants = {
    primary: 'bg-red-500 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;