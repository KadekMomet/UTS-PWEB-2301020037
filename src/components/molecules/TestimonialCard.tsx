import React from 'react';
import Image from 'next/image';
import StarRating from '../atoms/StarRating';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    content: string;
    author: {
      name: string;
      title: string;
      avatar: string;
    };
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <StarRating rating={5} className="mb-4" />
      <p className="text-gray-700 mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 relative">
          <Image
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-red-500">{testimonial.author.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;