import React from 'react';
import Button from './Button';

const ContactForm: React.FC = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-white">Nom</label>
      <input type="text" id="name" name="name" className="mt-2 p-2.5 px-4 font-poppins text-white font-extralight block w-full rounded-xl bg-[#00000040] transition-all hover:bg-[#00000050]" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
      <input type="email" id="email" name="email" className="mt-2 p-2.5 px-4 font-poppins text-white font-extralight block w-full rounded-xl bg-[#00000040] transition-all hover:bg-[#00000050]" />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
      <textarea id="message" name="message" rows={4} className="mt-2 p-2.5 px-4 font-poppins text-white block w-full rounded-xl bg-[#00000040] transition-all hover:bg-[#00000050]"></textarea>
    </div>
    <button type="submit" className="w-full mt-2 text-xl bg-yellow-400 text-[#420F84] font-bold py-2 px-4 rounded-xl hover:bg-yellow-500 transition duration-300">
      Envoyer
    </button>
  </form>
);

const Calendar: React.FC = () => (
  <div className=" rounded-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white mb-2">Mai 2023</h2>
      <div className="flex space-x-2">
        <button className="text-white hover:text-yellow-400">&lt;</button>
        <button className="text-white hover:text-yellow-400">&gt;</button>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-3 text-center">
      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
        <div key={day} className="text-gray-400 font-medium">{day}</div>
      ))}
      {Array.from({ length: 31 }, (_, i) => (
        <div
          key={i}
          className={`py-1 ${i === 14 ? 'bg-yellow-400 text-purple-900' : 'text-white border-2 hover:border-yellow-400'} rounded-full hover:bg-yellow-400 cursor-pointer`}
        >
          {i + 1}
        </div>
      ))}
        </div>
        <Button className='w-full mt-6 hover:!bg-white hover:text-purple-900 text-white border-[3px] !bg-transparent'>Réservez un appel téléphonique</Button>
  </div>
);

const ContactSection: React.FC = () => {
  return (
      <div className='min-h-screen flex flex-col items-center justify-center mt-20'>
                  <h2 className='text-6xl text-[#F6D663] text-center  mb-8'>Contactez-nous</h2>

      <div className=' hover:bg-[#00000020] rounded-3xl hover:p-10 hover:px-12 transition-all duration-1000  w-full'>
        <div className='flex flex-col md:flex-row gap-14'>
          <div className='w-full md:w-1/2'>
            <ContactForm />
          </div>
          <div className='w-full md:w-1/2'>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;