import React from 'react';
import Layout from './components/Layout';
import ServicesSection from './components/ServicesSection';
import WebSection from './components/WebSection';
import ThemeViewer from './components/ThemeViewer';
import ProcessusSection from './components/ProcessusSection';
import ContactSection from './components/ContactSection';


const App: React.FC = () => {
  return (
    <Layout>
      <ServicesSection />
      <WebSection />
      <ThemeViewer />
      <ProcessusSection />
      <ContactSection/>
    </Layout>
  );
};

export default App;