import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <main className="flex-grow container mx-auto py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;