import React from 'react';
import Image from 'next/image';

interface ReasonProps {
  icon: string;
  title: string;
  description: string;
}

const Reason = ({ icon, title, description }: ReasonProps) => {
  return (
    <div className="flex mb-10">
      <div className="flex-shrink-0 mr-4">
        <div className="w-20 h-20 relative">
          <Image 
            src={icon} 
            alt={title} 
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl text-gray-800 font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Reason;