import React, { useState } from 'react';
import arrowrightwhite from '../../../images/arrow-right-w.png';
import arrowrightpurple from '../../../images/arrow-right-p.png';
import BookCallForm from './BookCallForm';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  platform: string;
  interests: string[];
  timeSlot: string;
  acceptTerms: boolean;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
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
    timeSlot: '',
    acceptTerms: false
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    setSelectedDate(null);
  };

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleInputChange = (name: string, value: string | string[] | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'votre-email@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        selected_date: `${selectedDate} ${currentDate.toLocaleString('fr-FR', { month: 'long' })} ${currentDate.getFullYear()}`,
        time_slot: formData.timeSlot,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        platform: formData.platform,
        interests: formData.interests.join(', ')
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      
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
        timeSlot: '',
        acceptTerms: false
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      alert('Une erreur est survenue lors de la réservation.');
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          onClick={() => handleDateClick(i)}
          className={`py-1 cursor-pointer rounded-full text-center h-8 flex items-center justify-center
            transition-all duration-300 ${
            selectedDate === i
              ? 'bg-[#F6D663] drop-shadow-xl border-2 border-[#F6D663] text-[#2e0f84]'
              : 'text-white border-2 hover:border-[#F6D663] hover:text-[#2e0f84] hover:bg-[#F6D663]'
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="relative h-full">
      <div className="flex relative flex-col justify-start gap-4 h-full rounded-lg pb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white mb-2">
            {currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex space-x-4">
            <button 
              className="text-white hover:text-[#F6D663] transition-colors"
              onClick={handlePrevMonth}
            >
              &lt;
            </button>
            <button 
              className="text-white hover:text-[#F6D663] transition-colors"
              onClick={handleNextMonth}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
            <div key={day} className="text-gray-400 font-medium">{day}</div>
          ))}
          {renderCalendar()}
        </div>

        <button
          disabled={!selectedDate}
          className={`flex absolute font-light w-full bottom-0 left-0 items-center border-white justify-between border-[2.5px] bg-transparent
            transition-all duration-300 py-2 text-white px-8 rounded-full text-center
            ${selectedDate ? 'hover:text-[#2e0f84] group hover:bg-[#F6D663]' : 'opacity-50 cursor-not-allowed'}`}
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

      {showModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-2xl w-full max-w-xl mx-4 relative max-h-[90vh] overflow-y-auto">
            <BookCallForm
              selectedDate={selectedDate}
              currentDate={currentDate}
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