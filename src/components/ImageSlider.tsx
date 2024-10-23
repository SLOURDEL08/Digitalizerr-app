import React, { useState } from 'react';
import arrow from '../images/arrow-white.png';
import arrowyellow from '../images/arrow-yellow.png';

interface SliderProps {
  images: string[];
  titles: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ images, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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
    <div 
      className='w-[40%] overflow-hidden group relative bg-[#00000030] hover:bg-[#00000040] transition-all duration-500 ease-in-out p-8 px-10 rounded-3xl'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='flex overflow-hidden justify-center p-4 items-center absolute inset-0 w-full h-full'>
        <div className='w-full h-full overflow-hidden rounded-2xl relative'>
          <img 
            src={images[currentIndex]} 
            className='w-full relative h-full object-cover object-top absolute inset-0 transition-all duration-500 ease-in-out' 
            alt={titles[currentIndex]} 
          />
          <div className='rounded-2xl w-full h-full absolute inset-0'></div>
        </div>
      </div>
      <div className='relative h-full flex items-end'>
        <div 
          className={` bg-[#2e0f84] shadow-2xl backdrop-blur-xl transition-all duration-500 ease-in-out w-full rounded-full p-2 px-6 flex items-center justify-between`}
        >
          <img 
            src={arrowyellow}
            className='h-7 rotate-180 scale-95 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer' 
            alt='Previous'
            onClick={goToPrevious}
          />

          <p className='w-fit mx-auto text-lg text-center uppercase font-extralight tracking-widest rounded-full text-white border-white transition-all duration-500 ease-in-out'>
            {titles[currentIndex]}
          </p>

          <img 
            src={arrowyellow}
            className='h-7 w-auto scale-95 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer' 
            alt='Next'
            onClick={goToNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
