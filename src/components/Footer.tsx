import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00000080] -mx-[50px] text-white">
      <div className=" p-20 flex justify-start gap-20">
        <div className="w-full md:w-1/4 mb-6 space-y-6 md:mb-0">
          <div className='bg-yellow-400 h-14 flex items-center text-xl justify-center rounded-xl'>
            @ <span>/Digitalizerr</span>
          </div>
          <div className='bg-red-700 h-14 flex items-center text-xl justify-center rounded-xl'>
              @ <span>/Digitalizerr</span>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-gray-400">We are a company dedicated to providing excellent services and products.</p>
        </div>
       
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">123 Street Name, City, Country</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@example.com</p>
        </div>
         <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        
      </div>
      <div className="text-white p-20 pt-0">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;