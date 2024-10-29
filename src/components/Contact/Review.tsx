import React, { useState } from 'react';
import arrow from '../../images/arrow.png';
import face1 from '../../images/face1.png';
import face2 from '../../images/face2.png';
import face3 from '../../images/face3.png';
import face4 from '../../images/face4.png';
import face5 from '../../images/face5.png';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Daniel Steward", image: face1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "09/19/2024", color: "purple", rating: 4 },
  { name: "Emma Johnson", image: face2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "10/20/2024", color: "yellow", rating: 5 },
  { name: "Michael Brown", image: face3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "11/21/2024", color: "blue", rating: 3 },
  { name: "Sophia Lee", image: face4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "12/22/2024", color: "green", rating: 4 },
  { name: "William Taylor", image: face5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "01/23/2025", color: "red", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center space-x-1 mb-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          fill={star <= rating ? "#FFD700" : "none"}
          color="#FFD700"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
};

const ReviewSection: React.FC<{ onReserveClick: () => void }> = ({ onReserveClick }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const getAvatarClass = (index: number) => {
    const distance = (index - currentIndex + testimonials.length) % testimonials.length;
    if (distance === 0) return 'border-4 rounded-full border-white relative max-md:w-20 max-md:h-20 w-24 h-24 z-[3]';
    if (distance === 1 || distance === testimonials.length - 1) return 'border-4 rounded-full border-white relative opacity-80 max-md:w-14 max-md:h-14 w-20 h-20 z-[2] -mx-4';
    return 'border-4 rounded-full border-white relative max-md:w-10 max-md:h-10 w-16 h-16 z-[1] max-md:-mx-1 -mx-2 opacity-20';
  };

  const getColorStyles = (color: string) => {
    const colorMap: { [key: string]: { border: string, background: string } } = {
      purple: { border: '#9333EA', background: '#F3E8FF' },
      yellow: { border: '#FBBF24', background: '#FEF3C7' },
      blue: { border: '#3B82F6', background: '#DBEAFE' },
      green: { border: '#10B981', background: '#D1FAE5' },
      red: { border: '#EF4444', background: '#FEE2E2' },
    };
    return colorMap[color] || { border: 'white', background: 'transparent' };
  };

  const renderAvatars = () => {
    return testimonials.map((_, index) => {
      const adjustedIndex = (currentIndex - 2 + index + testimonials.length) % testimonials.length;
      const testimonial = testimonials[adjustedIndex];
      const colorStyles = getColorStyles(testimonial.color);
      return (
        <div key={adjustedIndex} className={getAvatarClass(adjustedIndex)}>
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full p-2 rounded-full"
            style={{
              borderColor: colorStyles.border,
              backgroundColor: colorStyles.background,
              borderWidth: '4px',
            }}
          />
        </div>
      );
    });
  };

  return (
    <div className='flex flex-col justify-between gap-4 rounded-2xl text-center max-md:p-4 p-8 bg-white w-full'>
      <div className='avatar-container flex justify-center items-center'>
        {renderAvatars()}
      </div>
      
      <div className='w-4/5 mx-auto space-y-4'>
        <div className='flex items-center justify-center gap-8'>
          <img 
            src={arrow} 
            alt='Previous' 
            className='h-5 rotate-180 opacity-40 hover:opacity-100 transition-all duration-200 scale-100 hover:scale-110 cursor-pointer' 
            onClick={goToPrevious}
          />
          <span className=''>{testimonials[currentIndex].name}</span>
          <img 
            src={arrow} 
            alt='Next' 
            className='h-5 opacity-40 hover:opacity-100 transition-all duration-200 scale-100 hover:scale-110 cursor-pointer' 
            onClick={goToNext}
          />
        </div>
        
        <p className='pantonlight text-xs'>{testimonials[currentIndex].text}</p>
        <div className='pantonlight'>
          <StarRating rating={testimonials[currentIndex].rating} />
          <span className=''>{testimonials[currentIndex].name}</span>
          <p className='text-xs pt-1.5'>{testimonials[currentIndex].date}</p>
        </div>
      </div>
      <button 
        className='w-full text-base py-2 border-[#2e0f84] text-[#2e0f84] transition-all duration-500 hover:bg-[#2e0f84] hover:text-[#F6D663] border-2 rounded-full'
        onClick={onReserveClick}
      >
        Réservez votre appel téléphonique
      </button>
    </div>
  );
};

export default ReviewSection;