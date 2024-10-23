// Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import DropDown from './Dropdown';
import Header from './Header';
import Footer from './Footer';
import { NavigationProvider } from './NavigationContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <NavigationProvider>
      <div className="flex flex-col">
        <Navbar />
        <DropDown />
        <main className="flex-grow container mx-auto py-8">
          {children}
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default Layout;