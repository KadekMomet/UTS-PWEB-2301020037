import React from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  children: React.ReactNode;
  variant?: HeadingTag;
  className?: string;
}

const Title = ({ 
  children, 
  variant = 'h2', 
  className = '' 
}: TitleProps) => {
  const variants = {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-medium',
    h6: 'text-base md:text-lg font-medium'
  };

  // Solusi: Buat mapping ke JSX element yang valid
  switch (variant) {
    case 'h1':
      return <h1 className={`${variants.h1} ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`${variants.h2} ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`${variants.h3} ${className}`}>{children}</h3>;
    case 'h4':
      return <h4 className={`${variants.h4} ${className}`}>{children}</h4>;
    case 'h5':
      return <h5 className={`${variants.h5} ${className}`}>{children}</h5>;
    case 'h6':
      return <h6 className={`${variants.h6} ${className}`}>{children}</h6>;
    default:
      return <h2 className={`${variants.h2} ${className}`}>{children}</h2>;
  }
};

export default Title;