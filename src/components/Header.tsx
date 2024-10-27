import React from 'react';
import Button from './Button';
import logoImage from '../images/digi-logo.png'; // Assurez-vous que le chemin est correct
import starImage from '../images/star.png'; // Assurez-vous que le chemin est correct
import computerImage from '../images/computer.png'; // Assurez-vous que le chemin est correct
import logo from '../images/logo.png';
import ScrollDownAnimation from './ScrollDown';
import { Subtitle } from './Typography';



const Header: React.FC = () => {
  return (
      <header className="h-screen flex max-md:flex-re flex-col justify-center items-center mt-10 max-md:-mb-32 -mb-40">
          <div className='text-center flex flex-col gap-0  text-white font-medium text-4xl w-full'>
        <Subtitle className='max-md:!text-sm max-md:mb-2 max-sm:!text-xs order-2'>La solution la plus simple pour votre digitalisation</Subtitle>
              <img src={logo} className='w-60 order-1 mb-4 hidden max-md:block mx-auto' alt='logo webapp'/>
              <img src={logoImage} className='w-[90%] order-3 max-lg:w-full max-md:text-left h-auto m-auto' alt='logo webapp'/>
          </div>
          <Button className='mt-4' size='large'>Découvrir</Button>
          <img src={starImage} alt='star' className='w-10  max-md:w-8 h-auto absolute top-[20%] max-md:top-40 max-md:right-40 max-lg:right-60 right-[20%]' />
          <img src={starImage} alt='star' className='w-20  max-md:w-14 h-auto absolute top-[18%] max-md:top-40 right-[12%]' />
          <img src={starImage} alt='star' className='w-24 max-md:w-10 h-auto absolute bottom-[25%] max-md:bottom-24 max-md:right-20 right-[20%]' />
          <img src={computerImage} alt='star' className='w-60 max-md:w-32 h-auto absolute bottom-[10%] max-md:left-[10%] left-[15%]' />
          <ScrollDownAnimation width={80} height={80} className='max-md:!w-10 mt-14' />

      
    </header>
  );
};

export default Header;