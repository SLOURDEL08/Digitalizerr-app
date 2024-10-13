import React from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          <Button variant="secondary" size="small">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;