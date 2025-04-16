import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string; // Tambahkan ini
}

const NavLink = ({ 
  href, 
  isActive = false, 
  children,
  className = '' // Tambahkan default value
}: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 text-base ${
        isActive 
          ? 'text-red-500 border-b-2 border-red-500' 
          : 'text-gray-700 hover:text-red-500'
      } ${className}`} // Gabungkan dengan className tambahan
    >
      {children}
    </Link>
  );
};

export default NavLink;