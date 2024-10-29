import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { Subtitle, Title } from './Typography';

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

const Loader = ({ opacity }: { opacity: number }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center z-10 bg-black backdrop-blur-3xl pointer-events-none"
    style={{
      opacity,
      transition: 'opacity 0.8s ease-out'
    }}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      className="w-32 h-32"
      key="loader-svg"
    >
      <g>
        <circle 
          fill="#F6D663" 
          stroke="#F6D663" 
          strokeWidth="15" 
          r="15" 
          cx="40" 
          cy="65"
        >
          <animate 
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          />
        </circle>
        <circle 
          fill="#F6D663" 
          stroke="#F6D663" 
          strokeWidth="15" 
          r="15" 
          cx="100" 
          cy="65"
        >
          <animate 
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          />
        </circle>
        <circle 
          fill="#F6D663" 
          stroke="#F6D663" 
          strokeWidth="15" 
          r="15" 
          cx="160" 
          cy="65"
        >
          <animate 
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          />
        </circle>
      </g>
    </svg>
  </div>
);

const ThemeViewer: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('Cosmetic');
  const [isLoading, setIsLoading] = useState(true);
  const [loaderOpacity, setLoaderOpacity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const loadStartTimeRef = useRef<number>(0);

  const startAutoScroll = () => {
    if (imageContainerRef.current && imageRef.current) {
      const totalHeight = imageRef.current.offsetHeight - imageContainerRef.current.offsetHeight;
      
      if (imageRef.current) {
        imageRef.current.style.transition = 'none';
        imageRef.current.style.transform = 'translateY(0)';
        void imageRef.current.offsetHeight;

        scrollTimeoutRef.current = setTimeout(() => {
          if (imageRef.current) {
            imageRef.current.style.transition = 'transform 15s linear';
            imageRef.current.style.transform = `translateY(-${totalHeight}px)`;
          }
        }, 500);
      }
    }
  };

  const finishLoading = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - loadStartTimeRef.current;
    const remainingTime = Math.max(0, 2000 - elapsedTime);

    // D'abord, on affiche l'image en dessous du loader
    setImageLoaded(true);

    // Attendre le temps minimum avant de commencer à faire disparaître le loader
    setTimeout(() => {
      // S'assurer que l'image est bien visible
      setTimeout(() => {
        // Faire disparaître le loader progressivement
        setLoaderOpacity(0);
        
        // Une fois le loader disparu, démarrer le scroll
        setTimeout(() => {
          setIsLoading(false);
          startAutoScroll();
        }, 800);
      }, 100);
    }, remainingTime);
  };

  const handleThemeChange = (theme: string) => {
    // Réinitialiser tous les états
    setIsLoading(true);
    setLoaderOpacity(1);
    setImageLoaded(false);
    setCurrentTheme(theme);
    loadStartTimeRef.current = Date.now();
    
    // Nettoyer les animations précédentes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Réinitialiser la position de l'image
    if (imageRef.current) {
      imageRef.current.style.transition = 'none';
      imageRef.current.style.transform = 'translateY(0)';
      imageRef.current.style.opacity = '0';
    }

    // Précharger la nouvelle image
    const img = new Image();
    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
      }
      finishLoading();
    };
    img.src = themeImages[theme as keyof typeof themeImages];
  };

  // Chargement initial
  useEffect(() => {
    loadStartTimeRef.current = Date.now();
    const img = new Image();
    img.src = themeImages[currentTheme as keyof typeof themeImages];
    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
      }
      finishLoading();
    };

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className='flex items-center'>
      <div className='flex max-lg:block gap-20'>
        <div className='w-[55%] max-lg:w-full'>
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

        <div className='border-4 w-[45%] max-lg:w-full max-lg:mt-10 max-lg:h-[500px] rounded-3xl p-3'>
          <div 
            ref={imageContainerRef}
            className='relative w-full h-full overflow-hidden rounded-xl'
          >
            <img
              ref={imageRef}
              src={themeImages[currentTheme as keyof typeof themeImages]}
              alt={`${currentTheme} theme`}
              className="w-full h-auto absolute object-cover"
              style={{
                minHeight: '150%',
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
            {isLoading && <Loader opacity={loaderOpacity} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeViewer;