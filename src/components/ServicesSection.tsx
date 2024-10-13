import React from 'react';

import webImage from '../images/web.jpg';
import designImage from '../images/design.jpg';
import marketingImage from '../images/marketing.jpg';
import seoImage from '../images/seo.jpg';
import mobileImage from '../images/mobile.jpg';

interface ServiceItemProps {
  image: string;
  title: string;
  link: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ image, title, link }) => {
    return (
        <div className='p-3 rounded-3xl bg-[#00000030]'>
               <div className='relative w-full h-full overflow-hidden rounded-2xl group'>
      <img
        src={image}
        alt={title}
        className='absolute inset-0 opacity-20 w-full h-full object-cover grayscale'
      />
         
      <div className='absolute inset-0 hover:bg-[#00000030] backdrop-blur-sm 	hover:backdrop-blur-none cursor-pointer bg-opacity-60 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
        <h3 className='text-white text-2xl font-bold uppercase'>{title}</h3>
          </div>
      <div className='absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <span 
          className='block w-full bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          En savoir plus
        </span>
      </div>
    </div>
      </div>
 
  );
};

const ServicesSection: React.FC = () => {
  const topRowServices = [
    { image: webImage, title: 'Développement Web', link: '/services/web' },
    { image: webImage, title: 'Design UI/UX', link: '/services/design' },
    { image: webImage, title: 'Marketing Digital', link: '/services/marketing' },
  ];

  const bottomRowServices = [
    { image: webImage, title: 'SEO', link: '/services/seo' },
    { image: webImage, title: 'Développement Mobile', link: '/services/mobile' },
  ];

  return (
    <main className='container mx-auto py-8 h-screen'>
      <div className='space-y-8'>
        {/* Première ligne avec 3 éléments */}
        <div className='grid grid-cols-3 gap-8 h-64'>
          {topRowServices.map((service, index) => (
            <ServiceItem key={`top-${index}`} {...service} />
          ))}
        </div>
        
        {/* Deuxième ligne avec 2 éléments */}
        <div className='grid grid-cols-2 gap-8 h-64'>
          {bottomRowServices.map((service, index) => (
            <ServiceItem key={`bottom-${index}`} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesSection;