import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    image: string;
  }
  
  const HeroSection = ({
    title = "Desire",
    subtitle = "for Your Taste",
    description = "Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains.",
  }: HeroSectionProps) => {
    return (
      <section className="w-full py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="space-y-0">
            <div className="space-y-2">
              <div className="flex items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
                <div className="ml-2 bg-orange-400 text-white px-8 py-1 rounded-full">
                  <span className="font-bold md:text-5xl text-4xl">Food</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl py-5 font-bold text-gray-800">{subtitle}</h2>
            </div>
  
            <p className="text-gray-600 max-w-lg">
              {description}
            </p>
  

          <div className="flex space-x-6 py-6">
            <Link 
              href="/order" 
              className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors text-lg font-medium"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Image with Info Cards */}
        <div className="relative">
          <div className="bg-orange-400 rounded-3xl overflow-hidden relative h-140">
            <Image
              src="/chef-with-pizza.png" // Pastikan gambar ini ada di public/
              alt="Delicious food"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Delivery Info Card */}
          <div className="absolute top-6 left-6 bg-white rounded-lg px-4 py-3 shadow-md flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Image
                src="/delivery.png"
                alt="Delivery"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="font-medium text-gray-800">Delivery</p>
              <p className="text-sm text-gray-500">in 30 min</p>
            </div>
          </div>

          {/* Location Info Card */}
          <div className="absolute bottom-6 right-6 bg-white rounded-lg px-4 py-3 shadow-md flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Image
                src="/Location.png"
                alt="Location"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="font-medium text-gray-800">Location</p>
              <p className="text-sm text-gray-500">at destination</p>
            </div>
          </div>

          {/* Chef Profile Card */}
          <div className="absolute -bottom-6 left-6 bg-white rounded-lg px-4 py-3 shadow-md flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image
                src="/chef-avatar.png"
                alt="Chef Ali Ahmad"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-800">Ali Ahmad</p>
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-sm text-gray-500 ml-2">4.5 (1k Likes)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;