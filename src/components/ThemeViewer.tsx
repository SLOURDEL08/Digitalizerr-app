import React, { useState } from 'react';
import Button from './Button';

// Importations d'images (inchangées)
import cosmeticImage from '../images/themeviewer/cosmetic.png';
import immobillierImage from '../images/themeviewer/immobillier.png';
import artisteImage from '../images/themeviewer/artiste.png';
import juridiqueImage from '../images/themeviewer/juridique.png';
import restaurantImage from '../images/themeviewer/restaurant.png';
import santeImage from '../images/themeviewer/sante.png';
import batimentImage from '../images/themeviewer/batiment.png';
import peintreImage from '../images/themeviewer/peintre.png';
import transportImage from '../images/themeviewer/vtc.png';
import boutiqueImage from '../images/themeviewer/cosmetic.png';

const themeImages = {
  Cosmetic: cosmeticImage,
  Immobillier: immobillierImage,
  Artiste: artisteImage,
  Juridique: juridiqueImage,
  Restaurant: restaurantImage,
  Santé: santeImage,
  Batiment: batimentImage,
  Peintre: peintreImage,
  Transport: transportImage,
  Boutique: boutiqueImage,
};

const ThemeViewer: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('Cosmetic');

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
  };

  return (
    <div className=' flex items-center py-20'>
      <div className='flex gap-10'>
        <div className='w-[55%]'>
          <p className='text-white text-xl tracking-widest font-panton-light mb-4'>Un site qui vous ressemble</p>
          <span className='text-[#F6D663] text-6xl leading-none font-panton'>Choisissez parmi un large choix de thèmes</span>
          <div className='filter-contain flex flex-wrap gap-6 mt-8 mb-11'>
            {Object.keys(themeImages).map((theme) => (
              <Button
                key={theme}
                variant={currentTheme === theme ? 'filter-active' : 'filter'}
                size='small'
                onClick={() => handleThemeChange(theme)}
              >
                {theme}
              </Button>
            ))}
          </div>
          <Button size='medium' className='text-xl'>Réaliser un devis</Button>
        </div>
        <div className='border-4 w-[45%] rounded-3xl p-3'>
          <div className='relative w-full h-full overflow-hidden rounded-xl'>
            <img
              src={themeImages[currentTheme as keyof typeof themeImages]}
              alt={`${currentTheme} theme`}
              className='w-full h-full absolute object-cover object-top overflow-scroll inset-0 transition-opacity duration-500 ease-in-out'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeViewer;