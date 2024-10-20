import React from 'react';
import Lottie from 'lottie-react';
import scrollDownAnimation from '../jsonAnimation/scrolldown.json';

interface ScrollDownAnimationProps {
  width?: number | string;
  height?: number | string;
}

const ScrollDownAnimation: React.FC<ScrollDownAnimationProps> = ({ width = 180, height = 180 }) => {
  return (
    <Lottie 
      animationData={scrollDownAnimation} 
      loop={true}
          style={{ width, height }}
          className='mt-20'
    />
  );
};

export default ScrollDownAnimation;