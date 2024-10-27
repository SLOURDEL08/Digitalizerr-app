import React from 'react';
import ServicesSection from '../components/ServicesSection';
import WebSection from '../components/WebSection';
import ThemeViewer from '../components/ThemeViewer';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import ProcessusSectionServices from '../components/ProcessusSectionService';

const Home: React.FC = () => {
  return (
      <div className='space-y-40 max-lg:space-y-32 max-md:space-y-28 max-sm:space-y-20'>
      <Header />
      <ServicesSection />
      <WebSection />
      <ThemeViewer />
      <ProcessusSectionServices />
      <ContactSection />
    </div>
  );
};

export default Home;