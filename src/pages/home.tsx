import React from 'react';
import ServicesSection from '../components/ServicesSection';
import WebSection from '../components/WebSection';
import ThemeViewer from '../components/ThemeViewer';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import ProcessusSectionServices from '../components/ProcessusSectionService';

const Home: React.FC = () => {
  return (
      <>
      <Header />
      <ServicesSection />
      <WebSection />
      <ThemeViewer />
      <ProcessusSectionServices />
      <ContactSection />
    </>
  );
};

export default Home;