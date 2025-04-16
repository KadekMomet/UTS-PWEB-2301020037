'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Title from '../atoms/Title';
import TestimonialCard from '../molecules/TestimonialCard';
import { testimonials } from '../../lib/constants';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Ganti touching dengan nama yang lebih deskriptif

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  }, []); // Hapus testimonials.length dari dependencies

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) next();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false); // Ketika user mengklik manual, pause auto play
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Lanjutkan auto play setelah 10 detik
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-10 lg:mb-0">
            <Title variant="h2" className="mb-6">
              <span className="text-gray-800">Customer</span>{' '}
              <span className="text-red-500">Feedback</span>
            </Title>

            <div className="relative overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id}
                      className="w-full flex-shrink-0"
                      style={{ 
                        opacity: currentIndex === index ? 1 : 0, 
                        transition: 'opacity 0.5s ease-in-out' 
                      }}
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 mx-1 rounded-full transition-all ${
                      currentIndex === index ? 'bg-red-500 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-80 lg:h-96">
              <Image
                src="/chef-ok.png"
                alt="Happy chef making OK gesture"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;