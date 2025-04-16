import React from 'react';
import Image from 'next/image';
import Title from '../atoms/Title';
import Reason from '../molecules/Reason';
import { whyChooseUs } from '../../lib/constants';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/delicious-meal.png"
              alt="Delicious meal"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              priority
            />
          </div>

          <div>
            <Title variant="h2" className="mb-10 text-gray-800">
              Why People Choose Us?
            </Title>

            <div className="space-y-8">
              {whyChooseUs.map((reason) => (
                <Reason 
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;