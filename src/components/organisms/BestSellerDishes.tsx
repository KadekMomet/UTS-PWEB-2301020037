import React from 'react';
import Title from '../atoms/Title';
import DishCard from '../molecules/DishCard';
import { dishes } from '../../lib/constants';

interface BestSellerDishesProps {
  title?: React.ReactNode;
  description?: string;
}

const BestSellerDishes = ({ 
  title = "Our Best Seller Dishes",
  description = "Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing."
}: BestSellerDishesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <Title variant="h2" className="mb-3 text-gray-800">{title}</Title>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              {...dish}
              isBestSeller={dish.isBestSeller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerDishes;