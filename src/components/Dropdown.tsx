// DropDown.tsx
import React from 'react';
import { useNavigation } from './NavigationContext';

const DropDown: React.FC = () => {
  const { isServicesHovered, setIsServicesHovered, isScrolled } = useNavigation();

  return (
    <div 
      className={`
        fixed right-80 w-64 pt-4 
        ease-in-out z-40
        
        ${isScrolled ? 'top-[130px]' : 'top-20'}
        ${isServicesHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
      `}
      onMouseEnter={() => setIsServicesHovered(true)}
      onMouseLeave={() => setIsServicesHovered(false)}
    >
      {/* Conteneur du contenu avec effet de blur */}
      <div className="relative">
        {/* Couche de fond avec blur */}
        <div 
          className="
            absolute inset-0
            bg-black/50
            backdrop-blur-lg rounded-2xl
            z-0
          "
          style={{
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            transform: 'translate3d(0,0,0)'
          }}
        />
        
        {/* Contenu */}
        <div 
          className={`
            relative rounded-xl
            transform transition-transform duration-300
            z-10 p-6 space-y-3
            ${isServicesHovered ? 'scale-100' : 'scale-95'}
          `}
        >
          {['Service 1', 'Service 2', 'Service 3'].map((service, index) => (
            <a
              key={index}
              href="/"
              className="
                block text-white pantonlight text-md
                hover:opacity-70 transition-opacity duration-200
              "
            >
              {service}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;