import React from 'react';
import { StepProps } from '../Types';
import { INTERESTS } from '../Constants';
import { Paragraph } from '../../../Typography';

export const InterestsStep: React.FC<StepProps> = ({ formData, onChange }) => {
  const handleInterestChange = (interestId: string) => {
    const currentInterests = formData.interests || [];
    const newInterests = currentInterests.includes(interestId)
      ? currentInterests.filter(id => id !== interestId)
      : [...currentInterests, interestId];
    onChange('interests', newInterests);
  };

  return (
    <div className="space-y-6">
      <Paragraph className="-mt-2 mb-10 text-center font-medium text-gray-900">
        Sélectionnez vos centres d'intérêt
      </Paragraph>
      <div className="grid grid-cols-3 gap-4">
        {INTERESTS.map(({ id, label }) => (
          <label
            key={id}
            className="group flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer 
              bg-white border-gray-200
              transition-[transform,shadow] duration-300 ease-in-out
              hover:border-[#2e0f84] hover:bg-[#2e0f84] hover:text-white hover:shadow hover:scale-105
              data-[state=checked]:border-[#2e0f84] data-[state=checked]:bg-[#2e0f84] data-[state=checked]:text-white data-[state=checked]:shadow data-[state=checked]:scale-105"
            data-state={formData.interests?.includes(id) ? 'checked' : 'unchecked'}
          >
            <input
              type="checkbox"
              checked={formData.interests?.includes(id)}
              onChange={() => handleInterestChange(id)}
              className="sr-only"
            />
            <span className="text-base transition-colors duration-300
              text-gray-700 
              group-hover:text-white
              group-data-[state=checked]:text-white"
            >
              {label}
            </span>
          </label>
        ))}
      </div>
      {formData.interests.length === 0 && (
        <p className="text-red-500 text-sm mt-1">
          Veuillez sélectionner au moins un centre d'intérêt
        </p>
      )}
    </div>
  );
};

export default InterestsStep;