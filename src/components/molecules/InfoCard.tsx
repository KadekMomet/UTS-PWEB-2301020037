import React from 'react';
import Image from 'next/image';

interface InfoCardProps {
  icon: string;
  title: string;
  subtitle: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const positionClasses = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4'
};

const InfoCard = ({ 
  icon, 
  title, 
  subtitle, 
  position = 'top-left' 
}: InfoCardProps) => {
  return (
    <div className={`absolute ${positionClasses[position]} bg-white rounded-lg px-3 py-2 shadow-md flex items-center`}>
      <div className="w-8 h-8 relative mr-2">
        <Image 
          src={icon} 
          alt={title} 
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoCard;