import React, { useState } from 'react';
import Button from '../Button';
import ReviewSection from './Review';
import Calendar from './Calendar';  // Nouveau import pour le composant Calendar externalisé
import { Title } from '../Typography';

const ContactForm: React.FC = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-xs font-medium text-white">Nom</label>
      <input 
        type="text" 
        placeholder='Nom / Prénom' 
        id="name" 
        name="name" 
        className="mt-2 p-3 !border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-white/40 px-5 font-poppins text-white font-extralight block w-full rounded-xl bg-[#00000040] transition-all duration-500 hover:bg-[#00000050] hover:placeholder:text-white/80" 
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-xs font-medium text-white">Email</label>
      <input 
        type="email" 
        id="email" 
        placeholder='Email@mail.com' 
        name="email" 
        className="mt-2 p-3 px-5 placeholder:text-white/40 focus:outline-none focus:ring-0 focus:border-transparent font-poppins text-white font-extralight block w-full rounded-xl bg-[#00000040] transition-all hover:bg-[#00000050] hover:placeholder:text-white/80" 
      />
    </div>
    <div>
      <label htmlFor="service" className="block text-xs font-medium text-white">Service</label>
      <select 
        id="service" 
        name="service" 
        className="mt-2 p-3 px-5 font-poppins text-white/40 focus:outline-none focus:ring-0 hover:text-white/80 focus:border-transparent font-extralight block w-full rounded-xl bg-[#00000040] transition-all hover:bg-[#00000050] appearance-none"
      >
        <option value="">Sélectionnez un service</option>
        <option value="site-vitrine">Site vitrine</option>
        <option value="site-boutique">Site boutique</option>
        <option value="site-sur-mesure">Site sur-mesure</option>
        <option value="graphisme">Graphisme</option>
        <option value="marketing">Marketing</option>
      </select>
    </div>
    <div>
      <label htmlFor="message" className="block text-xs font-medium text-white">Message</label>
      <textarea 
        id="message" 
        placeholder='Votre message' 
        name="message" 
        rows={4} 
        className="mt-2 p-3 px-5 placeholder:text-white/40 focus:outline-none focus:ring-0 focus:border-transparent font-poppins block placeholder:font-extralight w-full rounded-xl bg-[#00000040] transition-all hover:bg-[#00000050] hover:placeholder:text-white/80"
      ></textarea>
    </div>
    <button 
      type="submit" 
      className="w-full mt-2 text-xl bg-yellow-400 text-[#fff] font-bold py-2 px-4 rounded-xl hover:bg-yellow-500 transition duration-300"
    >
      Envoyer
    </button>
  </form>
);

const ContactSection: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleReserveClick = () => {
    setShowCalendar(true);
  };

  return (
    <section id='contact' className='flex flex-col items-center justify-center'>
      <Title className='text-center mb-14 max-md:mb-14'>Contactez-nous</Title>
      <div className='card-bg p-10 max-md:p-6 w-full'>
        <div className='flex flex-col md:flex-row gap-14'>
          <div className='w-full md:w-1/2'>
            <ContactForm />
          </div>
          <div className={`w-full md:w-1/2 ${showCalendar ? '' : 'hidden'}`}>
            <Calendar />
          </div>
          <div className={`w-full md:w-1/2 ${showCalendar ? 'hidden' : ''}`}>
            <ReviewSection onReserveClick={handleReserveClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;