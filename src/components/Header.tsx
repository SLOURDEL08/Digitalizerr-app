import React from 'react';
import Button from './Button';
import logoImage from '../images/digi-logo.png'; // Assurez-vous que le chemin est correct
import starImage from '../images/star.png'; // Assurez-vous que le chemin est correct
import ScrollDownAnimation from './ScrollDown';



const Header: React.FC = () => {
  return (
      <header className="h-screen flex flex-col justify-center items-center ">
          <div className='text-center -space-y-2  text-white font-medium text-4xl w-full'>
              <h1 className='text-2xl tracking-widest'>La solution la plus simple pour votre digitalisation</h1>
              <img src={logoImage} className='w-[90%] h-auto m-auto' alt='logo webapp'/>
          </div>
          <Button size='large'>Découvrir</Button>
          <img src={starImage} alt='star' className='w-10 h-auto absolute top-[10%] right-[20%]' />
          <img src={starImage} alt='star' className='w-24 h-auto absolute top-[10%] right-[10%]' />
          <img src={starImage} alt='star' className='w-24 h-auto absolute bottom-[15%] right-[10%]' />
          <ScrollDownAnimation width={250} height={250} />

      
    </header>
  );
};

export default Header;