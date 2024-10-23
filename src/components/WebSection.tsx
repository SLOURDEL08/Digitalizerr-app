import React from 'react';
import lampImage from '../images/lampMessage.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

interface WebOfferProps {
  title: string;
  features: string[];
  color: string;
  link: string;
}

const ArrowIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg className='w-full h-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5L19 12L12 19" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WebOffer: React.FC<WebOfferProps> = ({ title, features, color, link }) => (
  <div className='flex justify-between cursor-pointer gap-14 bg-[#00000030] scale-100 hover:scale-105 hover:bg-[#00000040] transition-all duration-500 p-8 px-10 rounded-3xl'>
    <div className={`flex flex-col min-w-60 rounded-full shadow-md overflow-hidden`} style={{ backgroundColor: color }}>
      <div className='flex-grow flex items-center justify-center font-bold text-2xl p-4 text-white'>
        {title}
      </div>
    </div>
    <div className='flex-grow m-auto'>
      <ul className='flex flex-wrap gap-4 gap-x-14 justify-start list-disc pl-5 max-h-[4.5em] overflow-hidden'>
        {features.map((feature, index) => (
          <li key={index} className='text-white marker:text-white w-auto'>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className='flex items-center min-w-16 w-16 h-auto'>
      <a href={link}>
        <ArrowIcon color={color} />
      </a>
    </div>
  </div>
);

const WebSection: React.FC = () => {
  const webOffers: WebOfferProps[] = [
    {
      title: 'VITRINE',
      features: [
        'Thème wordpress', '8 pages maximum', 'Référencement SEO', 'Dynamique',
        'Formulaire', 'Responsive', 'Google',
      ],
      color: '#4084EA',
      link: '/vitrine'
    },
    {
      title: 'BOUTIQUE',
      features: [
        'Thème wordpress', '8 pages maximum', 'Référencement SEO', 
        'Formulaire', 'Responsive', 
        'Boutique Woocommerce', 'Paiement sécurisé', 'Suivi des commandes',
      ],
      color: '#F95E5E',
      link: '/boutique'
    },
    {
      title: 'SUR-MESURE',
      features: [
        'Thème sur-mesure', 'Référencement SEO', 
        'Formulaire complexe', 'Responsive', 'Google', 
        'Création graphique', 'Newsletter', 'Assistance', 'Support', 'Animation'
      ],
      color: '#4ABB28',
      link: '/sur-mesure'
    }
  ];

  return (
    <div className='text-center space-y-10 py-20'>
      <div>
        <span className='text-white text-xl tracking-widest'>nos différentes offres de</span>
        <h4 className='text-8xl text-[#F6D663] font-bold mb-4'>SITE WEB</h4>
      </div>
    
      <div className='space-y-10'>
        {webOffers.map((offer, index) => (
          <WebOffer key={index} {...offer} />
        ))}
      </div>
      <img src={lampImage} className='mx-auto w-[600px]' alt="Lamp" />
    </div>
  );
};

export default WebSection;