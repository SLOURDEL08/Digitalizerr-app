import React, { useState } from 'react';
import arrow from '../images/arrow.png'; // Assurez-vous que le chemin est correct

interface SliderProps {
  images: string[];
  titles: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ images, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-[40%] overflow-hidden relative bg-[#00000030] hover:bg-[#00000040] transition-all p-8 px-10 rounded-3xl'>
      <div className='flex overflow-hidden justify-center p-4 items-center absolute inset-0 w-full h-full'>
        <div className='w-full h-full overflow-hidden rounded-2xl relative'>
          <img 
            src={images[currentIndex]} 
            className='w-full relative h-full object-cover object-top absolute inset-0' 
            alt={titles[currentIndex]} 
          />
          <div className='rounded-2xl w-full h-full absolute inset-0'></div>
        </div>
      </div>
      <div className='relative h-full flex items-end'>
        <p className='w-fit mx-auto text-sm text-center px-6 tracking-widest p-2 rounded-full bg-gradient-to-t bg-black/60 text-[#fff] pantonlight shadow-xl border-white backdrop-blur-sm'>
          {titles[currentIndex]}
        </p>
        <img 
          src={arrow} 
          className='h-14 w-auto absolute -bottom-2 left-0 rotate-180 scale-100 hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer' 
          alt='Previous'
          onClick={goToPrevious}
        />
        <img 
          src={arrow} 
          className='h-14 w-auto absolute -bottom-2 right-0 opacity-80 scale-100 hover:scale-110 transition-all duration-300 hover:opacity-100 cursor-pointer' 
          alt='Next'
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;