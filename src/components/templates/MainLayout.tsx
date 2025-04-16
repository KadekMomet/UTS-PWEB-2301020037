import React from 'react';
import Head from 'next/head';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const MainLayout = ({ 
  children, 
  title = "Foodie - Delicious Food Delivery",
  description = "Order delicious food from the best restaurants in town"
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;