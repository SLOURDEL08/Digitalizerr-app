import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => (
  <div className="relative w-full mb-8">
    <div className="flex">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className={`flex items-center ${
          step === totalSteps ? 'w-8' : 'flex-1'
        }`}>
          <div className={`flex items-center ${
            step === totalSteps ? 'justify-end' : 'w-full'
          }`}>
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
              step === currentStep 
                ? 'bg-[#2e0f84] text-white scale-110' 
                : step < currentStep 
                  ? 'bg-[#F6D663] text-[#2e0f84]' 
                  : 'bg-gray-200 text-gray-600'
            }`}>
              {step < currentStep ? '✓' : step}
            </div>
            {step < totalSteps && (
              <div className="flex-1 mx-2">
                <div className={`h-1 transition-all duration-300 ${
                  step < currentStep ? 'bg-[#F6D663]' : 'bg-gray-200'
                }`} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);