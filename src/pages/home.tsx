import React from 'react';
import ServicesSection from '../components/ServicesSection';
import WebSection from '../components/WebSection';
import ThemeViewer from '../components/ThemeViewer';
import ProcessusSection from '../components/ProcessusSection';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
      <>
      <Header />
      <ServicesSection />
      <WebSection />
      <ThemeViewer />
      <ProcessusSection />
      <ContactSection />
    </>
  );
};

export default Home;