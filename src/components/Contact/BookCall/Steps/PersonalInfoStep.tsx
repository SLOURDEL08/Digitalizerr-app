import React from 'react';
import { StepProps } from '../Types';

export const PersonalInfoStep: React.FC<StepProps> = ({ formData, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-3 w-full font-rubik font-light border-2 rounded-lg border-gray-300 focus:border-[#2e0f84] focus:ring-[#2e0f84] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-3 w-full font-rubik font-light border-2 rounded-lg border-gray-300 focus:border-[#2e0f84] focus:ring-[#2e0f84] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Société 
          <span className="text-gray-400 ml-1">(optionnel)</span>
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 p-3 w-full font-rubik font-light border-2 rounded-lg border-gray-300 focus:border-[#2e0f84] focus:ring-[#2e0f84] transition-colors"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 w-full font-rubik font-light border-2 rounded-lg border-gray-300 focus:border-[#2e0f84] focus:ring-[#2e0f84] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            title="Veuillez entrer un numéro de téléphone valide (10 chiffres)"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-3 w-full font-rubik font-light border-2 rounded-lg border-gray-300 focus:border-[#2e0f84] focus:ring-[#2e0f84] transition-colors"
          />
        </div>
      </div>
    </div>
  );
};