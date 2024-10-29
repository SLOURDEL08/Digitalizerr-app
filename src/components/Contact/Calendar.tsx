import React, { useState } from 'react';
import arrowrightwhite from '../../images/arrow-right-w.png';
import arrowrightpurple from '../../images/arrow-right-p.png';
import { ArrowLeft } from 'lucide-react';
import BookCallForm from './BookCallForm';

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

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    platform: '',
    interests: [],
    timeSlot: ''
  });

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    setShowModal(true);
  };

const handleInputChange = (name: string, value: string | string[]) => {
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Exemple de format pour l'email
      const emailData = {
        to: 'admin@example.com',
        subject: `Nouvelle réservation - ${formData.firstName} ${formData.lastName}`,
        body: `
          Nouvelle réservation pour le ${selectedDate} Mai 2023
          Créneau: ${formData.timeSlot}
          
          Informations du client:
          Nom: ${formData.lastName}
          Prénom: ${formData.firstName}
          Société: ${formData.company}
          Email: ${formData.email}
          Téléphone: ${formData.phone}
          Plateforme: ${formData.platform}
          Centres d'intérêt: ${formData.interests.join(', ')}
        `
      };
      
      // Envoi de l'email (à implémenter selon votre backend)
      // await sendEmail(emailData);
      
      alert('Votre rendez-vous a été confirmé !');
      setShowModal(false);
      setSelectedDate(null);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        platform: '',
        interests: [],
        timeSlot: ''
      });
    } catch (error) {
      alert('Une erreur est survenue lors de la réservation.');
    }
  };

  return (
    <div className="relative">
      <div className="flex relative flex-col justify-start gap-4 h-full rounded-lg pb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white mb-2">Mai 2023</h2>
          <div className="flex space-x-2">
            <button className="text-white hover:text-yellow-400">&lt;</button>
            <button className="text-white hover:text-yellow-400">&gt;</button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
            <div key={day} className="text-gray-400 font-medium">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              onClick={() => handleDateClick(i + 1)}
              className={`py-1 cursor-pointer rounded-full ${
                selectedDate === i + 1
                  ? 'bg-yellow-400 drop-shadow-xl border-2 border-yellow-400 text-white'
                  : 'text-white border-2 hover:border-yellow-400 hover:text-white hover:bg-yellow-400'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <button
          disabled={!selectedDate}
          className={`flex absolute font-light w-full bottom-0 left-0 items-center border-white justify-between border-[2.5px] bg-transparent
            transition-all duration-300 py-2 text-white px-8 rounded-full text-center
            ${selectedDate ? 'hover:text-[#2e0f84] group hover:bg-white' : 'opacity-50 cursor-not-allowed'}`}
          onClick={() => setShowModal(true)}
        >
          <span className="placeholder-white bg-transparent text-lg group-hover:text-[#2e0f84]">
            Valider votre rendez-vous
          </span>
          <div className="relative group">
            <img 
              src={arrowrightwhite}
              alt="White Arrow"
              className="h-5 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            <img
              src={arrowrightpurple}
              alt="Purple Arrow"
              className="h-5 absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
          </div>
        </button>
      </div>

      {/* Modal de réservation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/95 rounded-2xl p-8 w-full max-w-xl mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={24} />
            </button>
            
            <BookCallForm
              selectedDate={selectedDate}
              formData={formData}
              onSubmit={handleSubmit}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;