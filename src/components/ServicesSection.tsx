import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Palette, Megaphone, Search, Smartphone } from 'lucide-react';
import webImage from '../images/web.jpg';
import designImage from '../images/web.jpg';
import marketingImage from '../images/web.jpg';
import seoImage from '../images/web.jpg';
import mobileImage from '../images/web.jpg';
import arrow from '../images/arrow.png';

interface ServiceItemProps {
  image: string;
  title: string | JSX.Element;
  link: string;
  className?: string;
  icon: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ image, title, link, className, icon }) => {
  return (
    <Link to={link} className={`p-3 max-sm:p-2 group rounded-3xl max-sm:rounded-2xl bg-[#00000030] hover:bg-[#F6D663] ${className}`}>
      <div className='relative w-full h-full overflow-hidden rounded-2xl max-sm:rounded-xl group'>
        <img
          src={image}
          alt={typeof title === 'string' ? title : 'Service'}
          className='absolute text-center inset-0 object-left-top w-full h-full scale-100 transition duration-500 group-hover:rotate-3 group-hover:scale-125 object-cover'
        />
        <div className='absolute text-center inset-0 bg-[#00000040] backdrop-blur-md hover:backdrop-blur-[40px]  max-md:p-8  cursor-pointer bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0'>
          <div className="text-white">
            {React.cloneElement(icon as React.ReactElement, { 
              size: 50,
              className: 'max-lg:w-10 max-lg:h-10 max-md:w-12 max-md:h-12',
              strokeWidth: 3 
            })}
          </div>
          <h3 className='text-white max-md:mt-2 max-md:text-2xl  text-2xl max-lg:text-lg leading-normal font-bold uppercase'>{title}</h3>
        </div>
        <div className='absolute flex justify-end inset-x-0 bottom-0 opacity-0 group-hover:opacity-100'>
          <div className='bg-[#F6D663] group text-white text-right py-2 pt-3 max-sm:py-1 max-sm:pt-2 pl-5 max-sm:pl-3 px-4 max-sm:px-2 rounded-r-none rounded-br-none rounded-tl-2xl max-sm:rounded-tl-xl rounded-bl-none'>
            <img src={arrow} alt='' className='w-6 max-sm:w-4 group-hover:scale-125 scale-90 transition duration-500' />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection: React.FC = () => {
  const topRowServices = [
    { 
      image: webImage, 
      title: (
        <>
          Développement<br />Web
        </>
      ),
      icon: <Code2 size={50} strokeWidth={3} />,
      link: '/services/web' 
    },
    {
      image: designImage,
      title: (
        <>
          Design<br />UX/UI
        </>
      ),
      icon: <Palette size={50} strokeWidth={3} />,
      link: '/services/design'
    },
    {
      image: marketingImage,
      title: (
        <>
          Marketing<br />Digital
        </>
      ),
      icon: <Megaphone size={50} strokeWidth={3} />,
      link: '/services/marketing'
    },
  ];

  const bottomRowServices = [
    {
      image: seoImage,
      title: (
        <>
          Référencement<br />SEO/SEA
        </>
      ),
      icon: <Search size={50} strokeWidth={3} />,
      link: '/services/seo'
    },
    {
      image: mobileImage,
      title: (
        <>
          Développement<br />mobile
        </>
      ),
      icon: <Smartphone size={50} strokeWidth={3} />,
      link: '/services/mobile'
    },
  ];

  return (
    <main className=''>
      <div className='space-y-8 max-md:space-y-6'>
        <div className='grid grid-cols-3 max-lg:gap-6 max-md:grid-cols-1  max-md:h-[700px] gap-8 h-64'>
          {topRowServices.map((service, index) => (
            <ServiceItem key={`top-${index}`} {...service} />
          ))}
        </div>
        <div className='flex max-md:flex-wrap max-md:w-full gap-8 max-lg:gap-6 h-64 max-md:h-[450px]'>
          <ServiceItem {...bottomRowServices[0]} className="w-1/3 max-md:w-full " />
          <ServiceItem {...bottomRowServices[1]} className="w-2/3  max-md:w-full " />
        </div>
      </div>
    </main>
  );
};

export default ServicesSection;