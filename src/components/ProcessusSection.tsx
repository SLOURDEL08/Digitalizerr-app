import React from 'react';
import starProcessus from '../images/starprocessus.png';
import starImage from '../images/star.png';

interface ProcessStepProps {
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description }) => (
  <div className='bg-[#00000020] hover:bg-[#00000030] transition-all relative text-center p-8 rounded-3xl w-full space-y-2 pt-14'>
    <img src={starProcessus} className='w-34 absolute -top-12 left-1/2 -translate-x-1/2' alt='star'/>
    <span className='text-xl font-poppins font-semibold'>{title}</span>
    <p className='font-light font-poppins text-xs'>{description}</p>
  </div>
);

const ProcessusSection: React.FC = () => {
  const processSteps = [
    { title: 'Prise de contact', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Echanges', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Propositions', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Validation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Lancement', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
    { title: 'Livraison', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ante sit amet posuere. Phasellus quis tincidunt lectus, ut tempus odio.' },
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-14 py-20 '>
      <div className='relative w-full text-center flex gap-10 justify-center'>
              <h6 className='text-[#F6D663] text-7xl mb-10'>Notre processus</h6>
              <div className='flex fle items-start'>
                  <img src={starImage} alt='star' className='w-20 -mt-4 ml-4 h-auto' />
                  <img src={starImage} alt='star' className='w-14 mt-10' />
              </div>
        
      </div>
      
      <div className='grid-cols-3 grid gap-14 w-full text-white justify-center'>
        {processSteps.map((step, index) => (
          <ProcessStep key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  );
};

export default ProcessusSection;