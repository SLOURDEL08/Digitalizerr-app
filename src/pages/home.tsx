import React, { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import WebSection from '../components/WebSection';
import ThemeViewer from '../components/ThemeViewer';
import ContactSection from '../components/Contact/ContactSection';
import Header from '../components/Header';
import ProcessusSectionServices from '../components/ProcessusSectionService';

const Home: React.FC = () => {
 



  return (
    <div className='space-y-40 max-lg:space-y-32 max-md:space-y-28 max-sm:space-y-20'>
      <Header />
      <ServicesSection />
      <WebSection id="developpement" /> {/* Ajoutez un id si ce n'est pas déjà fait */}
      <ThemeViewer />
      <ProcessusSectionServices />
      <ContactSection />
    </div>
  );
};

export default Home;
