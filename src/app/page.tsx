import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import HeroSection from '@/components/organisms/HeroSection';
import Features from '@/components/organisms/Features';
import WhyChooseUs from '@/components/organisms/WhyChooseUs';
import BestSellerDishes from '@/components/organisms/BestSellerDishes';
import Testimonials from '@/components/organisms/Testimonials';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection 
        title="Desire"
        subtitle="for Your Taste"
        description="Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains."
        ctaText="Order Now"
        image="/chef-with-pizza.png"
      />
      <Features />
      <WhyChooseUs />
      <BestSellerDishes />
      <Testimonials />
    </MainLayout>
  );
};

export default HomePage;