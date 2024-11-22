import React from 'react';
import { StepProps } from '../Types';
import { PLATFORMS } from '../Constants';
import { Paragraph } from '../../../Typography';

export const PlatformStep: React.FC<StepProps> = ({ formData, onChange }) => {
  return (
    <div className="grid grid-cols-1 gap-0">
      <Paragraph className="-mt-2 mb-10 text-center font-medium text-gray-900">
        Choisissez votre plateforme de rendez-vous
      </Paragraph>
      <div className="grid grid-cols-3 gap-6">
        {PLATFORMS.map(({ id, label, icon: Icon }) => (
          <label
            key={id}
            className="group flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-300
              hover:border-[#2e0f84] hover:bg-[#2e0f84] hover:text-white hover:shadow hover:scale-105
              data-[state=checked]:border-[#2e0f84] data-[state=checked]:bg-[#2e0f84] data-[state=checked]:text-white data-[state=checked]:shadow data-[state=checked]:scale-105"
            data-state={formData.platform === id ? 'checked' : 'unchecked'}
          >
            <input
              type="radio"
              name="platform"
              value={id}
              required
              checked={formData.platform === id}
              onChange={(e) => onChange('platform', e.target.value)}
              className="sr-only"
            />
            <Icon 
              size={32} 
              className="text-[#2e0f84] transition-colors duration-300 
                group-hover:text-white
                group-data-[state=checked]:text-white"
            />
            <span className="mt-3 text-base font-medium">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};