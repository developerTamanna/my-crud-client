import React from 'react';
import { Outlet } from 'react-router'; // ✅ Updated: use `react-router-dom`
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
     
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
    
      <Footer />
      
    </div>
  );
};

export default Layouts;
