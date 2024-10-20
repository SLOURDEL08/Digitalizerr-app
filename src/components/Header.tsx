import React from 'react';
import Button from './Button';
import logoImage from '../images/digi-logo.png'; // Assurez-vous que le chemin est correct
import starImage from '../images/star.png'; // Assurez-vous que le chemin est correct
import computerImage from '../images/computer.png'; // Assurez-vous que le chemin est correct

import ScrollDownAnimation from './ScrollDown';



const Header: React.FC = () => {
  return (
      <header className="h-screen flex flex-col justify-center items-center mt-10">
          <div className='text-center -space-y-4  text-white font-medium text-4xl w-full'>
              <h1 className='text-lg tracking-widest'>La solution la plus simple pour votre digitalisation</h1>
              <img src={logoImage} className='w-[90%] h-auto m-auto' alt='logo webapp'/>
          </div>
          <Button className='mt-4' size='large'>Découvrir</Button>
          <img src={starImage} alt='star' className='w-10 h-auto absolute top-[20%] right-[20%]' />
          <img src={starImage} alt='star' className='w-20 h-auto absolute top-[18%] right-[12%]' />
          <img src={starImage} alt='star' className='w-24 h-auto absolute bottom-[25%] right-[20%]' />
          <img src={computerImage} alt='star' className='w-60 h-auto absolute bottom-[10%] left-[15%]' />
          <ScrollDownAnimation width={80} height={80} />

      
    </header>
  );
};

export default Header;