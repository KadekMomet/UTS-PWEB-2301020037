import React from 'react';
import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Icon = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}: IconProps) => {
  const sizes = {
    sm: 16,
    md: 24,
    lg: 32
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={sizes[size]}
      height={sizes[size]}
      className={`inline-block ${className}`}
    />
  );
};

export default Icon;