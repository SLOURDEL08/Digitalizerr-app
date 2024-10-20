import React from 'react';
import webImage from '../images/web.jpg';
import designImage from '../images/web.jpg';
import marketingImage from '../images/web.jpg';
import seoImage from '../images/web.jpg';
import mobileImage from '../images/web.jpg';
import arrow from '../images/arrow.png';

interface ServiceItemProps {
  image: string;
  title: string;
  link: string;
  className?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ image, title, link, className }) => {
  return (
    <div className={`p-3 group rounded-3xl bg-[#00000030] ${className}`}>
      <div className='relative w-full  h-full overflow-hidden rounded-2xl group'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 object-left-top w-full h-full scale-100 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 object-cover'
        />
        <div className='absolute inset-0 bg-[#00000030] backdrop-blur-sm hover:backdrop-blur-none cursor-pointer bg-opacity-60 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
          <h3 className='text-white px-4 p-2 text-2xl font-bold uppercase'>{title}</h3>
        </div>
        <div className='absolute flex justify-end inset-x-0 bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <div className='bg-[#350C6C] text-white text-right py-2 px-4 rounded-r-none rounded-br-none rounded-2xl rounded-bl-none hover:bg-[#350C6C] duration-300'>
            <img src={arrow} alt='' className='w-6 invert' />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const topRowServices = [
    { image: webImage, title: 'Développement Web', link: '/services/web' },
    { image: designImage, title: 'Design UI/UX', link: '/services/design' },
    { image: marketingImage, title: 'Marketing Digital', link: '/services/marketing' },
  ];

  const bottomRowServices = [
    { image: seoImage, title: 'SEO', link: '/services/seo' },
    { image: mobileImage, title: 'Développement Mobile', link: '/services/mobile' },
  ];

  return (
    <main className='container mx-auto py-20 my-auto'>
      <div className='space-y-8'>
        {/* Première ligne avec 3 éléments */}
        <div className='grid grid-cols-3 gap-8 h-64'>
          {topRowServices.map((service, index) => (
            <ServiceItem key={`top-${index}`} {...service} />
          ))}
        </div>

        {/* Deuxième ligne avec 2 éléments en flex */}
        <div className='flex gap-8 h-64'>
          <ServiceItem {...bottomRowServices[0]} className="w-[30%]" />
          <ServiceItem {...bottomRowServices[1]} className="w-[70%]" />
        </div>
      </div>
    </main>
  );
};

export default ServicesSection;