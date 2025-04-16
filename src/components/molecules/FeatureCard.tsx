import React from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  ctaText, 
  ctaLink 
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-20 h-20 relative mb-4">
        <Image 
          src={icon} 
          alt={title} 
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        href={ctaLink} 
        variant="outline"
        className="text-red-500 hover:underline"
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default FeatureCard;