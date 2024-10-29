import React, { useState, useRef, useEffect } from 'react';
import starProcessus from '../images/starprocessus.png';
import starImage from '../images/star.png';
import arrowRight from '../images/arrow.png';
import bubble from '../images/bubble.png';
import cald from '../images/cald.png';
import { Title } from './Typography';

interface ProcessStepProps {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  isGhost?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  title, 
  description, 
  isActive, 
  onClick, 
  isGhost = false
}) => (
  <div
    onClick={onClick}
    className={`
      cursor-pointer min-w-80 transition-all relative text-center p-8 rounded-3xl w-60 mt-12 mb-10 space-y-2 pt-14
      ${isActive ? 'bg-[#F6D663] scale-110 text-black' : 'bg-[#00000020] animate- hover:bg-[#00000030] text-white'}
      ${isGhost ? 'opacity-0 pointer-events-none' : ''}
    `}
  >
    <img 
      src={starProcessus} 
      className={`w-40 absolute -top-12 z-10 left-1/2 -translate-x-1/2 ${isGhost ? 'opacity-0' : ''}`} 
      alt='star' 
    />
    <span className='text-xl font-poppins font-semibold'>{title}</span>
    <p className='font-light font-poppins text-xs'>{description}</p>
  </div>
);

const ProcessusSectionServices: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processSteps = [
    { title: 'Prise de contact', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Echanges', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Propositions', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Validation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Lancement', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Livraison', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
  ];

  const ghostSteps = Array(4).fill({
    title: '',
    description: '',
    isGhost: true
  });

  const scrollToStep = (index: number) => {
    if (scrollContainerRef.current && stepsRefs.current[index]) {
      const stepElement = stepsRefs.current[index];
      if (stepElement) {
        const containerRect = scrollContainerRef.current.getBoundingClientRect();
        const stepRect = stepElement.getBoundingClientRect();
        const relativePosition = stepRect.left - containerRect.left;
        const targetScroll = scrollContainerRef.current.scrollLeft + relativePosition - 16;
        
        scrollContainerRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    stepsRefs.current = stepsRefs.current.slice(0, processSteps.length);
  }, []);

  useEffect(() => {
    scrollToStep(activeStep);
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const handleNavigationClick = () => {
    if (activeStep === processSteps.length - 1) {
      // Si on est au dernier step, retourner au début
      setActiveStep(0);
    } else {
      // Sinon, aller au step suivant
      setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1));
    }
  };

  const isLastStep = activeStep === processSteps.length - 1;

  return (
    <div className="flex relative flex-col items-center justify-center max-md:gap-6 gap-10 !-mb-6">
      <div className="relative w-auto z-20 text-center ">
        <Title className="max-md:mb-8 z-20">Notre Processus</Title>
          <img src={bubble} alt="star" className="w-28 z-10 max-md:w-8  absolute -top-16 -right-32 -rotate-12" />
      </div>

      <div className="group relative w-full">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto  gap-10 scrollbar-hide pl-4"
        >
          <div className="flex gap-10 ">
            {processSteps.map((step, index) => (
              <div 
                key={`step-${index}`}
                ref={el => stepsRefs.current[index] = el}
              >
                <ProcessStep
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index}
                  onClick={() => handleStepClick(index)}
                />
              </div>
            ))}
            
            {ghostSteps.map((step, index) => (
              <div key={`ghost-${index}`}>
                <ProcessStep
                  title=""
                  description=""
                  isActive={false}
                  onClick={() => {}}
                  isGhost={true}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 rounded-full transition-transform duration-300"
          onClick={handleNavigationClick}
        >
          <img 
            src={arrowRight} 
            alt={isLastStep ? "Retour au début" : "Suivant"} 
            className={`w-24 hover:opacity-100 opacity-60 scale-95 hover:scale-105 invert transition-transform duration-300 
              ${isLastStep ? 'rotate-180' : ''}`}
          />
        </button>

        <div className="absolute pointer-events-none -right-10 inset-0 bg-gradient-to-r from-transparent from-60% to-[#2e0f84] to-100% z-10" />
      </div>
    </div>
  );
};

export default ProcessusSectionServices;