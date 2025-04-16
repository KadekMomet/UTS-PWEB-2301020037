import React from 'react';
import Link from 'next/link';
import FooterColumn from '../molecules/FooterColumn';
import Newsletter from '../molecules/Newsletter';
import { footerLinks } from '../../lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <Newsletter />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {footerLinks.map((column) => (
            <FooterColumn 
              key={column.title}
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">
              English
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">
              Legal
            </Link>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {currentYear} Foodie. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;