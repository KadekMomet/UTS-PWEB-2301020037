import React from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';
import StarRating from '../atoms/StarRating';
import Badge from '../atoms/Badge'; 

interface DishCardProps {
  image: string;
  category: string;
  rating: number;
  price: number;
  isBestSeller?: boolean;
}

const DishCard = ({ 
  image, 
  category, 
  rating, 
  price, 
  isBestSeller = false 
}: DishCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={category}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {isBestSeller && (
          <div className="absolute top-2 left-2">
            <Badge variant="primary">Best Seller</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-800">{category}</span>
          <Button size="sm" variant="primary">
            Order Now
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <StarRating rating={rating} />
          <span className="text-xl font-bold text-gray-800">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default DishCard;