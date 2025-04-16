import React from 'react';
import FooterLink from './FooterLink';

interface FooterColumnProps {
  title: string;
  links: Array<{
    href: string;
    label: string;
    isNew?: boolean;
    isExternal?: boolean;
  }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="font-semibold text-gray-800 text-lg mb-4">{title}</h3>
      <div>
        {links.map((link, index) => (
          <FooterLink 
            key={index} 
            href={link.href} 
            label={link.label} 
            isNew={link.isNew} 
            isExternal={link.isExternal} 
          />
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;