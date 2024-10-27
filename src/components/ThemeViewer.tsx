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
import { Subtitle, Title } from './Typography';

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
    <div className=' flex items-center'>
      <div className='flex max-lg:block gap-20'>
        <div className='w-[50%] max-lg:w-full'>
          <Subtitle className='mb-4'>Un site qui vous ressemble</Subtitle>
          <Title type='secondary' className=''>Choisissez parmi un large choix de thèmes</Title>
          <div className='filter-contain max-md:text-xs flex flex-wrap gap-6 mt-8 mb-11'>
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
        <div className='border-4 w-[50%] max-lg:w-full max-lg:mt-10 max-lg:h-[500px] rounded-3xl p-3'>
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