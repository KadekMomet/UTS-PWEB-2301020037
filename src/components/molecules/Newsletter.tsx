'use client'

import React, { useState } from 'react';
import Button from '../atoms/Button';

interface NewsletterProps {
  title?: React.ReactNode;
  description?: string;
}

const Newsletter = ({ 
  title = (
    <>
      <span className="text-gray-800">Join Our</span> <span className="text-red-500">Newsletter</span>
    </>
  ), 
  description = "Be the first to know about our latest updates, exclusive offers, and more."
}: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <div className="mb-12 border-b border-gray-200 pb-8">
      <div className="max-w-full">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className="border border-gray-300 rounded px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <Button 
            type="submit" 
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors duration-200"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;