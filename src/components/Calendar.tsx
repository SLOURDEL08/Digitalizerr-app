import React, { useState } from 'react';
import arrowrightwhite from '../images/arrow-right-w.png';
import arrowrightpurple from '../images/arrow-right-p.png';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null); // Gérer la sélection de la date

  // Fonction pour gérer le clic sur une date
  const handleDateClick = (date: number) => {
    setSelectedDate(date); // Met à jour la date sélectionnée
  };

  return (
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
            onClick={() => handleDateClick(i + 1)} // Sélectionne la date
            className={`py-1 cursor-pointer rounded-full ${
              selectedDate === i + 1 
                ? 'bg-yellow-400 drop-shadow-xl border-2 border-yellow-400 text-white' // Style si sélectionné
                : 'text-white border-2 hover:border-yellow-400 hover:text-white hover:bg-yellow-400' // Style par défaut
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className={`flex absolute font-light w-full bottom-0 left-0 cursor-pointer items-center border-white justify-between border-[2.5px] bg-transparent 
                    transition-all duration-300 py-2 text-white px-8 rounded-full text-center 
                    ${selectedDate ? 'hover:text-[#2e0f84] group hover:bg-white' : 'opacity-50 cursor-not-allowed'}`}>
        <button
          disabled={!selectedDate} // Désactive le bouton si aucune date n'est sélectionnée
          className="placeholder-white bg-transparent text-lg group-hover:text-[#2e0f84] group-hover:placeholder-[#2e0f84] 
                    placeholder:text-white hover:placeholder-[#2e0f84]"
        >
          Valider votre rendez-vous
        </button>
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
      </div>
    </div>
  );
};

export default Calendar;
