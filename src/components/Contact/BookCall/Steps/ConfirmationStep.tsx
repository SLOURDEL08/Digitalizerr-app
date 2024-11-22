import React from 'react';
import { StepProps } from '../Types';
import { COLORS } from '../Constants';

export const ConfirmationStep: React.FC<StepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-8">
      {/* Résumé du rendez-vous */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-4">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Récapitulatif de votre rendez-vous</h3>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Nom complet</p>
            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
          </div>
          <div>
            <p className="text-gray-500">Société</p>
            <p className="font-medium">{formData.company || '-'}</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{formData.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Téléphone</p>
            <p className="font-medium">{formData.phone}</p>
          </div>
          <div>
            <p className="text-gray-500">Plateforme</p>
            <p className="font-medium">{formData.platform}</p>
          </div>
          <div>
            <p className="text-gray-500">Horaire</p>
            <p className="font-medium">{formData.timeSlot}</p>
          </div>
        </div>
      </div>

      {/* Message de rappel */}
      <div className="bg-[#F6D663] bg-opacity-10 p-6 rounded-xl">
        <div className="flex items-start">
          <div className="flex-1">
            <h4 className="text-lg font-medium text-[#2e0f84] mb-2">Rappel automatique</h4>
            <p className="text-gray-600">
              Vous recevrez un email de confirmation ainsi qu'un rappel la veille de votre rendez-vous.
            </p>
          </div>
        </div>
      </div>

      {/* Conditions et consentement */}
      <div className="space-y-4">
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={(e) => onChange('acceptTerms', e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2e0f84] focus:ring-[#2e0f84]"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-900">
            J'accepte que mes informations soient utilisées pour le traitement de ma demande de rendez-vous. 
            En cochant cette case, je reconnais avoir pris connaissance de la politique de confidentialité 
            et accepte que mes données personnelles soient traitées conformément à celle-ci.
          </span>
        </label>
      </div>
    </div>
  );
};