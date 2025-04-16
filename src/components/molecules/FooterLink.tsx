import React from 'react';
import Link from 'next/link';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';

interface FooterLinkProps {
  href: string;
  label: string;
  isNew?: boolean;
  isExternal?: boolean;
}

const FooterLink = ({ 
  href, 
  label, 
  isNew = false, 
  isExternal = false 
}: FooterLinkProps) => {
  return (
    <div className="mb-3 flex items-center">
      <Link 
        href={href}
        className="text-gray-600 hover:text-red-500 transition-colors duration-200 flex items-center"
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {label}
        {isExternal && (
          <Icon 
            src="/Panah.png" 
            alt="External link" 
            size="sm" 
            className="ml-1" 
          />
        )}
      </Link>
      {isNew && (
        <Badge className="ml-2">New</Badge>
      )}
    </div>
  );
};

export default FooterLink;