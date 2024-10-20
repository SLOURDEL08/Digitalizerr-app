import React, { useState } from 'react';
import arrow from '../images/arrow.png';
import face1 from '../images/face1.png';
import face2 from '../images/face2.png';
import face3 from '../images/face3.png';
import face4 from '../images/face4.png';
import face5 from '../images/face5.png';
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

const ReviewSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the middle testimonial

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const getAvatarClass = (index: number) => {
    const distance = (index - currentIndex + testimonials.length) % testimonials.length;
    if (distance === 0) return 'border-4 rounded-full border-white relative w-24 h-24 z-[3]';
    if (distance === 1 || distance === testimonials.length - 1) return 'border-4 rounded-full border-white relative opacity-80 w-20 h-20 z-[2] -mx-4';
    return 'border-4 rounded-full border-white relative w-16 h-16 z-[1] -mx-2 opacity-20';
  };

  const renderAvatars = () => {
    return testimonials.map((_, index) => {
      const adjustedIndex = (currentIndex - 2 + index + testimonials.length) % testimonials.length;
      const testimonial = testimonials[adjustedIndex];
      return (
        <div key={adjustedIndex} className={getAvatarClass(adjustedIndex)}>
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className={`w-full h-full border-4 border-${testimonial.color}-300 bg-${testimonial.color}-100 p-2 rounded-full`} 
          />
        </div>
      );
    });
  };

  return (
    <div className='w-full rounded-2xl text-center p-8 bg-white md:w-1/2'>
      <div className='avatar-container flex justify-center items-center'>
        {renderAvatars()}
      </div>
      
      <div className='w-4/5 mx-auto space-y-4 pt-4'>
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
    </div>
  );
};

export default ReviewSection;