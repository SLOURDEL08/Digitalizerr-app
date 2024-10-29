import React from 'react';
import { Phone, Video, MessageCircle } from 'lucide-react';
import { Title } from '../Typography';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  platform: string;
  interests: string[];
  timeSlot: string;
}

interface BookCallFormProps {
  selectedDate: number | null;
  formData: FormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (name: string, value: string | string[]) => void;
}

const PLATFORMS = [
  { id: 'phone', label: 'Téléphone', icon: Phone },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { id: 'visio', label: 'Visio', icon: Video },
];

const INTERESTS = [
  { id: 'web', label: 'Site Web' },
  { id: 'design', label: 'Design UI/UX' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'seo', label: 'Référencement' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'conseil', label: 'Conseil' },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export const BookCallForm: React.FC<BookCallFormProps> = ({
  selectedDate,
  formData,
  onSubmit,
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.name, e.target.value);
  };

  const handleInterestChange = (interestId: string) => {
    const currentInterests = formData.interests || [];
    const newInterests = currentInterests.includes(interestId)
      ? currentInterests.filter(id => id !== interestId)
      : [...currentInterests, interestId];
    
    onChange('interests', newInterests);
  };

  return (
      <form  onSubmit={onSubmit} className="space-y-4 form-booking-call">
      <Title  className="!text-2xl flex items-center gap-2 justify-center mx-auto mt-2 font-bold text-center !text-[#2e0f84] mb-6">
        Réservation pour le <b className='p-2 px-4 rounded-full pantonlight text-lg text-[#F6D663] bg-black '>{selectedDate} avril 2024</b>
      </Title>

      {/* Informations personnelles sur une ligne */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-1 font-rubik font-light w-full border-2  rounded-lg border-gray-300 shadow-sm focus:border-[#2e0f84] focus:ring-[#2e0f84]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-1 w-full  font-rubik font-light border-2  rounded-lg border-gray-300 shadow-sm focus:border-[#2e0f84] focus:ring-[#2e0f84]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Société</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="mt-1 p-1 w-full  font-rubik font-light border-2  rounded-lg border-gray-300 shadow-sm focus:border-[#2e0f84] focus:ring-[#2e0f84]"
          />
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-1 font-rubik font-light border-2  w-full rounded-lg border-gray-300 shadow-sm focus:border-[#2e0f84] focus:ring-[#2e0f84]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 w-full p-1 border-2  font-rubik font-light  rounded-lg border-gray-300 shadow-sm focus:border-[#2e0f84] focus:ring-[#2e0f84]"
          />
        </div>
      </div>

      {/* Plateforme */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Plateforme</label>
        <div className="grid grid-cols-3 gap-4">
          {PLATFORMS.map(({ id, label, icon: Icon }) => (
            <label
              key={id}
              className={`flex flex-col  font-rubik font-light  items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                ${formData.platform === id 
                  ? 'border-[#2e0f84] bg-[#2e0f84] text-white' 
                  : 'border-gray-200 bg-white hover:border-[#2e0f84]'
                }`}
            >
              <input
                type="radio"
                name="platform"
                value={id}
                checked={formData.platform === id}
                onChange={handleInputChange}
                className="sr-only"
              />
              <Icon size={24} />
              <span className="mt-2 text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Centres d'intérêt */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Centres d'intérêt</label>
        <div className="grid grid-cols-3 gap-4">
          {INTERESTS.map(({ id, label }) => (
            <label
              key={id}
              className={`flex  font-rubik font-light  items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all text-center
                ${formData.interests?.includes(id)
                  ? 'border-[#2e0f84] bg-[#2e0f84] text-white' 
                  : 'border-gray-200 bg-white hover:border-[#2e0f84]'
                }`}
            >
              <input
                type="checkbox"
                checked={formData.interests?.includes(id)}
                onChange={() => handleInterestChange(id)}
                className="sr-only"
              />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Créneau horaire */}
      <div>
        <label className="block  text-sm font-medium text-gray-700">Créneau horaire</label>
        <select
          name="timeSlot"
          required
          value={formData.timeSlot}
          onChange={handleInputChange}
          className="mt-1 p-1 px-2 border-2 w-full  font-rubik font-light  rounded-lg border-gray-300 shadow-sm focus:border-[#2e0f84] focus:ring-[#2e0f84]"
        >
          <option className='' value="">Sélectionnez un créneau</option>
          {TIME_SLOTS.map(slot => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-[#2e0f84] text-white py-3 rounded-lg hover:bg-[#3d1bad] transition-colors"
      >
        Confirmer le rendez-vous
      </button>
    </form>
  );
};

export default BookCallForm;