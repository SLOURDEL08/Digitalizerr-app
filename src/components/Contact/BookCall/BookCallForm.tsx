import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Title } from '../../Typography';
import { FormData } from './Types';
import { STEPS_CONFIG } from './Constants';
import { ProgressBar } from './ProgressBar';
import { PersonalInfoStep } from './Steps/PersonalInfoStep';
import { PlatformStep } from './Steps/PlatformStep';
import { InterestsStep } from './Steps/InterestsStep';
import { TimeSlotStep } from './Steps/TimeSlotStep';
import { ConfirmationStep } from './Steps/ConfirmationStep';

interface BookCallFormProps {
  selectedDate: number | null;
  currentDate: Date;
  formData: FormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (name: string, value: string | string[] | boolean) => void;
}

export const BookCallForm: React.FC<BookCallFormProps> = ({
  selectedDate,
  currentDate,
  formData,
  onSubmit,
  onChange,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = STEPS_CONFIG.length;

  const formatDate = () => {
    const month = currentDate.toLocaleString('fr-FR', { month: 'long' });
    const year = currentDate.getFullYear();
    return `${selectedDate} ${month} ${year}`;
  };

  const canProceed = () => {
    const currentStepConfig = STEPS_CONFIG[currentStep - 1];
    return currentStepConfig.validateFields.every(field => {
      if (field === 'interests') return formData.interests.length > 0;
      if (field === 'acceptTerms') return formData.acceptTerms;
      return Boolean(formData[field as keyof FormData]);
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps && canProceed()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === totalSteps && canProceed()) {
      onSubmit(new Event('submit') as any);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} onChange={onChange} />;
      case 2:
        return <PlatformStep formData={formData} onChange={onChange} />;
      case 3:
        return <InterestsStep formData={formData} onChange={onChange} />;
      case 4:
        return <TimeSlotStep formData={formData} onChange={onChange} />;
      case 5:
        return <ConfirmationStep formData={formData} onChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl shadow-xl">
      <div className="px-8 py-6 border-b border-gray-200">
        <Title className="!text-3xl text-center !text-[#2e0f84] flex items-center justify-center gap-3">
          RDV
          <span className="bg-[#F6D663] text-[#2e0f84] px-6 py-2 rounded-full">
            {formatDate()}
          </span>
        </Title>
      </div>

      <div className="p-8 space-y-2">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        
        {/* Titre de l'étape courante */}
        <div className="text-center pt-2 pb-2">
          <h2 className="text-xl font-medium text-gray-900">
            {STEPS_CONFIG[currentStep - 1].title}
          </h2>
        </div>

        {/* Contenu de l'étape */}
        <div className="">
          {renderStepContent()}
        </div>
      </div>

      {/* Barre de navigation */}
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex justify-between items-center">
        <button
          type="button"
          onClick={handleBack}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg transition-colors
            ${currentStep === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-[#2e0f84] hover:bg-[#F6D663] hover:bg-opacity-20'
            }`}
          disabled={currentStep === 1}
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Retour</span>
        </button>

        <div className="text-sm font-medium text-gray-500">
          Étape {currentStep} sur {totalSteps}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg transition-colors
            ${!canProceed()
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : currentStep === totalSteps
                ? 'bg-[#F6D663] text-[#2e0f84] hover:bg-opacity-90'
                : 'bg-[#2e0f84] text-white hover:bg-opacity-90'
            }`}
        >
          <span className="font-medium">
            {currentStep === totalSteps ? 'Confirmer le rendez-vous' : 'Suivant'}
          </span>
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
};

export default BookCallForm;